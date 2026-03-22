import { useState } from 'react';
import { List, X } from 'phosphor-react';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    setIsMenuOpen(false);
    };

    

     return (
        <nav className="bg-white shadow-md py-3 px-6 fixed w-full top-0 z-50 font-sans">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-[#7ea286]">
                Laura's Portfolio
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8">
                <li><button onClick={() => scrollToSection('about-me')} className="text-gray-700 hover:text-[#7ea286] transition-colors">Over Mij</button></li>
                <li><button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-[#7ea286] transition-colors">Skills</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#7ea286] transition-colors">Projecten</button></li>
                <li><button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-[#7ea286] transition-colors">Opleiding</button></li>
            </ul>

            {/* Hamburger Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <List size={28} />}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden mt-4">
            <ul className="flex flex-col items-center gap-4">
                <li><button onClick={() => scrollToSection('about-me')} className="text-gray-700 hover:text-[#7ea286] transition-colors">Over Mij</button></li>
                <li><button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-[#7ea286] transition-colors">Skills</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#7ea286] transition-colors">Projecten</button></li>
                <li><button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-[#7ea286] transition-colors">Opleiding</button></li>
            </ul>
            </div>
        )}
        </nav>
    );
}
export default Navigation;