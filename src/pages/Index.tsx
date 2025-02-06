import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Hero from "../components/Hero";
import ComponentLibrary from "../components/ComponentLibrary";
import CursorGlow from "../components/CursorGlow";

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground overflow-hidden relative"
    >
      <CursorGlow position={cursorPosition} />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ComponentLibrary />
    </motion.div>
  );
};

export default Index;