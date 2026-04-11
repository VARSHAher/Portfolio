import InteractiveCharacter from "../components/CanvasParticles";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    
    <section className="relative min-h-screen bg-[#45b69c] overflow-hidden flex flex-col items-center pt-12 md:pt-24">
      
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10l2 4m15 10l-2 4' stroke='%23000' stroke-width='1' fill='none'/%3E%3C/svg%3E")` 
           }} 
      />

      <div className="relative z-20 text-center px-6 text-white mt-8 md:mt-12 flex flex-col items-center">
        <div className="relative inline-block">
          <motion.span 
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-10 -right-8 md:-top-12 md:-right-12 text-4xl md:text-6xl"
          >✦</motion.span>
                    <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-serif font-bold tracking-tight"
          >
            Varsha Chowdhury
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl md:text-4xl font-serif italic opacity-95 max-w-2xl"
        >
          A full-stack developer passionate about crafting dynamic web experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 md:mt-10 z-30 flex flex-row gap-4 md:gap-6"
        >
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 md:px-10 md:py-4 bg-white text-[#45b69c] font-bold rounded-full shadow-2xl hover:scale-110 transition-transform text-sm md:text-base"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 md:px-10 md:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm md:text-base"
          >
            Say hello
          </button>
        </motion.div>
      </div>

      <InteractiveCharacter />
      
    </section>
  );
}