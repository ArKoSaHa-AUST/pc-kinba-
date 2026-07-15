import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const relatedProducts = [
  {
    id: 'cpu-ryzen-7600x',
    name: 'AMD Ryzen 5 7600X',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400',
    price: '$229',
    rating: 4.8
  },
  {
    id: 'mb-b650-tomahawk',
    name: 'MSI MAG B650 TOMAHAWK',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400',
    price: '$199',
    rating: 4.7
  },
  {
    id: 'psu-rm750e',
    name: 'Corsair RM750e (2023)',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400',
    price: '$99',
    rating: 4.9
  },
  {
    id: 'ram-flare-x5',
    name: 'G.Skill Flare X5 32GB',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=400',
    price: '$105',
    rating: 4.6
  }
];

export default function RelatedProducts() {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Frequently Bought Together</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 cursor-pointer group hover:bg-white/10 transition-colors"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="aspect-square bg-gray-900 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-white mb-2 line-clamp-1">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-cyan-400">{product.price}</span>
                <div className="flex items-center gap-1 text-sm text-yellow-400">
                  <Star className="w-4 h-4 fill-current" /> {product.rating}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
