import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PanAfricanism from './components/PanAfricanism';
import Tracks from './components/Tracks';
import Team from './components/Team';
import MembershipForm from './components/MembershipForm';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-100 font-sans selection:bg-tcu-gold/30 selection:text-tcu-gold pattern-bg">
      <Navbar />
      <Hero />
      <PanAfricanism />
      <Tracks />
      <Team />
      <MembershipForm />
      
      <footer className="py-8 border-t border-white/5 text-center text-xs tracking-wider text-gray-500 font-serif font-semibold mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center uppercase">
          <p>&copy; {new Date().getFullYear()} TRUE CULTURE UNIVERSITY. PRESERVING HERITAGE, ENGINEERING THE FUTURE.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-tcu-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tcu-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-tcu-gold transition-colors">Alumni</a>
            <a href="#" className="hover:text-tcu-gold transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
