"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSkull } from "react-icons/fa6";
import { GiCrossMark, GiTombstone, GiRaven } from "react-icons/gi";

interface GraveyardEntranceProps {
  onAnimationComplete?: () => void;
}

const GraveyardEntrance: React.FC<GraveyardEntranceProps> = ({ onAnimationComplete }) => {
  const [showEntrance, setShowEntrance] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [showLightning, setShowLightning] = useState(false);
  const fullText = "PROJECT GRAVEYARD";
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!showEntrance) return;
    
    const lightningInterval = setInterval(() => {
      setShowLightning(true);
      setTimeout(() => setShowLightning(false), 200);
    }, Math.random() * 4000 + 3000);
    
    return () => clearInterval(lightningInterval);
  }, [showEntrance]);

  useEffect(() => {
    if (!showEntrance) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowEntrance(false);
          if (onAnimationComplete) {
            setTimeout(onAnimationComplete, 1500);
          }
        }, 2500);
      }
    }, 120);
    
    return () => clearInterval(interval);
  }, [showEntrance, onAnimationComplete]);

  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 5 + 2;
      particles.push(
        <motion.div
          key={i}
          className="absolute bg-gray-200 rounded-full opacity-30"
          style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -Math.random() * 200 - 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0.1, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
        />
      );
    }
    return particles;
  };

  const createRavens = () => {
    const ravens = [];
    for (let i = 0; i < 5; i++) {
      const size = Math.random() * 20 + 15;
      const startPosition = Math.random() * 100;
      ravens.push(
        <motion.div
          key={`raven-${i}`}
          className="absolute text-gray-800"
          style={{
            fontSize: size,
            right: `-50px`,
            top: `${startPosition}%`,
          }}
          animate={{
            x: [-50, -window.innerWidth - 100],
            y: [0, (Math.random() - 0.5) * 200],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 10,
          }}
        >
          <GiRaven />
        </motion.div>
      );
    }
    return ravens;
  };

  const renderFogLayer = (opacity: number, duration: number, initialX: number = 0) => (
    <motion.div 
      className={`absolute inset-0 z-10`}
      style={{
        opacity: opacity,
        backgroundImage: "url('/images/fog-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "300%",
        filter: initialX !== 0 ? "blur(5px)" : undefined,
      }}
      animate={{
        x: [initialX, initialX - 1000, initialX - 2000],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }
      }}
    />
  );

  const renderGravestones = () => (
    <div className="absolute w-full z-15 bottom-0 flex justify-center">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="text-gray-700 opacity-60 mx-2"
          style={{
            fontSize: `${Math.random() * 30 + 50}px`,
            bottom: `${Math.random() * 10 + 10}px`,
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 0.6,
            rotate: [(i % 2 === 0 ? -3 : 3), (i % 2 === 0 ? -1 : 1)],
          }}
          transition={{ 
            delay: 0.5 + i * 0.1,
            duration: 1,
            rotate: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 6 + 3,
            }
          }}
        >
          {i % 3 === 0 ? <GiCrossMark /> : <GiTombstone />}
        </motion.div>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      {showEntrance && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0e14] overflow-hidden font-fira"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0 bg-gray-100 z-30 pointer-events-none transition-opacity duration-100"
            style={{ opacity: showLightning ? 0.2 : 0 }}
          />
          
          <div ref={particlesRef} className="absolute inset-0 z-20 overflow-hidden">
            {createParticles()}
          </div>
          
          <div className="absolute inset-0 z-15 overflow-hidden">
            {createRavens()}
          </div>

          {renderFogLayer(0.4, 60)}
          {renderFogLayer(0.2, 30)}
          {renderFogLayer(0.15, 45, -1000)}
          
          {renderGravestones()}
          
          <motion.div 
            className="absolute bottom-0 w-full h-40 opacity-70 z-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              backgroundImage: "url('/images/gravestones-silhouette.png')",
              backgroundPosition: "bottom",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%"
            }}
          />
          
          <motion.div
            className="relative z-25 flex flex-col items-center"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, type: "spring" }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0], 
                rotateZ: [-5, 5, -5],
                filter: showLightning ? "drop-shadow(0 0 15px rgba(200, 0, 0, 0.8))" : "none"
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                rotateZ: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              className="relative"
            >
              <FaSkull className="text-red-800 text-8xl mb-8" />
              
              {['left', 'right'].map(side => (
                <motion.div
                  key={side}
                  className={`absolute rounded-full bg-red-500 top-[35%] ${side === 'left' ? 'left-[30%]' : 'right-[30%]'} w-[10%] h-[10%]`}
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              ))}
            </motion.div>
            
            <motion.div 
              className="font-mono text-4xl text-gray-300 border-b-2 border-red-800 pb-3 tracking-widest px-6 relative"
              animate={{ 
                textShadow: showLightning ? "0 0 8px rgba(255,255,255,0.8)" : "none" 
              }}
            >
              <span className="text-red-800 mr-2">&gt;</span>
              {typedText}
              <span className="inline-block w-2 h-7 bg-gray-300 ml-1 animate-pulse"></span>
              
              {[1, -1].map((direction, i) => (
                <motion.span 
                  key={i}
                  className={`absolute ${direction === 1 ? '-left-10' : '-right-10'} -top-1 text-red-800 opacity-60`}
                  animate={{ rotate: 360 * direction }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  ✠
                </motion.span>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-gray-500 mt-6 text-lg italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              where abandoned code finds eternal rest
            </motion.p>
          </motion.div>
          
          <motion.div
            className="absolute z-40 w-full h-full pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1.5 }}
          >
            {['left', 'right'].map(side => (
              <motion.div
                key={side}
                className={`absolute ${side}-0 top-0 w-1/2 h-full bg-[#0a0e14] border-${side === 'left' ? 'r' : 'l'}-2 border-gray-800`}
                initial={{ x: 0 }}
                animate={{ x: side === 'left' ? '-100%' : '100%' }}
                transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
              >
                <div className={`h-full flex items-center ${side === 'left' ? 'justify-end' : 'justify-start'}`}>
                  {side === 'left' ? (
                    <>
                      <div className="w-10 h-3/4 border-r-2 border-gray-700 mr-5"></div>
                      <div className="w-5 h-1/2 border-r-2 border-gray-700 mr-10"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-1/2 border-l-2 border-gray-700 ml-10"></div>
                      <div className="w-10 h-3/4 border-l-2 border-gray-700 ml-5"></div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GraveyardEntrance;