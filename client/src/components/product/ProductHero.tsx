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
    <section className="relative pt-[120px] pb-[60px] lg:pb-[120px] flex items-center z-10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-1/4 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -left-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen" />
        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="container max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left Column - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6 sticky top-32"
          >
            {/* Main Image */}
            <div className="relative group w-full aspect-square rounded-[32px] glass-card flex items-center justify-center p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(thumb.replace('w=400', 'w=1200'))}
                  className={`relative shrink-0 w-24 h-24 rounded-2xl border-2 overflow-hidden transition-all duration-300 ${activeImage.includes(thumb.split('?')[0]) ? 'border-cyan-400 scale-105' : 'border-transparent hover:border-white/30 bg-white/5 hover:bg-white/10'}`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    className="object-contain w-full h-full p-2 mix-blend-screen"
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
            className="flex flex-col gap-8 pt-4 lg:pt-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">
                  NVIDIA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                <span className="text-green-400 flex items-center gap-1.5 text-sm font-medium">
                  <Activity className="w-4 h-4" /> In Stock
                </span>
              </div>
              <h1 className="text-[40px] lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 text-white">
                GeForce RTX <br /> 5060 Ti
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm mb-2">
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

            {/* Price & AI Score Box */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="text-gray-400 text-sm block mb-2 font-medium tracking-wide">
                    LOWEST PRICE
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                      $399
                    </span>
                    <span className="text-xl text-gray-500 line-through">$449</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-gray-900/80 border border-gray-700 shadow-[0_0_20px_rgba(0,229,255,0.2)] mb-3 backdrop-blur-sm">
                    <svg
                      className="absolute inset-0 w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#00e5ff"
                        strokeWidth="2"
                        strokeDasharray="93, 100"
                        className="animate-[spin_2s_ease-out]"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-2xl font-bold text-cyan-400">93</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    AI Score
                  </span>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

              <div className="flex flex-wrap gap-4">
                <button className="button-primary flex-1 py-4 text-lg gap-2 justify-center rounded-[20px]">
                  <ShoppingCart className="w-5 h-5" /> Buy Now
                </button>
                <div className="flex gap-4">
                  <button className="p-4 rounded-[20px] bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 group flex items-center justify-center">
                    <Heart className="w-6 h-6 group-hover:text-red-400 transition-colors" />
                  </button>
                  <button className="p-4 rounded-[20px] bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Cpu className="w-6 h-6" />, label: 'Architecture', val: 'Blackwell' },
                { icon: <Activity className="w-6 h-6" />, label: 'VRAM', val: '8GB GDDR6' },
                { icon: <Shield className="w-6 h-6" />, label: 'Power', val: '115W' },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="glass-card hover:bg-white/5 p-5 flex flex-col items-center justify-center gap-2 text-center transition-colors"
                >
                  <div className="text-cyan-400 mb-1">{spec.icon}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-sm font-bold text-white">{spec.val}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
