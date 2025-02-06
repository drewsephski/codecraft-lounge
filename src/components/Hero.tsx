import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Think better with CodeAI"],
    delaySpeed: 2000,
  });

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="orb"></div>
      </div>

      {/* Left Column - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 w-full md:w-1/2 text-left md:pr-8 mb-8 md:mb-0"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {text}
          </span>
          <Cursor cursorStyle="_" />
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Never miss a line of code, idea or connection. Build faster and smarter
          with AI-powered development tools.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-border"
          >
            <span className="block px-8 py-3 text-lg font-medium bg-background rounded-lg">
              Start building for free
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg text-gray-300 hover:text-white transition-colors"
          >
            Watch demo
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Column - Calendar/Note Preview */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 w-full md:w-1/2"
      >
        <div className="relative rounded-2xl overflow-hidden glass-effect p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
          <div className="relative z-10">
            {/* Placeholder content - replace with actual calendar/note preview */}
            <div className="h-80 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center">
              <span className="text-white/70">Calendar/Note Preview</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;