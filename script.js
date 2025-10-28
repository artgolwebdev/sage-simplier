/**
 * SAGE Tattoo Shop - Main JavaScript
 *
 * Features:
 * - Dynamic artist gallery with Swiper.js cube effect
 * - Artist profile navigation system
 * - Multi-step booking form with SweetAlert2
 * - WhatsApp integration for booking requests
 * - Smooth scroll navigation
 *
 * @author Claude Code
 * @version 1.0.0
 */

// ============================================
// ARTIST DATA STRUCTURE
// ============================================
// Configure artists, profiles, and images here
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
let isMuted = false;

// Audio System - Optimized for Cozy Minimalistic Sounds
const AudioSystem = {
    context: null,
    isInitialized: false,
    isSupported: false,
    masterVolume: 0.7, // Global volume control for cozy experience
    
    init() {
        if (this.isInitialized && this.context && this.context.state !== 'closed') {
            return this.context;
        }
        
        try {
            // Close existing context if it exists
            if (this.context && this.context.state !== 'closed') {
                this.context.close();
            }
            
            // Create new context with optimized settings
            this.context = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: 44100, // Standard sample rate
                latencyHint: 'interactive' // Optimize for responsiveness
            });
            this.isInitialized = true;
            this.isSupported = true;
            
            console.log('AudioSystem initialized with cozy settings');
            return this.context;
        } catch (error) {
            console.warn('AudioSystem not supported:', error);
            this.isSupported = false;
            return null;
        }
    },
    
    async resume() {
        if (!this.context || this.context.state === 'closed') {
            return false;
        }
        
        if (this.context.state === 'suspended') {
            try {
                await this.context.resume();
                console.log('AudioSystem resumed');
                return true;
            } catch (error) {
                console.warn('Failed to resume AudioSystem:', error);
                return false;
            }
        }
        
        return true;
    },
    
    playSound(frequency, duration = 0.04, volume = 0.015, waveType = 'sine', delay = 0) {
        if (!this.isSupported || isMuted) return;
        
        const ctx = this.init();
        if (!ctx) return;
        
        this.resume().then(success => {
            if (!success) return;
            
            try {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = waveType;
                osc.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
                
                // Apply master volume for cozy experience
                const finalVolume = volume * this.masterVolume;
                
                // Ultra-quick, minimal envelope for cozy responsive sounds
                gain.gain.setValueAtTime(0, ctx.currentTime + delay);
                gain.gain.linearRampToValueAtTime(finalVolume, ctx.currentTime + delay + 0.002);
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(ctx.currentTime + delay);
                osc.stop(ctx.currentTime + delay + duration);
            } catch (error) {
                console.warn('Error playing sound:', error);
            }
        });
    },
    
    playChord(frequencies, duration = 0.12, volume = 0.025, delay = 0) {
        if (!this.isSupported || isMuted) return;
        
        frequencies.forEach((freq, index) => {
            this.playSound(freq, duration - (index * 0.02), volume * 0.7, 'sine', delay + (index * 0.01));
        });
    },
    
    // Volume control for cozy experience
    setMasterVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
        console.log(`Master volume set to: ${(this.masterVolume * 100).toFixed(0)}%`);
    },
    
    // Get current master volume
    getMasterVolume() {
        return this.masterVolume;
    }
};

// ============================================
// LOADING ANIMATION
// ============================================
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

