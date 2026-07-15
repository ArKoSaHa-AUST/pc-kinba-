import { motion } from 'framer-motion';
import { Sparkles, ThumbsUp, ThumbsDown, Target } from 'lucide-react';

export default function AIRecommendation() {
  return (
    <section className="py-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] bg-gray-900/60 backdrop-blur-2xl border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl shadow-cyan-900/20"
        >
          {/* Animated Background Gradients */}
          <div className="absolute -top-1/2 -right-1/4 w-[40rem] h-[40rem] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[40rem] h-[40rem] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            
            {/* Left Col - AI Verdict */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">AI Analysis</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Based on current market data, performance benchmarks, and user sentiment, the RTX 5060 Ti offers a substantial leap in 1080p and 1440p gaming. It's an excellent value proposition for mainstream gamers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="flex items-center gap-2 text-green-400 font-semibold mb-4">
                    <ThumbsUp className="w-5 h-5" /> Pros
                  </h4>
                  <ul className="space-y-3">
                    {['Exceptional 1080p performance', 'Power efficient (115W)', 'DLSS 3.5 support', 'Runs very cool & quiet'].map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="flex items-center gap-2 text-red-400 font-semibold mb-4">
                    <ThumbsDown className="w-5 h-5" /> Cons
                  </h4>
                  <ul className="space-y-3">
                    {['Only 8GB VRAM', 'Not ideal for 4K gaming', 'Slightly higher MSRP than last gen'].map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Col - Scores */}
            <div className="lg:w-96 flex flex-col justify-center gap-6">
              {[
                { label: 'Gaming Score', score: 92, color: 'bg-cyan-400' },
                { label: 'Productivity', score: 85, color: 'bg-purple-400' },
                { label: 'Future Proof', score: 78, color: 'bg-yellow-400' },
                { label: 'Power Efficiency', score: 96, color: 'bg-green-400' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-white">{item.score}/100</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (idx * 0.1) }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-4 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-start gap-4">
                <Target className="w-8 h-8 text-cyan-400 shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Target Audience</h5>
                  <p className="text-sm text-cyan-100/70">Perfect for gamers upgrading from RTX 3060 or older, targeting high-FPS 1080p or solid 1440p gameplay without breaking the bank.</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
