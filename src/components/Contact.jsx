import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error', ''
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        const form = e.target;
        const formData = new FormData(form);
        
        try {
            // Replace YOUR_FORMSPREE_ID with the ID provided by Formspree (e.g., https://formspree.io/f/mxwvlkjp)
            // Or use your email directly for the first time setup: https://formspree.io/f/pavanmagadum8@gmail.com
            const response = await fetch("https://formspree.io/f/pavanmagadum8@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                const data = await response.json();
                setStatus('error');
                setErrorMessage(data.errors ? data.errors.map(error => error.message).join(", ") : "Something went wrong.");
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage("Network error. Please check your connection.");
        }
    };

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
                        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center gap-4 text-center py-8"
                                    >
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '2.5rem', marginBottom: '1rem' }}>
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Message Sent!</h3>
                                        <p style={{ color: 'var(--text-muted)' }}>Thank you, Pavan. Your message has been sent to your email successfully.</p>
                                        <button 
                                            type="button"
                                            onClick={() => setStatus('')}
                                            className="btn-outline"
                                            style={{ marginTop: '1rem', padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                                    >
                                        <div className="responsive-grid" style={{ '--grid-min': '200px', gap: '1rem' }}>
                                            <input name="name" type="text" placeholder="Your Name" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.9rem', color: 'white', outline: 'none', fontSize: '0.9rem' }} />
                                            <input name="email" type="email" placeholder="Your Email" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.9rem', color: 'white', outline: 'none', fontSize: '0.9rem' }} />
                                        </div>
                                        <input name="subject" type="text" placeholder="Subject" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.9rem', color: 'white', outline: 'none', fontSize: '0.9rem' }} />
                                        <textarea name="message" placeholder="Your Message" rows="5" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.9rem', color: 'white', outline: 'none', resize: 'none', fontSize: '0.9rem' }}></textarea>
                                        
                                        <button 
                                            type="submit" 
                                            disabled={status === 'sending'}
                                            className="btn-primary" 
                                            style={{ 
                                                width: '100%', 
                                                justifyContent: 'center', 
                                                padding: '1rem', 
                                                borderRadius: '12px',
                                                opacity: status === 'sending' ? 0.7 : 1,
                                                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                                marginTop: '0.5rem'
                                            }}
                                        >
                                            {status === 'sending' ? (
                                                <>
                                                    <i className="fas fa-spinner fa-spin"></i> Sending...
                                                </>
                                            ) : 'Send Message'}
                                        </button>

                                        {status === 'error' && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                style={{ color: '#ef4444', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '8px', marginTop: '1rem' }}
                                            >
                                                <i className="fas fa-exclamation-circle"></i> {errorMessage}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
