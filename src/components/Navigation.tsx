import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm shadow-sm'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div
                        className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <i className="fa-solid fa-book-open text-primary text-2xl"></i>
                        <span className="font-serif font-bold text-xl text-primary tracking-wider">
                            JACK <span className="text-sm font-sans font-normal text-gray-500">書局業務</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#about" className="text-gray-600 hover:text-primary transition font-medium">
                            關於我
                        </a>
                        <a href="#services" className="text-gray-600 hover:text-primary transition font-medium">
                            服務項目
                        </a>
                        <a href="#recommendations" className="text-gray-600 hover:text-primary transition font-medium">
                            本月推薦
                        </a>
                        <a
                            href="#contact"
                            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition shadow-md flex items-center gap-2"
                        >
                            <i className="fa-brands fa-line"></i> 聯絡 Jack
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a
                                href="#about"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                            >
                                關於我
                            </a>
                            <a
                                href="#services"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                            >
                                服務項目
                            </a>
                            <a
                                href="#recommendations"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                            >
                                本月推薦
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-accent hover:bg-gray-50"
                            >
                                聯絡我
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
