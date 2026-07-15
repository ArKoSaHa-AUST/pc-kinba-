import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Cpu, Activity, Heart, Share2, ShoppingCart } from 'lucide-react';

export default function ProductHero() {
  const [activeImage, setActiveImage] = useState(
    'https://images.unsplash.com/photo-1590253232292-5c0c4c04e428?auto=format&fit=crop&q=80&w=1200',
  );

  const thumbnails = [
    'https://images.unsplash.com/photo-1590253232292-5c0c4c04e428?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=400',
  ];

  return (
    <section className="relative pt-32 pb-16 min-h-screen flex items-center z-10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-1/4 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -left-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen" />
        {/* Floating particles (simplified CSS representation) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Main Image */}
            <div className="relative group w-full aspect-square rounded-3xl bg-gray-900/40 border border-white/10 flex items-center justify-center p-8 overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={activeImage}
                alt="Product"
                className="object-contain w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform duration-700 cursor-crosshair"
              />

              {/* Floating Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-cyan-500/20 backdrop-blur-md">
                  AI Recommended
                </span>
                <span className="bg-white/10 text-white border border-white/20 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md">
                  Best Seller
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(thumb.replace('w=400', 'w=1200'))}
                  className={`relative w-24 h-24 rounded-2xl border-2 overflow-hidden transition-all duration-300 ${activeImage.includes(thumb.split('?')[0]) ? 'border-cyan-400 scale-105' : 'border-white/10 hover:border-white/30 hover:scale-105'}`}
                >
                  <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm -z-10" />
                  <img
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    className="object-contain w-full h-full p-2"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                  NVIDIA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                <span className="text-green-400 flex items-center gap-1 text-sm">
                  <Activity className="w-4 h-4" /> In Stock
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                GeForce RTX 5060 Ti
              </h1>

              <div className="flex items-center gap-6 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium">4.8</span>
                  <span className="text-gray-500">(124 Reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-4 h-4" /> 3 Year Warranty
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gray-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full" />
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
                <div>
                  <span className="text-gray-400 text-sm block mb-1">Lowest Price Available</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                      $399
                    </span>
                    <span className="text-xl text-gray-500 line-through">$449</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-gray-800 border border-gray-700 shadow-[0_0_15px_rgba(0,229,255,0.3)] mb-2">
                    <svg
                      className="absolute inset-0 w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#00e5ff"
                        strokeWidth="3"
                        strokeDasharray="93, 100"
                        className="animate-[spin_2s_ease-out]"
                      />
                    </svg>
                    <span className="text-xl font-bold text-cyan-400">93</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    AI Score
                  </span>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

              <div className="flex flex-wrap gap-4">
                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Buy Now
                </button>
                <div className="flex gap-4">
                  <button className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 group">
                    <Heart className="w-6 h-6 group-hover:text-red-400 transition-colors" />
                  </button>
                  <button className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { icon: <Cpu />, label: 'Architecture', val: 'Blackwell' },
                { icon: <Activity />, label: 'VRAM', val: '8GB GDDR6' },
                { icon: <Shield />, label: 'Power', val: '115W' },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-center"
                >
                  <div className="text-gray-400">{spec.icon}</div>
                  <div className="text-xs text-gray-500">{spec.label}</div>
                  <div className="text-sm font-semibold text-gray-200">{spec.val}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
