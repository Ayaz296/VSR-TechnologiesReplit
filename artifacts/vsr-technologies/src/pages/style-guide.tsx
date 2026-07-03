import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const swatches = [
  { label: "Primary", name: "Midnight Navy", hex: "#0F2747", text: "white" },
  { label: "Secondary", name: "Steel Blue", hex: "#4F6B8A", text: "white" },
  { label: "Accent", name: "Azure Blue", hex: "#2F80ED", text: "white" },
  { label: "Highlight", name: "Cyan", hex: "#33C3F0", text: "#0F2747" },
  { label: "Background", name: "Soft White", hex: "#F8FAFC", text: "#1B2430", border: true },
  { label: "Section BG", name: "Cool Grey", hex: "#EEF3F8", text: "#1B2430", border: true },
  { label: "Cards", name: "Pure White", hex: "#FFFFFF", text: "#1B2430", border: true },
  { label: "Primary Text", name: "Rich Slate", hex: "#1B2430", text: "white" },
  { label: "Secondary Text", name: "Grey", hex: "#5F6C7B", text: "white" },
  { label: "Border", name: "Light Grey", hex: "#DCE6F1", text: "#1B2430", border: true },
];

const statusColors = [
  { label: "Success", hex: "#22C55E", text: "white" },
  { label: "Warning", hex: "#F59E0B", text: "white" },
  { label: "Danger", hex: "#EF4444", text: "white" },
];

const stats = [
  { value: "850+", label: "Projects Delivered" },
  { value: "12", label: "Years Experience" },
  { value: "99.8%", label: "System Uptime" },
  { value: "40+", label: "Enterprise Clients" },
];

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px flex-1" style={{ background: "#DCE6F1" }} />
      <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "#5F6C7B", fontFamily: "'Inter', sans-serif" }}>{label}</span>
      <div className="h-px flex-1" style={{ background: "#DCE6F1" }} />
    </div>
  );
}

