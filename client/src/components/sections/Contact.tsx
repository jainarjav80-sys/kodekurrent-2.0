import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-pixel text-center mb-16 text-white"
        >
          Contact <span className="text-secondary">Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/30 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-pixel text-primary uppercase">
                    Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    className="bg-black/50 border-white/10 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-pixel text-primary uppercase">
                    Email
                  </label>
                  <Input
                    placeholder="Enter your email"
                    className="bg-black/50 border-white/10 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-pixel text-primary uppercase">
                  Message
                </label>
                <Textarea
                  placeholder="Enter your message"
                  className="bg-black/50 border-white/10 font-mono min-h-[150px]"
                />
              </div>

              <Button className="w-full font-pixel bg-primary hover:bg-primary/80">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* RIGHT SIDE ANIMATED GLOBE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8"
          >

            {/* Animated Circle */}
            <motion.div
              className="relative w-[300px] h-[300px] rounded-full 
                         bg-gradient-to-br from-purple-900/50 to-blue-900/40
                         flex items-center justify-center 
                         border border-primary/30 overflow-hidden"
            >

              {/* Glow Pulse */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute inset-0 rounded-full 
                           shadow-[0_0_60px_#9333ea] opacity-60"
              />

              {/* Floating Globe */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                >
                  <Globe className="w-24 h-24 text-primary" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-4">

              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-primary/20">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">
                  ieee_sb@rgipt.ac.in
                </span>
              </div>

              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-primary/20">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">
                  RGIPT, Jais
                </span>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

