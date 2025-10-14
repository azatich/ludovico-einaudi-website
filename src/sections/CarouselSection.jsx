import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import one from "/images/about/1.png";
import two from "/images/about/2.jpg";
import three from "/images/about/3.jpg";
import four from "/images/about/4.jpg";

const CarouselSection = () => {
  const ref = useRef(null);
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [isXL, setIsXL] = useState(false);

  // Detect screen width once on mount
  useEffect(() => {
    const checkIsSmall = () => setIsSmall(window.innerWidth < 768);
    checkIsSmall();
    window.addEventListener("resize", checkIsSmall);
    return () => window.removeEventListener("resize", checkIsSmall);
  }, []);

  useEffect(() => {
    const checkIsMedium = () => setIsMedium(window.innerWidth < 1024);
    checkIsMedium();
    window.addEventListener("resize", checkIsMedium);
    return () => window.removeEventListener("resize", checkIsMedium);
  }, []);

  useEffect(() => {
    const checkIsLarge = () => setIsLarge(window.innerWidth < 1280);
    checkIsLarge();
    window.addEventListener("resize", checkIsLarge);
    return () => window.removeEventListener("resize", checkIsLarge);
  }, []);

  useEffect(() => {
    const checkIsXL = () => setIsXL(window.innerWidth < 1536);
    checkIsXL();
    window.addEventListener("resize", checkIsXL);
    return () => window.removeEventListener("resize", checkIsXL);
  }, []);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Horizontal movement (faster on mobile)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isSmall ? "-190%" : isMedium ? "-150%" : isLarge ? "-110%" : isXL ? "-80%" : "-57%"]
  );

  return (
    <section
      ref={ref}
      className="relative bg-black text-white h-[200vh] sm:h-[250vh] lg:h-[300vh]"
    >

      {/* Sticky horizontal scroll zone */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 sm:gap-8 px-6 sm:px-12">
          <img
            src={one}
            alt="Ludovico 1"
            className="w-[65vw] sm:w-[30rem] md:w-[32rem] lg:w-[35rem] h-[18rem] sm:h-[22rem] object-cover"
          />
          <img
            src={two}
            alt="Ludovico 2"
            className="w-[65vw] sm:w-[30rem] md:w-[32rem] lg:w-[35rem] h-[18rem] sm:h-[22rem] object-cover"
          />
          <img
            src={three}
            alt="Ludovico 3"
            className="w-[65vw] sm:w-[30rem] md:w-[32rem] lg:w-[35rem] h-[18rem] sm:h-[22rem] object-cover"
          />
          <img
            src={four}
            alt="Ludovico 3"
            className="w-[65vw] sm:w-[30rem] md:w-[32rem] lg:w-[35rem] h-[18rem] sm:h-[22rem] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselSection;
