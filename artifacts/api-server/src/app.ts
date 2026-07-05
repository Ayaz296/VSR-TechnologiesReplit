import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";
import { burstLimiter, globalLimiter } from "./middlewares/rateLimiter";

const app: Express = express();

// Trust the first hop of X-Forwarded-For so req.ip reflects the real
// client address when running behind Replit's reverse proxy / CDN.
app.set("trust proxy", 1);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting — burst first (fast-fail automated floods),
// then sustained global cap. Health probes bypass both.
app.use("/api", burstLimiter, globalLimiter, router);

export default app;
