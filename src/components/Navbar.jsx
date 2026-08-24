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
        <div className="nav-wrapper">
            <nav className={`nav-glass ${scrolled ? 'scrolled' : ''}`}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', width: '100%' }}>
                    {/* Left: Logo & Name */}
                    <a href="#home" className="flex items-center gap-3 transform hover:scale-105 transition-transform" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 900, color: 'white', justifySelf: 'start' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)',
                            flexShrink: 0
                        }}>
                            <img src="/image.JPG" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span className="mobile-hidden">PAVAN M M</span>
                        <span className="md-hidden">Pavan</span>
                    </a>

                    {/* Center: Pill Navigation (Desktop Only) */}
                    <div className="nav-pill-container" style={{ justifySelf: 'center' }}>
                        {navLinks.map((link, index) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={`pill-link ${index === 0 ? 'active' : ''}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Side (Utilities & Mobile Toggle) */}
                    <div style={{ display: 'flex', gridColumn: '3', justifySelf: 'end', alignItems: 'center', gap: '1rem' }}>
                        {/* Utilities (Desktop Only) */}
                        <div className="hidden md-flex items-center">
                            <a href="/Pavan resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', borderRadius: '100px', background: 'rgba(255,255,255,0.05)' }}>
                                <i className="fas fa-file-alt"></i> Resume
                            </a>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay Backdrop */}
            <div 
                className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} 
                onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Mobile Menu (Side Drawer) */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="flex flex-col w-full gap-2">
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
                </div>
                
                <div className="flex flex-col gap-4 mt-8 w-full">
                    <a
                        href="/Pavan resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-resume"
                        style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}
                    >
                        RESUME
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="btn-hire"
                        style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}
                    >
                        HIRE ME
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
