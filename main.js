// AcademiaHub - Main JavaScript
// Premium Academic Materials Marketplace

/* ========================================
   INITIALIZATION
   ======================================== */

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 100
    });
    
    // Initialize all components
    initThemeToggle();
    initNavigation();
    initSearch();
    initScrollEffects();
    initCounterAnimation();
    initTypingEffect();
    initPaymentModal();
});

/* ========================================
   THEME TOGGLE (Dark/Light Mode)
   ======================================== */

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeIcon(true);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcon(isDark);
            
            // Add animation
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    }
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

/* ========================================
   NAVIGATION
   ======================================== */

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect on navbar
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate hamburger
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    }
}

/* ========================================
   SEARCH OVERLAY
   ======================================== */

function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn && searchOverlay) {
        // Open search
        searchBtn.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        });
        
        // Close search
        if (searchClose) {
            searchClose.addEventListener('click', function() {
                searchOverlay.classList.remove('active');
            });
        }
        
        // Close on overlay click
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
        
        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
        });
        
        // Search suggestions click
        const suggestions = document.querySelectorAll('.suggestion-tag');
        suggestions.forEach(tag => {
            tag.addEventListener('click', function() {
                searchInput.value = this.textContent;
                searchInput.focus();
            });
        });
        
        // Search on Enter
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const query = this.value.trim();
                    if (query) {
                        window.location.href = `library.html?search=${encodeURIComponent(query)}`;
                    }
                }
            });
        }
    }
}

/* ========================================
   SCROLL EFFECTS
   ======================================== */

function initScrollEffects() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========================================
   COUNTER ANIMATION
   ======================================== */

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Use Intersection Observer to trigger animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

/* ========================================
   TYPING EFFECT
   ======================================== */

function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    
    if (typingElement) {
        const words = ['Excellence', 'Success', 'Innovation', 'Knowledge', 'Achievement'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before next word
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    }
}

/* ========================================
   PAYMENT MODAL
   ======================================== */

function initPaymentModal() {
    const unlockButtons = document.querySelectorAll('.btn-unlock, .unlock-prompt .btn-primary');
    
    unlockButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showPaymentOptions();
        });
    });
}

