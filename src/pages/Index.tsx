import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      <AnnouncementBar />
      <Navbar />
      <Hero />
    </motion.div>
  );
};

export default Index;