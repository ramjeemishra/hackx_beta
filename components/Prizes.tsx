
import React from 'react';
import { motion } from 'framer-motion';

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="bg-white py-32">
      <div className="max-w-5xl mx-auto text-center">
        <h4 className="text-red-600 font-black uppercase tracking-widest text-sm mb-2">The Podium Awaits</h4>
        <h2 className="text-6xl font-black italic tracking-tight mb-20 text-black">THE REWARDS</h2>

        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-0">
          {/* 2nd Place */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full md:w-auto"
          >
            <div className="bg-zinc-100 h-64 rounded-t-[40px] p-8 flex flex-col justify-center items-center relative overflow-hidden group border border-zinc-200 border-b-0">
               <span className="text-8xl font-black text-black/5 absolute -bottom-4 italic">2</span>
               <h3 className="text-2xl font-black text-red-600 italic">₹25,000</h3>
               <p className="text-xs uppercase font-bold tracking-widest text-zinc-500 mt-2">1st Runner Up</p>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full md:w-auto z-10"
          >
            <div className="bg-red-600 h-80 rounded-t-[40px] p-8 flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(239,68,68,0.2)] relative overflow-hidden border border-red-700 border-b-0">
               <div className="absolute top-0 inset-x-0 h-1 bg-white/20" />
               <span className="text-9xl font-black text-black/10 absolute -bottom-4 italic">1</span>
               <h3 className="text-4xl font-black text-white italic">₹35,000</h3>
               <p className="text-sm uppercase font-black tracking-widest text-white mt-2">The Champion</p>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 w-full md:w-auto"
          >
            <div className="bg-zinc-50 h-48 rounded-t-[40px] p-8 flex flex-col justify-center items-center relative overflow-hidden border border-zinc-100 border-b-0">
               <span className="text-8xl font-black text-black/5 absolute -bottom-4 italic">3</span>
               <h3 className="text-xl font-black text-red-600 italic">₹15,000</h3>
               <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">2nd Runner Up</p>
            </div>
          </motion.div>
        </div>
        <div className="h-6 bg-zinc-900 w-full mt-0 rounded-b-[40px] shadow-lg" />
        
        <p className="mt-12 text-zinc-400 text-xs uppercase tracking-widest font-bold">Total prizes worth ₹75,000+ including goodies and credits</p>
      </div>
    </section>
  );
};

export default Prizes;
