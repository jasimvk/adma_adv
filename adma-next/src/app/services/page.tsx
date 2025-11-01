'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './services.module.css';

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 'digital-printing',
      title: 'Digital Printing',
      icon: '🖨️',
      description: 'High-quality digital printing services for short to medium runs with exceptional color accuracy and fast turnaround times.',
      image: 'https://images.unsplash.com/photo-1565522494258-c9a8dc9e3f1a?w=800&q=85',
      features: ['Business Cards & Stationery', 'Flyers & Brochures', 'Posters & Signage', 'Marketing Materials'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'offset-printing',
      title: 'Offset Printing',
      icon: '📰',
      description: 'Premium offset printing for large volume projects with consistent quality throughout every print.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=85',
      features: ['Magazines & Catalogs', 'Books & Publications', 'High Volume Flyers', 'Corporate Brochures'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'large-format',
      title: 'Large Format Printing',
      icon: '🎨',
      description: 'Stunning large format prints for maximum impact at trade shows, retail displays, and events.',
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=85',
      features: ['Banners & Vinyl Graphics', 'Roll-ups & Pop-ups', 'Exhibition Stands', 'Wall Graphics & Murals'],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'personalized',
      title: 'Personalized Printing',
      icon: '✨',
      description: 'Customized printing solutions with variable data printing for personalized marketing campaigns.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85',
      features: ['Variable Data Printing', 'Personalized Direct Mail', 'Custom Invitations', 'Numbered Documents'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'corporate-gifts',
      title: 'Corporate Gifts & Merchandise',
      icon: '🎁',
      description: 'Complete corporate gifting and merchandise solutions for employee recognition and client appreciation.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85',
      features: ['Custom Branded Merchandise', 'Employee Recognition Gifts', 'Client Appreciation Items', 'Event Giveaways'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'vehicle-branding',
      title: 'Vehicle Branding',
      icon: '🚗',
      description: 'Professional vehicle wraps and graphics that turn your fleet into moving billboards.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=85',
      features: ['Full Vehicle Wraps', 'Partial Wraps & Graphics', 'Fleet Branding', 'Window Graphics'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'aluminum-cladding',
      title: 'Aluminum Cladding',
      icon: '🏢',
      description: 'Premium aluminum composite panel solutions for facades, signage, and architectural applications.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85',
      features: ['Building Facades', 'Shop Signage', '3D Lettering', 'Architectural Panels'],
      color: 'from-gray-500 to-slate-600'
    },
    {
      id: 'led-displays',
      title: 'LED Displays & Signage',
      icon: '💡',
      description: 'Modern LED display solutions for dynamic advertising with energy efficiency and high visibility.',
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=85',
      features: ['LED Signage', 'Digital Displays', 'Illuminated Signs', 'Lightbox Signage'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'exhibition',
      title: 'Exhibition Stands',
      icon: '🏛️',
      description: 'Complete exhibition stand solutions from design to installation for trade shows and events.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=85',
      features: ['Custom Stand Design', 'Modular Systems', 'Pop-up Displays', 'Installation Services'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <main className={styles.servicesPage}>
      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>Professional solutions tailored to your business needs</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`${styles.serviceCard} ${activeService === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={styles.serviceIcon}>
                  <span>{service.icon}</span>
                </div>
                <div className={styles.serviceImageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.serviceImageOverlay}></div>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact#form" className={styles.serviceButton}>
                    Get Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaPattern}></div>
        </div>
        <div className={styles.ctaContent}>
          <h2>Ready to Get Started?</h2>
          <p>Let's bring your vision to life with our professional services</p>
          <Link href="/contact#form" className={styles.ctaButton}>
            Get a Free Quote
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
