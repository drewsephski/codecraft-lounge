import { motion } from "framer-motion";
import { ScrollArea } from "../ui/scroll-area";

interface CategoryProps {
  title: string;
  components: string[];
  className?: string;
}

const CategorySection = ({ title, components, className }: CategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-secondary/90">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {components.map((component, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, y: -2 }}
            className="relative component-card"
            style={{
              '--gradient-start': 'rgba(155, 135, 245, 0.2)',
              '--gradient-end': 'rgba(214, 188, 250, 0.2)'
            } as React.CSSProperties}
          >
            <div className="p-4 rounded-xl glass-effect border border-white/10 backdrop-blur-lg bg-black/20 hover:bg-black/30 transition-all duration-300 group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="font-medium text-lg text-white/90 group-hover:text-white transition-colors">
                  {component}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategorySection;