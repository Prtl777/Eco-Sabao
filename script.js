// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(7, 95, 51, 0.98)"
  } else {
    header.style.background = "rgba(7, 95, 51, 0.95)"
  }
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".steps-list li, .media-item, .highlight-box").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Add hover effect to CTA button
const ctaButton = document.querySelector(".cta-button")
if (ctaButton) {
  ctaButton.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.05)"
  })

  ctaButton.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
}

// Mobile menu toggle function
function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links")
  const menuToggle = document.querySelector(".mobile-menu-toggle")

  navLinks.classList.toggle("mobile-active")
  menuToggle.classList.toggle("active")
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links")
    const menuToggle = document.querySelector(".mobile-menu-toggle")

    navLinks.classList.remove("mobile-active")
    menuToggle.classList.remove("active")
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const navLinks = document.querySelector(".nav-links")
  const menuToggle = document.querySelector(".mobile-menu-toggle")

  if (navLinks.classList.contains("mobile-active") && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove("mobile-active")
    menuToggle.classList.remove("active")
  }
})

// Initialize any components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Sabão Ecológico - Site carregado com sucesso!")

  // Add loading animation
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)

  // Check if it's a touch device
  if ("ontouchstart" in window) {
    addTouchFeedback()
  }
})

// Add touch feedback for mobile devices
function addTouchFeedback() {
  const touchElements = document.querySelectorAll(".cta-button, .steps-list li, .media-item")

  touchElements.forEach((el) => {
    el.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.98)"
    })

    el.addEventListener("touchend", function () {
      setTimeout(() => {
        this.style.transform = ""
      }, 150)
    })
  })
}

// Handle orientation change
window.addEventListener("orientationchange", () => {
  // Adjust hero height for landscape mode on small devices
  const hero = document.querySelector(".hero")
  if (window.orientation === 90 || window.orientation === -90) {
    if (window.innerHeight < 500) {
      hero.style.height = "auto"
      hero.style.minHeight = "100vh"
      hero.style.padding = "6rem 0 2rem"
    }
  } else {
    hero.style.height = "100vh"
    hero.style.padding = "0"
  }
})
