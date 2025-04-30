"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
import { FaSkull, FaVolumeUp, FaVolumeMute, FaBolt } from "react-icons/fa";
import { GiCrossMark, GiTombstone, GiRaven, GiSpiderWeb, GiGhost, GiDeathSkull } from "react-icons/gi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSkullLine } from "react-icons/ri";
import useSound from 'use-sound';

interface ProjectData {
  name: string;
  description: string;
  deathDate: string;
  lastWords: string;
}

interface GraveyardEntranceProps {
  onAnimationComplete?: () => void;
  projects?: ProjectData[];
  skipAnimationOption?: boolean;
  reducedMotion?: boolean;
}

const GraveyardEntrance: React.FC<GraveyardEntranceProps> = ({ 
  onAnimationComplete, 
  projects = [],
  skipAnimationOption = true,
  reducedMotion = false
}) => {
  const [showEntrance, setShowEntrance] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [showLightning, setShowLightning] = useState(false);
  const [lightningIntensity, setLightningIntensity] = useState(0);
  const [muted, setMuted] = useState(true);
  const [hoveredTombstone, setHoveredTombstone] = useState<number | null>(null);
  const [showSkipButton, setShowSkipButton] = useState(skipAnimationOption);
  const [gateOpen, setGateOpen] = useState(false);
  
  const fullText = "PROJECT GRAVEYARD";
  const particlesRef = useRef<HTMLDivElement>(null);
  const audioInitialized = useRef(false);
  const mousePosition = useMotionValue({ x: 0, y: 0 });
  
  // Sound effects
  const [playThunder] = useSound('/audio/thunder.mp3', { volume: 0.4 });
  const [playAmbient, { stop: stopAmbient }] = useSound('/audio/graveyard-ambience.mp3', { 
    volume: 0.2,
    loop: true
  });
  const [playGateCreak] = useSound('/audio/gate-creak.mp3', { volume: 0.5 });
  const [playRavenCaw] = useSound('/audio/raven.mp3', { volume: 0.3, interrupt: true });
  
  const controls = useAnimation();
  const moonControls = useAnimation();

  // Track mouse position for interactive elements
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mousePosition.set({ 
      x: e.clientX, 
      y: e.clientY 
    });
  }, [mousePosition]);

  // Handle audio initialization (must be triggered by user action due to browser policies)
  const initializeAudio = useCallback(() => {
    if (!audioInitialized.current) {
      setMuted(false);
      audioInitialized.current = true;
      playAmbient();
    }
  }, [playAmbient]);

  // Skip button handler
  const handleSkip = useCallback(() => {
    setShowEntrance(false);
    stopAmbient();
    if (onAnimationComplete) {
      setTimeout(onAnimationComplete, 500);
    }
  }, [onAnimationComplete, stopAmbient]);

  // Lightning effect with thunder sound
  useEffect(() => {
    if (!showEntrance || reducedMotion) return;
    
    const triggerLightning = () => {
      if (Math.random() > 0.7) { // Stronger lightning
        setLightningIntensity(0.4 + Math.random() * 0.3);
        setShowLightning(true);
        if (!muted) playThunder();
        
        setTimeout(() => {
          setLightningIntensity(0.2 + Math.random() * 0.2);
          setTimeout(() => {
            setShowLightning(false);
          }, 100);
        }, 100);
      } else { // Weaker lightning flash
        setLightningIntensity(0.1 + Math.random() * 0.2);
        setShowLightning(true);
        setTimeout(() => {
          setShowLightning(false);
        }, 100);
      }
    };
    
    const lightningInterval = setInterval(() => {
      triggerLightning();
    }, Math.random() * 6000 + 3000);
    
    return () => clearInterval(lightningInterval);
  }, [showEntrance, muted, playThunder, reducedMotion]);

  // Moon animation
  useEffect(() => {
    moonControls.start({
      y: [0, -15, 0],
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 20,
        ease: "easeInOut"
      }
    });
  }, [moonControls]);

  // Text typing effect
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
          setGateOpen(true);
          if (!muted) playGateCreak();
          setTimeout(() => {
            setShowEntrance(false);
            if (onAnimationComplete) {
              setTimeout(onAnimationComplete, 500);
            }
          }, 3000);
        }, 1500);
      }
    }, reducedMotion ? 60 : 120);
    
    return () => clearInterval(interval);
  }, [showEntrance, onAnimationComplete, playGateCreak, muted, reducedMotion]);

  // Control visibility of skip button
  useEffect(() => {
    if (skipAnimationOption) {
      const timer = setTimeout(() => {
        setShowSkipButton(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [skipAnimationOption]);

  // Generate dynamic projects if none provided
  const displayProjects = projects.length > 0 ? projects : [
    { name: "Legacy API", description: "REST in pieces", deathDate: "2023", lastWords: "Deprecated by GraphQL" },
    { name: "UI v1", description: "Never saw the light of production", deathDate: "2024", lastWords: "Design system conflict" },
    { name: "Auth Service", description: "Identity crisis", deathDate: "2022", lastWords: "Replaced by OAuth" },
    { name: "Mobile App", description: "Buried by budget cuts", deathDate: "2023", lastWords: "Pivot to web-first" },
    { name: "ML Pipeline", description: "Lost in the void", deathDate: "2024", lastWords: "Accuracy: 62%" }
  ];

  // Particle system for atmospheric effects
  const createParticles = () => {
    if (reducedMotion) return null;
    
    const particles = [];
    
    // Dust particles
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 5 + 2;
      particles.push(
        <motion.div
          key={`dust-${i}`}
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
    
    // Ghost particles
    for (let i = 0; i < 5; i++) {
      particles.push(
        <motion.div
          key={`ghost-${i}`}
          className="absolute text-gray-300 opacity-40"
          style={{
            fontSize: `${Math.random() * 25 + 15}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -50, 0],
            x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1.1, 0.8],
            rotateZ: [0, Math.random() > 0.5 ? 10 : -10, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 10,
          }}
        >
          <GiGhost />
        </motion.div>
      );
    }
    
    // Leaves particles
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 8 + 5;
      const leafColors = ["text-amber-700", "text-orange-700", "text-red-800", "text-yellow-800"];
      const colorClass = leafColors[Math.floor(Math.random() * leafColors.length)];
      
      particles.push(
        <motion.div
          key={`leaf-${i}`}
          className={`absolute ${colorClass} opacity-60`}
          style={{
            fontSize: size,
            left: `${Math.random() * 100}%`,
            top: `-50px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, (Math.random() - 0.5) * 200],
            rotateZ: [0, Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1)],
            rotateX: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 10,
          }}
        >
          ●
        </motion.div>
      );
    }
    
    return particles;
  };

  // Flying ravens animation
  const createRavens = () => {
    if (reducedMotion) return null;
    
    const ravens = [];
    for (let i = 0; i < 5; i++) {
      const size = Math.random() * 20 + 15;
      const startPosition = Math.random() * 70 + 10;
      const direction = Math.random() > 0.5 ? 1 : -1; // 1 for left to right, -1 for right to left
      const startX = direction === 1 ? -50 : window.innerWidth + 50;
      const endX = direction === 1 ? window.innerWidth + 100 : -100;
      
      ravens.push(
        <motion.div
          key={`raven-${i}`}
          className="absolute text-gray-800 cursor-pointer z-30"
          style={{
            fontSize: size,
            left: `${startX}px`,
            top: `${startPosition}%`,
            transform: direction === -1 ? "scaleX(-1)" : undefined
          }}
          animate={{
            x: [0, endX - startX],
            y: [0, (Math.random() - 0.5) * 100],
            rotate: [0, Math.random() * 10 - 5],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 10,
          }}
          onClick={() => !muted && playRavenCaw()}
          whileHover={{ scale: 1.2 }}
        >
          <GiRaven />
        </motion.div>
      );
    }
    return ravens;
  };

  // Create spider webs in corners
  const createSpiderWebs = () => {
    const corners = [
      "top-0 left-0 origin-top-left rotate-0",
      "top-0 right-0 origin-top-right rotate-90",
      "bottom-0 right-0 origin-bottom-right rotate-180",
      "bottom-0 left-0 origin-bottom-left rotate-270"
    ];
    
    return corners.map((position, idx) => (
      <div key={`web-${idx}`} className={`absolute ${position} z-20`}>
        <GiSpiderWeb className="text-gray-700/30 text-8xl" />
      </div>
    ));
  };

  // Fog layers with parallax effect
  const renderFogLayer = (opacity: number, duration: number, initialX: number = 0, blur: number = 0) => (
    <motion.div 
      className={`absolute inset-0 z-10`}
      style={{
        opacity: opacity,
        backgroundImage: "url('/images/fog-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "300%",
        filter: blur ? `blur(${blur}px)` : undefined,
      }}
      animate={{
        x: [initialX, initialX - 1000, initialX - 2000],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: reducedMotion ? duration * 2 : duration,
          ease: "linear",
        }
      }}
    />
  );

  // Interactive tombstones with project information
  const renderGravestones = () => (
    <div className="absolute w-full z-15 bottom-0 flex justify-center items-end">
      {displayProjects.map((project, i) => (
        <motion.div
          key={i}
          className="relative mx-3 mb-1 cursor-pointer"
          style={{
            bottom: `${Math.random() * 10}px`,
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 0.8,
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
          whileHover={{ 
            scale: 1.1, 
            transition: { duration: 0.2 } 
          }}
          onHoverStart={() => setHoveredTombstone(i)}
          onHoverEnd={() => setHoveredTombstone(null)}
        >
          {/* Tombstone */}
          <div className={`text-gray-700 transition-all duration-300 ${hoveredTombstone === i ? 'text-gray-500' : ''}`} 
            style={{ 
              fontSize: `${Math.random() * 20 + 40}px`,
            }}>
            {i % 3 === 0 ? <GiCrossMark /> : <GiTombstone />}
          </div>
          
          {/* Project info tooltip */}
          <AnimatePresence>
            {hoveredTombstone === i && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-32 left-1/2 transform -translate-x-1/2 bg-gray-900/90 p-3 rounded-md border border-gray-700 w-64 z-40"
                style={{ boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-red-500 font-bold text-sm">{project.name}</h3>
                  <span className="text-gray-400 text-xs">†{project.deathDate}</span>
                </div>
                <p className="text-gray-300 text-xs mb-2">{project.description}</p>
                <p className="text-gray-400 text-xs italic border-t border-gray-700 pt-1 mt-1">
                &quot;{project.lastWords}&quot;
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 border-r border-b border-gray-700 rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );

  // Render clouds crossing moon
  const renderCloudsMoon = () => (
    <>
      <motion.div
        animate={moonControls}
        className="absolute z-5 w-20 h-20 bg-amber-100 rounded-full top-12 right-24"
        style={{ 
          boxShadow: '0 0 30px rgba(254, 243, 199, 0.8), 0 0 60px rgba(254, 243, 199, 0.4)'
        }}
      >
        <div className="absolute inset-2 rounded-full bg-amber-200/50"></div>
        <BsFillMoonStarsFill className="absolute text-amber-100 text-lg top-2 left-2" />
      </motion.div>
      
      {!reducedMotion && [...Array(3)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute z-6 bg-gray-800/50 rounded-full blur-md"
          style={{ 
            width: `${Math.random() * 100 + 150}px`, 
            height: `${Math.random() * 30 + 50}px`,
            top: `${Math.random() * 20 + 5}%`,
          }}
          initial={{ left: '-20%' }}
          animate={{ left: '120%' }}
          transition={{
            duration: Math.random() * 50 + 50,
            ease: "linear",
            repeat: Infinity,
            delay: i * 30
          }}
        />
      ))}
    </>
  );
  
  // Lightning bolts that appear randomly during lightning flashes
  const renderLightningBolts = () => {
    if (!showLightning || reducedMotion) return null;
    
    return [...Array(2)].map((_, i) => {
      const side = i === 0 ? `${Math.random() * 30 + 10}%` : `${Math.random() * 30 + 60}%`;
      return (
        <motion.div
          key={`bolt-${i}`}
          className="absolute text-amber-100 z-50"
          style={{ 
            top: '5%', 
            left: side,
            fontSize: `${Math.random() * 50 + 100}px`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
            opacity: 0.7,
            filter: 'drop-shadow(0 0 10px rgba(254, 243, 199, 0.8))'
          }}
          initial={{ opacity: 0.7, y: 0 }}
          animate={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4 }}
        >
          <FaBolt />
        </motion.div>
      );
    });
  };

  // Rising code ghosts
  const renderCodeGhosts = () => {
    if (reducedMotion) return null;
    
    return [...Array(3)].map((_, i) => {
      const codeSnippets = [
        'for(;;){/*trapped*/}',
        'if(alive){return;}',
        'catch(e){/*silence*/}',
        'while(hope){hope--;}'
      ];
      
      const colors = ['text-purple-500', 'text-blue-500', 'text-green-500'];
      
      return (
        <motion.div
          key={`code-${i}`}
          className={`absolute ${colors[i % colors.length]} text-opacity-20 font-mono text-xs`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            bottom: '-20px',
          }}
          animate={{
            y: [0, -Math.random() * 300 - 100],
            opacity: [0.1, 0.3, 0],
            rotate: [0, (Math.random() - 0.5) * 10]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5 + i * 2,
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      );
    });
  };

  return (
    <AnimatePresence>
      {showEntrance && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0e14] overflow-hidden font-fira"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onMouseMove={handleMouseMove}
          onClick={initializeAudio}
        >
          {/* Lightning effect */}
          <div 
            className="absolute inset-0 bg-gray-100 z-30 pointer-events-none transition-all duration-100"
            style={{ opacity: showLightning ? lightningIntensity : 0 }}
          />
          
          {renderLightningBolts()}
          
          {/* Sound toggle button */}
          <motion.button
            className="absolute top-5 right-5 text-gray-400 z-50 p-2 rounded-full hover:bg-gray-800/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setMuted(!muted);
              if (muted) {
                playAmbient();
                audioInitialized.current = true;
              } else {
                stopAmbient();
              }
            }}
          >
            {muted ? <FaVolumeMute /> : <FaVolumeUp />}
          </motion.button>
          
          {/* Skip animation button */}
          {showSkipButton && (
            <motion.button
              className="absolute bottom-5 right-5 text-gray-400 z-50 px-3 py-1 rounded hover:bg-gray-800/50 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSkip}
            >
              Skip Intro
            </motion.button>
          )}
          
          {/* Spider webs */}
          {createSpiderWebs()}
          
          {/* Clouds and moon */}
          {renderCloudsMoon()}
          
          {/* Particles system */}
          <div ref={particlesRef} className="absolute inset-0 z-20 overflow-hidden">
            {createParticles()}
          </div>
          
          {/* Code snippet ghosts */}
          {renderCodeGhosts()}
          
          {/* Flying ravens */}
          <div className="absolute inset-0 z-15 overflow-hidden">
            {createRavens()}
          </div>

          {/* Fog layers */}
          {renderFogLayer(0.4, 60)}
          {renderFogLayer(0.2, 30, -500, 2)}
          {renderFogLayer(0.15, 45, -1000)}
          {renderFogLayer(0.25, 75, -750, 3)}
          
          {/* Gravestones */}
          {renderGravestones()}
          
          {/* Silhouette background */}
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
          
          {/* Main content */}
          <motion.div
            className="relative z-25 flex flex-col items-center"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, type: "spring" }}
          >
            {/* Animated skull */}
            <motion.div
              animate={{ 
                y: [0, -10, 0], 
                rotateZ: [-5, 5, -5],
                filter: showLightning ? "drop-shadow(0 0 20px rgba(200, 0, 0, 0.9))" : "drop-shadow(0 0 10px rgba(200, 0, 0, 0.5))"
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                rotateZ: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute -inset-10 rounded-full bg-red-900/5 group-hover:bg-red-900/10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3
                }}
              />
              
              <FaSkull className="text-red-800 text-8xl mb-8 relative z-10" />
              
              {/* Glowing eyes */}
              {['left', 'right'].map(side => (
                <motion.div
                  key={side}
                  className={`absolute rounded-full bg-red-500 top-[35%] ${side === 'left' ? 'left-[30%]' : 'right-[30%]'} w-[10%] h-[10%] z-20`}
                  animate={{ 
                    opacity: [0.3, 0.9, 0.3],
                    boxShadow: [
                      '0 0 5px rgba(239, 68, 68, 0.5)', 
                      '0 0 10px rgba(239, 68, 68, 0.8)',
                      '0 0 5px rgba(239, 68, 68, 0.5)'
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              ))}
              
              {/* Small floating skulls around main skull */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`mini-skull-${i}`}
                  className="absolute text-gray-700/30"
                  style={{
                    left: `${(i * 120) - 60}%`,
                    top: `${(Math.random() * 80) + 10}%`,
                    fontSize: `${Math.random() * 15 + 10}px`,
                    rotate: `${(Math.random() - 0.5) * 40}deg`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [`${(Math.random() - 0.5) * 40}deg`, `${(Math.random() - 0.5) * 40}deg`],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 2 + i,
                      ease: "easeInOut"
                    },
                    opacity: {
                      repeat: Infinity,
                      duration: 3 + i,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <RiSkullLine />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Title text with glow effect */}
            <motion.div 
              className="font-mono text-4xl text-gray-300 border-b-2 border-red-800 pb-3 tracking-widest px-6 relative"
              animate={{ 
                textShadow: showLightning 
                  ? "0 0 8px rgba(255,255,255,0.8)" 
                  : "0 0 2px rgba(255,255,255,0.3)" 
              }}
            >
              <motion.span 
                className="text-red-800 mr-2"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  textShadow: [
                    '0 0 2px rgba(185, 28, 28, 0.5)', 
                    '0 0 8px rgba(185, 28, 28, 0.8)',
                    '0 0 2px rgba(185, 28, 28, 0.5)'
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "easeInOut" 
                }}
              >
                &gt;
              </motion.span>
              
              {typedText}
              
              <span className="inline-block w-2 h-7 bg-gray-300 ml-1 animate-pulse"></span>
              
              {/* Rotating emblems */}
              {[1, -1].map((direction, i) => (
                <motion.span 
                  key={i}
                  className={`absolute ${direction === 1 ? '-left-10' : '-right-10'} -top-1 text-red-800 opacity-60`}
                  animate={{ 
                    rotate: 360 * direction,
                    textShadow: showLightning 
                      ? '0 0 8px rgba(185, 28, 28, 0.8)' 
                      : '0 0 3px rgba(185, 28, 28, 0.4)'
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                >
                  {i % 2 === 0 ? '✠' : '✝'}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Subtitle text */}
            <motion.p 
              className="text-gray-500 mt-6 text-lg italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              where abandoned code finds eternal rest
            </motion.p>
            
            {/* Random flickering letter effect */}
            <div className="absolute -bottom-20 w-full flex justify-center">
              {['R', 'I', 'P'].map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-gray-700/30 text-5xl mx-5 font-serif"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Gate animation */}
          <motion.div
            className="absolute z-40 w-full h-full pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: gateOpen ? 0 : 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Left gate */}
            <motion.div
              key="left-gate"
              className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0e14] border-r-2 border-gray-800"
              initial={{ x: 0 }}
              animate={{ x: gateOpen ? '-100%' : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="h-full flex items-center justify-end">
                <div className="w-10 h-3/4 border-r-2 border-gray-700 mr-5"></div>
                <div className="w-5 h-1/2 border-r-2 border-gray-700 mr-10"></div>
                <motion.div 
                  className="absolute top-1/2 right-5 w-16 h-16 border-2 border-gray-700 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <GiDeathSkull className="text-gray-600 text-2xl" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right gate */}
            <motion.div
              key="right-gate"
              className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0e14] border-l-2 border-gray-800"
              initial={{ x: 0 }}
              animate={{ x: gateOpen ? '100%' : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="h-full flex items-center justify-start">
                <div className="w-5 h-1/2 border-l-2 border-gray-700 ml-10"></div>
                <div className="w-10 h-3/4 border-l-2 border-gray-700 ml-5"></div>
                <motion.div 
                  className="absolute top-1/2 left-5 w-16 h-16 border-2 border-gray-700 rounded-full flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <GiDeathSkull className="text-gray-600 text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GraveyardEntrance;