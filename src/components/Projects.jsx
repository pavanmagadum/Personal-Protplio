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
        <section id="projects" className="section-padding py-20 px-6">
            <div className="container">
                <div className="text-center mb-16 px-6">
                    <h2 className="text-4xl font-extrabold" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        Academic <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.2rem', margin: '0 auto', lineHeight: 1.8 }}>
                        Transforming academic knowledge into real-world applications.
                    </p>
                </div>

                <div className="flex flex-col md-flex-row gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
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
                            <div style={{ height: '240px', background: 'rgba(99,102,241,0.05)', position: 'relative', overflow: 'hidden' }}>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-4xl text-indigo-500 opacity-20">
                                        <i className="fas fa-microchip"></i>
                                    </div>
                                )}
                                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {project.duration}
                                </div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div className="flex gap-2 mb-4" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="skill-tag"
                                            style={{
                                                fontSize: '0.7rem',
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
                                <h3 className="text-2xl font-bold mb-4" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <p className="text-gray-400 mb-6" style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>{project.description}</p>

                                <ul style={{ marginBottom: '2rem', flex: 1 }}>
                                    {project.bullets.map((bullet, i) => (
                                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', gap: '0.75rem' }}>
                                            <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '0.25rem' }}></i>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--primary-light)' }}
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
