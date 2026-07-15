import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const specsData = [
  {
    category: 'General',
    items: [
      { label: 'Architecture', value: 'NVIDIA Blackwell' },
      { label: 'Core Clock', value: '2.1 GHz' },
      { label: 'Boost Clock', value: '2.5 GHz' },
      { label: 'CUDA Cores', value: '5120' },
    ],
  },
  {
    category: 'Memory',
    items: [
      { label: 'Memory Size', value: '8 GB' },
      { label: 'Memory Type', value: 'GDDR6' },
      { label: 'Memory Bus', value: '128-bit' },
      { label: 'Bandwidth', value: '288 GB/s' },
    ],
  },
  {
    category: 'Power & Dimensions',
    items: [
      { label: 'TDP', value: '115W' },
      { label: 'Suggested PSU', value: '550W' },
      { label: 'Length', value: '242 mm' },
      { label: 'Slot Size', value: '2 Slots' },
    ],
  },
];

export default function TechnicalSpecs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-gray-900/20">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>

        <div className="space-y-4">
          {specsData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-semibold text-white">{section.category}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex flex-col border-b border-white/5 pb-2">
                            <span className="text-sm text-gray-500 mb-1">{item.label}</span>
                            <span className="text-gray-200 font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