// ============================================
// GALLERY INITIALIZATION
// ============================================
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

        // Create artist profile navigation button with name
        const artistBtn = document.createElement('div');
        artistBtn.className = 'artist-profile';
        artistBtn.setAttribute('data-artist-index', artistIndex);
        artistBtn.setAttribute('data-artist-name', artist.name);
        artistBtn.innerHTML = `
            <div class="artist-profile-img">
                <img src="${artist.profile}" alt="${artist.name}" />
            </div>
            <span class="artist-name">${artist.name.toUpperCase()}</span>
        `;
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
            slideChange: () => {
                playSlideSound();
                updateActiveArtist();
            }
        }
    });

    // Add click handlers to artist profiles with unique sound effects
    document.querySelectorAll('.artist-profile').forEach(profile => {
        profile.addEventListener('click', () => {
            // Initialize audio system on first interaction
            AudioSystem.init();
            
            // Get artist name and play their unique sound
            const artistName = profile.getAttribute('data-artist-name');
            playTattooSound(artistName);

            // Navigate to artist's work
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

// ============================================
// SLIDE SOUND EFFECT - SHORT LOW KICK
// ============================================
// Short, punchy low kick sound for cube slides
// Provides satisfying tactile feedback without being intrusive
function playSlideSound() {
    if (!AudioSystem.isSupported || isMuted) return;
    
    const ctx = AudioSystem.init();
    if (!ctx) return;
    
    AudioSystem.resume().then(success => {
        if (!success) return;
        
        try {
            // Create small deep bass sound
            const now = ctx.currentTime;
            
            // Deep bass oscillator - lower frequency for deeper sound
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(40, now); // Deep bass frequency
            osc.frequency.exponentialRampToValueAtTime(20, now + 0.15); // Slow pitch drop for deep rumble
            
            // Gain envelope for deep bass punch
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.15 * AudioSystem.masterVolume, now + 0.002); // Higher volume
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12); // Longer decay for deep bass
            
            // Connect and play
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(now);
            osc.stop(now + 0.12);
            
        } catch (error) {
            console.warn('Error playing deep bass sound:', error);
        }
    });
}

// ============================================
// ARTIST SOUNDS - COZY & MINIMALISTIC
// ============================================
function playTattooSound(artistName) {
    const artistSounds = {
        'dani': () => AudioSystem.playChord([523.25, 659.25, 783.99], 0.08, 0.015), // C Major - soft
        'derk': () => AudioSystem.playChord([587.33, 739.99, 880.00], 0.08, 0.015), // D Major - gentle
        'gosha': () => AudioSystem.playChord([392.00, 493.88, 587.33], 0.08, 0.015), // G Major - warm
        'groc': () => AudioSystem.playChord([349.23, 440.00, 523.25], 0.08, 0.015), // F Major - cozy
        'jenya': () => AudioSystem.playChord([440.00, 523.25, 659.25], 0.08, 0.015), // A Minor - subtle
        'shon': () => AudioSystem.playChord([329.63, 392.00, 493.88], 0.08, 0.015), // E Minor - quiet
        'sunches': () => {
            AudioSystem.playChord([440.00, 554.37, 659.25], 0.06, 0.015);
            AudioSystem.playSound(880.00, 0.04, 0.01, 'sine', 0.05); // Soft octave
        },
        'tact': () => {
            // Minimal pentatonic melody
            AudioSystem.playSound(523.25, 0.03, 0.01, 'triangle');
            AudioSystem.playSound(587.33, 0.03, 0.01, 'triangle', 0.03);
            AudioSystem.playSound(659.25, 0.03, 0.01, 'triangle', 0.06);
            AudioSystem.playSound(783.99, 0.04, 0.01, 'triangle', 0.09);
        }
    };

    // Play the sound for the specific artist, or default to dani's sound
    if (artistSounds[artistName]) {
        artistSounds[artistName]();
    } else {
        artistSounds['dani']();
    }
}

// ============================================
// ACTIVE ARTIST TRACKING
// ============================================
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

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================
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

// ============================================
// BOOKING FORM - MULTI-STEP SYSTEM WITH PROGRESS BAR
// ============================================
// Stores user selections throughout the booking process
const bookingData = {
    placement: '',
    size: '',
    date: '',
    budget: ''
};

// Booking form configuration
const bookingSteps = [
    { id: 'placement', title: 'PLACEMENT', icon: '📍' },
    { id: 'size', title: 'SIZE', icon: '📏' },
    { id: 'date', title: 'DATE', icon: '📅' },
    { id: 'budget', title: 'BUDGET', icon: '💰' }
];

let currentStepIndex = 0;

// Message builder configuration
const messageConfig = {
    placement: {
        'arm': 'arm',
        'leg': 'leg', 
        'chest': 'chest',
        'back': 'back',
        'shoulder': 'shoulder',
        'neck': 'neck',
        'hand': 'hand',
        'other': 'other area'
    },
    size: {
        's': 'small',
        'm': 'medium',
        'l': 'large', 
        'xl': 'extra large'
    },
    budget: {
        'basic': 'basic budget',
        'standard': 'standard budget',
        'premium': 'premium budget',
        'luxury': 'luxury budget'
    }
};

// Generate dynamic message based on selections
function generateBookingMessage() {
    let message = "Hi! I'm interested in getting a tattoo";
    
    if (bookingData.placement) {
        message += ` on my ${messageConfig.placement[bookingData.placement]}`;
    }
    
    if (bookingData.size) {
        message += `, ${messageConfig.size[bookingData.size]} size`;
    }
    
    if (bookingData.budget) {
        message += `, ${messageConfig.budget[bookingData.budget]}`;
    }
    
    if (bookingData.date) {
        const dateObj = new Date(bookingData.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        message += `, preferred date: ${formattedDate}`;
    }
    
    message += ". Looking forward to hearing from you!";
    
    return message;
}

// Update message display
function updateMessageDisplay() {
    const messageElement = document.getElementById('booking-message');
    if (messageElement) {
        const message = generateBookingMessage();
        messageElement.textContent = message;
        
        // Add animation
        messageElement.style.opacity = '0';
        setTimeout(() => {
            messageElement.style.opacity = '1';
        }, 100);
    }
}

// Validation functions
function validateStep(stepIndex) {
    switch(stepIndex) {
        case 0: // Placement step
            return validatePlacement();
        case 1: // Size step
            return validateSize();
        case 2: // Date step
            return validateDate();
        case 3: // Budget step
            return validateBudget();
        default:
            return true;
    }
}

function validatePlacement() {
    if (!bookingData.placement) {
        showValidationError('Please select a placement for your tattoo');
        return false;
    }
    return true;
}

function validateSize() {
    if (!bookingData.size) {
        showValidationError('Please select a size for your tattoo');
        return false;
    }
    return true;
}

function validateDate() {
    const dateInput = document.getElementById('tattoo-date');
    
    // Check if date input exists
    if (!dateInput) {
        showValidationError('Date input not found. Please refresh the page.');
        return false;
    }
    
    // Check if date is selected
    if (!dateInput.value) {
        showValidationError('Please select a date for your tattoo appointment');
        return false;
    }
    
    // Parse the selected date
    const selectedDate = new Date(dateInput.value);
    
    // Check if date is valid
    if (isNaN(selectedDate.getTime())) {
        showValidationError('Please select a valid date');
        return false;
    }
    
    // Get today's date (start of day)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Check if date is in the future
    if (selectedDate <= today) {
        showValidationError('Please select a future date for your appointment');
        return false;
    }
    
    // Check if date is not too far in the future (optional - within 1 year)
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    
    if (selectedDate > oneYearFromNow) {
        showValidationError('Please select a date within the next year');
        return false;
    }
    
    // Date is valid - it's already stored in bookingData.date by the event listener
    return true;
}

function validateBudget() {
    if (!bookingData.budget) {
        showValidationError('Please select a budget range for your tattoo');
        return false;
    }
    
    // Additional validation - check if budget value is valid
    const validBudgets = ['basic', 'standard', 'premium', 'luxury'];
    if (!validBudgets.includes(bookingData.budget)) {
        showValidationError('Please select a valid budget option');
        return false;
    }
    
    return true;
}

function showValidationError(message) {
    // Remove existing validation messages
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'validation-error';
    errorElement.textContent = message;
    
    // Insert error message after the current step
    const currentStep = document.querySelector('.booking-step[style*="block"]');
    if (currentStep) {
        currentStep.appendChild(errorElement);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorElement.parentNode) {
                errorElement.remove();
            }
        }, 5000);
    }
}

