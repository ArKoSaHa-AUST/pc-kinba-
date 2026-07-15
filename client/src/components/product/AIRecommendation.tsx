import { motion } from 'framer-motion';
import { Sparkles, ThumbsUp, ThumbsDown, Target } from 'lucide-react';

export default function AIRecommendation() {
  return (
    <section className="py-[120px] relative z-10">
      <div className="container max-w-[1440px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[40px] bg-gray-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl"
        >
          {/* Animated Background Gradients */}
          <div className="absolute -top-1/2 -right-1/4 w-[40rem] h-[40rem] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[40rem] h-[40rem] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Col - AI Verdict */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  AI Analysis
                </h3>
              </div>

              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10">
                Based on current market data, performance benchmarks, and user sentiment, the RTX
                5060 Ti offers a substantial leap in 1080p and 1440p gaming. It's an excellent value
                proposition for mainstream gamers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                  <h4 className="flex items-center gap-3 text-green-400 font-semibold mb-6 text-lg tracking-wide uppercase">
                    <ThumbsUp className="w-5 h-5" /> Pros
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Exceptional 1080p performance',
                      'Power efficient (115W)',
                      'DLSS 3.5 support',
                      'Runs very cool & quiet',
                    ].map((pro, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-base font-medium"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                  <h4 className="flex items-center gap-3 text-red-400 font-semibold mb-6 text-lg tracking-wide uppercase">
                    <ThumbsDown className="w-5 h-5" /> Cons
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Only 8GB VRAM',
                      'Not ideal for 4K gaming',
                      'Slightly higher MSRP than last gen',
                    ].map((con, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-base font-medium"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(248,113,113,0.5)]" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Col - Scores */}
            <div className="lg:w-[400px] flex flex-col justify-center gap-8">
              {[
                { label: 'Gaming Score', score: 92, color: 'bg-cyan-400' },
                { label: 'Productivity', score: 85, color: 'bg-purple-400' },
                { label: 'Future Proof', score: 78, color: 'bg-yellow-400' },
                { label: 'Power Efficiency', score: 96, color: 'bg-green-400' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-semibold uppercase tracking-wider mb-3">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white">{item.score}/100</span>
                  </div>
                  <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      className={`h-full ${item.color} shadow-[0_0_10px_currentColor]`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + idx * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-4 p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-3xl flex items-start gap-5">
                <Target className="w-8 h-8 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-white mb-2 text-lg tracking-tight">
                    Target Audience
                  </h5>
                  <p className="text-base text-cyan-100/70 leading-relaxed">
                    Perfect for gamers upgrading from RTX 3060 or older, targeting high-FPS 1080p or
                    solid 1440p gameplay without breaking the bank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
