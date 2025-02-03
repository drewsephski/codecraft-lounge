import { motion } from "framer-motion";
import { Search, ChevronRight, Star } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent } from "./ui/card";

const ComponentLibrary = () => {
  const categories = [
    {
      title: "Getting Started",
      components: ["Installation", "Typography", "Colors", "Spacing"],
    },
    {
      title: "Components",
      components: ["Buttons", "Cards", "Forms", "Navigation"],
    },
    {
      title: "Layout",
      components: ["Grid", "Flex", "Container", "Spacing"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-6"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Component Library</h1>
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Search components..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Featured Components Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div key={index} variants={item}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden gradient-border">
                <CardContent className="p-6 glass-effect">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">Component {index}</h3>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Beautiful, reusable components built with Radix UI and Tailwind CSS.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <ScrollArea className="h-[600px] rounded-md border p-6">
            <div className="space-y-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.components.map((component, compIndex) => (
                      <motion.div
                        key={compIndex}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-lg glass-effect cursor-pointer"
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
      </motion.div>

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