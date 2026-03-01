import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-[#111827]/30">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="section-desc">
                        Have a project in mind or just want to discuss AI & ML opportunities? I'd love to hear from you.
                    </p>
                </header>

                <div className="responsive-grid grid-wide">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="glass-card flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: 'clamp(1.25rem, 5vw, 2rem)' }}>
                            <div style={{ minWidth: '50px', height: '50px', borderRadius: '12px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.25rem' }}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <h4 style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 800 }}>Email</h4>
                                <p style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', fontWeight: 700, wordBreak: 'break-all' }}>pavanmagadum8@gmail.com</p>
                            </div>
                        </div>

                        <div className="glass-card flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: 'clamp(1.25rem, 5vw, 2rem)' }}>
                            <div style={{ minWidth: '50px', height: '50px', borderRadius: '12px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.25rem' }}>
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 800 }}>Phone</h4>
                                <p style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', fontWeight: 700 }}>+91 6360921788</p>
                            </div>
                        </div>

                        <div className="glass-card flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: 'clamp(1.25rem, 5vw, 2rem)' }}>
                            <div style={{ minWidth: '50px', height: '50px', borderRadius: '12px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.25rem' }}>
                                <i className="fas fa-location-dot"></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 800 }}>Location</h4>
                                <p style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', fontWeight: 700 }}>Bengaluru, Karnataka, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="glass-card" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div className="responsive-grid" style={{ '--grid-min': '200px', gap: '1rem' }}>
                                <input type="text" placeholder="Your Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.9rem', color: 'white', outline: 'none', fontSize: '0.9rem' }} />
                                <input type="email" placeholder="Your Email" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.9rem', color: 'white', outline: 'none', fontSize: '0.9rem' }} />
                            </div>
                            <input type="text" placeholder="Subject" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.9rem', color: 'white', outline: 'none', fontSize: '0.9rem' }} />
                            <textarea placeholder="Your Message" rows="5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.9rem', color: 'white', outline: 'none', resize: 'none', fontSize: '0.9rem' }}></textarea>
                            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', borderRadius: '12px' }}>Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
