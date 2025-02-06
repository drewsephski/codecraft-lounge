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
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {components.map((component, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl glass-effect cursor-pointer hover:bg-primary/10 transition-colors hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="font-medium">{component}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategorySection;