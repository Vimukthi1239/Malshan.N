import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', text: '' });

        // Simulating API/Email delivery wait
        setTimeout(() => {
            setLoading(false);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setStatus({
                type: 'success',
                text: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
            });

            // Remove success text after 6 seconds
            setTimeout(() => {
                setStatus({ type: '', text: '' });
            }, 6000);
        }, 1800);
    };

    return (
        <section id="contact" class="contact-section section-padding page-fade-in">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title">Get In <span class="highlight">Touch</span></h2>
                    <p class="section-subtitle">Let's discuss opportunities or collaborations</p>
                </div>
                
                <div class="contact-grid">
                    <div class="contact-info-card">
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out via email, phone, or connect with me on professional networks.</p>
                        
                        <div class="contact-methods">
                            <a href="mailto:2000malshan@gmail.com" class="method-item">
                                <span class="method-icon"><i class="fa-solid fa-envelope"></i></span>
                                <span class="method-content">
                                    <span class="method-label">Email</span>
                                    <span class="method-val">2000malshan@gmail.com</span>
                                </span>
                            </a>
                            
                            <a href="tel:+94721298380" class="method-item">
                                <span class="method-icon"><i class="fa-solid fa-phone"></i></span>
                                <span class="method-content">
                                    <span class="method-label">Phone</span>
                                    <span class="method-val">+(94) 721298380</span>
                                </span>
                            </a>
                            
                            <div class="method-item">
                                <span class="method-icon"><i class="fa-solid fa-location-dot"></i></span>
                                <span class="method-content">
                                    <span class="method-label">Address</span>
                                    <span class="method-val">Maddegoda, Makoora, Hettimulla, Sri Lanka</span>
                                </span>
                            </div>
                        </div>
                        
                        <div class="cv-download-box">
                            <p>Need my offline resume? Click the button below to download the latest PDF.</p>
                            <a href="/assets/Malshan_Nawarathna_CV.pdf" class="btn btn-outline" download="Malshan_Nawarathna_CV.pdf">
                                <i class="fa-solid fa-file-pdf"></i> Download Resume PDF
                            </a>
                        </div>
                    </div>
                    
                    <div class="contact-form-card">
                        <h3>Send a Message</h3>
                        <form id="contact-form" class="contact-form" onSubmit={handleSubmit}>
                            <div class="form-group-row">
                                <div class="form-group">
                                    <label htmlFor="form-name">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="form-name" 
                                        placeholder="John Doe" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="form-email">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="form-email" 
                                        placeholder="john@example.com" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label htmlFor="form-subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="form-subject" 
                                    placeholder="Project Collaboration" 
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required 
                                />
                            </div>
                            
                            <div class="form-group">
                                <label htmlFor="form-message">Message</label>
                                <textarea 
                                    id="form-message" 
                                    rows="5" 
                                    placeholder="Write your message here..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                class="btn btn-primary form-submit-btn"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>Sending... <i class="fa-solid fa-spinner fa-spin"></i></>
                                ) : (
                                    <>Send Message <i class="fa-solid fa-paper-plane"></i></>
                                )}
                            </button>
                            
                            {status.text && (
                                <div className={`form-status ${status.type}`}>
                                    {status.text}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
