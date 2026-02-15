import { motion } from "framer-motion";
import img10 from "@assets/img_10_1771105052448.png";
import img11 from "@assets/img_11_1771105052448.png";
import img12 from "@assets/img_12_1771105052448.png";

const testimonialsList = [
  {
    name: "Yash Bawaskar",
    role: "Finalist",
    image: img10,
    text: "Finalist! - My First Hackathon Experience 🏆 I am very excited to share that I recently participated in my first hackathon at KodeKurrent..."
  },
  {
    name: "Prateek Raj",
    role: "Runner-Up",
    image: img11,
    text: "Proud to share that our team, GitWolves, secured the 2nd Runner-Up position at KodeKurent Hackathon organized by IEEE RGIPT Student Branch!"
  },
  {
    name: "Prajjwal Singh",
    role: "Grand Finalist",
    image: img12,
    text: "I'm thrilled to share that our team has been shortlisted for the Grand Finale of KodeKurrent Season 1! Our journey through Phase 1 was an incredible experience."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-9xl font-pixel text-primary">"</div>
          <div className="absolute bottom-10 right-10 text-9xl font-pixel text-secondary rotate-180">"</div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-white">
          TESTI<span className="text-primary">MONIALS</span>
        </h2>

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonialsList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-all hover:-translate-y-2 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-pixel text-sm text-white">{item.name}</h4>
                  <span className="text-xs font-mono text-muted-foreground">{item.role}</span>
                </div>
              </div>
              <p className="font-mono text-sm text-gray-300 leading-relaxed">
                "{item.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
