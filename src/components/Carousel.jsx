import { motion } from 'framer-motion';

const Carousel = ({ direction = 'right', items, className = '' }) => {
  const duration = 50;
  
  // Duplicar os itens suficiente para preencher uma tela muito larga
  // 12 duplicações = 12 × número de itens = suficiente para qualquer tela
  const duplicatedItems = Array(7).fill(items).flat();

  return (
    <div id='Carousel' className={`overflow-hidden relative ${className}`}>
      <motion.div
        className="flex gap-6 items-center"
        animate={{
          x: direction === 'right' 
            ? ['0%', '-20%'] 
            : ['-20%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duration,
            ease: 'linear'
          }
        }}
      >
        {duplicatedItems.map((imagePath, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-20 md:w-30 md:h-28 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-4
            border-t-4 border-t-blue-600
            border-r-4 border-r-cyan-300
            border-b-4 border-b-cyan-300
            border-l-4 border-l-blue-600"
          >
            <img 
              src={imagePath} 
              alt={`Serviço ${(index % items.length) + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;