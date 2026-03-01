import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-1000 transition-all duration-300 ${scrolled ? 'nav-scrolled shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" className="flex items-center gap-3 gradient-text transform hover:scale-105 transition-transform" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 900 }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--primary-light)',
                        boxShadow: '0 0 10px rgba(99, 102, 241, 0.4)',
                        flexShrink: 0
                    }}>
                        <img src="/image.JPG" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span className="mobile-hidden">PAVAN M M</span>
                    <span className="md-hidden">P M M</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md-flex items-center" style={{ gap: '1rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-link" style={{ fontSize: '0.8rem' }}>{link.name}</a>
                        </li>
                    ))}
                    <li>
                        <a href="/Pavan resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
                            RESUME
                        </a>
                    </li>
                    <li><a href="#contact" className="btn-hire">HIRE ME</a></li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    style={{ display: 'block' }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-nav-link"
                    >
                        {link.name}
                    </a>
                ))}
                <div className="flex flex-col gap-4 mt-6 w-full px-6">
                    <a
                        href="/Pavan resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-resume"
                        style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                    >
                        DOWNLOAD RESUME
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="btn-hire"
                        style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                    >
                        HIRE ME
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
