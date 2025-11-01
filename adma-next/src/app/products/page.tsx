'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './products.module.css';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'printing', name: 'Digital Printing' },
  { id: 'stationery', name: 'Stationery' },
  { id: 'promotional', name: 'Promotional Items' },
  { id: 'signage', name: 'Signage & Banners' },
  { id: 'gifts', name: 'Corporate Gifts' },
];

  const products = [
    // STATIONERY PRODUCTS
    { id: 1, name: 'Standard Business Cards', category: 'stationery', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80', description: 'Premium stock with stunning quality, protected surface by lamination' },
    { id: 2, name: 'PVC Business Cards', category: 'stationery', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80', description: 'Durable, tear-resistant and waterproof with premium feel' },
    { id: 3, name: 'Foil Emboss Business Cards', category: 'stationery', image: 'https://images.unsplash.com/photo-1635776062043-223faf322554?w=600&q=80', description: 'Irresistible smooth finish dramatic rich effect vibrant glow' },
    { id: 4, name: 'Die Cut Business Cards', category: 'stationery', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', description: 'Impressive and fascinating customized shapes' },
    { id: 5, name: 'Letterheads', category: 'stationery', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80', description: 'Professional letterheads on premium paper stock' },
    { id: 6, name: 'Envelopes', category: 'stationery', image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80', description: 'Custom printed envelopes in various sizes' },
    { id: 7, name: 'Notebooks', category: 'stationery', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80', description: 'Branded notebooks and planners for corporate use' },
    { id: 8, name: 'Stamps', category: 'stationery', image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a8?w=600&q=80', description: 'Custom rubber stamps for office use' },
    
    // PRINTING PRODUCTS
    { id: 9, name: 'Flyers & Brochures', category: 'printing', image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&q=80', description: 'Eye-catching marketing materials with vibrant colors' },
    { id: 10, name: 'Menus', category: 'printing', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80', description: 'Professional restaurant menus with custom designs' },
    { id: 11, name: 'Receipt Books', category: 'printing', image: 'https://images.unsplash.com/photo-1554224311-beee4f8a089d?w=600&q=80', description: 'Customized receipt books for businesses' },
    { id: 12, name: 'Calendars', category: 'printing', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80', description: 'Wall and desk calendars with custom designs' },
    { id: 13, name: 'Posters', category: 'printing', image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=600&q=80', description: 'High-quality large format posters' },
    { id: 14, name: 'Tent Cards', category: 'printing', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', description: 'Table tent cards for restaurants and events' },
    { id: 15, name: 'Door Hangers', category: 'printing', image: 'https://images.unsplash.com/photo-1606146485657-61d8c7762a5a?w=600&q=80', description: 'Promotional door hangers for marketing campaigns' },
    { id: 16, name: 'Invitation Cards', category: 'printing', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80', description: 'Elegant invitation cards for all occasions' },
    { id: 17, name: 'Book Binding', category: 'printing', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80', description: 'Professional book binding services - spiral, perfect bound' },
    { id: 18, name: 'Canvas Prints', category: 'printing', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80', description: 'Gallery-quality canvas printing and stretching' },
    
    // PROMOTIONAL & APPAREL
    { id: 19, name: 'T-Shirts (Gents)', category: 'promotional', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', description: 'Custom printed t-shirts with vibrant colors and designs' },
    { id: 20, name: 'T-Shirts (Ladies)', category: 'promotional', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80', description: 'Ladies fit t-shirts with custom branding' },
    { id: 21, name: 'T-Shirts (Kids)', category: 'promotional', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80', description: 'Kids t-shirts with fun designs and branding' },
    { id: 22, name: 'Embroidery Works', category: 'promotional', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80', description: 'Professional embroidery on apparel and textiles' },
    { id: 23, name: 'Uniforms', category: 'promotional', image: 'https://images.unsplash.com/photo-1622519407650-3df9883f76c5?w=600&q=80', description: 'Corporate uniforms for all industries - hospitality, healthcare, construction' },
    { id: 24, name: 'Caps', category: 'promotional', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80', description: 'Custom branded caps in various colors and styles' },
    { id: 25, name: 'Shopping Bags', category: 'promotional', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80', description: 'Eco-friendly branded shopping bags' },
    { id: 26, name: 'ID Cards & Lanyards', category: 'promotional', image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&q=80', description: 'Professional ID cards with custom lanyards' },
    
    // GIFTS & PROMOTIONAL ITEMS
    { id: 27, name: 'Sublimation Mugs', category: 'gifts', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80', description: 'Full color sublimation mugs with vibrant prints' },
    { id: 28, name: 'Magic Mugs', category: 'gifts', image: 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?w=600&q=80', description: 'Heat-activated magic mugs that reveal designs when hot' },
    { id: 29, name: 'Drinkware', category: 'gifts', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80', description: 'Branded water bottles and drinkware in various styles' },
    { id: 30, name: 'USB Flash Drives', category: 'gifts', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80', description: 'Branded USB drives with custom logos' },
    { id: 31, name: 'Keychains', category: 'gifts', image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80', description: 'Metal and acrylic keychains with branding' },
    { id: 32, name: 'Trophies & Awards', category: 'gifts', image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&q=80', description: 'Crystal awards, wooden plaques, and medals' },
    { id: 33, name: 'Photo Frames', category: 'gifts', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80', description: 'Sublimation photo frames and rock slates' },
    
    // EXHIBITION & DISPLAY STANDS
    { id: 34, name: 'Portable LED Lightbox', category: 'exhibition', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', description: 'Freestanding LED lightbox 100x200cm - customized sizes available' },
    { id: 35, name: 'Hydraulic Tension Fabric Table', category: 'exhibition', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80', description: 'Rectangle and oval tension fabric tables for exhibitions' },
    { id: 36, name: 'Fabric Velcro Table', category: 'exhibition', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', description: 'Pop-up portable counter for exhibitions' },
    { id: 37, name: 'Fabric Pillar Table', category: 'exhibition', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80', description: 'Portable pillar display stand' },
    { id: 38, name: 'Promotional Table', category: 'exhibition', image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&q=80', description: 'Compact promotional display tables' },
    { id: 39, name: 'Pop Up Table', category: 'exhibition', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', description: 'Curved pop-up display table with graphics' },
    { id: 40, name: 'Printed Tents', category: 'exhibition', image: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=600&q=80', description: 'Custom printed event tents - 3x3m, 4x3m, 6x3m sizes' },
    { id: 41, name: 'Branded Umbrellas', category: 'exhibition', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80', description: 'Outdoor promotional umbrellas 220cm and 280cm sizes' },
    
    // FLAGS & BANNERS
    { id: 42, name: 'Conference Flags', category: 'signage', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', description: 'Table top and standing conference flags - 2m to 3m poles' },
    { id: 43, name: 'Teardrop Flags', category: 'signage', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80', description: 'Eye-catching teardrop flags - 82x210cm to 110x333cm' },
    { id: 44, name: 'Curved Top Flags', category: 'signage', image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80', description: 'Premium curved top flags - 85x200cm to 85x400cm' },
    { id: 45, name: 'Spring A Board', category: 'signage', image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&q=80', description: 'Pop-up spring A boards - 80x120cm to 100x270cm' },
    { id: 46, name: 'Back Pack Banners', category: 'signage', image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&q=80', description: 'Portable wearable advertising banners' },
    { id: 47, name: 'Barricade Banners', category: 'signage', image: 'https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?w=600&q=80', description: 'Custom branding barricade covers' },
    { id: 48, name: 'L Shape Flags', category: 'signage', image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&q=80', description: 'Vertical L-shaped display flags - 90x200cm to 90x400cm' },
    { id: 49, name: 'Advertising Flag Stand', category: 'signage', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80', description: 'Tall advertising flags - 6m, 8m, 10m heights' },
    { id: 50, name: 'Telescopic Flag Stand', category: 'signage', image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80', description: 'Wind dancer event flags - 3m, 4m, 5m heights' },
    { id: 51, name: 'Bunting Hand Flags', category: 'signage', image: 'https://images.unsplash.com/photo-1513735539099-cf6e5d812a0c?w=600&q=80', description: 'Small hand-held flags for events' },
    
    // POP UP STANDS & BACKDROPS
    { id: 52, name: 'Curve Pop Up Stand', category: 'exhibition', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', description: 'Curved backdrop displays - 2x3 to 6x3 configurations' },
    { id: 53, name: 'Straight Pop Up Stand', category: 'exhibition', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80', description: 'Straight backdrop displays - 2x3 to 6x3 configurations' },
    { id: 54, name: 'Fabric Straight Pop Up', category: 'exhibition', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80', description: 'Tension fabric pop-up stands - 3x3 and 4x3 sizes' },
    { id: 55, name: 'Adjustable Backdrop Stand', category: 'exhibition', image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&q=80', description: 'Telescopic backdrop stands - 240x240cm to 300x300cm' },
    { id: 56, name: 'Tension Fabric Stand Straight', category: 'exhibition', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', description: 'Professional tension fabric displays - 100cm to 800cm wide' },
    { id: 57, name: 'Tension Fabric Stand Curved', category: 'exhibition', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80', description: 'Curved tension fabric displays - 230x230cm and 300x230cm' },
    
    // ROLL UP BANNERS
    { id: 58, name: 'Roll Up Stand', category: 'signage', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80', description: 'Portable roll-up banners - 60x160cm to 150x200cm' },
    { id: 59, name: 'X Banner Stand', category: 'signage', image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&q=80', description: 'Lightweight X-frame banners - 60x160cm and 80x180cm' },
    { id: 60, name: 'Broad Base Roll Up', category: 'signage', image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80', description: 'Premium wide base roll-ups - A4 to 300x200cm sizes' },
  ];export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <main className={styles.productsPage}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Image src="/images/print-shop-hero.jpg" alt="Products" fill sizes="100vw" style={{ objectFit: 'cover' }} priority quality={90} />
        <div className={styles.heroContent}>
          <h1>One Platform. Endless Printing Possibilities</h1>
          <p>Finest Quality • Fastest Turnaround • Prompt Service</p>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className={styles.resourcesSection}>
        <div className="container">
          <div className={styles.resourcesContent}>
            <h2>Explore Our Resources</h2>
            <p>Download our comprehensive catalogue and company profile</p>
            <div className={styles.resourceButtons}>
              <a 
                href="/adma-catalogue.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.resourceBtn}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
                <span>View Catalogue</span>
              </a>
              
              <a 
                href="/adma-profile.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.resourceBtn}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Company Profile</span>
              </a>
              
              <a 
                href="/adma-brochure.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.resourceBtn}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="18" rx="2" ry="2"/>
                  <line x1="7" y1="7" x2="17" y2="7"/>
                  <line x1="7" y1="12" x2="17" y2="12"/>
                  <line x1="7" y1="17" x2="13" y2="17"/>
                </svg>
                <span>Our Brochure</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.categoryFilter}>
            {categories.map((cat) => (
              <button key={cat.id} className={activeCategory === cat.id ? styles.filterBtn + ' ' + styles.active : styles.filterBtn} onClick={() => setActiveCategory(cat.id)}>{cat.name}</button>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.productsGrid}>
            {filteredProducts.map((product, index) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                  <div className={styles.imageOverlay}><button className={styles.quickView}>View Details</button></div>
                </div>
                <div className={styles.productContent}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href="/contact#form" className={styles.inquireBtn}>Get a Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Cannot Find What You Are Looking For?</h2>
            <p>We offer custom printing solutions tailored to your needs</p>
            <div className={styles.ctaButtons}>
              <a href="/contact#form" className={styles.primaryBtn}>Contact Us</a>
              <a href="https://wa.me/971507316005" className={styles.secondaryBtn}>WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
