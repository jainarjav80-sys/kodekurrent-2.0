import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: approx 1 month from now (March 10, 2026 based on prompt)
    const targetDate = new Date("2026-03-10T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-40 mix-blend-screen" />
      </div>

      {/* Decorative Mouse Graphics */}
      <motion.div 
        animate={{ 
          x: [0, 100, 50, 0],
          y: [0, 50, 150, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 z-0 opacity-20 hidden md:block"
      >
        <MousePointer2 className="w-12 h-12 text-primary rotate-12" />
      </motion.div>
      <motion.div 
        animate={{ 
          x: [0, -80, -20, 0],
          y: [0, 120, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 z-0 opacity-20 hidden md:block"
      >
        <MousePointer2 className="w-8 h-8 text-secondary -rotate-45" />
      </motion.div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-block mb-4 px-4 py-2 border border-primary/50 rounded bg-primary/10 backdrop-blur-sm">
            <span className="font-mono text-primary animate-pulse">
              &lt; SYSTEM_ONLINE /&gt;
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-pixel leading-tight mb-6">
            <span className="block text-white mb-2">Kode</span>
            <span className="block text-primary glitch-text" data-text="Kurrent 2.0">Kurrent 2.0</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-mono mb-8 max-w-lg mx-auto md:mx-0">
            North India's biggest hackathon. Enter the labyrinth of code.
            <br />
            <span className="text-accent">March 10th - 12th, 2026</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="font-pixel text-sm h-14 bg-primary hover:bg-primary/80 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] border-2 border-primary hover:scale-105 transition-transform"
              onClick={() => window.open('https://devfolio.co', '_blank')}
            >
              REGISTER
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-pixel text-sm h-14 border-2 hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-colors"
              onClick={() => window.open('https://discord.com/', '_blank')}
            >
              Join Discord
            </Button>
          </div>

          <div className="mt-12 p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm">
            <p className="font-pixel text-xs text-center mb-4 text-muted-foreground">TIME LEFT TO REGISTER</p>
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HRS", value: timeLeft.hours },
                { label: "MIN", value: timeLeft.minutes },
                { label: "SEC", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="bg-background/50 rounded p-2 border border-primary/20">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-white">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-[10px] md:text-xs font-pixel text-primary mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex justify-center"
        >
          {/* Arcade machine with glow */}
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[80px] animate-pulse" />
            <img 
              src="/images/arcade-machine.png" 
              alt="Arcade Machine" 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            />
            
            {/* Floating Icons/Decorations */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/20 rounded-lg border border-secondary backdrop-blur-md flex items-center justify-center animate-bounce delay-100">
              <span className="text-4xl">👾</span>
            </div>
            {/* Removed ⚡ emoji as requested */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
