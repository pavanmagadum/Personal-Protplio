import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: 'AI & ML Intern',
            company: 'Spherenex',
            duration: 'Feb 2026 – Present',
            icon: 'fa-brain',
            description: 'Developing end-to-end AI workflows for vehicle detection and license plate recognition.',
            bullets: [
                'Trained and fine-tuned YOLOv8 object detection model for real-time license plate detection.',
                'Developed an OCR pipeline to extract alphanumeric license plate text using image preprocessing.',
                'Integrated Firebase for storing detected vehicle data, extracted text, and timestamps.',
                'Manual image annotation and dataset preprocessing for vehicle detection tasks.'
            ],
            tags: ['YOLOv8', 'Python', 'OCR', 'Firebase', 'OpenCV']
        },
        {
            role: 'Python Developer Intern',
            company: 'Algorithms365',
            duration: 'Sep 2025 – Present',
            icon: 'fa-code',
            description: 'Focusing on placement-ready software development and clean, modular coding standards.',
            bullets: [
                'Designed and implemented reusable modules following OOPS principles.',
                'Built console-based applications while practicing modular coding standards.',
                'Solved real-world coding problems to strengthen logical reasoning skills.',
                'Followed a rigorous SDE-oriented training schedule for technical readiness.'
            ],
            tags: ['Python', 'OOPS', 'Data Structures', 'SDE Training']
        }
    ];

    return (
        <section id="experience" className="section-padding overflow-hidden">
            <div className="container">
                <header className="section-header">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.05 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 text-[clamp(4rem,15vw,9rem)] font-black select-none pointer-events-none tracking-widest"
                        style={{ color: 'white' }}
                    >
                        JOURNEY
                    </motion.div>
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-desc">
                        Hands-on experience in Machine Learning, OCR systems, and backend development.
                    </p>
                </header>

                <div className="responsive-grid grid-wide">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role + index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card h-full"
                            style={{
                                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                position: 'relative',
                                background: 'rgba(17, 24, 39, 0.4)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)'
                            }}
                        >
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-tr-[24px] rounded-bl-full pointer-events-none"></div>

                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '45px',
                                        height: '45px',
                                        flexShrink: 0,
                                        borderRadius: '12px',
                                        background: 'var(--gradient-1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        boxShadow: '0 8px 16px -4px rgba(99, 102, 241, 0.5)'
                                    }}>
                                        <i className={`fas ${exp.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: 800, lineHeight: 1.2 }}>{exp.role}</h3>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-light)', fontWeight: 700, marginTop: '0.2rem' }}>{exp.company}</h4>
                                    </div>
                                </div>
                                <div style={{
                                    padding: '0.3rem 0.8rem',
                                    background: 'rgba(99,102,241,0.1)',
                                    border: '1px solid rgba(99,102,241,0.2)',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    color: 'var(--primary-light)',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {exp.duration}
                                </div>
                            </div>

                            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', opacity: 0.8, lineHeight: 1.6 }}>{exp.description}</p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                        <div style={{ marginTop: '0.3rem', flexShrink: 0 }}>
                                            <i className="fas fa-arrow-right" style={{ color: 'var(--primary)', fontSize: '0.75rem' }}></i>
                                        </div>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                {exp.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.65rem',
                                        padding: '0.25rem 0.6rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '6px',
                                        color: 'var(--text-muted)',
                                        fontWeight: 600,
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--primary)';
                                            e.currentTarget.style.color = 'var(--primary-light)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                        }}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

