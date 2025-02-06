import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface ComponentCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  shadowColor: string;
}

const ComponentCard = ({ title, description, icon, gradient, shadowColor }: ComponentCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="relative group component-card h-[180px]"
      style={{
        '--gradient-start': shadowColor,
        '--gradient-end': 'transparent'
      } as React.CSSProperties}
    >
      <Card className="h-full overflow-hidden border-0 bg-black/40 backdrop-blur-xl rounded-xl">
        <CardContent className="p-6 relative h-full">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{icon}</div>
              <h3 className="font-bold text-xl text-white">{title}</h3>
            </div>
            <ChevronRight className="h-4 w-4 text-white/70 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-base text-white/90 font-medium">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ComponentCard;