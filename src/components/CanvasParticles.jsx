import { useEffect, useState } from "react"; // Fixed: Single import
import { motion } from "framer-motion";

export default function InteractiveCharacter() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end items-center pointer-events-none z-10">
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex justify-center items-end"
      >
        <svg
          viewBox="0 0 400 300"
          className="w-[120vw] md:w-[70vw] h-auto max-w-[800px] mb-[-2px] md:mb-[-20px] transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mouse.x * 15}px, ${mouse.y * 10}px)`,
          }}
        >          <path d="M60,300 L60,180 Q60,50 200,50 Q340,50 340,180 L340,300 Z" fill="#a67c52" />
          <circle cx="280" cy="120" r="15" fill="#fcdcb2" opacity="0.4" />
                    <path d="M100,150 L300,150 L300,300 L100,300 Z" fill="#fcdcb2" />

          <g style={{ transform: `translate(${mouse.x * 12}px, ${mouse.y * 8}px)` }}>
            <rect x="135" y="225" width="55" height="35" rx="5" fill="white" />
            <rect x="210" y="225" width="55" height="35" rx="5" fill="white" />
            <circle cx={162 + mouse.x * 12} cy={245 + mouse.y * 8} r="12" fill="#111" />
            <circle cx={237 + mouse.x * 12} cy={245 + mouse.y * 8} r="12" fill="#111" />
            
            <motion.rect 
              x="135" y="220" width="60" height="40" fill="#fcdcb2" 
              animate={{ height: [15, 40, 15] }} 
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.05, 0.1], delay: 2 }}
            />
            <motion.rect 
              x="210" y="220" width="60" height="40" fill="#fcdcb2" 
              animate={{ height: [15, 40, 15] }} 
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.05, 0.1], delay: 2 }}
            />
          </g>

          <path d="M190,280 Q200,290 210,280" stroke="#cc9988" strokeWidth="2" fill="none" />
        </svg>

     
      </motion.div>
    </div>
  );
}