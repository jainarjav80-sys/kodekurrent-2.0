import { motion } from "framer-motion";
import img3 from "@assets/img_3_1771105052445.png";
import img4 from "@assets/img_4_1771105052445.png";
import img5 from "@assets/img_5_1771105052446.png";
import img6 from "@assets/img_6_1771105052446.png";
import img7 from "@assets/img_7_1771105052447.png";
import img8 from "@assets/img_8_1771105052447.png";

const galleryImages = [img3, img4, img5, img6, img7, img8];

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-pixel text-center mb-16 text-white">
          Event <span className="text-secondary">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-video border-2 border-primary/20 hover:border-primary transition-colors cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Event ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                 
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
