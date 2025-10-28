// Artist Data Structure
const artists = [
    {
        name: 'dani',
        profile: 'assets/artists/dani/profile/profile.jpg',
        images: [
            'assets/artists/dani/eye.jpg',
            'assets/artists/dani/flower.webp',
            'assets/artists/dani/flowers.jpg',
            'assets/artists/dani/knife.webp',
            'assets/artists/dani/pineapple.jpg',
            'assets/artists/dani/rose.jpg',
            'assets/artists/dani/ukraine-symbol.jpg'
        ]
    },
    {
        name: 'derk',
        profile: 'assets/artists/derk/profile/profile.jpg',
        images: [
            'assets/artists/derk/1.jpg',
            'assets/artists/derk/2.jpg',
            'assets/artists/derk/3.jpg',
            'assets/artists/derk/cat.jpg',
            'assets/artists/derk/cheerfullness.jpg',
            'assets/artists/derk/clown-fish.jpg',
            'assets/artists/derk/goldensun.jpg',
            'assets/artists/derk/japaneese.jpg',
            'assets/artists/derk/neo-dragon.jpg',
            'assets/artists/derk/orange.jpg',
            'assets/artists/derk/sleve.jpg'
        ]
    },
    {
        name: 'gosha',
        profile: 'assets/artists/gosha/profile/profile.jpg',
        images: [
            'assets/artists/gosha/90s.jpg',
            'assets/artists/gosha/buki-rip.jpg',
            'assets/artists/gosha/dragon.jpg',
            'assets/artists/gosha/eagle.jpg',
            'assets/artists/gosha/fanky-acid-skull.jpg',
            'assets/artists/gosha/flash.jpg',
            'assets/artists/gosha/flashes.jpg',
            'assets/artists/gosha/imas.jpg',
            'assets/artists/gosha/little-one.jpg',
            'assets/artists/gosha/namakubi.jpg',
            'assets/artists/gosha/reaper.jpg',
            'assets/artists/gosha/skull.jpg'
        ]
    },
    {
        name: 'groc',
        profile: 'assets/artists/groc/profile/profile-groc.jpg',
        images: [
            'assets/artists/groc/groc-artwork-1.jpg',
            'assets/artists/groc/groc-artwork-2.jpg',
            'assets/artists/groc/groc-artwork-3.jpg',
            'assets/artists/groc/groc-artwork-4.jpg',
            'assets/artists/groc/groc-artwork-5.jpg',
            'assets/artists/groc/groc-artwork-6.jpg'
        ]
    },
    {
        name: 'jenya',
        profile: 'assets/artists/jenya/profile/profile.jpg',
        images: [
            'assets/artists/jenya/blue-flower.jpg',
            'assets/artists/jenya/Chrysanthemum.jpg',
            'assets/artists/jenya/Chrysanthemum-leg.jpg',
            'assets/artists/jenya/Dragon.jpg',
            'assets/artists/jenya/flowers.jpg',
            'assets/artists/jenya/knife-tiger.jpg',
            'assets/artists/jenya/Peony.jpg',
            'assets/artists/jenya/peony-freehand.jpg',
            'assets/artists/jenya/Peony-orange.jpg',
            'assets/artists/jenya/Peony-redish.jpg',
            'assets/artists/jenya/rat.jpg',
            'assets/artists/jenya/tiny-flowers.jpg',
            'assets/artists/jenya/wild-fish.jpg'
        ]
    },
    {
        name: 'shon',
        profile: 'assets/artists/shon/profile/profile.jpg',
        images: [
            'assets/artists/shon/alef.jpg',
            'assets/artists/shon/dark-caligraphy-flow.jpg',
            'assets/artists/shon/dark-flower-ornament.jpg',
            'assets/artists/shon/eye.jpg',
            'assets/artists/shon/eye-ornament.jpg',
            'assets/artists/shon/floral.jpg',
            'assets/artists/shon/flower.jpg',
            'assets/artists/shon/flower-ornament-tattoo.jpg',
            'assets/artists/shon/flowers-ornaments.jpg',
            'assets/artists/shon/M.jpg',
            'assets/artists/shon/magical-ornament.jpg',
            'assets/artists/shon/orange-flower.jpg',
            'assets/artists/shon/oranment.jpg',
            'assets/artists/shon/symmetrical.jpg'
        ]
    },
    {
        name: 'sunches',
        profile: 'assets/artists/sunches/profile/profile.jpg',
        images: [
            'assets/artists/sunches/1.jpg',
            'assets/artists/sunches/2.jpg',
            'assets/artists/sunches/3.jpg',
            'assets/artists/sunches/4.jpg',
            'assets/artists/sunches/eye.jpg',
            'assets/artists/sunches/eyes.jpg',
            'assets/artists/sunches/fox.jpg',
            'assets/artists/sunches/frog.jpg',
            'assets/artists/sunches/mushroom-eye.jpg',
            'assets/artists/sunches/mushrooms.jpg',
            'assets/artists/sunches/mushroom-tatoo.jpg',
            'assets/artists/sunches/owl.jpg',
            'assets/artists/sunches/panda.jpg',
            'assets/artists/sunches/paw.jpg',
            'assets/artists/sunches/queen-of-hearts.jpg',
            'assets/artists/sunches/tattoo.jpg'
        ]
    },
    {
        name: 'tact',
        profile: 'assets/artists/tact/profile/profile.jpg',
        images: [
            'assets/artists/tact/bird.jpg',
            'assets/artists/tact/birds.jpg',
            'assets/artists/tact/car-fan.jpg',
            'assets/artists/tact/cool.jpg',
            'assets/artists/tact/drama.jpg',
            'assets/artists/tact/eagle.jpg',
            'assets/artists/tact/fav.jpg',
            'assets/artists/tact/flash.jpg',
            'assets/artists/tact/flowers.jpg',
            'assets/artists/tact/flowersflash.jpg',
            'assets/artists/tact/freshandhealed.jpg',
            'assets/artists/tact/funone.jpg',
            'assets/artists/tact/get.jpeg',
            'assets/artists/tact/goodvybes.jpg',
            'assets/artists/tact/graffity.jpg',
            'assets/artists/tact/healed.jpg',
            'assets/artists/tact/mushroom.jpg',
            'assets/artists/tact/quick-sesh.jpg',
            'assets/artists/tact/sea.jpg',
            'assets/artists/tact/sketch.jpg',
            'assets/artists/tact/skull.jpg',
            'assets/artists/tact/small.jpg',
            'assets/artists/tact/traditional.jpg',
            'assets/artists/tact/traditionaltatto.jpg',
            'assets/artists/tact/traditional-tattoo.jpg'
        ]
    }
];

