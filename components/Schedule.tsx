
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Flag, ChevronRight, Zap, Coffee, Clock, ShieldCheck } from 'lucide-react';

const scheduleData = [
  { 
    time: '8:30 AM', 
    event: 'Reporting', 
    x: '10%', 
    y: '50%', 
    details: 'Initial scrutineering and paddock entry.',
    strategy: 'Full tank, hard tires.',
    icon: <MapPin size={16} />
  },
  { 
    time: '9:00 AM', 
    event: 'Registrations', 
    x: '20%', 
    y: '30%', 
    details: 'Driver registration and livery collection.',
    strategy: 'Aero setup optimization.',
    icon: <ShieldCheck size={16} />
  },
  { 
    time: '10:30 AM', 
    event: 'Opening Ceremony', 
    x: '35%', 
    y: '20%', 
    details: 'The formation lap before the green flag.',
    strategy: 'System diagnostics complete.',
    icon: <Zap size={16} />
  },
  { 
    time: '12:00 PM', 
    event: 'Hackathon Starts', 
    x: '50%', 
    y: '40%', 
    details: 'Green flag! The 24-hour race begins.',
    strategy: 'DRS enabled. Maximum push.',
    icon: <Flag size={16} />
  },
  { 
    time: '7:00 PM', 
    event: 'Mentorship I', 
    x: '65%', 
    y: '25%', 
    details: 'Mid-race pit stop for strategy tuning.',
    strategy: 'Data telemetry analysis.',
    icon: <Coffee size={16} />
  },
  { 
    time: '9:00 AM', 
    event: 'Mentorship II', 
    x: '80%', 
    y: '60%', 
    details: 'Final sector adjustment and performance check.',
    strategy: 'Push for the fastest lap.',
    icon: <Zap size={16} />
  },
  { 
    time: '4:00 PM', 
    event: 'Closing Ceremony', 
    x: '92%', 
    y: '50%', 
    details: 'The checkered flag. Podium celebration.',
    strategy: 'Victory lap.',
    icon: <Flag size={16} />
  },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="bg-white py-20 md:py-32 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h4 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-red-600 font-black uppercase tracking-widest text-sm mb-2"
          >
            Race Timeline
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black italic tracking-tight text-black uppercase"
          >
            THE RACE CIRCUIT
          </motion.h2>
          <p className="text-zinc-400 mt-4 uppercase tracking-[0.2em] text-xs">A technical breakdown of the 24-hour sprint</p>
        </div>

        {/* Desktop Circuit Map (Visible on large screens) */}
        <div className="hidden lg:block relative w-full h-[650px] bg-zinc-50 rounded-[60px] border border-zinc-100 overflow-hidden shadow-inner p-10">
          
          {/* Decorative Telemetry Lines */}
          <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
             <div className="flex space-x-1 mb-2">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-1 h-4 bg-black" style={{ opacity: i * 0.1 }} />
                ))}
             </div>
             <p className="text-[10px] font-black italic">CIRCUIT_TELEMETRY_v4.0</p>
          </div>

          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {/* Wider Background Path */}
            <path 
              d="M 50 300 Q 150 100 300 200 T 600 150 T 900 400 T 1180 300" 
              fill="transparent" 
              stroke="#f1f5f9" 
              strokeWidth="70" 
              strokeLinecap="round"
            />
            {/* The Main Track */}
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              d="M 50 300 Q 150 100 300 200 T 600 150 T 900 400 T 1180 300" 
              fill="transparent" 
              stroke="#ef4444" 
              strokeWidth="6" 
              strokeLinecap="round"
              className="track-path opacity-90 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
            />
            
            {/* Speed Traps / DRS Zones Visual Decor */}
            <circle cx="225" cy="150" r="4" fill="#000" />
            <circle cx="750" cy="275" r="4" fill="#000" />
          </svg>

          {scheduleData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.25, type: "spring", damping: 12 }}
              style={{ left: item.x, top: item.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
            >
              <div className="relative flex flex-col items-center">
                {/* Permanent Floating Label */}
                <div className="absolute bottom-full mb-3 whitespace-nowrap bg-black text-white px-3 py-1 rounded-sm text-[10px] font-black italic tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.time} - {item.event}
                </div>

                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="bg-white border-2 border-black p-3 rounded-2xl shadow-xl cursor-pointer group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300"
                >
                  <div className="text-black group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </motion.div>
                
                {/* Expanded Detailed Hover Briefing */}
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 pointer-events-none group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-4 transition-all duration-300 z-30">
                  <div className="bg-white p-5 rounded-[32px] shadow-2xl border border-zinc-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       {item.icon}
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                       <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                       <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">TECHNICAL BRIEFING</p>
                    </div>
                    <p className="text-xs font-black text-black uppercase tracking-tight leading-tight mb-2">Sector {i+1}: {item.details}</p>
                    <div className="pt-3 border-t border-zinc-100 mt-2">
                       <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">PIT STRATEGY:</p>
                       <p className="text-[11px] font-black italic text-black">{item.strategy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Start/Finish Decoration */}
          <div className="absolute left-10 top-[340px] opacity-40">
            <p className="text-[9px] font-black tracking-[0.4em] uppercase -rotate-90 origin-left">STARTING_GRID</p>
          </div>
        </div>

        {/* Mobile/Tablet Vertical List View (Stayed clean but added detail) */}
        <div className="lg:hidden space-y-6">
          {scheduleData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center space-x-6 p-6 glass-card rounded-[32px] border-l-8 border-red-600"
            >
              <div className="bg-zinc-100 p-4 rounded-2xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-red-600 font-black italic text-xs mb-1">{item.time}</p>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">{item.event}</h3>
                <p className="text-xs text-zinc-400 mt-1">{item.details}</p>
              </div>
              <ChevronRight className="text-zinc-200" />
            </motion.div>
          ))}
        </div>

        {/* Sector Cards - Modernized and Animated */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: 'PRE-RACE', desc: 'Strategy & Scrutineering', color: 'border-black' },
             { label: 'QUALIFYING', desc: 'Build & Prototype', color: 'border-red-600' },
             { label: 'PIT STOP', desc: 'Mentorship & Review', color: 'border-black' },
             { label: 'PODIUM', desc: 'Judging & Victory', color: 'border-red-600' }
           ].map((sector, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -8, scale: 1.03 }}
               className={`p-10 glass-card rounded-[40px] text-center border-t-8 ${sector.color} shadow-2xl transition-all duration-300 group cursor-default`}
             >
               <h3 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-2 group-hover:text-red-600 transition-colors">SECTOR {i+1}</h3>
               <p className="text-2xl font-black text-black uppercase italic tracking-tighter mb-1">{sector.label}</p>
               <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{sector.desc}</p>
               
               <div className="mt-6 flex justify-center space-x-1 opacity-10 group-hover:opacity-100 transition-opacity">
                 {[...Array(5)].map((_, dot) => (
                   <div key={dot} className="w-1.5 h-1.5 rounded-full bg-red-600" />
                 ))}
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
