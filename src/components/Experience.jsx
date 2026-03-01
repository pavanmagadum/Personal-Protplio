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
        <section id="experience" className="section-padding py-20 px-6 overflow-hidden">
            <div className="container">
                <div className="text-center mb-16 px-6 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.05 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-black select-none pointer-events-none"
                        style={{ color: 'white', letterSpacing: '20px' }}
                    >
                        JOURNEY
                    </motion.div>
                    <h2 className="text-4xl font-extrabold" style={{ fontSize: '3.5rem', marginBottom: '1rem', position: 'relative' }}>
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.2rem', margin: '0 auto', lineHeight: 1.8 }}>
                        Hands-on experience in Machine Learning, OCR systems, and backend development.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role + index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card h-full"
                            style={{
                                padding: '2.5rem',
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
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)',
                                borderRadius: '0 24px 0 100%'
                            }}></div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'var(--gradient-1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.5rem',
                                        color: 'white',
                                        boxShadow: '0 8px 16px -4px rgba(99, 102, 241, 0.5)'
                                    }}>
                                        <i className={`fas ${exp.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}>{exp.role}</h3>
                                        <h4 style={{ fontSize: '1rem', color: 'var(--primary-light)', fontWeight: 700, marginTop: '0.2rem' }}>{exp.company}</h4>
                                    </div>
                                </div>
                                <div style={{
                                    padding: '0.4rem 1rem',
                                    background: 'rgba(99,102,241,0.1)',
                                    border: '1px solid rgba(99,102,241,0.2)',
                                    borderRadius: '50px',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    color: 'var(--primary-light)'
                                }}>
                                    {exp.duration}
                                </div>
                            </div>

                            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', opacity: 0.8, lineHeight: 1.7 }}>{exp.description}</p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1 }}>
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                                        <div style={{ marginTop: '0.3rem' }}>
                                            <i className="fas fa-arrow-right" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}></i>
                                        </div>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
                                {exp.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.7rem',
                                        padding: '0.3rem 0.7rem',
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

