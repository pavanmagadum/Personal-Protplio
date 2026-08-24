import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero-section relative overflow-hidden px-6">
            {/* Background Blobs */}
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>

            <div className="container z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-badge" style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'white' }}>
                        Software Engineer & AI Enthusiast
                    </span>
                    <h1 className="hero-title" style={{ marginBottom: '1.5rem' }}>
                        Building <span className="text-gradient-animated">Intelligent</span><br />
                        <span style={{ color: 'white' }}>Scalable Systems</span>
                    </h1>
                    <p className="hero-desc">
                        Hi, I'm <span style={{ color: 'white', fontWeight: 'bold' }}>PAVAN M M</span>. I build elegant, high-performance web applications and AI solutions with a focus on modern design and user experience.
                    </p>
                    <div className="hero-btns" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1.5rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '2.5rem'
                    }}>
                        <a href="#projects" className="btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '8px' }}>
                            View Projects
                        </a>
                        <a href="/Pavan resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.8rem 2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            Resume
                        </a>
                        <div style={{ display: 'flex', gap: '1rem', marginLeft: '0.5rem' }}>
                            <a href="https://github.com/pavanmagadum" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'} aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/pavan-magadum-8477682b6/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'} aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mobile-hidden"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
                <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Explore More</span>
                <div style={{ width: '2px', height: '40px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                        animate={{ y: [0, 40] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '30%', background: 'var(--primary)' }}
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
