import { motion } from "framer-motion";

interface CursorGlowProps {
  position: { x: number; y: number };
}

const CursorGlow = ({ position }: CursorGlowProps) => {
  return (
    <motion.div
      className="cursor-glow"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
      initial={false}
    />
  );
};

export default CursorGlow;