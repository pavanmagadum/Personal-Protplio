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
                    <span className="hero-badge" style={{ marginBottom: '2rem' }}>
                        Aspiring Software Engineer
                    </span>
                    <h1 className="hero-title" style={{ marginBottom: '2.5rem' }}>
                        Transforming Ideas INTO <br />
                        <span className="gradient-text">
                            Intelligent Systems
                        </span>
                    </h1>
                    <p className="hero-desc">
                        Hey, I'm <span className="text-white">PAVAN M M</span>. Currently pursuing MCA and specializing in building
                        scalable, AI-powered applications with real-world impact. Passionate about Python, Java, and Machine Learning.
                    </p>
                    <div className="flex flex-col md-flex-row items-center justify-center gap-4 py-4" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <a
                            href="#projects"
                            className="btn-primary"
                        >
                            Recent Projects
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a
                            href="#contact"
                            className="btn-outline"
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
