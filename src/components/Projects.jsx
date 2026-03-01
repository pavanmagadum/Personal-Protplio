import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Climate-Aware Crop & Organic Fertilizer Recommender',
            description: 'Developed an AI-based system to recommend suitable crops and eco-friendly fertilizers using soil and climate data.',
            duration: 'Sep 2024 – Dec 2024',
            image: '/project.png',
            tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
            bullets: [
                'Analyzed N, P, K, pH values and weather datasets using Pandas and NumPy.',
                'Built prediction models using Scikit-learn to evaluate crop suitability.',
                'Designed an interactive dashboard using Streamlit for visual insights.',
                'Applied rule-based mapping logic to suggest organic fertilizer alternatives.'
            ],
            link: 'https://crop-and-organic-fertilizer.onrender.com/',
        },
        {
            title: 'PMind AI – Intelligent Chatbot Application',
            description: 'Developed an AI-powered conversational chatbot using Python and LLM APIs to provide contextual, multi-turn responses.',
            duration: 'Recent',
            image: '/pmind-ai.png',
            tags: ['Python', 'FastAPI', 'React', 'LLM API', 'Conversation History'],
            bullets: [
                'Implemented conversation history management for improved response relevance.',
                'Built backend APIs using FastAPI for handling user queries and model interactions.',
                'Designed a responsive frontend using React for real-time chat interface.',
                'Structured modular architecture separating UI, API layer, and AI logic components.'
            ],
            link: 'https://p-mind-ai.vercel.app/',
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">
                        Academic <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-desc">
                        Transforming academic knowledge into real-world applications.
                    </p>
                </header>

                <div className="responsive-grid grid-wide">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card overflow-hidden h-full"
                            style={{ padding: 0, display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ height: 'clamp(180px, 30vw, 240px)', background: 'rgba(99,102,241,0.05)', position: 'relative', overflow: 'hidden' }}>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-4xl text-indigo-500 opacity-20">
                                        <i className="fas fa-microchip"></i>
                                    </div>
                                )}
                                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {project.duration}
                                </div>
                            </div>

                            <div style={{ padding: 'clamp(1.25rem, 5vw, 2rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="skill-tag"
                                            style={{
                                                fontSize: '0.65rem',
                                                padding: '0.2rem 0.6rem',
                                                background: 'rgba(99,102,241,0.1)',
                                                color: 'var(--primary-light)',
                                                border: '1px solid rgba(99,102,241,0.2)',
                                                borderRadius: '6px'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: 800, marginBottom: '0.75rem', color: 'white' }}>{project.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{project.description}</p>

                                <ul style={{ marginBottom: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {project.bullets.map((bullet, i) => (
                                        <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.75rem' }}>
                                            <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '0.25rem', flexShrink: 0 }}></i>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-bold transition-all hover:gap-3"
                                    style={{ color: 'var(--primary-light)', fontSize: '0.9rem' }}
                                >
                                    View Details <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