function clearValidationError() {
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
}

// Generate progress bar HTML
function generateProgressBar(stepIndex) {
    const progressPercentage = ((stepIndex + 1) / bookingSteps.length) * 100;
    
    return `
        <div class="booking-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercentage}%"></div>
            </div>
            <div class="step-indicators">
                ${bookingSteps.map((step, index) => `
                    <div class="step-indicator ${index <= stepIndex ? 'completed' : ''} ${index === stepIndex ? 'current' : ''}">
                        <span class="step-icon">${step.icon}</span>
                        <span class="step-title">${step.title}</span>
                    </div>
                `).join('')}
            </div>
            <div class="step-counter">STEP ${stepIndex + 1} OF ${bookingSteps.length}</div>
        </div>
    `;
}

// Custom SweetAlert2 styling with full screen popup
const swalStyle = {
    background: '#000',
    color: '#fff',
    confirmButtonColor: '#fff',
    confirmButtonText: 'NEXT ▶',
    showCancelButton: true,
    cancelButtonColor: '#333',
    cancelButtonText: '◀ BACK',
    showCloseButton: true,
    closeButtonHtml: '<span class="close-btn">✕</span>',
    allowOutsideClick: false,
    allowEscapeKey: true,
    width: '100vw',
    height: '100vh',
    padding: '0',
    margin: '0',
    customClass: {
        popup: 'brutal-popup-fullscreen',
        title: 'brutal-title',
        confirmButton: 'brutal-confirm',
        cancelButton: 'brutal-cancel',
        closeButton: 'brutal-close'
    }
};

