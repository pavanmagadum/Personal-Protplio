import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certificates = [
        {
            title: 'Data Science Certification',
            issuer: 'Microsoft / Coursera',
            file: '/certificates/DATA SCIENCE.pdf',
            icon: 'fa-database',
            color: '#6366f1'
        },
        {
            title: 'Git Foundations',
            issuer: 'GitHub / Microsoft',
            file: '/certificates/GIT FOUDATIONS.pdf',
            icon: 'fa-code-branch',
            color: '#10b981'
        },
        {
            title: 'Advanced Git Training',
            issuer: 'Industry Standard',
            file: '/certificates/Git Training.pdf',
            icon: 'fa-git-alt',
            color: '#f59e0b'
        },
        {
            title: 'GitHub Copilot Fundamentals',
            issuer: 'Microsoft / GitHub',
            file: '/certificates/GitHub Copilot Fundamentals.pdf',
            icon: 'fa-robot',
            color: '#ec4899'
        },
        {
            title: 'Introduction to GitHub Copilot',
            issuer: 'Microsoft',
            file: '/certificates/Introduction to GitHub Copilot.pdf',
            icon: 'fa-microchip',
            color: '#8b5cf6'
        },
        {
            title: 'Prompt Engineering with Copilot',
            issuer: 'Microsoft / GitHub',
            file: '/certificates/Introduction to Prompt Engineering with GitHub Copilot.pdf',
            icon: 'fa-terminal',
            color: '#ef4444'
        },
        {
            title: 'Python Object Oriented Programming',
            issuer: 'Professional Training',
            file: '/certificates/Python Oops.pdf',
            icon: 'fa-code',
            color: '#3b82f6'
        },
        {
            title: 'Angular Framework Masterclass',
            issuer: 'Frontend Specialization',
            file: '/certificates/angular.pdf',
            icon: 'fa-layer-group',
            color: '#f43f5e'
        }
    ];

    return (
        <section id="certifications" className="section-padding py-24 px-6 overflow-hidden relative bg-[#111827]/10">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10">
                <header className="section-header">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.03 }}
                        className="absolute -top-14 left-1/2 -translate-x-1/2 text-[clamp(4rem,15vw,9rem)] font-black select-none pointer-events-none tracking-widest"
                        style={{ color: 'white' }}
                    >
                        BADGES
                    </motion.div>
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-desc">
                        Validating my technical expertise through industry-recognized certifications.
                    </p>
                </header>

                <div className="responsive-grid grid-tight">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                padding: 'clamp(1.25rem, 5vw, 2rem)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(17, 24, 39, 0.4)',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                borderRadius: '20px'
                            }}
                            whileHover={{ translateY: -10, borderColor: 'var(--primary)', boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)' }}
                        >
                            <div style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '12px',
                                background: `${cert.color}15`,
                                border: `1px solid ${cert.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.25rem',
                                color: cert.color,
                                marginBottom: '1.25rem'
                            }}>
                                <i className={`fas ${cert.icon}`}></i>
                            </div>

                            <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.25rem)', fontWeight: 800, marginBottom: '0.4rem', color: 'white', lineHeight: 1.2 }}>{cert.title}</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: 700, marginBottom: '1.25rem' }}>{cert.issuer}</p>

                            <div style={{ marginTop: 'auto' }}>
                                <a
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-bold text-xs transition-all hover:gap-3"
                                    style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}
                                    onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                                >
                                    View Certificate <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
                                </a>
                            </div>

                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                fontSize: '0.65rem',
                                fontWeight: 800,
                                color: cert.color,
                                opacity: 0.5,
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                VERIFIED
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
