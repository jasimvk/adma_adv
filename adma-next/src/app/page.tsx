'use client';

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/print-shop-hero.jpg",
      title: "One Platform",
      titleHighlight: "Endless Printing Possibilities",
      subtitle: "From concept to creation, we deliver exceptional printing solutions that elevate your brand and exceed expectations.",
      primaryBtn: "Start Your Project",
      secondaryBtn: "Explore Our Work"
    },
    {
      image: "/images/print-shop-hero.jpg",
      title: "One Platform",
      titleHighlight: "Endless Printing Possibilities",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main>
      {/* Hero Slider Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ''}`}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} ${slide.titleHighlight}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}

        {/* Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>
              {slides[currentSlide].title.split('').map((char, index) => (
                <span 
                  key={index} 
                  className={styles.letter}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            <br />
            <span className={styles.gradient}>
              {slides[currentSlide].titleHighlight.split('').map((char, index) => (
                <span 
                  key={index} 
                  className={styles.letter}
                  style={{ animationDelay: `${(slides[currentSlide].title.length + index) * 0.05}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>
          
          
        
        </div>

        {/* Navigation Arrows */}
        <button 
          className={`${styles.sliderNav} ${styles.sliderNavPrev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          className={`${styles.sliderNav} ${styles.sliderNavNext}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      {/* About Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why Choose Adma Advertising</h2>
            <p>Experience excellence in every print with our professional services</p>
          </div>
          
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Quality Printing</h3>
              <p>State-of-the-art equipment ensures premium quality for all your printing needs</p>
            </div>
            
            <div className={styles.aboutCard}>
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Fast Turnaround</h3>
              <p>Quick delivery without compromising on quality - your deadlines are our priority</p>
            </div>
            
            <div className={styles.aboutCard}>
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>Local Service</h3>
              <p>Located in Jumeirah 1, Dubai - Easy access and personalized customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Featured Products & Services</h2>
            <p>Explore our comprehensive range of printing and promotional solutions</p>
          </div>
          
          <div className={styles.featuredGrid}>
            <Link href="/products?category=stationery" className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <Image
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=85"
                  alt="Stationery Products"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.featuredContent}>
                <h3>Business Stationery</h3>
                <p>Business cards, letterheads, envelopes & more</p>
                <span className={styles.exploreLink}>Explore →</span>
              </div>
            </Link>

            <Link href="/products?category=printing" className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <Image
                  src="https://images.unsplash.com/photo-1565522494258-c9a8dc9e3f1a?w=800&q=85"
                  alt="Printing Services"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.featuredContent}>
                <h3>Commercial Printing</h3>
                <p>Flyers, brochures, posters & marketing materials</p>
                <span className={styles.exploreLink}>Explore →</span>
              </div>
            </Link>

            <Link href="/products?category=promotional" className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <Image
                  src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=85"
                  alt="Promotional Items"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.featuredContent}>
                <h3>Promotional & Apparel</h3>
                <p>T-shirts, uniforms, caps & custom apparel</p>
                <span className={styles.exploreLink}>Explore →</span>
              </div>
            </Link>

            <Link href="/products?category=signage" className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85"
                  alt="Signage Solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.featuredContent}>
                <h3>Signs & Displays</h3>
                <p>Banners, flags, roll-ups & exhibition stands</p>
                <span className={styles.exploreLink}>Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>Comprehensive printing and branding solutions for your business</p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🖨️</div>
              <h3>Digital Printing</h3>
              <p>High-quality digital printing for quick turnaround on small to medium runs</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📏</div>
              <h3>Large Format</h3>
              <p>Wide format printing for banners, posters, and outdoor advertising</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎨</div>
              <h3>Offset Printing</h3>
              <p>Traditional offset printing for large volume, cost-effective projects</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🖼️</div>
              <h3>Canvas & Frames</h3>
              <p>Professional canvas printing and custom framing services</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎁</div>
              <h3>Gift Items</h3>
              <p>Promotional gifts, corporate presents, and customized merchandise</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎈</div>
              <h3>Balloon Decorations</h3>
              <p>Event decorations, balloon arrangements, and party supplies</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📱</div>
              <h3>Social Media Marketing</h3>
              <p>Digital marketing solutions to enhance your online presence</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏗️</div>
              <h3>Sublimation</h3>
              <p>Custom sublimation on mugs, photo frames, and various materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free quote and consultation</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact#form" className={styles.ctaBtn}>
                Get in Touch
              </Link>
              <a href="https://wa.me/971507316005" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnSecondary}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
