import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageCardsPanel = () => {
  const imageCards = [
    { id: 1, title: "Nature", color: "#10b981" },
    { id: 2, title: "City", color: "#3b82f6" },
    { id: 3, title: "Abstract", color: "#8b5cf6" },
    { id: 4, title: "Tech", color: "#f59e0b" },
    { id: 5, title: "Art", color: "#ef4444" },
    { id: 6, title: "Space", color: "#6366f1" },
    { id: 7, title: "Ocean", color: "#06b6d4" },
    { id: 8, title: "Mountain", color: "#84cc16" },
  ];

  const loopCards = [...imageCards, ...imageCards];

  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Measure width of one full set of cards
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-400 mb-4">
          Exploring content automatically…
        </p>

        <motion.div
          ref={containerRef}
          className="flex gap-4"
          animate={{ x: [0, -width] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {loopCards.map((card, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index *0.05 }}
              whileHover={{
                scale: 1.08,
                rotate: [-1, 1, -1],
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative">
                <div
                  className="w-48 h-32 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}88 100%)`,
                  }}
                >
                  <div className="p-4 h-full flex flex-col justify-between">
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs opacity-80">
                        Click to explore
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <motion.div
                        className="w-8 h-8 bg-white bg-opacity-20 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageCardsPanel;
