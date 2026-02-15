import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ieeeLogo from "@assets/img_1_1771105052443.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-primary/20 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <div className="flex items-center gap-4">
             {/* Img 1 Replacement: IEEE Logo */}
             <img src={ieeeLogo} alt="IEEE SB RGIPT" className="h-10 w-auto md:h-12" />
             <a href="#home" className="text-xl md:text-2xl font-pixel text-primary glitch-text hidden sm:block" data-text="KodeKurrent">
               KodeKurrent
             </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="font-pixel text-xs bg-primary hover:bg-primary/80 text-white border-b-4 border-primary/50 active:border-b-0 active:translate-y-1 transition-all"
            onClick={() => window.open('https://devfolio.co', '_blank')}
          >
            REGISTER
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-mono hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="font-pixel text-xs w-full"
            onClick={() => window.open('https://devfolio.co', '_blank')}
          >
            Apply
          </Button>
        </div>
      )}
    </nav>
  );
}
