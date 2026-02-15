import { motion } from "framer-motion";

const sponsors = [
  { name: "GrabOn", tier: "Title" },
  { name: "roostoo", tier: "Title" },
  { name: "rabbiit AI", tier: "Title" },
  { name: "Podigal AI", tier: "Title" },
  { name: "CocaCola", tier: "Title" },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-white">
          Our <span className="text-primary">Sponsors</span>
        </h2>

        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="w-56 h-28 bg-card border-2 border-white/10 rounded-xl flex items-center justify-center p-4 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all cursor-pointer grayscale hover:grayscale-0">
                <span className="font-pixel text-xl text-white">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>
        
       
        
      </div>
    </section>
  );
}
