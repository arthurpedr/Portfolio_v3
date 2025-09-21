import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Timeline = ({ items = [] }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Variantes de animação para o container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Variantes de animação para cada item
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Variantes para o ponto da timeline
  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "backOut"
      }
    }
  };

  // Variantes para a linha da timeline (responsiva)
  const lineVariants = {
    hidden: {
      scaleX: 0,
      scaleY: 0
    },
    visible: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      {/* Linha da timeline - horizontal em desktop, vertical em mobile */}
      <motion.div 
        className="absolute md:top-2 md:left-0 md:w-full md:h-0.5 md:origin-left 
                   left-2 top-0 w-0.5 h-full origin-top 
                   bg-gray-200 rounded-full"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />
      
      <motion.div 
        className="md:flex md:gap-10 md:w-full md:h-full md:min-w-max md:pb-4
                   space-y-10 md:space-y-0"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            className="relative md:flex md:flex-col md:items-center md:max-w-[300px]
                       flex items-start gap-6 w-full"
            variants={itemVariants}
          >
            {/* Ponto da timeline animado */}
            <motion.div className="relative z-10 flex-shrink-0 md:mb-6 mb-0">
              <motion.span 
                className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white"
                variants={dotVariants}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
              />
            </motion.div>
            
            {/* Container do conteúdo */}
            <motion.div className="md:flex-1 md:w-full flex-1 min-w-0 w-full">
              {/* Layout diferente para desktop e mobile */}
              <div className="md:flex md:flex-col md:gap-4 md:w-full">
                {/* DESKTOP: Primeiro as imagens, depois o texto */}
                <div className="hidden md:block">
                  {/* Container das imagens - Desktop */}
                  {(item.img || item.images) && (
                    <motion.div 
                      className="w-full mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2 + index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      {/* Suporte para múltiplas imagens */}
                      {item.images && item.images.length > 0 ? (
                        <div className={`grid gap-2 ${
                          item.images.length === 1 ? 'grid-cols-1' :
                          item.images.length === 2 ? 'grid-cols-2' :
                          item.images.length === 3 ? 'grid-cols-2 grid-rows-2' :
                          'grid-cols-2 grid-rows-2'
                        }`}>
                          {item.images.slice(0, 4).map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className={`
                                ${item.images.length === 3 && imgIndex === 0 ? 'col-span-2' : ''}
                                ${item.images.length > 4 && imgIndex === 3 ? 'relative' : ''}
                              `}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 0.3 + index * 0.1 + imgIndex * 0.1,
                                ease: "easeOut"
                              }}
                            >
                              <motion.img 
                                src={image.src || image} 
                                alt={image.alt || item.title || `Imagem ${imgIndex + 1}`}
                                className="w-full h-52 rounded-lg shadow-md object-cover"
                                whileHover={{ 
                                  scale: 1.05,
                                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                                  transition: { duration: 0.3 }
                                }}
                                loading="lazy"
                              />
                              {/* Indicador de mais imagens */}
                              {item.images.length > 4 && imgIndex === 3 && (
                                <motion.div 
                                  className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center"
                                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                                >
                                  <span className="text-white font-bold text-lg">
                                    +{item.images.length - 4}
                                  </span>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      ) : item.img ? (
                        /* Suporte para imagem única (compatibilidade) */
                        <motion.img 
                          src={item.img} 
                          alt={item.title || "Imagem da timeline"} 
                          className="w-full h-48 rounded-lg shadow-md object-cover"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                            transition: { duration: 0.3 }
                          }}
                          loading="lazy"
                        />
                      ) : null}
                      
                      {/* Legenda das imagens (opcional) */}
                      {item.imageCaption && (
                        <motion.p 
                          className="text-xs text-gray-400 mt-2 text-center"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + index * 0.1
                          }}
                        >
                          {item.imageCaption}
                        </motion.p>
                      )}
                    </motion.div>
                  )}

                  {/* Conteúdo de texto - Desktop */}
                  <motion.div 
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.1 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <motion.h3 
                      className="text-lg font-bold text-white mb-2 text-center"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p className="text-sm text-gray-200 leading-relaxed text-center">
                      {item.description}
                    </motion.p>
                  </motion.div>
                </div>

                {/* MOBILE: Layout lado a lado original */}
                <div className="md:hidden flex flex-col lg:flex-row lg:items-start lg:gap-6 w-full">
                  {/* Conteúdo de texto - Mobile */}
                  <motion.div 
                    className="flex-1 pb-4 lg:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.1 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <motion.h3 
                      className="text-lg font-bold text-white mb-2"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p className="text-sm text-gray-200 leading-relaxed">
                      {item.description}
                    </motion.p>
                  </motion.div>
                  
                  {/* Container das imagens - Mobile */}
                  {(item.img || item.images) && (
                    <motion.div 
                      className="flex-shrink-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2 + index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      {/* Suporte para múltiplas imagens */}
                      {item.images && item.images.length > 0 ? (
                        <div className={`grid gap-2 ${
                          item.images.length === 1 ? 'grid-cols-1' :
                          item.images.length === 2 ? 'grid-cols-2' :
                          item.images.length === 3 ? 'grid-cols-2 grid-rows-2' :
                          'grid-cols-2 grid-rows-2'
                        }`}>
                          {item.images.slice(0, 4).map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className={`
                                ${item.images.length === 3 && imgIndex === 0 ? 'col-span-2' : ''}
                                ${item.images.length > 4 && imgIndex === 3 ? 'relative' : ''}
                              `}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 0.3 + index * 0.1 + imgIndex * 0.1,
                                ease: "easeOut"
                              }}
                            >
                              <motion.img 
                                src={image.src || image} 
                                alt={image.alt || item.title || `Imagem ${imgIndex + 1}`}
                                className="rounded-lg shadow-md object-cover"
                                whileHover={{ 
                                  scale: 1.05,
                                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                                  transition: { duration: 0.3 }
                                }}
                                loading="lazy"
                              />
                              {/* Indicador de mais imagens */}
                              {item.images.length > 4 && imgIndex === 3 && (
                                <motion.div 
                                  className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center"
                                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                                >
                                  <span className="text-white font-bold text-lg">
                                    +{item.images.length - 4}
                                  </span>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      ) : item.img ? (
                        /* Suporte para imagem única (compatibilidade) */
                        <motion.img 
                          src={item.img} 
                          alt={item.title || "Imagem da timeline"} 
                          className="w-full h-auto rounded-lg shadow-md object-cover"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                            transition: { duration: 0.3 }
                          }}
                          loading="lazy"
                        />
                      ) : null}
                      
                      {/* Legenda das imagens (opcional) */}
                      {item.imageCaption && (
                        <motion.p 
                          className="text-xs text-gray-400 mt-2 text-center"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + index * 0.1
                          }}
                        >
                          {item.imageCaption}
                        </motion.p>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;