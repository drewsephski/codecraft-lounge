import { motion } from "framer-motion";
import { Mail, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-24 glass-effect rounded-xl p-8 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Get in Touch
      </h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg font-medium text-white/80 mb-8">
          Have questions about our components? We'd love to hear from you.
          Get in touch and let's discuss your project.
        </p>
        <div className="flex justify-center space-x-6">
          {[
            { icon: Mail, href: "mailto:contact@example.com" },
            { icon: Github, href: "https://github.com" },
            { icon: Twitter, href: "https://twitter.com" }
          ].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-effect hover:bg-primary/20 transition-colors hover:shadow-lg hover:shadow-primary/20"
            >
              <item.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;