// Single Popup Booking Form
async function showBookingForm() {
    currentStepIndex = 0;
    
    const placements = [
        { id: 'arm', label: 'ARM', icon: '▓' },
        { id: 'leg', label: 'LEG', icon: '▼' },
        { id: 'chest', label: 'CHEST', icon: '■' },
        { id: 'back', label: 'BACK', icon: '●' },
        { id: 'shoulder', label: 'SHOULDER', icon: '◢' },
        { id: 'neck', label: 'NECK', icon: '▬' },
        { id: 'hand', label: 'HAND', icon: '◆' },
        { id: 'other', label: 'OTHER', icon: '✦' }
    ];

    const sizes = [
        { id: 's', label: 'S', desc: 'SMALL', size: '2-4cm' },
        { id: 'm', label: 'M', desc: 'MEDIUM', size: '5-10cm' },
        { id: 'l', label: 'L', desc: 'LARGE', size: '11-20cm' },
        { id: 'xl', label: 'XL', desc: 'X-LARGE', size: '20cm+' }
    ];

    const budgets = [
        { id: 'basic', label: 'BASIC', price: '₪500-1000', icon: '◆' },
        { id: 'standard', label: 'STANDARD', price: '₪1000-2000', icon: '◆◆' },
        { id: 'premium', label: 'PREMIUM', price: '₪2000-3500', icon: '◆◆◆' },
        { id: 'luxury', label: 'LUXURY', price: '₪3500+', icon: '◆◆◆◆' }
    ];

    // Get tomorrow's date as minimum
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    const bookingHTML = `
        ${generateProgressBar(currentStepIndex)}
        
        <!-- Dynamic Message Display -->
        <div class="booking-message-container">
            <p class="booking-message-preview">Your message will be:</p>
            <div class="booking-message" id="booking-message">Hi! I'm interested in getting a tattoo. Looking forward to hearing from you!</div>
        </div>
        
        <!-- Step 1: Placement -->
        <div class="booking-step" id="step-placement" style="display: block;">
            <div class="placement-grid">
                ${placements.map(p => `
                    <button class="placement-box" data-placement="${p.id}">
                        <span class="placement-icon">${p.icon}</span>
                        <span class="placement-label">${p.label}</span>
                    </button>
                `).join('')}
            </div>
        </div>

        <!-- Step 2: Size -->
        <div class="booking-step" id="step-size" style="display: none;">
            <div class="size-grid">
                ${sizes.map(s => `
                    <button class="size-box" data-size="${s.id}">
                        <span class="size-label">${s.label}</span>
                        <span class="size-desc">${s.desc}</span>
                        <span class="size-measurement">${s.size}</span>
                    </button>
                `).join('')}
            </div>
        </div>

        <!-- Step 3: Date -->
        <div class="booking-step" id="step-date" style="display: none;">
            <input type="date" id="tattoo-date" class="swal-date-input" min="${minDate}" />
            <p class="date-note">SELECT YOUR PREFERRED DATE</p>
        </div>

        <!-- Step 4: Budget -->
        <div class="booking-step" id="step-budget" style="display: none;">
            <div class="budget-grid">
                ${budgets.map(b => `
                    <button class="budget-box" data-budget="${b.id}">
                        <span class="budget-icon">${b.icon}</span>
                        <span class="budget-label">${b.label}</span>
                        <span class="budget-price">${b.price}</span>
                    </button>
                `).join('')}
            </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="booking-navigation">
            <button class="booking-btn booking-back" id="booking-back" style="display: none;">◀ BACK</button>
            <button class="booking-btn booking-next" id="booking-next" style="display: none;">NEXT ▶</button>
            <button class="booking-btn booking-submit" id="booking-submit" style="display: none;">COMPLETE BOOKING</button>
        </div>
    `;

    const result = await Swal.fire({
        title: 'BOOK YOUR TATTOO',
        html: bookingHTML,
        ...swalStyle,
        showConfirmButton: false,
        showCancelButton: false,
        didOpen: () => {
            initializeBookingForm();
        }
    });
}

