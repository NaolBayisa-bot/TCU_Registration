import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToMembership = () => {
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="heritage" className="min-h-[90vh] flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tcu-gold/20 via-background to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold font-serif mb-6 leading-tight text-white"
          >
            Welcome to <br className="hidden lg:block"/>
            <span className="text-tcu-gold">True Culture University</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10"
          >
            Cultivating excellence, embracing heritage, and shaping the future of leaders at Haramaya University.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
            onClick={scrollToMembership}
            className="group bg-tcu-gold text-background px-8 py-4 rounded-sm text-lg font-bold flex items-center gap-2 mx-auto lg:mx-0 hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,215,0,0.2)] hover:shadow-[0_4px_30px_rgba(255,215,0,0.5)]">
              Join the Culture
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="flex-1 hidden md:block w-full max-w-xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-tcu-emerald/10 blur-3xl rounded-full mix-blend-screen -z-10"></div>
             <img src="/hero-art.png" alt="Culture" className="w-full aspect-square object-cover rounded-xl border border-white/5 shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
