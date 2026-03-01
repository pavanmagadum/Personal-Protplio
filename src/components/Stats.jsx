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
                <div className="grid grid-cols-2 lg-flex justify-between items-center text-center py-6 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="stat-item"
                        >
                            <h3 className="stat-title">{stat.value}</h3>
                            <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
