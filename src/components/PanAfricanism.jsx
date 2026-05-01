import { motion } from 'framer-motion';

const PanAfricanism = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <img src="/pan-african-art.png" alt="Pan-African Excellence" className="w-full h-auto rounded-lg border border-white/5 shadow-2xl shadow-tcu-crimson/5" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h4 className="text-tcu-crimson font-serif font-bold tracking-widest text-sm uppercase mb-3">Philosophy</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Pan-Africanism: Unity & Self-Determination</h2>
            <div className="space-y-6 text-gray-300 font-sans text-lg">
              <p>
                The core philosophy of True Culture University is rooted in the unbreakable spirit of Pan-Africanism. It is more than a movement; it is a commitment to the collective progress, dignity, and self-determination of African peoples worldwide.
              </p>
              <p>
                We believe that the liberation of the African mind is the first step toward continental prosperity. By fostering a sense of shared destiny and unity across borders, we equip our students to dismantle archaic narratives and build a sovereign future founded on indigenous innovation and economic independence.
              </p>
              <blockquote className="border-l-2 border-tcu-gold pl-6 py-2 mt-8 italic text-white/90">
                "True leadership is not found in imitation, but in the profound understanding of one's own legacy as the foundation for future innovation."
              </blockquote>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Uniting Minds, Celebrating Heritage</h2>
            <div className="space-y-6 text-gray-300 font-sans text-lg">
              <p>
                True Culture University stands at the intersection of ancient wisdom and future-facing innovation. We believe that true leadership is rooted in a profound understanding of one's cultural foundation.
              </p>
              <p>
                Our mission at Haramaya University is to curate an environment where academic excellence and Pan-African heritage are not mutually exclusive, but mutually reinforcing. We engineer the future by preserving the past.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <img src="/pan-african-art.png" alt="Cultural Heritage" className="w-full h-auto rounded-lg border border-white/5 opacity-80" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PanAfricanism;