let swiper;
let artistStartIndices = [];

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Hide loader after animation completes (1.5s)
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.3s ease';

        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '0';

            // Fade in main content
            setTimeout(() => {
                mainContent.style.transition = 'opacity 0.5s ease';
                mainContent.style.opacity = '1';

                // Initialize gallery after content is visible
                initializeGallery();
            }, 50);
        }, 300);
    }, 1500);
});

// Initialize Gallery with Artist Images
function initializeGallery() {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const artistNav = document.getElementById('artist-nav');

    let slideIndex = 0;

    // Build slides and track artist start indices
    artists.forEach((artist, artistIndex) => {
        // Store the starting index for this artist
        artistStartIndices.push(slideIndex);

        // Add all images for this artist
        artist.images.forEach(imagePath => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.setAttribute('data-artist', artist.name);
            slide.innerHTML = `
                <div class="slide-content">
                    <img src="${imagePath}" alt="${artist.name}" />
                </div>
            `;
            swiperWrapper.appendChild(slide);
            slideIndex++;
        });

        // Create artist profile navigation button
        const artistBtn = document.createElement('div');
        artistBtn.className = 'artist-profile';
        artistBtn.setAttribute('data-artist-index', artistIndex);
        artistBtn.innerHTML = `<img src="${artist.profile}" alt="${artist.name}" />`;
        artistNav.appendChild(artistBtn);
    });

    // Initialize Swiper
    swiper = new Swiper('.cube-swiper', {
        effect: 'cube',
        grabCursor: true,
        loop: true,
        speed: 1000,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: updateActiveArtist
        }
    });

    // Add click handlers to artist profiles
    document.querySelectorAll('.artist-profile').forEach(profile => {
        profile.addEventListener('click', () => {
            const artistIndex = parseInt(profile.getAttribute('data-artist-index'));
            const slideIndex = artistStartIndices[artistIndex];
            swiper.slideToLoop(slideIndex);
        });
    });

    // Set initial active artist after swiper is ready
    setTimeout(() => {
        updateActiveArtist();
    }, 100);
}

