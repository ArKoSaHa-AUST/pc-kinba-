import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles } from 'lucide-react';

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] bg-gray-900/90 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">PC-KINBA AI</h3>
                  <p className="text-xs text-cyan-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 h-[300px] overflow-y-auto flex flex-col gap-4 text-sm">
              <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-gray-200">
                Hi! I noticed you're looking at the RTX 5060 Ti. Need help deciding if it fits your
                build?
              </div>
              <div className="self-end bg-cyan-500/20 border border-cyan-500/30 text-white rounded-2xl rounded-tr-sm p-3 max-w-[85%]">
                Should I buy this or the RTX 4060 Ti?
              </div>
              <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-sm p-3 max-w-[90%] text-gray-200">
                <strong className="block mb-1 text-cyan-400">AI Recommendation:</strong>
                The 5060 Ti offers a ~25% performance uplift over the 4060 Ti for only $50 more
                MSRP. Unless you find a heavily discounted 4060 Ti (under $299), this is the better
                buy for future-proofing your 1080p/1440p gaming.
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-black/20">
              <div className="relative flex items-center bg-gray-800 rounded-xl overflow-hidden border border-white/10">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent py-2.5 px-4 text-sm text-white outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && setInput('')}
                />
                <button
                  className="p-2 mr-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={() => setInput('')}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-purple-500/30 flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all group relative"
      >
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-25"></div>
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-6 h-6 text-white group-hover:animate-bounce" />
        )}
      </button>
    </div>
  );
}
