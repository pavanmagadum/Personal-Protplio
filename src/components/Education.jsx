import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const educationItems = [
        {
            degree: 'Master of Computer Applications (MCA)',
            institution: 'Sir M. Visvesvaraya Institute of Technology, Bengaluru',
            duration: 'Ongoing',
            score: '8.8 CGPA (Current)',
            icon: 'fa-user-graduate',
            color: 'var(--primary)',
            description: 'Specializing in Computer Applications with a focus on AI, Machine Learning, and Software Development.',
        },
        {
            degree: 'Bachelor of Science (PMCs)',
            institution: 'Government First Grade College, Chikkodi',
            duration: 'Graduated',
            score: '6.71 CGPA',
            icon: 'fa-university',
            color: '#10b981',
            description: 'Physics, Mathematics, and Computer Science foundation.',
        },
        {
            degree: 'Pre-University Course (PUC)',
            institution: 'Raja Lakhamagouda PU College, Belagavi',
            duration: 'Graduated',
            score: '70%',
            icon: 'fa-school',
            color: '#f59e0b',
            description: 'Standard curriculum with emphasis on science and mathematics.',
        },
        {
            degree: 'Secondary School (SSLC)',
            institution: 'Shri Saraswati English Medium High School, Ghataprabha',
            duration: 'Graduated',
            score: '82.24%',
            icon: 'fa-book-reader',
            color: '#ec4899',
            description: 'High school education with strong academic performance.',
        },
    ];

    return (
        <section id="education" className="section-padding py-24 px-6 overflow-hidden relative">
            {/* Aesthetic Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

            <div className="container relative z-10">
                <div className="text-center mb-20 px-6 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.03 }}
                        className="absolute -top-14 left-1/2 -translate-x-1/2 text-[10rem] font-black select-none pointer-events-none tracking-[30px]"
                        style={{ color: 'white' }}
                    >
                        ACADEMIA
                    </motion.div>
                    <h2 className="text-4xl font-extrabold" style={{ fontSize: '3.5rem', marginBottom: '1rem', position: 'relative' }}>
                        Education <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.2rem', margin: '0 auto', lineHeight: 1.8 }}>
                        Formal education that built my analytical and technical foundation.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {educationItems.map((item, index) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                position: 'relative',
                                background: 'rgba(17, 24, 39, 0.4)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '24px',
                                height: '100%',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                            whileHover={{
                                translateY: -15,
                                borderColor: 'rgba(99, 102, 241, 0.4)',
                                boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 100%)`,
                                    border: `1px solid ${item.color}30`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: item.color,
                                    boxShadow: `0 8px 20px -5px ${item.color}30`
                                }}>
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <div style={{
                                    padding: '0.4rem 1rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    color: 'var(--text-muted)'
                                }}>
                                    {item.duration}
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white', lineHeight: 1.3 }}>{item.degree}</h3>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-light)', fontWeight: 700, marginBottom: '1.2rem' }}>{item.institution}</h4>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.75rem 1rem',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '12px',
                                width: 'fit-content'
                            }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }}></div>
                                <span style={{ fontSize: '0.85rem', color: 'white', fontWeight: 700 }}>{item.score}</span>
                            </div>

                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, flex: 1 }}>{item.description}</p>

                            {/* Decorative Corner Element */}
                            <div style={{
                                position: 'absolute',
                                bottom: '1.5rem',
                                right: '1.5rem',
                                opacity: 0.1,
                                fontSize: '2rem',
                                color: 'white'
                            }}>
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