// Update Active Artist Profile
function updateActiveArtist() {
    if (!swiper) return; // Guard clause if swiper not initialized yet

    const realIndex = swiper.realIndex;

    // Find which artist owns this slide
    let currentArtistIndex = 0;
    for (let i = 0; i < artistStartIndices.length; i++) {
        if (realIndex >= artistStartIndices[i]) {
            currentArtistIndex = i;
        } else {
            break;
        }
    }

    // Update active class
    document.querySelectorAll('.artist-profile').forEach((profile, index) => {
        if (index === currentArtistIndex) {
            profile.classList.add('active');
        } else {
            profile.classList.remove('active');
        }
    });
}

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Booking Form Multi-Step
const bookingData = {
    placement: '',
    size: '',
    date: '',
    budget: ''
};

// Custom SweetAlert2 styling
const swalStyle = {
    background: '#000',
    color: '#fff',
    confirmButtonColor: '#fff',
    confirmButtonText: 'NEXT ▶',
    showCancelButton: true,
    cancelButtonColor: '#333',
    cancelButtonText: '◀ BACK',
    customClass: {
        popup: 'brutal-popup',
        title: 'brutal-title',
        confirmButton: 'brutal-confirm',
        cancelButton: 'brutal-cancel'
    }
};

// Step 1: Placement Selection
async function step1Placement() {
    const placements = [
        { id: 'arm', label: 'ARM', icon: '💪' },
        { id: 'leg', label: 'LEG', icon: '🦵' },
        { id: 'chest', label: 'CHEST', icon: '❤️' },
        { id: 'back', label: 'BACK', icon: '🔥' },
        { id: 'shoulder', label: 'SHOULDER', icon: '⭐' },
        { id: 'neck', label: 'NECK', icon: '👤' },
        { id: 'hand', label: 'HAND', icon: '✋' },
        { id: 'other', label: 'OTHER', icon: '📍' }
    ];

    const placementHTML = `
        <div class="placement-grid">
            ${placements.map(p => `
                <button class="placement-box" data-placement="${p.id}">
                    <span class="placement-icon">${p.icon}</span>
                    <span class="placement-label">${p.label}</span>
                </button>
            `).join('')}
        </div>
    `;

    const result = await Swal.fire({
        title: 'WHERE DO YOU WANT YOUR TATTOO?',
        html: placementHTML,
        ...swalStyle,
        showConfirmButton: false,
        showCancelButton: false,
        didOpen: () => {
            document.querySelectorAll('.placement-box').forEach(box => {
                box.addEventListener('click', async () => {
                    bookingData.placement = box.dataset.placement;
                    Swal.close();
                    await step2Size();
                });
            });
        }
    });
}

