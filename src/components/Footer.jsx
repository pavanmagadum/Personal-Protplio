import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-[#030712]">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <a href="#home" className="text-2xl font-extrabold gradient-text" style={{ fontSize: '1.5rem', fontWeight: 900 }}>PAVAN M M</a>
                    <p className="text-gray-500 mt-2" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>© {new Date().getFullYear()} PAVAN M M. All rights reserved.</p>
                </div>

                <div className="flex gap-6" style={{ display: 'flex', gap: '2rem' }}>
                    <a href="https://github.com/pavanmagadum" className="text-gray-400 hover:text-white transition-colors text-xl" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/pavanmagadum" className="text-gray-400 hover:text-white transition-colors text-xl" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:pavanmagadum8@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xl"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
