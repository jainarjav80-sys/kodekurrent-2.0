import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    date: "02 March 2026",
    title: "REGISTRATION",
    subtitle: "PORTAL OPENS",
    icon: "🟡", 
    color: "border-yellow-500",
    text: "text-yellow-500"
  },
  {
    date: "10 March 2026",
    title: "HACKATHON",
    subtitle: "48HR CODING BEGINS",
    icon: "🟡", 
    color: "border-purple-500",
    text: "text-purple-500"
  },
  {
    date: "14 March 2026",
    title: "RESULT",
    subtitle: "WINNERS ANNOUNCED",
    icon: "🟡", 
    color: "border-red-500",
    text: "text-red-500"
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 relative bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-white">
          TIME <span className="text-primary">LINE</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />

              {/* Center Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                {event.icon}
              </div>

              {/* Content Card */}
              <div className={cn(
                "ml-12 md:ml-0 md:w-1/2 pl-4 md:pl-0",
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              )}>
                <div className={cn(
                  "bg-card/50 border p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300",
                  event.color
                )}>
                  <h3 className="text-xl md:text-2xl font-pixel text-white mb-2">{event.title}</h3>
                  <p className={cn("font-mono font-bold text-lg mb-2", event.text)}>{event.subtitle}</p>
                  <p className="font-mono text-muted-foreground">{event.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
