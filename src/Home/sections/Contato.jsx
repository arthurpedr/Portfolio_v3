import ContatoForm from "../../components/ContatoForm.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function Contato() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <section
        id="Contato"
        className="flex w-full min-h-screen mx-auto justify-center items-center text-white"
      >
        <div className="flex flex-col items-center justify-center gap-40 max-w-[1280px] w-full overflow-hidden">
          <motion.p
            className="text-[40px] md:text-[80px] font-bold drop-shadow-[0_0_40px_#FFFFFF] mt-10 py-10"
            variants={itemVariants}
          >
            Contato
          </motion.p>

          <motion.div
            className="flex flex-col px-6 md:px-0 items-center justify-center gap-40 max-w-[1280px] w-full overflow-hidden"
            variants={itemVariants}
          >
            <ContatoForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contato;
