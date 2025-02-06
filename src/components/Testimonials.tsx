import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    content: "The component library has revolutionized our development workflow. It's incredibly intuitive and saves us hours of work.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    content: "Best design system I've worked with. The attention to detail and consistent updates make it a joy to use.",
    avatar: "MC"
  },
  {
    name: "Emma Davis",
    role: "UX Engineer",
    content: "The documentation is comprehensive and the components are highly customizable. Exactly what we needed.",
    avatar: "ED"
  }
];

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          What People Are Saying
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="p-6 h-full glass-effect border-0 bg-black/40 backdrop-blur-xl rounded-xl">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                          {testimonial.avatar}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 flex-grow">{testimonial.content}</p>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Testimonials;