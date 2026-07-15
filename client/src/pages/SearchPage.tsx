import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Cpu, Monitor, HardDrive, ArrowRight, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_SUGGESTIONS = [
  'RTX 5060 Ti',
  'Ryzen 7 7700',
  'RX 9070 XT',
  'Samsung 990 Pro',
  'Intel i7 14700K',
];

const MOCK_RESULTS = [
  {
    id: 'gpu-rtx-5060-ti',
    name: 'NVIDIA GeForce RTX 5060 Ti',
    brand: 'NVIDIA',
    image: 'https://images.unsplash.com/photo-1590253232292-5c0c4c04e428?auto=format&fit=crop&q=80&w=800',
    price: '$399',
    rating: 4.8,
    reviews: 124,
    aiRecommended: true,
    category: 'GPU'
  },
  {
    id: 'cpu-ryzen-7700',
    name: 'AMD Ryzen 7 7700',
    brand: 'AMD',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800',
    price: '$329',
    rating: 4.7,
    reviews: 89,
    aiRecommended: true,
    category: 'CPU'
  },
  {
    id: 'ssd-990-pro',
    name: 'Samsung 990 Pro 2TB',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=800',
    price: '$169',
    rating: 4.9,
    reviews: 312,
    aiRecommended: false,
    category: 'Storage'
  },
  {
    id: 'mb-asus-rog',
    name: 'ASUS ROG Strix B650E-F',
    brand: 'ASUS',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    price: '$259',
    rating: 4.6,
    reviews: 56,
    aiRecommended: true,
    category: 'Motherboard'
  }
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setHasSearched(true);
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setHasSearched(true);
    setIsFocused(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Search Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Find Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Next Upgrade</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            AI-powered search to discover the perfect components for your ultimate build.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="w-full max-w-3xl relative z-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSearch} className="relative group">
            <div className={`absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 bg-gradient-to-r from-cyan-400 to-purple-500 ${isFocused ? 'opacity-75' : ''}`}></div>
            <div className="relative flex items-center bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <Search className={`ml-6 w-6 h-6 transition-colors duration-300 ${isFocused ? 'text-cyan-400' : 'text-gray-500'}`} />
              <input
                ref={inputRef}
                type="text"
                className="w-full bg-transparent py-5 px-4 text-xl text-white placeholder-gray-500 outline-none"
                placeholder="Search GPU, CPU, Motherboard, SSD..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              />
              <button 
                type="submit"
                className="mr-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Autocomplete Dropdown */}
          <AnimatePresence>
            {isFocused && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full mt-4 bg-gray-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-4 border-b border-white/5">
                  <h3 className="text-sm font-semibold text-gray-400 flex items-center gap-2 uppercase tracking-wider mb-3">
                    <Zap className="w-4 h-4 text-yellow-400" /> Trending Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {MOCK_SUGGESTIONS.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 hover:text-white transition-all text-sm"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
                {query.length > 1 && (
                  <div className="p-2">
                    {[1, 2, 3].map((_, idx) => (
                      <button 
                        key={idx}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors text-left"
                        onClick={() => handleSuggestionClick(`${query} model ${idx + 1}`)}
                      >
                        <Search className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-300">{query} <span className="text-gray-500">model {idx + 1}</span></span>
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Search Results */}
        <AnimatePresence>
          {hasSearched && (
            <motion.div 
              className="w-full mt-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold">Results for "{query}"</h2>
                <div className="flex gap-4">
                  <span className="text-gray-400 text-sm">{MOCK_RESULTS.length} products found</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOCK_RESULTS.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative h-full bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                      <div className="relative h-48 overflow-hidden bg-white/5 p-6 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="object-contain h-full w-full transform group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl"
                        />
                        {product.aiRecommended && (
                          <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-cyan-500/20">
                            <Sparkles className="w-3 h-3" /> AI Pick
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{product.brand}</span>
                        <h3 className="font-semibold text-lg text-white mb-2 leading-tight">{product.name}</h3>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm font-medium">{product.rating}</span>
                          </div>
                          <span className="text-gray-500 text-sm">({product.reviews})</span>
                        </div>
                        <div className="mt-auto flex items-end justify-between">
                          <div>
                            <span className="text-xs text-gray-400 block mb-1">Lowest Price</span>
                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                              {product.price}
                            </span>
                          </div>
                          <button className="bg-white/10 hover:bg-white/20 text-white rounded-xl p-2 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Initial Empty State Categories (only show if not searched) */}
        {!hasSearched && (
          <motion.div 
            className="w-full mt-24 max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-center text-gray-400 mb-8 font-medium">Browse by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Monitor />, name: 'Graphics Cards' },
                { icon: <Cpu />, name: 'Processors' },
                { icon: <HardDrive />, name: 'Storage' },
                { icon: <Zap />, name: 'Power Supplies' },
              ].map((cat, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:-translate-y-1">
                  <div className="text-cyan-400">{cat.icon}</div>
                  <span className="font-medium">{cat.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
