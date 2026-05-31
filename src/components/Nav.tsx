import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div 
          className="font-mono text-sm md:text-base text-foreground cursor-pointer font-bold border-2 border-foreground bg-primary px-3 py-2 shadow-[2px_2px_0px_0px_hsl(var(--foreground))]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          anamika pandey portfolio
        </div>
        
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
          <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors focus:outline-none">ABOUT</button>
          <button onClick={() => scrollTo("skills")} className="hover:text-primary transition-colors focus:outline-none">SKILLS</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-primary transition-colors focus:outline-none">PROJECTS</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors focus:outline-none">CONTACT</button>
        </nav>
      </div>
    </header>
  );
}
