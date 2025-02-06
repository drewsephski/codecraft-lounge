import { motion, useMotionValue, useSpring } from "framer-motion";
import { Search, ChevronRight, Star, Mail, Github, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen section-gradient text-foreground">
      {/* Mouse follower */}
      <motion.div
        className="cursor-glow"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto p-6 space-y-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h1 className="text-4xl font-bold gradient-text">
              Component Library
            </h1>
            <div className="relative w-full md:w-64">
              <Input
                type="search"
                placeholder="Search components..."
                className="pl-10 glass-effect"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          >
            {componentData.map((component, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="relative group component-card"
                style={{
                  '--gradient-start': component.shadowColor,
                  '--gradient-end': 'transparent'
                } as React.CSSProperties}
              >
                <Card className="overflow-hidden border-0 bg-black/40 backdrop-blur-xl">
                  <CardContent className="p-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${component.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{component.icon}</div>
                        <h3 className="font-semibold text-white">{component.title}</h3>
                      </div>
                      <ChevronRight className="h-4 w-4 text-white/70 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm text-white/80">
                      {component.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Categories
            </h2>
            <ScrollArea className="h-[600px] rounded-md border glass-effect p-6">
              <div className="space-y-8">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={category.className}
                  >
                    <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.components.map((component, compIndex) => (
                        <motion.div
                          key={compIndex}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 rounded-lg glass-effect cursor-pointer hover:bg-primary/10 transition-colors"
                        >
                          <span>{component}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-24 glass-effect rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Get in Touch
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our components? We'd love to hear from you.
                Get in touch and let's discuss your project.
              </p>
              <div className="flex justify-center space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@example.com"
                  className="p-4 rounded-full glass-effect hover:bg-primary/20 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full glass-effect hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full glass-effect hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <footer className="mt-24 py-8 border-t border-border">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 CodeAI. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </motion.div>
      </div>

      {/* Background Orb */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="orb opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
