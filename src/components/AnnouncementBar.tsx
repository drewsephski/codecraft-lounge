import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10"
    >
      <div className="glass-effect py-2 px-4 text-sm text-center">
        <motion.span
          className="inline-flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span>New: Our AI integration just landed</span>
        </motion.span>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;