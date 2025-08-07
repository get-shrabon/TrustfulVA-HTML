// =================================== Header =================================== //
// Refs to DOM elements
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// Utility to toggle body scroll
function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? 'hidden' : 'unset';
}

// Scroll effect for navbar
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open');
    mobileMenuBtn.classList.toggle('open');
    toggleBodyScroll(!isOpen);
}

// Close mobile menu
function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuBtn.classList.remove('open');
    toggleBodyScroll(false);
}

// Mounting
window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', handleScroll);

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Optional: Close the mobile menu when a link is clicked inside
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});

// Unmounting (optional for single-page apps)
window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
});

// =================================== Header =================================== //


// =================================== Partners =================================== //
document.addEventListener('DOMContentLoaded', function () {
    const partners = [
        'Slack', 'Shopify', 'Zoom', 'HubSpot', 'Mailchimp',
        'Dropbox', 'Trello', 'Canva', 'Notion', 'Stripe',
        'Buffer', 'Discord', 'Asana', 'Zapier', 'Airtable'
    ];

    const wrapperr = document.getElementById('partnersWrapper');

    if (wrapperr) {
        // Dynamically create slides
        partners.forEach(partner => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide partners-slide';
            slide.innerHTML = `
        <div class="partners-logo-slide">
          <div class="partners-text-logo">${partner}</div>
        </div>
      `;
            wrapperr.appendChild(slide);
        });

        // Initialize Swiper
        setTimeout(() => {
            const swiper = new Swiper('.partners-swiper', {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
                grabCursor: true,
                centeredSlides: false,
                freeMode: {
                    enabled: true,
                    momentum: false
                },
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: false
                },
                speed: 5000,
                allowTouchMove: true,
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 60
                    },
                    1536: {
                        slidesPerView: 7,
                        spaceBetween: 60
                    }
                }
            });
        }, 100);
    }
});

// =================================== Partners =================================== //


// =================================== Portfolio =================================== //
const openModal = (caseId) => {
    const modal = document.getElementById('modal_' + caseId);
    if (modal) {
        modal.showModal();
    }
};
// =================================== Portfolio =================================== //


// =================================== Testimonials =================================== //
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = [
        {
            text: `"TrustfulVA completely transformed our business operations. Their attention to detail and commitment to excellence is outstanding."`,
            name: "Sarah Johnson",
            title: "CEO, TechStart Solutions",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            company: "TechStart",
            rating: 5
        },
        {
            text: `"Working with TrustfulVA has been a game-changer for our e-commerce business. They helped us scale efficiently."`,
            name: "Michael Chen",
            title: "Founder, EcoMart Online",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            company: "EcoMart",
            rating: 5
        },
        {
            text: `"The virtual assistant services provided by TrustfulVA exceeded our expectations. Professional and reliable."`,
            name: "Emily Rodriguez",
            title: "Marketing Director, GrowthCorp",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            company: "GrowthCorp",
            rating: 5
        },
        {
            text: `"TrustfulVA's data entry services saved us hundreds of hours. The accuracy and speed were impressive."`,
            name: "David Thompson",
            title: "Operations Manager, DataFlow Inc",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            company: "DataFlow",
            rating: 5
        },
        {
            text: `"Outstanding social media management services. Our engagement rates increased by 300% in just 2 months."`,
            name: "Lisa Park",
            title: "Brand Manager, StyleCo",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            company: "StyleCo",
            rating: 5
        },
        {
            text: `"The WordPress maintenance service from TrustfulVA keeps our website running smoothly 24/7."`,
            name: "James Wilson",
            title: "IT Director, TechHub",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
            company: "TechHub",
            rating: 5
        }
    ];

    const wrapper = document.getElementById('testimonial-wrapper');

    if (wrapper) {
        console.log('Testimonial wrapper found, adding testimonials...');

        testimonials.forEach((t, index) => {
            console.log(`Adding testimonial ${index + 1}: ${t.name}`);
            const stars = Array.from({ length: t.rating }).map(() =>
                `<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`
            ).join('');

            wrapper.innerHTML += `
        <div class="swiper-slide">
          <div class="testimonial-card group">
            <div class="flex items-center gap-1 mb-6">
              <div class="flex text-amber-400">${stars}</div>
              <span class="text-sm font-medium text-slate-600 ml-2">${t.rating}.0</span>
            </div>
            <div class="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <blockquote class="text-slate-700 text-lg leading-relaxed mb-8 font-medium">${t.text}</blockquote>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="relative">
                  <img src="${t.avatar}" alt="${t.name}" class="w-14 h-14 rounded-full object-cover ring-3 ring-white shadow-lg">
                  <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  </div>
                </div>
                <div>
                  <h4 class="font-semibold text-slate-900 text-lg">${t.name}</h4>
                  <p class="text-slate-600 text-sm">${t.title}</p>
                </div>
              </div>
              <div class="bg-slate-100 group-hover:bg-blue-100 transition-colors duration-300 px-3 py-1.5 rounded-lg">
                <span class="text-xs font-semibold text-slate-600 group-hover:text-blue-700 transition-colors duration-300">${t.company}</span>
              </div>
            </div>
          </div>
        </div>
      `;
        });

        console.log(`Added ${testimonials.length} testimonials to wrapper`);

        // Initialize Swiper after adding content
        setTimeout(() => {
            console.log('Initializing testimonials Swiper...');
            const swiperInstance = new Swiper('.testimonials-swiper', {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: testimonials.length > 2,
                grabCursor: true,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: '.testimonial-button-next',
                    prevEl: '.testimonial-button-prev'
                },
                pagination: {
                    el: '.testimonial-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                speed: 800,
                breakpoints: {
                    640: { slidesPerView: 1, spaceBetween: 24 },
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 2, spaceBetween: 32 },
                    1280: { slidesPerView: 3, spaceBetween: 32 }
                }
            });
            console.log('Testimonials Swiper initialized:', swiperInstance);
        }, 100);
    } else {
        console.error('Testimonial wrapper not found!');
    }
});
// =================================== Testimonials =================================== //


