import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1590253232292-5c0c4c04e428?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800',
];

export default function ProductGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={containerRef} className="py-24 overflow-hidden relative">
      <div className="container max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Product Gallery</h2>
      </div>

      <div className="w-full flex">
        <motion.div style={{ x }} className="flex gap-6 px-6 cursor-grab active:cursor-grabbing">
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 group"
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                draggable={false}
              />
            </div>
          ))}
          {/* Duplicate for infinite feel */}
          {images.map((img, i) => (
            <div
              key={`dup-${i}`}
              className="min-w-[300px] md:min-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 group"
            >
              <img
                src={img}
                alt={`Gallery image dup ${i + 1}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
