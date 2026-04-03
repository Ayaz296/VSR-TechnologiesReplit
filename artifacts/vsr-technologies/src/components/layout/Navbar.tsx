import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/" || location === "";
  const isDark = !scrolled && isHome;

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled || !isHome
          ? "bg-white/90 backdrop-blur-lg border-b border-slate-200/60 shadow-sm py-3"
          : "bg-transparent border-b border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className={cn(
            "p-2 rounded-lg transition-all duration-300 group-hover:scale-105",
            isDark ? "bg-white/15 backdrop-blur-sm border border-white/20" : "bg-primary"
          )}>
            <Shield size={22} strokeWidth={2} className={isDark ? "text-white" : "text-white"} />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight transition-colors duration-300",
            isDark ? "text-white" : "text-foreground"
          )}>
            VSR<span className={cn("font-light", isDark ? "text-sky-300" : "text-primary")}>Technologies</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? isDark
                      ? "bg-white/15 text-white"
                      : "bg-primary/8 text-primary"
                    : isDark
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-foreground hover:bg-slate-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/#contact" className="hidden sm:block">
            <Button
              variant={isDark ? "outline" : "default"}
              className={cn(
                "transition-all duration-300 shadow-md hover:shadow-lg",
                isDark && "border-white/30 text-white bg-white/10 hover:bg-white/20"
              )}
            >
              Contact Sales
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-slate-100"
            )}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl py-4 px-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location === link.href
                    ? "bg-primary/8 text-primary"
                    : "text-slate-600 hover:text-foreground hover:bg-slate-50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="mt-2">
              <Button className="w-full">Contact Sales</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
