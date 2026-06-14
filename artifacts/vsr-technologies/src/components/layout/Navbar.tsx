import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import faviconImg from "@/assets/images/favicon.png";



const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: null },
  { label: "Projects", href: "/projects", icon: null },
  { label: "About Us", href: "/about", icon: null },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/" || location === "";
  const isAtTop = !scrolled && isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
        isAtTop
          ? "bg-white/5 backdrop-blur-xl border-white/10 py-4 shadow-none"
          : "bg-white/70 backdrop-blur-2xl border-white/40 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.08)]"
      )}
      style={{
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className={cn(
            "p-2 rounded-lg transition-all duration-300 group-hover:scale-105",
            isAtTop
              ? "bg-white/15 border border-white/25 shadow-inner"
              : "bg-primary shadow-md shadow-primary/20"
          )}>
            <img src={faviconImg} alt="VSR" className="w-6 h-6 object-contain" />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight transition-colors duration-300",
            isAtTop ? "text-white" : "text-foreground"
          )}>
            VSR<span className={cn("font-light", isAtTop ? "text-sky-300" : "text-primary")}>Technologies</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? location === "/" || location === "" : location === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                  isActive
                    ? isAtTop
                      ? "bg-white/20 text-white shadow-inner"
                      : "bg-primary/8 text-primary"
                    : isAtTop
                    ? "text-white/75 hover:text-white hover:bg-white/12"
                    : "text-slate-600 hover:text-foreground hover:bg-slate-100/80"
                )}
              >
                {link.label}
                {isActive && (
                  <span className={cn(
                    "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full",
                    isAtTop ? "bg-sky-400" : "bg-primary"
                  )} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a href="mailto:info@vsrt.in" className="hidden sm:block">
            <Button
              className={cn(
                "transition-all duration-300 text-sm",
                isAtTop
                  ? "bg-white/12 border border-white/25 text-white hover:bg-white/22 shadow-inner"
                  : "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
              )}
              variant={isAtTop ? "ghost" : "default"}
            >
              Contact Sales
            </Button>
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isAtTop ? "text-white hover:bg-white/15" : "text-foreground hover:bg-slate-100"
            )}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-2xl border-b border-white/40 shadow-xl py-4 px-6"
          style={{ WebkitBackdropFilter: "blur(24px)" }}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? location === "/" || location === "" : location === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/8 text-primary"
                      : "text-slate-600 hover:text-foreground hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a href="mailto:info@vsrt.in" className="mt-2">
              <Button className="w-full">Contact Sales</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
