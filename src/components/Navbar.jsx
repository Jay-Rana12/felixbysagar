import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/ChatGPT_Image_Jun_30__2026__02_10_20_PM-removebg-preview.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Visa Services', path: '/services' },
        { title: 'Countries', path: '/countries' },
        { title: 'Process', path: '/process' },
        { title: 'Why Us', path: '/why-us' },
        { title: 'SOP Guide', path: '/sop-guide' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo - Synchronized Mission Branding */}
                <NavLink to="/" className="flex items-center group transition-all duration-300">
                    <img src={logo} alt="Felix Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300" />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.title}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm uppercase tracking-wider transition-colors hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 rounded text-sm uppercase tracking-wide font-medium"
                    >
                        Get Consultation
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-accent transition-colors">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-primary border-t border-gray-800 shadow-xl py-4 flex flex-col items-center space-y-6 animate-fadeIn">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.title}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-gray-300 hover:text-accent transition-colors uppercase tracking-widest"
                        >
                            {link.title}
                        </NavLink>
                    ))}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="px-8 py-3 bg-accent text-primary font-bold uppercase tracking-wide rounded hover:bg-white transition-colors"
                    >
                        Get Consultation
                    </button>
                </div>
            )}

            {/* Consultation Modal */}
            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </nav>
    );
};

export default Navbar;
