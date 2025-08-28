// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = mobileMenuButton.querySelector('[data-lucide="menu"]')

  // Declare the lucide variable
  const lucide = window.lucide

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Toggle mobile menu
  mobileMenuButton.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden")

    if (isHidden) {
      mobileMenu.classList.remove("hidden")
      menuIcon.setAttribute("data-lucide", "x")
    } else {
      mobileMenu.classList.add("hidden")
      menuIcon.setAttribute("data-lucide", "menu")
    }

    // Reinitialize Lucide icons after changing the icon
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.add("hidden")
      menuIcon.setAttribute("data-lucide", "menu")
      if (typeof lucide !== "undefined") {
        lucide.createIcons()
      }
    }
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mobileMenu.classList.add("hidden")
      menuIcon.setAttribute("data-lucide", "menu")
      if (typeof lucide !== "undefined") {
        lucide.createIcons()
      }
    }
  })
})
