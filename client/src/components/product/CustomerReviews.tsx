import { motion } from 'framer-motion';
import { Star, CheckCircle, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Alex Mercer',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    content:
      "Absolutely incredible performance jump from my old 3060. The 1080p frame rates are locked at 144+ in almost everything I play. Runs super cool too, haven't seen it go above 65C.",
    likes: 24,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    rating: 4,
    date: '1 month ago',
    verified: true,
    content:
      'Great card for the price. Only knocking off a star because 8GB of VRAM feels a bit limiting for the future, but for right now, it handles 1440p decently well with DLSS on.',
    likes: 12,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-[120px] relative">
      <div className="container max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <h2 className="text-title mb-6">Customer Reviews</h2>
            <div className="flex items-center gap-6">
              <div className="flex text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="font-bold text-3xl text-white">4.8</span>
              <span className="text-gray-400 font-medium tracking-wide">Based on 124 reviews</span>
            </div>
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-[20px] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-10 hover:bg-white/5 transition-colors group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                    />
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-gray-900 rounded-full p-0.5">
                        <CheckCircle className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-wide mb-1">
                      {review.name}
                    </h4>
                    <span className="text-sm text-gray-500 font-medium uppercase">
                      {review.date}
                    </span>
                  </div>
                </div>
                <div className="flex text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.2)]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-700'}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-cyan-400 transition-colors">
                  <ThumbsUp className="w-5 h-5" /> Helpful ({review.likes})
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
