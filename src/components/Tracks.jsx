import { motion } from 'framer-motion';
import { Code, TrendingUp, Presentation, Globe, Newspaper } from 'lucide-react';

const tracks = [
  {
    id: 'tech',
    title: 'Tech',
    desc: 'Innovating the future through code, systems, and digital mastery.',
    icon: Code,
    color: 'bg-tcu-emerald',
    border: 'group-hover:border-tcu-emerald',
    shadow: 'group-hover:shadow-[0_0_20px_rgba(0,122,94,0.3)]'
  },
  {
    id: 'business',
    title: 'Business',
    desc: 'Cultivating entrepreneurial minds and strategic economic leadership.',
    icon: TrendingUp,
    color: 'bg-tcu-gold',
    border: 'group-hover:border-tcu-gold',
    shadow: 'group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]'
  },
  {
    id: 'chess',
    title: 'Chess',
    desc: 'Developing strategic foresight, patience, and tactical brilliance.',
    icon: Presentation, // Using Presentation as chess piece approximation
    color: 'bg-tcu-crimson',
    border: 'group-hover:border-tcu-crimson',
    shadow: 'group-hover:shadow-[0_0_20px_rgba(227,24,55,0.3)]'
  },
  {
    id: 'event',
    title: 'Event',
    desc: 'Orchestrating cultural moments and high-impact university gatherings.',
    icon: Globe,
    color: 'bg-purple-500',
    border: 'group-hover:border-purple-500',
    shadow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
  },
  {
    id: 'news',
    title: 'News',
    desc: 'Chronicling the culture, broadcasting truths, and managing the institutional narrative.',
    icon: Newspaper,
    color: 'bg-white',
    border: 'group-hover:border-white',
    shadow: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
  }
];

const Tracks = () => {
  return (
    <section id="tracks" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            TCU Tracks
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Explore our specialized pathways designed for comprehensive leadership development.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex-1 min-w-[300px] max-w-[400px] bg-white/[0.02] border border-white/5 rounded-xl p-8 transition-all duration-300 ${track.border} ${track.shadow} cursor-pointer relative overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 w-1 h-full ${track.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className={`w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <track.icon className={`w-6 h-6 ${track.color.replace('bg-', 'text-')}`} />
              </div>
              
              <h3 className="text-xl font-bold font-serif text-white mb-3">{track.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{track.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tracks;
