import { motion } from 'framer-motion';
import { Star, CheckCircle, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Alex Mercer',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    content: 'Absolutely incredible performance jump from my old 3060. The 1080p frame rates are locked at 144+ in almost everything I play. Runs super cool too, haven\'t seen it go above 65C.',
    likes: 24
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    rating: 4,
    date: '1 month ago',
    verified: true,
    content: 'Great card for the price. Only knocking off a star because 8GB of VRAM feels a bit limiting for the future, but for right now, it handles 1440p decently well with DLSS on.',
    likes: 12
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Customer Reviews</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold text-xl">4.8</span>
              <span className="text-gray-400">Based on 124 reviews</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-purple-500/20">
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      {review.name}
                      {review.verified && <CheckCircle className="w-4 h-4 text-cyan-400" />}
                    </h4>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-600'}`} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">"{review.content}"</p>
              
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  <ThumbsUp className="w-4 h-4" /> Helpful ({review.likes})
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
