import { useRef, useState, Suspense, Component, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("webgl2") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function CameraCanvas() {
  const { Canvas, useFrame, Float, ambientLight, directionalLight, pointLight } = (() => {
    return {
      Canvas: null as unknown,
      useFrame: null,
      Float: null,
      ambientLight: null,
      directionalLight: null,
      pointLight: null,
    };
  })();
  return null;
}

function FallbackCamera() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        animate={{ rotateY: [0, 12, 0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative flex flex-col items-center">
          {/* Mount plate */}
          <div className="w-24 h-5 bg-gradient-to-b from-slate-300 to-slate-400 rounded mb-1 shadow-lg" />
          {/* Vertical pole */}
          <div className="w-5 h-24 bg-gradient-to-b from-slate-300 to-slate-400 rounded-sm shadow-md" />
          {/* Camera body */}
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="relative mt-1"
          >
            {/* Sun visor */}
            <div className="w-60 h-4 bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-lg mx-auto shadow" />
            {/* Housing */}
            <div className="w-52 h-36 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mx-auto shadow-2xl relative overflow-hidden border border-slate-200/80">
              {/* Front lens panel */}
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-slate-900 rounded-r-xl flex flex-col items-center justify-center gap-3">
                {/* Lens outer ring */}
                <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-600 flex items-center justify-center shadow-inner">
                  {/* Lens inner */}
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-full bg-sky-400/20 border-2 border-sky-500/40 flex items-center justify-center"
                  >
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/30" />
                  </motion.div>
                </div>
                {/* IR LED row */}
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
                      className="w-2.5 h-2.5 rounded-full bg-red-500"
                    />
                  ))}
                </div>
              </div>
              {/* Body vents */}
              <div className="absolute left-4 top-5 bottom-5 flex flex-col justify-around">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-0.5 bg-slate-300/50 rounded" />
                ))}
              </div>
              {/* Status LED */}
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="absolute top-3 left-3 w-2 h-2 rounded-full bg-green-400"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function LazyThreeCanvas() {
  const [ThreeCamera, setThreeCamera] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      import("@react-three/fiber"),
      import("@react-three/drei"),
      import("three"),
    ]).then(([{ Canvas, useFrame }, { Float }, THREE]) => {
      if (cancelled) return;

      function CameraModel() {
        const groupRef = useRef<THREE.Group>(null);
        useFrame((state: { clock: { getElapsedTime: () => number } }) => {
          if (!groupRef.current) return;
          const t = state.clock.getElapsedTime();
          groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
          groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
        });
        return (
          <group ref={groupRef} position={[0, 0, 0]}>
            <mesh position={[0, 1.5, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
              <meshStandardMaterial color="#E2E8F0" roughness={0.3} metalness={0.8} />
            </mesh>
            <mesh position={[0, 0.8, -0.6]}>
              <boxGeometry args={[0.2, 1.4, 0.2]} />
              <meshStandardMaterial color="#CBD5E1" roughness={0.4} metalness={0.7} />
            </mesh>
            <mesh position={[0, 0.1, -0.6]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.2, 0.2, 0.3, 32]} />
              <meshStandardMaterial color="#94A3B8" roughness={0.5} metalness={0.6} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.8, 0.8, 1.8]} />
              <meshStandardMaterial color="#F8FAFC" roughness={0.1} metalness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0.91]}>
              <planeGeometry args={[0.7, 0.7]} />
              <meshStandardMaterial color="#0F172A" roughness={0.1} metalness={0.9} />
            </mesh>
            <mesh position={[0, 0, 0.92]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.2, 0.25, 0.1, 32]} />
              <meshStandardMaterial color="#000000" roughness={0} metalness={1} />
            </mesh>
            <mesh position={[0, 0, 0.97]}>
              <circleGeometry args={[0.17, 32]} />
              <meshStandardMaterial color="#38BDF8" transparent opacity={0.4} roughness={0} metalness={1} />
            </mesh>
            {([[-0.2, 0.2], [0.2, 0.2], [-0.2, -0.2], [0.2, -0.2]] as [number, number][]).map((pos, i) => (
              <mesh key={i} position={[pos[0], pos[1], 0.92]}>
                <circleGeometry args={[0.04, 16]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
              </mesh>
            ))}
            <mesh position={[0, 0.45, 0.2]} rotation={[Math.PI / 32, 0, 0]}>
              <boxGeometry args={[0.9, 0.05, 2.2]} />
              <meshStandardMaterial color="#F1F5F9" roughness={0.2} metalness={0.4} />
            </mesh>
          </group>
        );
      }

      function ThreeCameraScene() {
        return (
          <Canvas camera={{ position: [2, 1, 3], fov: 45 }} style={{ width: "100%", height: "100%" }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} />
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              <CameraModel />
            </Float>
          </Canvas>
        );
      }

      setThreeCamera(() => ThreeCameraScene);
    }).catch(() => {});

    return () => { cancelled = true; };
  }, []);

  if (!ThreeCamera) return <FallbackCamera />;
  return (
    <WebGLErrorBoundary fallback={<FallbackCamera />}>
      <Suspense fallback={<FallbackCamera />}>
        <ThreeCamera />
      </Suspense>
    </WebGLErrorBoundary>
  );
}

function DetectionOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <style>{`.scan-text { font-family: monospace; font-size: 11px; fill: rgba(14,99,196,0.55); }`}</style>
        </defs>
        <path d="M 200 130 L 160 130 L 160 170" fill="none" stroke="rgba(14,99,196,0.45)" strokeWidth="2" />
        <path d="M 600 130 L 640 130 L 640 170" fill="none" stroke="rgba(14,99,196,0.45)" strokeWidth="2" />
        <path d="M 200 470 L 160 470 L 160 430" fill="none" stroke="rgba(14,99,196,0.45)" strokeWidth="2" />
        <path d="M 600 470 L 640 470 L 640 430" fill="none" stroke="rgba(14,99,196,0.45)" strokeWidth="2" />
        <rect x="160" y="130" width="480" height="1.5" fill="rgba(14,99,196,0.35)">
          <animate attributeName="y" values="130;470;130" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
        </rect>
        <text x="164" y="122" className="scan-text">OBJ: SEC_CAM_01</text>
        <text x="636" y="122" className="scan-text" textAnchor="end">SYS: ACTIVE</text>
        <text x="164" y="490" className="scan-text">NET: SECURE_LINK</text>
        <text x="636" y="490" className="scan-text" textAnchor="end">AI: MONITORING</text>
      </svg>
    </div>
  );
}

export function Hero() {
  const [webGLSupported] = useState(() => detectWebGL());

  return (
    <section className="relative min-h-[90vh] md:min-h-[100vh] flex items-center bg-[#FDFDFD] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600 opacity-[0.04] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-teal-500 opacity-[0.04] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <ShieldCheck size={16} />
                <span>Enterprise Grade Security Infrastructure</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Advanced Security,{" "}
                <br />
                <span className="text-slate-400 font-light">Built for</span>
                <br />
                Critical Infrastructure.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                End-to-end physical security, structured cabling, and intelligent threat surveillance. We install, maintain, and network systems for airports, commercial buildings, and industrial facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base h-12 px-8">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" className="text-base h-12 px-8 group bg-white">
                  Contact Us
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-slate-200"
            >
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-slate-500 font-medium">Enterprise Sites</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-slate-500 font-medium">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-slate-500 font-medium">Active Monitoring</div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl bg-slate-50/50 border border-slate-100 shadow-sm overflow-hidden">
            <DetectionOverlay />
            {webGLSupported ? (
              <WebGLErrorBoundary fallback={<FallbackCamera />}>
                <Suspense fallback={<FallbackCamera />}>
                  <LazyThreeCanvas />
                </Suspense>
              </WebGLErrorBoundary>
            ) : (
              <FallbackCamera />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