export default function StyleGuide() {
  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0F2747 0%, #1F4E79 45%, #2F80ED 100%)",
          padding: "100px 0 80px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{ background: "rgba(47,128,237,0.25)", color: "#33C3F0", border: "1px solid rgba(51,195,240,0.3)", fontFamily: "'Inter', sans-serif" }}>
            Brand Style Guide
          </div>
          <h1 className="mb-5" style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            lineHeight: 1.1,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}>
            VSR Technologies<br />
            <span style={{ color: "#33C3F0" }}>Visual Identity</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", maxWidth: 520, lineHeight: 1.7 }}>
            A reference for colours, typography, components, and spacing — everything needed to build consistent, premium interfaces for VSR Technologies.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 32px 80px" }}>

        {/* ── Colour Palette ── */}
        <Divider label="Colour Palette" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16, marginBottom: 48 }}>
          {swatches.map((s) => (
            <div key={s.hex}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E6EDF5",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(15,39,71,0.08)",
              }}>
              <div style={{
                height: 88,
                background: s.hex,
                border: s.border ? "1px solid #DCE6F1" : "none",
                borderBottom: "none",
              }} />
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#5F6C7B", fontFamily: "'Inter', sans-serif", marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1B2430", fontFamily: "'Inter', sans-serif", marginBottom: 2 }}>{s.name}</div>
                <div style={{ fontSize: "0.78rem", fontFamily: "'Space Grotesk', monospace", color: "#5F6C7B" }}>{s.hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div style={{ display: "flex", gap: 16, marginBottom: 64, flexWrap: "wrap" }}>
          {statusColors.map((s) => (
            <div key={s.hex} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 18px",
              background: "#FFFFFF", border: "1px solid #E6EDF5", borderRadius: 12,
              boxShadow: "0 8px 30px rgba(15,39,71,0.08)",
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: s.hex, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#5F6C7B", fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
                <div style={{ fontSize: "0.82rem", fontFamily: "'Space Grotesk', monospace", color: "#1B2430" }}>{s.hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Gradients ── */}
        <Divider label="Gradients" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 64 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 30px rgba(15,39,71,0.08)", border: "1px solid #E6EDF5" }}>
            <div style={{ height: 120, background: "linear-gradient(135deg, #0F2747 0%, #1F4E79 45%, #2F80ED 100%)" }} />
            <div style={{ padding: "14px 18px", background: "#FFFFFF" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#5F6C7B", fontFamily: "'Inter', sans-serif", marginBottom: 4 }}>Hero / CTA — Dark</div>
              <div style={{ fontSize: "0.75rem", fontFamily: "'Space Grotesk', monospace", color: "#5F6C7B", lineHeight: 1.6 }}>
                135deg · #0F2747 → #1F4E79 → #2F80ED
              </div>
            </div>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 30px rgba(15,39,71,0.08)", border: "1px solid #E6EDF5" }}>
            <div style={{ height: 120, background: "linear-gradient(180deg, #FFFFFF 0%, #F4F8FC 100%)", borderBottom: "1px solid #E6EDF5" }} />
            <div style={{ padding: "14px 18px", background: "#FFFFFF" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#5F6C7B", fontFamily: "'Inter', sans-serif", marginBottom: 4 }}>Section — Light</div>
              <div style={{ fontSize: "0.75rem", fontFamily: "'Space Grotesk', monospace", color: "#5F6C7B", lineHeight: 1.6 }}>
                180deg · #FFFFFF → #F4F8FC
              </div>
            </div>
          </div>
        </div>

        {/* ── Typography ── */}
        <Divider label="Typography" />

        <div style={{
          background: "#FFFFFF", border: "1px solid #E6EDF5", borderRadius: 16,
          boxShadow: "0 8px 30px rgba(15,39,71,0.08)", padding: "36px 40px", marginBottom: 64,
        }}>
          {/* Heading scale */}
          <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #EEF3F8" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#5F6C7B", fontFamily: "'Inter', sans-serif", marginBottom: 16 }}>
              Plus Jakarta Sans — Headings
            </div>
            {[
              { tag: "H1", size: "2.75rem", weight: 800 },
              { tag: "H2", size: "2rem", weight: 700 },
              { tag: "H3", size: "1.5rem", weight: 700 },
              { tag: "H4", size: "1.15rem", weight: 600 },
            ].map(({ tag, size, weight }) => (
              <div key={tag} style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 10 }}>
                <span style={{ fontSize: "0.68rem", fontFamily: "'Space Grotesk', monospace", color: "#5F6C7B", minWidth: 24 }}>{tag}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: weight, fontSize: size, color: "#1B2430", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                  Security Infrastructure
                </span>
              </div>
            ))}
          </div>

          {/* Body */}
          <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #EEF3F8" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#5F6C7B", fontFamily: "'Inter', sans-serif", marginBottom: 16 }}>
              Inter — Body
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#1B2430", lineHeight: 1.75, marginBottom: 10, maxWidth: 560 }}>
              We design, install, and maintain the complete stack of physical security and building infrastructure — from a single access point to a campus-wide smart city deployment.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#5F6C7B", lineHeight: 1.7, maxWidth: 560 }}>
              Secondary text uses Grey (#5F6C7B) for supporting descriptions, metadata, and less critical interface copy. It pairs cleanly with Rich Slate primary text.
            </p>
          </div>

          {/* KPIs */}
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#5F6C7B", fontFamily: "'Inter', sans-serif", marginBottom: 16 }}>
              Space Grotesk — Numbers / KPIs
            </div>
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {stats.map((s) => (
                <div key={s.value}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "2.2rem", color: "#0F2747", lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#5F6C7B", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Buttons ── */}
        <Divider label="Buttons" />

        <div style={{
          background: "#FFFFFF", border: "1px solid #E6EDF5", borderRadius: 16,
          boxShadow: "0 8px 30px rgba(15,39,71,0.08)", padding: "36px 40px", marginBottom: 64,
        }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginBottom: 32 }}>
            {/* Primary */}
            <button
              style={{
                background: "#2F80ED", color: "#FFFFFF", border: "none",
                borderRadius: 10, padding: "12px 24px",
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem",
                cursor: "pointer", transition: "background 0.15s",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#1E6FDB")}
              onMouseOut={e => (e.currentTarget.style.background = "#2F80ED")}
            >
              Primary Button
            </button>

            {/* Secondary */}
            <button
              style={{
                background: "#FFFFFF", color: "#0F2747",
                border: "1px solid #DCE6F1",
                borderRadius: 10, padding: "12px 24px",
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem",
                cursor: "pointer", transition: "background 0.15s",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#F5F9FD")}
              onMouseOut={e => (e.currentTarget.style.background = "#FFFFFF")}
            >
              Secondary Button
            </button>

            {/* Accent CTA */}
            <button
              style={{
                background: "#0F2747", color: "#FFFFFF", border: "none",
                borderRadius: 10, padding: "12px 24px",
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem",
                cursor: "pointer", transition: "background 0.15s",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#183A67")}
              onMouseOut={e => (e.currentTarget.style.background = "#0F2747")}
            >
              Get a Quote ↗
            </button>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div style={{ fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", color: "#5F6C7B" }}>
              <span style={{ fontWeight: 600, color: "#1B2430" }}>Primary</span> — Azure Blue #2F80ED, hover #1E6FDB
            </div>
            <span style={{ color: "#DCE6F1" }}>·</span>
            <div style={{ fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", color: "#5F6C7B" }}>
              <span style={{ fontWeight: 600, color: "#1B2430" }}>Secondary</span> — White / border #DCE6F1, hover #F5F9FD
            </div>
            <span style={{ color: "#DCE6F1" }}>·</span>
            <div style={{ fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", color: "#5F6C7B" }}>
              <span style={{ fontWeight: 600, color: "#1B2430" }}>Accent CTA</span> — Navy #0F2747, hover #183A67 — use sparingly
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <Divider label="Card Style" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20, marginBottom: 64 }}>
          {[
            {
              icon: "🔒",
              title: "Access Control",
              desc: "Enterprise-grade entrance management for commercial towers and campuses.",
              tag: "Security",
              tagColor: "#2F80ED",
            },
            {
              icon: "📷",
              title: "CCTV & Analytics",
              desc: "AI-driven video analytics with real-time threat detection and audit trails.",
              tag: "Surveillance",
              tagColor: "#33C3F0",
            },
            {
              icon: "🔥",
              title: "Fire Alarm Systems",
              desc: "Full lifecycle design, installation, and commissioning to NFPA standards.",
              tag: "Safety",
              tagColor: "#22C55E",
            },
          ].map((card) => (
            <div key={card.title} style={{
              background: "#FFFFFF",
              border: "1px solid #E6EDF5",
              borderRadius: 16,
              padding: "28px 24px",
              boxShadow: "0 8px 30px rgba(15,39,71,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}>
              <div style={{ fontSize: "1.6rem" }}>{card.icon}</div>
              <div>
                <span style={{
                  fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase",
                  letterSpacing: "0.1em", fontFamily: "'Inter', sans-serif",
                  color: card.tagColor, background: `${card.tagColor}18`,
                  padding: "3px 10px", borderRadius: 99,
                }}>
                  {card.tag}
                </span>
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1B2430" }}>
                {card.title}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#5F6C7B", lineHeight: 1.65 }}>
                {card.desc}
              </div>
              <div style={{ marginTop: "auto", paddingTop: 8, borderTop: "1px solid #EEF3F8" }}>
                <button style={{
                  background: "none", border: "none", padding: 0, cursor: "pointer",
                  fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem",
                  color: "#2F80ED",
                }}>
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Accent Usage ── */}
        <Divider label="Accent Usage — 70 / 20 / 10" />

        <div style={{
          background: "#FFFFFF", border: "1px solid #E6EDF5", borderRadius: 16,
          boxShadow: "0 8px 30px rgba(15,39,71,0.08)", overflow: "hidden", marginBottom: 64,
        }}>
          {/* Bar */}
          <div style={{ display: "flex", height: 10 }}>
            <div style={{ flex: 70, background: "#F8FAFC", borderRight: "1px solid #DCE6F1" }} />
            <div style={{ flex: 20, background: "#1B2430", borderRight: "1px solid #DCE6F1" }} />
            <div style={{ flex: 10, background: "#2F80ED" }} />
          </div>
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { pct: "70%", label: "White / Soft White", detail: "Backgrounds, surfaces, cards", color: "#F8FAFC", textDark: true },
              { pct: "20%", label: "Navy & Rich Slate", detail: "Headings, navigation, strong copy", color: "#1B2430", textDark: false },
              { pct: "10%", label: "Azure Blue & Cyan", detail: "Buttons, links, icons, highlights", color: "#2F80ED", textDark: false },
            ].map((item, i) => (
              <div key={item.pct} style={{
                flex: i === 0 ? 70 : i === 1 ? 20 : 10,
                padding: "20px 22px",
                background: item.color,
                borderRight: i < 2 ? "1px solid #DCE6F1" : "none",
                minWidth: 0,
              }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.4rem",
                  color: item.textDark ? "#0F2747" : "#FFFFFF", lineHeight: 1,
                }}>{item.pct}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: item.textDark ? "#1B2430" : "rgba(255,255,255,0.9)", marginTop: 4 }}>{item.label}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: item.textDark ? "#5F6C7B" : "rgba(255,255,255,0.65)", marginTop: 2, lineHeight: 1.4 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div style={{
          background: "linear-gradient(135deg, #0F2747 0%, #1F4E79 45%, #2F80ED 100%)",
          borderRadius: 20, padding: "48px 48px", display: "flex",
          alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap",
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
              fontSize: "1.7rem", color: "#FFFFFF", letterSpacing: "-0.02em",
              marginBottom: 8, lineHeight: 1.2,
            }}>
              Ready to secure your facility?
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", maxWidth: 380, lineHeight: 1.6 }}>
              Talk to our engineers about a full-stack physical security solution tailored to your site.
            </p>
          </div>
          <button
            style={{
              background: "#FFFFFF", color: "#0F2747", border: "none",
              borderRadius: 12, padding: "14px 32px",
              fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.95rem",
              cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
            }}
          >
            Book a Consultation
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}
