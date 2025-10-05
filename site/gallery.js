// Enhanced gallery functionality with filtering and modal navigation
const images = [
  '/site/images/cat1.jpg','/site/images/cat2.jpg','/site/images/cat3.jpg','/site/images/cat4.jpg','/site/images/hero.jpg','/site/images/whatsapp-qr.jpg'
]

const galleryData = [
  {
    src: '/site/images/cat1.jpg',
    title: 'Custom T-Shirt Printing',
    description: 'Premium quality apparel printing for corporate events and promotional campaigns',
    tags: ['Apparel', 'Digital Print'],
    category: 'apparel'
  },
  {
    src: '/site/images/cat2.jpg',
    title: 'Promotional Mugs',
    description: 'Custom branded mugs and drinkware for corporate gifts and marketing',
    tags: ['Promotional', 'Sublimation'],
    category: 'promotional'
  },
  {
    src: '/site/images/cat3.jpg',
    title: 'Custom Keychains',
    description: 'Personalized keychains and accessories for brand promotion',
    tags: ['Promotional', 'Laser Cut'],
    category: 'promotional'
  },
  {
    src: '/site/images/cat4.jpg',
    title: 'Large Format Banners',
    description: 'Eye-catching banners and displays for exhibitions and outdoor advertising',
    tags: ['Signage', 'Large Format'],
    category: 'signage'
  },
  {
    src: '/site/images/hero.jpg',
    title: 'Business Cards',
    description: 'Professional business cards with premium finishes and materials',
    tags: ['Stationery', 'Offset Print'],
    category: 'stationery'
  },
  {
    src: '/site/images/whatsapp-qr.jpg',
    title: 'Corporate Gift Sets',
    description: 'Complete branded gift packages for corporate events and client appreciation',
    tags: ['Promotional', 'Package Design'],
    category: 'promotional'
  }
]

let currentIndex = -1
let filteredItems = [...galleryData]

function openModal(index) {
  const modal = document.getElementById('modal')
  const modalImg = document.getElementById('modalImg')
  const modalTitle = document.getElementById('modalTitle')
  const modalDescription = document.getElementById('modalDescription')
  const modalTags = document.getElementById('modalTags')
  
  if (index >= 0 && index < filteredItems.length) {
    currentIndex = index
    const item = filteredItems[index]
    
    modalImg.src = item.src
    modalImg.alt = item.title
    modalTitle.textContent = item.title
    modalDescription.textContent = item.description
    modalTags.innerHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')
    
    modal.style.display = 'flex'
    modal.setAttribute('aria-hidden', 'false')
    modalImg.focus()
  }
}

function closeModal() {
  const modal = document.getElementById('modal')
  modal.style.display = 'none'
  modal.setAttribute('aria-hidden', 'true')
  currentIndex = -1
}

function showNext(step) {
  if (currentIndex === -1) return
  const next = (currentIndex + step + filteredItems.length) % filteredItems.length
  openModal(next)
}

function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item')
  const filterBtns = document.querySelectorAll('.filter-btn')
  
  // Update button states
  filterBtns.forEach(btn => btn.classList.remove('active'))
  document.querySelector(`[data-filter="${category}"]`).classList.add('active')
  
  // Filter items
  filteredItems = category === 'all' ? [...galleryData] : galleryData.filter(item => item.category === category)
  
  // Show/hide items with animation
  items.forEach((item, index) => {
    const itemCategory = item.dataset.category
    const shouldShow = category === 'all' || itemCategory === category
    
    if (shouldShow) {
      item.style.display = 'block'
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
      }, index * 50)
    } else {
      item.style.opacity = '0'
      item.style.transform = 'translateY(20px)'
      setTimeout(() => {
        item.style.display = 'none'
      }, 300)
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  // Gallery item click handlers
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => openModal(index))
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        openModal(index)
      }
    })
  })

  // Modal controls
  const closeBtn = document.getElementById('close')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')
  const modal = document.getElementById('modal')

  if (closeBtn) closeBtn.addEventListener('click', closeModal)
  if (prevBtn) prevBtn.addEventListener('click', () => showNext(-1))
  if (nextBtn) nextBtn.addEventListener('click', () => showNext(1))

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal()
    })
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter
      filterGallery(filter)
    })
  })

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (modal && modal.style.display === 'flex') {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') showNext(1)
      if (e.key === 'ArrowLeft') showNext(-1)
    }
  })

  // URL parameter handling
  const params = new URLSearchParams(window.location.search)
  if (params.has('open')) {
    const idx = Number(params.get('open'))
    if (!Number.isNaN(idx) && idx >= 0 && idx < galleryData.length) {
      setTimeout(() => openModal(idx), 500)
    }
  }
})
