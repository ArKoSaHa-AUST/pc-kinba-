import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { MonitorPlay, Settings, Layers } from 'lucide-react';

const benchmarkData = [
  { game: 'Cyberpunk 2077', '1080p': 112, '1440p': 78, '4K': 42 },
  { game: 'Red Dead 2', '1080p': 135, '1440p': 95, '4K': 55 },
  { game: 'Starfield', '1080p': 98, '1440p': 65, '4K': 38 },
  { game: 'Call of Duty', '1080p': 185, '1440p': 130, '4K': 85 },
];

export default function PerformanceBenchmarks() {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Benchmarks</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world gaming performance across popular titles at maximum settings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <MonitorPlay />,
              title: '1080p Gaming',
              desc: 'Flawless >100 FPS on ultra settings.',
              highlight: 'Ultra',
            },
            {
              icon: <Settings />,
              title: '1440p Gaming',
              desc: 'Smooth >60 FPS on high/ultra settings.',
              highlight: 'High',
            },
            {
              icon: <Layers />,
              title: 'Ray Tracing',
              desc: 'Excellent performance with DLSS 3.5.',
              highlight: 'DLSS',
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{card.desc}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-gray-300">
                {card.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl h-[500px]"
        >
          <h3 className="text-xl font-bold mb-8 text-white">Average FPS</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={benchmarkData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
                vertical={false}
              />
              <XAxis
                dataKey="game"
                stroke="rgba(255,255,255,0.4)"
                tick={{ fill: 'rgba(255,255,255,0.6)' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="rgba(255,255,255,0.4)"
                tick={{ fill: 'rgba(255,255,255,0.6)' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  color: '#fff',
                }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="1080p" fill="#00e5ff" radius={[4, 4, 0, 0]} />
              <Bar dataKey="1440p" fill="#7c3aed" radius={[4, 4, 0, 0]} />
              <Bar dataKey="4K" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