// Step 2: Size Selection
async function step2Size() {
    const sizes = [
        { id: 's', label: 'S', desc: 'SMALL', size: '2-4cm' },
        { id: 'm', label: 'M', desc: 'MEDIUM', size: '5-10cm' },
        { id: 'l', label: 'L', desc: 'LARGE', size: '11-20cm' },
        { id: 'xl', label: 'XL', desc: 'X-LARGE', size: '20cm+' }
    ];

    const sizeHTML = `
        <div class="size-grid">
            ${sizes.map(s => `
                <button class="size-box" data-size="${s.id}">
                    <span class="size-label">${s.label}</span>
                    <span class="size-desc">${s.desc}</span>
                    <span class="size-measurement">${s.size}</span>
                </button>
            `).join('')}
        </div>
    `;

    const result = await Swal.fire({
        title: 'WHAT SIZE?',
        html: sizeHTML,
        ...swalStyle,
        showConfirmButton: false,
        showCancelButton: true,
        didOpen: () => {
            document.querySelectorAll('.size-box').forEach(box => {
                box.addEventListener('click', async () => {
                    bookingData.size = box.dataset.size;
                    Swal.close();
                    await step3Date();
                });
            });
        }
    });

    if (result.dismiss === Swal.DismissReason.cancel) {
        await step1Placement();
    }
}

// Step 3: Date Selection
async function step3Date() {
    // Get tomorrow's date as minimum
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    const result = await Swal.fire({
        title: 'WHEN DO YOU WANT TO COME?',
        html: `
            <input type="date" id="tattoo-date" class="swal-date-input" min="${minDate}" />
            <p class="date-note">SELECT YOUR PREFERRED DATE</p>
        `,
        ...swalStyle,
        confirmButtonText: 'NEXT ▶',
        preConfirm: () => {
            const date = document.getElementById('tattoo-date').value;
            if (!date) {
                Swal.showValidationMessage('Please select a date');
                return false;
            }
            return date;
        }
    });

    if (result.isConfirmed) {
        bookingData.date = result.value;
        await step4Budget();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        await step2Size();
    }
}

// Step 4: Budget Selection
async function step4Budget() {
    const budgets = [
        { id: 'basic', label: 'BASIC', price: '₪500-1000', icon: '💵' },
        { id: 'standard', label: 'STANDARD', price: '₪1000-2000', icon: '💰' },
        { id: 'premium', label: 'PREMIUM', price: '₪2000-3500', icon: '💎' },
        { id: 'luxury', label: 'LUXURY', price: '₪3500+', icon: '👑' }
    ];

    const budgetHTML = `
        <div class="budget-grid">
            ${budgets.map(b => `
                <button class="budget-box" data-budget="${b.id}">
                    <span class="budget-icon">${b.icon}</span>
                    <span class="budget-label">${b.label}</span>
                    <span class="budget-price">${b.price}</span>
                </button>
            `).join('')}
        </div>
    `;

    const result = await Swal.fire({
        title: 'WHAT\'S YOUR BUDGET?',
        html: budgetHTML,
        ...swalStyle,
        showConfirmButton: false,
        showCancelButton: true,
        didOpen: () => {
            document.querySelectorAll('.budget-box').forEach(box => {
                box.addEventListener('click', async () => {
                    bookingData.budget = box.dataset.budget;
                    Swal.close();
                    await finalizeBooking();
                });
            });
        }
    });

    if (result.dismiss === Swal.DismissReason.cancel) {
        await step3Date();
    }
}

// Finalize and Redirect to WhatsApp
async function finalizeBooking() {
    const message = `
🔥 NEW TATTOO BOOKING REQUEST 🔥

📍 Placement: ${bookingData.placement.toUpperCase()}
📏 Size: ${bookingData.size.toUpperCase()}
📅 Date: ${bookingData.date}
💰 Budget: ${bookingData.budget.toUpperCase()}

Looking forward to getting inked at SAGE!
    `.trim();

    const phoneNumber = '972526967850';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    await Swal.fire({
        title: 'REDIRECTING TO WHATSAPP...',
        html: '<p>We\'ll continue the conversation on WhatsApp!</p>',
        icon: 'success',
        ...swalStyle,
        showConfirmButton: false,
        timer: 2000
    });

    window.open(whatsappURL, '_blank');
}

// Initialize Booking Flow
document.addEventListener('DOMContentLoaded', () => {
    const bookNowBtn = document.getElementById('book-now-btn');
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            step1Placement();
        });
    }
});
