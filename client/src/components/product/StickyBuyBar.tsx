import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function StickyBuyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 w-full z-40 p-4 pb-6 px-4 pointer-events-none"
        >
          <div className="container max-w-4xl mx-auto">
            <div className="bg-gray-900/80 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl p-3 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-4 pl-2">
                <img
                  src="https://images.unsplash.com/photo-1590253232292-5c0c4c04e428?auto=format&fit=crop&q=80&w=100"
                  alt="Product Thumbnail"
                  className="w-12 h-12 object-cover rounded-full border border-white/10"
                />
                <div className="hidden sm:block">
                  <h4 className="font-bold text-white text-sm">RTX 5060 Ti</h4>
                  <p className="text-cyan-400 text-xs font-semibold">AI Score: 93</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pr-1">
                <span className="text-xl font-bold text-white hidden sm:block">$399</span>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-2.5 px-6 rounded-full shadow-lg transition-transform active:scale-95 flex items-center gap-2 text-sm">
                  <ShoppingCart className="w-4 h-4" /> Buy Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
