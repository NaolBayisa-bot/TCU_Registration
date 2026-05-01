import { useState } from 'react';
import { motion } from 'framer-motion';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
    track: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Use your specific Deployment URL here
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwhyOMob2lrSxdu-Bpi7l0TqTJbaUlgoQJxC06nIcvYjY9RWgEQHPMqo5jL7clxJqv3nA/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await (SCRIPT_URL, {
        method: 'POST',
        body: formBody,
      });

      const result = await response.json();

      if (result.status === 'success') {
        setIsSuccess(true);
        setFormData({ name: '', email: '', department: '', year: '', track: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="enroll" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-tcu-gold/5 blur-3xl rounded-full mix-blend-screen pointer-events-none"></div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Become a Member of TCU</h2>
            <p className="text-gray-400 text-sm">Join the culture, find your track, and shape the future.</p>
          </div>

          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-tcu-emerald/10 border border-tcu-emerald/30 rounded-lg p-6 text-center"
            >
              <h3 className="text-tcu-emerald font-bold mb-2">Application Submitted!</h3>
              <p className="text-emerald-100/70 text-sm">Welcome to the culture. Your data has been recorded.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-sm border border-red-400/20">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-tcu-gold uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-tcu-gold focus:ring-1 focus:ring-tcu-gold transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-tcu-gold uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-tcu-gold focus:ring-1 focus:ring-tcu-gold transition-all"
                    placeholder="university@email.edu"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="department" className="text-xs font-bold text-tcu-gold uppercase tracking-wider">Department / Batch</label>
                  <div className="flex gap-4">
                    <input 
                      type="text" 
                      id="department" 
                      name="department" 
                      required 
                      value={formData.department}
                      onChange={handleChange}
                      className="flex-1 bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-tcu-gold focus:ring-1 focus:ring-tcu-gold transition-all"
                      placeholder="e.g., Computer Science"
                    />
                    <input 
                      type="number" 
                      id="year" 
                      name="year" 
                      min="1" max="7" 
                      required 
                      value={formData.year}
                      onChange={handleChange}
                      className="w-24 bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-tcu-gold focus:ring-1 focus:ring-tcu-gold transition-all"
                      placeholder="Batch"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="track" className="text-xs font-bold text-tcu-gold uppercase tracking-wider">Track Interest</label>
                  <select 
                    id="track" 
                    name="track" 
                    required 
                    value={formData.track}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-tcu-gold focus:ring-1 focus:ring-tcu-gold transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a Track</option>
                    <option value="tech">Tech</option>
                    <option value="business">Business</option>
                    <option value="chess">Chess</option>
                    <option value="event">Event</option>
                    <option value="news">News</option>
                  </select>
                </div>

              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto mx-auto block bg-tcu-gold text-background px-10 py-3 rounded-sm font-bold hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                >
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default MembershipForm;