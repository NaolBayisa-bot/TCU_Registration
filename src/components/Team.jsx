import { motion } from 'framer-motion';
import { teamMembers } from '../data/teamData';

const Team = () => {
  // Enforcing the exact hierarchy: 3 in top row, 5 in middle, 4 in bottom
  const hierarchicalTeam = [
    teamMembers.slice(0, 3),   // 3 members
    teamMembers.slice(3, 8),   // 5 members
    teamMembers.slice(8, 12)   // 4 members
  ];

  return (
    <section id="leadership" className="py-24 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
        
        {/* The Hierarchical Grid Area */}
        <div className="flex flex-col items-center gap-y-10 md:gap-y-16 pb-16">
          {hierarchicalTeam.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center flex-wrap gap-x-4 lg:gap-x-6 gap-y-10 w-full">
              {row.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + (rowIndex * 0.2) }}
                  // Sizing slightly adjusted to guarantee 5 fit precisely on desktop
                  className="relative group w-[150px] md:w-[170px] lg:w-[190px] xl:w-[210px] flex flex-col items-center mt-4"
                >
                  {/* Diagonal Cut Polygon Background */}
                  <div 
                    className="absolute inset-x-0 bottom-6 top-8 bg-white/10 transition-colors group-hover:bg-tcu-gold/30"
                    style={{ clipPath: 'polygon(0 0, 75% 0, 100% 15%, 100% 100%, 0 100%)' }}
                  >
                    <div 
                      className="absolute inset-[1px] bg-black/80 backdrop-blur-xl" 
                      style={{ clipPath: 'polygon(0 0, 75% 0, 100% 15%, 100% 100%, 0 100%)' }}
                    />
                  </div>

                  {/* Character Image cutouts */}
                  <div className="relative z-10 w-full h-[160px] md:h-[200px] lg:h-[230px] flex items-end justify-center px-1 pointer-events-none">
                    <img 
                      src={member.image || `https://api.dicebear.com/9.x/avataaars/svg?seed=${member.name.replace(' ', '')}&backgroundColor=transparent`} 
                      alt={member.name}
                      className="w-full h-auto max-h-[115%] object-contain object-bottom drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Name Plate at the bottom (Dark Mode) */}
                  <div className="relative z-20 bg-[#0f0f0f]/90 backdrop-blur-md border border-white/10 rounded-b-xl px-2 py-2.5 text-center w-[105%] shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-colors group-hover:border-tcu-gold/30">
                    <h3 className="text-[12px] md:text-[14px] font-black text-white leading-tight truncate capitalize">{member.name}</h3>
                    <p className="text-[9px] md:text-[11px] text-gray-400 group-hover:text-tcu-gold transition-colors font-semibold uppercase mt-0.5 tracking-wide">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Big Title matching the bottom of the image */}
        <div className="text-center mt-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-sans font-black text-white/40 tracking-tighter mb-2 uppercase"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-medium tracking-wide"
          >
            Behind TCU Haramaya University Chapter.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default Team;
