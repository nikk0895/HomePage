document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = mobileMenuButton.querySelector('[data-lucide="menu"]')

  const lucide = window.lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  mobileMenuButton.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden")

    if (isHidden) {
      mobileMenu.classList.remove("hidden")
      menuIcon.setAttribute("data-lucide", "x")
    } else {
      mobileMenu.classList.add("hidden")
      menuIcon.setAttribute("data-lucide", "menu")
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }
  })

  document.addEventListener("click", (event) => {
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.add("hidden")
      menuIcon.setAttribute("data-lucide", "menu")
      if (typeof lucide !== "undefined") {
        lucide.createIcons()
      }
    }
  })

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
