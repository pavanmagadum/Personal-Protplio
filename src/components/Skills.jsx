import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: 'fa-code',
            skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
            color: '#6366f1'
        },
        {
            title: 'Machine Learning',
            icon: 'fa-brain',
            skills: ['Data Preprocessing', 'Linear Regression', 'Logistic Regression', 'Decision Trees', 'k-NN'],
            color: '#10b981'
        },
        {
            title: 'Libraries & Tools',
            icon: 'fa-laptop-code',
            skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Git', 'GitHub', 'Firebase'],
            color: '#f59e0b'
        },
        {
            title: 'Core Concepts',
            icon: 'fa-cube',
            skills: ['OOP', 'DSA', 'FastAPI', 'Flask', 'Power BI', 'Tableau'],
            color: '#ec4899'
        },
    ];

    return (
        <section id="skills" className="section-padding py-20 px-6 overflow-hidden bg-[#111827]/20 relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10">
                <header className="section-header">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.05 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 text-[clamp(4rem,15vw,9rem)] font-black select-none pointer-events-none tracking-widest"
                        style={{ color: 'white' }}
                    >
                        EXPERTISE
                    </motion.div>
                    <h2 className="section-title">
                        Technical <span className="gradient-text">Mastery</span>
                    </h2>
                    <p className="section-desc">
                        Specializing in AI-powered systems and scalable backend architectures.
                    </p>
                </header>

                <div className="responsive-grid grid-tight">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
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
                                flexDirection: 'column'
                            }}
                            whileHover={{ translateY: -10, borderColor: 'rgba(99, 102, 241, 0.3)' }}
                        >
                            <div style={{
                                position: 'relative',
                                width: '50px',
                                height: '50px',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'var(--gradient-1)',
                                    opacity: 0.1,
                                    borderRadius: '12px',
                                    transform: 'rotate(45deg)'
                                }}></div>
                                <i className={`fas ${category.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary-light)' }}></i>
                            </div>

                            <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>{category.title}</h3>

                            <div className="flex flex-wrap gap-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '0.3rem 0.7rem',
                                            borderRadius: '8px',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            color: 'var(--text-muted)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--primary)';
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                        }}
                                    >
                                        {skill}
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

export default Skills;

