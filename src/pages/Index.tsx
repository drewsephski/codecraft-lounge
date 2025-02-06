import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Hero from "../components/Hero";
import ComponentLibrary from "../components/ComponentLibrary";
import CursorGlow from "../components/CursorGlow";
import Testimonials from "../components/Testimonials";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground overflow-hidden relative"
    >
      <CursorGlow />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ComponentLibrary />
      <Testimonials />
    </motion.div>
  );
};

export default Index;