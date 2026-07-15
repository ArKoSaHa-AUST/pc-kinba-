import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ExternalLink, TrendingDown } from 'lucide-react';

const mockPriceHistory = [
  { date: 'Jan', price: 449 },
  { date: 'Feb', price: 439 },
  { date: 'Mar', price: 429 },
  { date: 'Apr', price: 419 },
  { date: 'May', price: 409 },
  { date: 'Jun', price: 399 },
];

const mockStores = [
  { name: 'Star Tech', price: 399, stock: true, delivery: 'Next Day', logo: 'ST' },
  { name: 'TechLand', price: 405, stock: true, delivery: '2-3 Days', logo: 'TL' },
  { name: 'Ryans', price: 410, stock: false, delivery: 'Out of Stock', logo: 'RY' },
  { name: 'Global Brand', price: 415, stock: true, delivery: '2 Days', logo: 'GB' },
];

export default function PriceSection() {
  return (
    <section className="py-16 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Live Price Comparison */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              Live Price Comparison
            </h3>
            
            <div className="flex flex-col gap-3">
              {mockStores.map((store, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${idx === 0 ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-gray-400 text-sm">
                      {store.logo}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{store.name}</h4>
                      <div className="flex items-center gap-2 text-xs">
                        <span className={store.stock ? 'text-green-400' : 'text-red-400'}>
                          {store.stock ? 'In Stock' : 'Out of Stock'}
                        </span>
                        <span className="text-gray-500">• {store.delivery}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-white">${store.price}</span>
                    <button 
                      disabled={!store.stock}
                      className={`p-2 rounded-xl transition-colors ${store.stock ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Price History */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Price History</h3>
              <div className="flex gap-2">
                {['1M', '3M', '6M', '1Y'].map(range => (
                  <button key={range} className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${range === '6M' ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                    {range}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-6 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl w-fit">
              <TrendingDown className="w-5 h-5" />
              <span className="text-sm font-medium">Price dropped by 11% in the last 6 months</span>
            </div>

            <div className="flex-1 w-full min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockPriceHistory} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00e5ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="date" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#00e5ff', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="price" stroke="#00e5ff" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