function showPaymentOptions() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'payment-modal-overlay';
    modal.innerHTML = `
        <div class="payment-modal">
            <button class="payment-modal-close">
                <i class="fas fa-times"></i>
            </button>
            <div class="payment-modal-header">
                <div class="payment-modal-icon">
                    <i class="fas fa-lock-open"></i>
                </div>
                <h2>Unlock Full Document</h2>
                <p>Choose your preferred payment method</p>
            </div>
            <div class="payment-modal-content">
                <div class="payment-option">
                    <div class="payment-option-header">
                        <i class="fab fa-whatsapp"></i>
                        <h3>WhatsApp Payment</h3>
                    </div>
                    <p>Contact us directly via WhatsApp for instant support and payment processing</p>
                    <a href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi! I want to unlock this document" 
                       class="btn btn-whatsapp btn-large" target="_blank">
                        <i class="fab fa-whatsapp"></i> Continue with WhatsApp
                    </a>
                </div>
                
                <div class="payment-divider">
                    <span>OR</span>
                </div>
                
                <div class="payment-option">
                    <div class="payment-option-header">
                        <i class="fas fa-credit-card"></i>
                        <h3>Online Payment</h3>
                    </div>
                    <p>Secure payment via credit card, PayPal, or bank transfer</p>
                    <div class="payment-methods-list">
                        <button class="payment-method-btn">
                            <i class="fab fa-cc-visa"></i>
                            <span>Credit Card</span>
                        </button>
                        <button class="payment-method-btn">
                            <i class="fab fa-paypal"></i>
                            <span>PayPal</span>
                        </button>
                        <button class="payment-method-btn">
                            <i class="fab fa-cc-stripe"></i>
                            <span>Stripe</span>
                        </button>
                    </div>
                </div>
                
                <div class="payment-guarantee">
                    <i class="fas fa-shield-alt"></i>
                    <div>
                        <strong>100% Secure Payment</strong>
                        <p>Your payment information is encrypted and secure. 30-day money-back guarantee.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add styles for modal
    addPaymentModalStyles();
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close modal
    const closeBtn = modal.querySelector('.payment-modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
    
    // Payment method buttons (placeholder - integrate with actual payment gateway)
    const paymentBtns = modal.querySelectorAll('.payment-method-btn');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Payment integration coming soon! For now, please use WhatsApp option.');
        });
    });
}

function addPaymentModalStyles() {
    if (!document.getElementById('payment-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'payment-modal-styles';
        style.textContent = `
            .payment-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .payment-modal-overlay.active {
                opacity: 1;
            }
            
            .payment-modal {
                background: var(--bg-card);
                border-radius: var(--radius-lg);
                max-width: 600px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }
            
            .payment-modal-overlay.active .payment-modal {
                transform: scale(1);
            }
            
            .payment-modal-close {
                position: absolute;
                top: 20px;
                right: 20px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: none;
                background: var(--bg-secondary);
                color: var(--text-primary);
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.2s ease;
                z-index: 1;
            }
            
            .payment-modal-close:hover {
                background: var(--primary-color);
                color: white;
                transform: rotate(90deg);
            }
            
            .payment-modal-header {
                text-align: center;
                padding: 40px 40px 30px;
                border-bottom: 1px solid var(--border-color);
            }
            
            .payment-modal-icon {
                width: 80px;
                height: 80px;
                margin: 0 auto 20px;
                background: var(--primary-gradient);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                color: white;
            }
            
            .payment-modal-header h2 {
                font-size: 2rem;
                font-weight: 700;
                color: var(--text-primary);
                margin-bottom: 10px;
            }
            
            .payment-modal-header p {
                color: var(--text-secondary);
            }
            
            .payment-modal-content {
                padding: 30px 40px 40px;
            }
            
            .payment-option {
                padding: 25px;
                background: var(--bg-secondary);
                border-radius: var(--radius-md);
                margin-bottom: 20px;
            }
            
            .payment-option-header {
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 15px;
            }
            
            .payment-option-header i {
                font-size: 2rem;
                color: var(--primary-color);
            }
            
            .payment-option-header h3 {
                font-size: 1.3rem;
                font-weight: 700;
                color: var(--text-primary);
            }
            
            .payment-option p {
                color: var(--text-secondary);
                margin-bottom: 20px;
                line-height: 1.6;
            }
            
            .payment-divider {
                text-align: center;
                margin: 20px 0;
                position: relative;
            }
            
            .payment-divider::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                height: 1px;
                background: var(--border-color);
                z-index: 0;
            }
            
            .payment-divider span {
                background: var(--bg-card);
                padding: 0 15px;
                color: var(--text-muted);
                position: relative;
                z-index: 1;
            }
            
            .payment-methods-list {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
            
            .payment-method-btn {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                padding: 20px 10px;
                background: var(--bg-card);
                border: 2px solid var(--border-color);
                border-radius: var(--radius-sm);
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .payment-method-btn:hover {
                border-color: var(--primary-color);
                transform: translateY(-2px);
            }
            
            .payment-method-btn i {
                font-size: 2rem;
                color: var(--primary-color);
            }
            
            .payment-method-btn span {
                font-size: 0.85rem;
                color: var(--text-secondary);
                font-weight: 500;
            }
            
            .payment-guarantee {
                display: flex;
                gap: 15px;
                padding: 20px;
                background: rgba(16, 185, 129, 0.1);
                border-radius: var(--radius-sm);
                margin-top: 20px;
            }
            
            .payment-guarantee i {
                font-size: 2rem;
                color: #10b981;
                flex-shrink: 0;
            }
            
            .payment-guarantee strong {
                display: block;
                color: #10b981;
                margin-bottom: 5px;
            }
            
            .payment-guarantee p {
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin: 0;
            }
            
            @media (max-width: 768px) {
                .payment-modal {
                    margin: 20px;
                }
                
                .payment-modal-header {
                    padding: 30px 20px 20px;
                }
                
                .payment-modal-content {
                    padding: 20px;
                }
                
                .payment-methods-list {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/* ========================================
   CONSOLE MESSAGE
   ======================================== */

console.log('%c🎓 AcademiaHub ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;');
console.log('%cPremium Academic Materials Marketplace', 'color: #667eea; font-size: 14px; font-weight: bold;');
console.log('%cVersion 1.0.0', 'color: #718096; font-size: 12px;');