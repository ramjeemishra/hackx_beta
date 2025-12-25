import React from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden f1-grid bg-white"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: "100vw", opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="relative w-full max-w-[1400px] flex justify-center items-center"
        >
          <motion.img
            src="/images/f1.png"
            alt="F1 Racing Car"
            animate={{
              y: [0, -8, 0],
              rotate: [0, -0.1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[1100px] max-w-none h-auto object-contain select-none opacity-95 drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
            style={{
              filter: "contrast(1.1) saturate(1.1)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          />

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.12 }}
            transition={{ delay: 0.9, duration: 1.2 }}
            className="absolute bottom-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent blur-md"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-red-600 font-black tracking-[0.45em] uppercase mb-4 text-xs md:text-sm">
          24-Hour Innovation Sprint
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-[160px] font-black italic tracking-tighter text-black leading-none mb-4 uppercase mix-blend-multiply">
          HACKX <span className="text-red-600">4.0</span>
        </h1>

        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold uppercase tracking-widest text-zinc-400 mb-12">
          Race to Innovation
        </h2>

        <div className="flex flex-col items-center mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 mb-4">
            Race Begins In
          </p>
          <Countdown />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239,68,68,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-sm shadow-[0_10px_30px_rgba(239,68,68,0.2)]"
          >
            Register Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-12 py-5 border border-zinc-200 text-black font-black uppercase tracking-widest rounded-sm backdrop-blur-md"
          >
            View Tracks
          </motion.button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-6 md:left-10 flex flex-col text-left">
        <p className="text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
          February 28 – March 1, 2026
        </p>
        <p className="text-xs font-black text-black italic">
          NMIMS University, Navi Mumbai
        </p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-300 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-zinc-200 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-red-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
