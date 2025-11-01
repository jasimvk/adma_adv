'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service || 'Not specified'}%0A*Message:*%0A${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/971507316005?text=${message}`, '_blank');
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroPattern}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>Let's Connect</span>
            <h1>Get In Touch With Us</h1>
            <p>Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Left Column - Contact Cards */}
            <div className={styles.contactCards}>
              {/* WhatsApp QR Card */}
              <div className={styles.whatsappCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBadge}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3>Quick Connect via WhatsApp</h3>
                </div>
                <p className={styles.cardDescription}>Scan the QR code to chat instantly or click the button below</p>
                <div className={styles.qrWrapper}>
                  <Image
                    src="/images/whatsapp-qr.jpg"
                    alt="WhatsApp QR Code"
                    width={200}
                    height={200}
                    className={styles.qrImage}
                  />
                </div>
                  
                <a 
                  href="https://wa.me/971507316005" 
                  className={styles.whatsappButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Start WhatsApp Chat
                </a>
              </div>

              {/* Contact Info Grid */}
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Visit Our Office</h4>
                    <p>Inside LuLu Express<br/>Jumeirah 1, Dubai, UAE</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Call Us Anytime</h4>
                    <p>
                      <a href="tel:+971508360019">+971 50 836 0019</a><br/>
                      <a href="tel:+971507316005">+971 50 731 6005</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Email Us</h4>
                    <p>
                      <a href="mailto:info@admame.com">info@admame.com</a><br/>
                      <a href="mailto:admame2023@gmail.com">admame2023@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Working Hours</h4>
                    <p>
                      Sun - Thu: 9:00 AM - 6:00 PM<br/>
                      Fri - Sat: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div id="form" className={styles.formSection}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                {submitted && (
                  <div className={styles.successMessage}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span>Message sent successfully! We'll be in touch soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="service">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="digital-printing">Digital Printing</option>
                        <option value="offset-printing">Offset Printing</option>
                        <option value="large-format">Large Format Printing</option>
                        <option value="promotional">Promotional Items</option>
                        <option value="signage">Signage & Banners</option>
                        <option value="corporate-gifts">Corporate Gifts</option>
                        <option value="sublimation">Sublimation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