// Initialize Single Popup Booking Form
function initializeBookingForm() {
    // Step navigation functions
    function showStep(stepIndex) {
        // Hide all steps
        document.querySelectorAll('.booking-step').forEach(step => {
            step.style.display = 'none';
        });
        
        // Show current step
        const stepNames = ['placement', 'size', 'date', 'budget'];
        const currentStep = document.getElementById(`step-${stepNames[stepIndex]}`);
        if (currentStep) {
            currentStep.style.display = 'block';
        }
        
        // Update progress bar
        const progressBar = document.querySelector('.booking-progress');
        if (progressBar) {
            progressBar.innerHTML = generateProgressBar(stepIndex);
        }
        
        // Update navigation buttons
        updateNavigationButtons(stepIndex);
    }
    
    function updateNavigationButtons(stepIndex) {
        const backBtn = document.getElementById('booking-back');
        const nextBtn = document.getElementById('booking-next');
        const submitBtn = document.getElementById('booking-submit');
        
        // Show/hide back button
        if (stepIndex > 0) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
        
        // Show/hide next/submit buttons
        if (stepIndex < bookingSteps.length - 1) {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        }
    }
    
    function goToNextStep() {
        // Validate current step before proceeding
        if (!validateStep(currentStepIndex)) {
            return;
        }
        
        clearValidationError();
        
        if (currentStepIndex < bookingSteps.length - 1) {
            currentStepIndex++;
            showStep(currentStepIndex);
        }
    }
    
    function goToPreviousStep() {
        clearValidationError();
        
        if (currentStepIndex > 0) {
            currentStepIndex--;
            showStep(currentStepIndex);
        }
    }
    
    // Event listeners for step buttons
    document.querySelectorAll('.placement-box').forEach(box => {
        box.addEventListener('click', () => {
            // Remove selected class from all placement boxes
            document.querySelectorAll('.placement-box').forEach(b => b.classList.remove('selected'));
            
            // Add selected class to clicked box
            box.classList.add('selected');
            
            bookingData.placement = box.dataset.placement;
            updateMessageDisplay();
            goToNextStep();
        });
    });
    
    document.querySelectorAll('.size-box').forEach(box => {
        box.addEventListener('click', () => {
            // Remove selected class from all size boxes
            document.querySelectorAll('.size-box').forEach(b => b.classList.remove('selected'));
            
            // Add selected class to clicked box
            box.classList.add('selected');
            
            bookingData.size = box.dataset.size;
            updateMessageDisplay();
            goToNextStep();
        });
    });
    
    document.querySelectorAll('.budget-box').forEach(box => {
        box.addEventListener('click', () => {
            // Remove selected class from all budget boxes
            document.querySelectorAll('.budget-box').forEach(b => b.classList.remove('selected'));
            
            // Add selected class to clicked box
            box.classList.add('selected');
            
            bookingData.budget = box.dataset.budget;
            updateMessageDisplay();
            
            // Clear any validation errors
            clearValidationError();
            
            // Validate the budget and proceed to completion
            if (validateBudget()) {
                // Add a small delay for better UX
                setTimeout(() => {
                    // Since budget is the last step, proceed to completion
                    finalizeBooking();
                }, 300);
            }
        });
    });
    
    // Date input listener
    const dateInput = document.getElementById('tattoo-date');
    if (dateInput) {
        dateInput.addEventListener('change', () => {
            // Store the date value
            bookingData.date = dateInput.value;
            updateMessageDisplay();
            
            // Clear any validation errors
            clearValidationError();
            
            // Validate the date and auto-advance if valid
            if (validateDate()) {
                // Add a small delay for better UX
                setTimeout(() => {
                    goToNextStep();
                }, 300);
            }
        });
    }
    
    // Navigation button listeners
    document.getElementById('booking-back').addEventListener('click', goToPreviousStep);
    document.getElementById('booking-next').addEventListener('click', goToNextStep);
    
    document.getElementById('booking-submit').addEventListener('click', () => {
        // Validate all steps before final submission
        if (!validateStep(currentStepIndex)) {
            return;
        }
        
        clearValidationError();
        finalizeBooking();
    });
    
    // Initialize first step
    showStep(0);
    
    // Enhanced scrollbar functionality
    initializeScrollbarEnhancements();
}

