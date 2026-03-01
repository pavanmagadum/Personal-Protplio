import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { label: 'Programming Languages', value: '5+' },
        { label: 'Internships Completed', value: '2' },
        { label: 'Technical Projects', value: '10+' },
        { label: 'Academic CGPA', value: '8.8' },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="responsive-grid" style={{
                    '--grid-min': '150px',
                    gap: '2rem',
                    padding: '2rem 0'
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="stat-item text-center"
                        >
                            <h3 className="stat-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{stat.value}</h3>
                            <p style={{ color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
