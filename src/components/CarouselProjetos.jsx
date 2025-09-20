"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { 
    id: 1, 
    title: "Landing Page LISA", 
    desc: "O LISA se destaca como um espaço dinâmico que fomenta a inovação tecnológica no Oeste Potiguar, oferecendo aos estudantes oportunidades de se envolverem em projetos concretos de automação e desenvolvimento de software, com aplicação prática e impacto regional. Com uma equipe multidisciplinar, o LISA desenvolve aplicaçãoes em automação e controle, inteligência artificial aplicada e desenvolvimento de software.", 
    image: "./Lisa.png"
  },
  { 
    id: 2, 
    title: "Projeto 2", 
    desc: "O LISA se destaca como um espaço dinâmico que fomenta a inovação tecnológica no Oeste Potiguar, oferecendo aos estudantes oportunidades de se envolverem em projetos concretos de automação e desenvolvimento de software, com aplicação prática e impacto regional. Com uma equipe multidisciplinar, o LISA desenvolve aplicaçãoes em automação e controle, inteligência artificial aplicada e desenvolvimento de software.", 
    image: "https://picsum.photos/800/400?random=2"
  },
];

const abrirLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

export default function CarouselProjects() {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-play só quando o modal não está aberto
  useEffect(() => {
    if (isModalOpen) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isModalOpen]);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative mx-4 md:mx-0 md:w-full">
      {/* Botão esquerda */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-500 text-white p-5 rounded-full"
      >
        ◀
      </button>

      {/* Card animado */}
      <motion.div
        key={projects[current].id}
        className="p-6 bg-white shadow-lg rounded-2xl min-h-[700px] text-center cursor-pointer flex flex-col items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsModalOpen(true)}
      >
        
        <p className="text-2xl font-bold text-gray-800 mb-2">{projects[current].title}</p>
        <img
          src={projects[current].image}
          alt={projects[current].title}
          className="w-full object-cover rounded-lg mb-4"
        />
      </motion.div>

      {/* Botão direita */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-500 text-white p-5 rounded-full"
      >
        ▶
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl max-w-[900px] text-center relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Botão fechar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 text-white px-2 rounded-lg"
              >
                X
              </button>

              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="w-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-black">
                {projects[current].title}
              </h2>
              <p className="text-gray-700">{projects[current].desc}</p>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
