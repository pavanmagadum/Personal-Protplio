import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding py-20 px-6">
            <div className="container">
                <div className="responsive-grid grid-wide items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card flex items-center justify-center p-0 overflow-hidden"
                        style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto', aspectRatio: '1/1', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '24px' }}
                    >
                        {/* Gradient Glow Background */}
                        <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-1)', opacity: 0.1 }}></div>

                        <img
                            src="/image.JPG"
                            alt="PAVAN M M Professional"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) contrast(1.1)',
                                transition: 'transform 0.5s ease'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                        />

                        {/* Aesthetic Border Glow */}
                        <div style={{ position: 'absolute', inset: '10px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', pointerEvents: 'none' }}></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, marginBottom: '0.5rem' }}>Passion for <span className="gradient-text">Problem Solving</span></h2>
                        <div className="flex flex-col gap-4">
                            <p className="text-gray-400" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.8 }}>
                                I am a motivated **MCA student** with a strong foundation in **Python, Java, Data Structures, and Software Development**.
                                My expertise spans Machine Learning, OCR systems, and backend API development through hands-on industry internships.
                            </p>
                            <p className="text-gray-400" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.8 }}>
                                Passionate about building **data-driven and AI-powered scalable systems** with real-world impact. Currently exploring
                                cutting-edge technologies to solve complex problems and create meaningful digital experiences.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href="#projects" className="btn-primary" style={{ padding: '0.8rem 2rem' }}>Recent Projects</a>
                            <a href="#contact" className="btn-outline" style={{ padding: '0.8rem 2rem' }}>Hire Me</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
