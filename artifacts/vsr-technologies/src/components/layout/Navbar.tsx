import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#services" },
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-border/50 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary text-white p-2 rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
            <Shield size={24} strokeWidth={2} />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            VSR<span className="text-primary font-light">Technologies</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact">
            <Button variant="default" className="hidden sm:flex shadow-md hover:shadow-lg transition-all duration-300">
              Contact Sales
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
