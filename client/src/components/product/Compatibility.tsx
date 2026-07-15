import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, XCircle, Cpu, Shield, Zap, Box } from 'lucide-react';

const compatibilityData = [
  { component: 'CPU', name: 'Ryzen 5 7600X / Core i5-13600K', status: 'optimal', icon: <Cpu /> },
  { component: 'Motherboard', name: 'PCIe 4.0 x16 Slot Required', status: 'compatible', icon: <Shield /> },
  { component: 'Power Supply', name: 'Minimum 550W (650W Recommended)', status: 'warning', icon: <Zap /> },
  { component: 'Case', name: 'Max GPU Length: 280mm', status: 'optimal', icon: <Box /> },
];

export default function Compatibility() {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compatibility Check</h2>
            <p className="text-gray-400 max-w-2xl">Ensure this component fits perfectly with your current or planned build.</p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Check My Build
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {compatibilityData.map((item, idx) => {
            let statusStyle = '';
            let StatusIcon = CheckCircle2;
            
            if (item.status === 'optimal') {
              statusStyle = 'border-green-500/30 bg-green-500/5 text-green-400';
              StatusIcon = CheckCircle2;
            } else if (item.status === 'compatible') {
              statusStyle = 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400';
              StatusIcon = CheckCircle2;
            } else if (item.status === 'warning') {
              statusStyle = 'border-yellow-500/30 bg-yellow-500/5 text-yellow-400';
              StatusIcon = AlertTriangle;
            } else {
              statusStyle = 'border-red-500/30 bg-red-500/5 text-red-400';
              StatusIcon = XCircle;
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border ${statusStyle} flex items-center justify-between group`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-300 text-sm font-medium mb-1">{item.component}</h4>
                    <p className="text-white font-semibold">{item.name}</p>
                  </div>
                </div>
                <StatusIcon className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
