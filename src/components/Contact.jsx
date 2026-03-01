import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding py-20 px-6 bg-[#111827]/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.2rem', margin: '0 auto', lineHeight: 1.8 }}>
                        Have a project in mind or just want to discuss AI & ML opportunities? I'd love to hear from you.
                    </p>
                </div>

                <div className="flex flex-col md-flex-row gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="glass-card flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2rem' }}>
                            <div style={{ minWidth: '60px', height: '60px', borderRadius: '15px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem' }}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Email</h4>
                                <p style={{ fontSize: '1.1rem', fontWeight: 600, wordBreak: 'break-all' }}>pavanmagadum8@gmail.com</p>
                            </div>
                        </div>

                        <div className="glass-card flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2rem' }}>
                            <div style={{ minWidth: '60px', height: '60px', borderRadius: '15px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem' }}>
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Phone</h4>
                                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>+91 6360921788</p>
                            </div>
                        </div>

                        <div className="glass-card flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2rem' }}>
                            <div style={{ minWidth: '60px', height: '60px', borderRadius: '15px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem' }}>
                                <i className="fas fa-location-dot"></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Location</h4>
                                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Bengaluru, Karnataka, India</p>
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
                        <form className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                <input type="text" placeholder="Your Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }} />
                                <input type="email" placeholder="Your Email" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }} />
                            </div>
                            <input type="text" placeholder="Subject" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none' }} />
                            <textarea placeholder="Your Message" rows="5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', color: 'white', outline: 'none', resize: 'none' }}></textarea>
                            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }}>Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