// // =================================== Free Audit Page Form =================================== //
// Form state
const formData = {
    name: '',
    email: '',
    website: '',
    businessType: '',
    message: ''
}

// Form validation state
const formErrors = {
    name: false,
    email: false,
    website: false
}

const formSuccess = {
    name: false,
    email: false,
    website: false
}

// Button state
let isSubmitting = false
let isSubmitted = false

// Business type options
const businessTypes = [
    { value: '', label: 'Select your business type' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'saas', label: 'SaaS/Software' },
    { value: 'agency', label: 'Agency/Services' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'restaurant', label: 'Restaurant/Food' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'nonprofit', label: 'Non-profit' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'other', label: 'Other' }
]

// Validation function
function validateField(fieldName, value) {
    const trimmedValue = value.trim()

    formErrors[fieldName] = false
    formSuccess[fieldName] = false

    if (['name', 'email', 'website'].includes(fieldName) && !trimmedValue) {
        formErrors[fieldName] = true
        return false
    }

    if (fieldName === 'email' && trimmedValue) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(trimmedValue)) {
            formErrors[fieldName] = true
            return false
        }
    }

    if (fieldName === 'website' && trimmedValue) {
        try {
            new URL(trimmedValue)
        } catch {
            formErrors[fieldName] = true
            return false
        }
    }

    if (trimmedValue) {
        formSuccess[fieldName] = true
    }

    return true
}

// Event handlers
function handleFieldBlur(fieldName, value) {
    validateField(fieldName, value)
}

function handleFieldInput(fieldName) {
    formErrors[fieldName] = false
}

async function handleSubmit() {
    let isValid = true
    const requiredFields = ['name', 'email', 'website']

    requiredFields.forEach(field => {
        if (!validateField(field, formData[field])) {
            isValid = false
        }
    })

    if (!isValid) return

    isSubmitting = true

    try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        isSubmitted = true

        setTimeout(() => {
            isSubmitting = false
            isSubmitted = false

            Object.keys(formData).forEach(key => {
                formData[key] = ''
            })

            Object.keys(formErrors).forEach(key => {
                formErrors[key] = false
                formSuccess[key] = false
            })
        }, 2000)

    } catch (error) {
        console.error('Form submission error:', error)
        isSubmitting = false
    }
}

// Helper to get input class names
function getInputClasses(fieldName) {
    const baseClasses = 'form-input w-full px-4 py-4 rounded-xl font-body text-lg bg-white transition-all duration-300'

    if (formErrors[fieldName]) {
        return `${baseClasses} border-2 border-red-500 focus:border-red-500 focus:ring-red-200`
    }

    if (formSuccess[fieldName]) {
        return `${baseClasses} border-2 border-green-500 focus:border-green-500 focus:ring-green-200`
    }

    return `${baseClasses} border-2 border-gray-300 hover:border-green-500 focus:border-blue-500 focus:ring-blue-200`
}

// // =================================== Free Audit Page Form =================================== //

// =================================== FAQ Accordion Functionality =================================== //
document.addEventListener('DOMContentLoaded', function () {
    // Initialize FAQ functionality
    function initializeFAQ() {
        const faqItems = document.querySelectorAll('.collapse');

        faqItems.forEach((item, index) => {
            const input = item.querySelector('input[type="radio"], input[type="checkbox"]');
            const title = item.querySelector('.collapse-title');
            const content = item.querySelector('.collapse-content');

            if (!input) {
                // Create radio input if it doesn't exist
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = 'faq-accordion';
                radioInput.id = `faq-${index}`;
                item.insertBefore(radioInput, title);
            }

            // Add click event to title
            if (title) {
                title.addEventListener('click', function () {
                    const radio = item.querySelector('input[type="radio"]');
                    if (radio) {
                        // Check if this item is already open
                        const wasOpen = radio.checked;

                        // Close all FAQ items
                        faqItems.forEach(otherItem => {
                            const otherRadio = otherItem.querySelector('input[type="radio"]');
                            const otherContent = otherItem.querySelector('.collapse-content');
                            if (otherRadio) {
                                otherRadio.checked = false;
                            }
                            if (otherContent) {
                                otherContent.style.maxHeight = "0px";
                            }
                        });

                        // If it wasn't open, open this one
                        if (!wasOpen) {
                            radio.checked = true;
                            if (content) {
                                content.style.maxHeight = content.scrollHeight + "px";
                            }
                        }
                    }
                });
            }
        });
    }

    // Initialize FAQ when page loads
    setTimeout(initializeFAQ, 100);
});

// =================================== FAQ Accordion Functionality =================================== //