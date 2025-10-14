// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-white bg-black w-full md:w-1/2 p-12 md:py-44 md:px-10 xl:px-12 xl:py-44">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="uppercase text-2xl text-start font-semibold"
      >
        About Ludovico
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4"
      >
        Ludovico Maria Enrico Einaudi OMRI (Italian: [ludoˈviːko eiˈnaudi] ⓘ;
        born 23 November 1955) is an Italian pianist and composer. Trained at
        the Conservatorio Verdi in Milan, Einaudi began his career as a
        classical composer, later incorporating other styles and genres such as
        pop, rock, folk, and world music.
      </motion.p>

      <motion.a
        href="/about"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex gap-2 uppercase mt-4 hover:text-white/80 hover:underline transition duration-200"
      >
        Read more
      </motion.a>
    </div>
  );
};

export default About;
