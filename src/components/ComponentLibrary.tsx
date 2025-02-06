import { motion, useMotionValue, useSpring } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useState } from "react";
import ComponentCard from "./library/ComponentCard";
import CategorySection from "./library/CategorySection";
import ContactSection from "./library/ContactSection";

const ComponentLibrary = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const componentData = [
    {
      title: "Tailwind Components",
      description: "Pre-built UI components with utility-first CSS framework",
      icon: "✨",
      gradient: "from-blue-500 to-cyan-400",
      shadowColor: "rgba(59, 130, 246, 0.5)"
    },
    {
      title: "React Components",
      description: "Modern UI components for React applications",
      icon: "⚛️",
      gradient: "from-cyan-500 to-blue-400",
      shadowColor: "rgba(6, 182, 212, 0.5)"
    },
    {
      title: "Vue Components",
      description: "Progressive framework components for modern web",
      icon: "💚",
      gradient: "from-emerald-500 to-green-400",
      shadowColor: "rgba(16, 185, 129, 0.5)"
    },
    {
      title: "Svelte Components",
      description: "Cybernetically enhanced web components",
      icon: "🔥",
      gradient: "from-orange-500 to-red-400",
      shadowColor: "rgba(249, 115, 22, 0.5)"
    },
    {
      title: "Angular Components",
      description: "Enterprise-ready Angular UI components",
      icon: "🅰️",
      gradient: "from-red-500 to-pink-400",
      shadowColor: "rgba(239, 68, 68, 0.5)"
    },
    {
      title: "Solid Components",
      description: "Simple and performant component library",
      icon: "💎",
      gradient: "from-indigo-500 to-purple-400",
      shadowColor: "rgba(99, 102, 241, 0.5)"
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      components: ["Installation", "Typography", "Colors", "Spacing"],
      className: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "Components",
      components: ["Buttons", "Cards", "Forms", "Navigation"],
      className: "md:col-span-1 lg:col-span-2",
    },
    {
      title: "Layout",
      components: ["Grid", "Flex", "Container", "Spacing"],
      className: "md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <div className="min-h-screen section-gradient text-foreground">
      <motion.div
        className="cursor-glow active"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto p-6 space-y-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h1 className="text-5xl font-bold gradient-text">
              Component Library
            </h1>
            <div className="relative w-full md:w-64">
              <Input
                type="search"
                placeholder="Search components..."
                className="pl-10 glass-effect rounded-xl"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          >
            {componentData.map((component, index) => (
              <ComponentCard key={index} {...component} />
            ))}
          </motion.div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Categories
            </h2>
            <ScrollArea className="h-[600px] rounded-xl glass-effect p-6">
              <div className="space-y-8">
                {categories.map((category, index) => (
                  <CategorySection key={index} {...category} />
                ))}
              </div>
            </ScrollArea>
          </div>

          <ContactSection />

          <footer className="mt-24 py-8 border-t border-border">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 CodeAI. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                {["Privacy Policy", "Terms of Service", "Contact"].map((item, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:shadow-lg hover:shadow-primary/20"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </footer>
        </motion.div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="orb opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;