// Enhanced scrollbar functionality
function initializeScrollbarEnhancements() {
    const contentElement = document.querySelector('.brutal-popup-fullscreen .swal2-content');
    if (!contentElement) return;
    
    let scrollTimeout;
    
    // Add scrolling class during scroll
    contentElement.addEventListener('scroll', () => {
        contentElement.classList.add('scrolling');
        
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Remove scrolling class after scroll ends
        scrollTimeout = setTimeout(() => {
            contentElement.classList.remove('scrolling');
        }, 150);
    });
    
    // Add smooth scroll behavior
    contentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll momentum for mobile
    contentElement.style.webkitOverflowScrolling = 'touch';
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

    // Show completion screen with full progress bar
    const completionHTML = `
        ${generateProgressBar(bookingSteps.length - 1)}
        <div class="completion-summary">
            <h3 class="summary-title">BOOKING SUMMARY</h3>
            <div class="summary-item">
                <span class="summary-label">📍 PLACEMENT:</span>
                <span class="summary-value">${bookingData.placement.toUpperCase()}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">📏 SIZE:</span>
                <span class="summary-value">${bookingData.size.toUpperCase()}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">📅 DATE:</span>
                <span class="summary-value">${bookingData.date}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">💰 BUDGET:</span>
                <span class="summary-value">${bookingData.budget.toUpperCase()}</span>
            </div>
        </div>
        <p class="redirect-message">REDIRECTING TO WHATSAPP...</p>
    `;

    await Swal.fire({
        title: 'BOOKING COMPLETE!',
        html: completionHTML,
        icon: 'success',
        ...swalStyle,
        showConfirmButton: false,
        timer: 3000
    });

    window.open(whatsappURL, '_blank');
}

// ============================================
// MUTE BUTTON
// ============================================
function toggleMute() {
    isMuted = !isMuted;
    const muteBtn = document.getElementById('mute-btn');
    if (muteBtn) {
        if (isMuted) {
            muteBtn.classList.add('muted');
        } else {
            muteBtn.classList.remove('muted');
        }
    }
}

// Initialize Booking Flow and Mute Button
document.addEventListener('DOMContentLoaded', () => {
    const bookNowBtn = document.getElementById('book-now-btn');
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            AudioSystem.init(); // Initialize audio on first user interaction
            showBookingForm();
        });
    }

    const muteBtn = document.getElementById('mute-btn');
    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            AudioSystem.init(); // Initialize audio on first user interaction
            toggleMute();
        });
    }
    
    // Initialize audio system on any user interaction
    const initAudioOnInteraction = () => {
        AudioSystem.init();
        document.removeEventListener('click', initAudioOnInteraction);
        document.removeEventListener('touchstart', initAudioOnInteraction);
        document.removeEventListener('keydown', initAudioOnInteraction);
    };
    
    document.addEventListener('click', initAudioOnInteraction);
    document.addEventListener('touchstart', initAudioOnInteraction);
    document.addEventListener('keydown', initAudioOnInteraction);
});
