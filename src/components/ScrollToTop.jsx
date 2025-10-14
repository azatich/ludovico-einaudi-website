import { useEffect, useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = ({ scrollMoreThanPx=300, bgColor='bg-black', textColor='text-white' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > scrollMoreThanPx);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-6 right-6 ${bgColor} animate-bounce hover:${bgColor}/80 ${textColor} p-3 rounded-full backdrop-blur-md shadow-lg z-50 transition-colors duration-200`}
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

export default ScrollToTopButton;
