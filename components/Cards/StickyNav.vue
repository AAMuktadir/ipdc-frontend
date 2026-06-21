<template>
  <nav class="sticky-nav" :class="{ 'is-scrolled': isScrolled }">
    <div class="nav-wrapper">
      <!-- <div class="logo-container" @click="scrollTo('hero')">
        <img src="~/assets/image/logo/Logo.svg" alt="IPDC Logo" class="logo" />
      </div> -->

      <div class="logo-container">
        <nuxt-link class="logo_ipdc" :to="localePath('/')" style="opacity: 1">
          <img
            src="~/assets/image/logo/Logo.svg"
            alt="IPDC Logo"
            class="logo"
          />
        </nuxt-link>
      </div>

      <div class="nav-links desktop-only">
        <a
          v-for="item in items"
          :key="item.id"
          :class="{ active: active === item.id }"
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="nav-actions">
        <!-- <button class="apply-btn desktop-only" @click="goToSignup">
          Apply Now
        </button> -->

        <div
          class="menu-toggle"
          @click="toggleMenu"
          :class="{ 'is-active': isMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <transition name="slide">
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-nav-links">
          <a
            v-for="item in items"
            :key="item.id"
            :class="{ active: active === item.id }"
            @click="mobileScrollTo(item.id)"
          >
            {{ item.label }}
          </a>
          <!-- <button class="apply-btn mobile-apply" @click="goToSignup">
            Apply Now
          </button> -->
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "StickyNav",
  data() {
    return {
      active: "hero",
      isScrolled: false,
      isMenuOpen: false,
      items: [
        { id: "hero", label: "Overview" },
        { id: "card", label: "Cards" },
        // { id: "jagoo-card", label: "Jagoo" },
        // { id: "elite-card", label: "Elite" },
        // { id: "joyee-card", label: "Joyee" },
        // { id: "infinite-card", label: "Infinite" },
        { id: "benefits", label: "Offers" },
        { id: "terms-section", label: "Terms" },
        { id: "faq-section", label: "FAQ" },
      ],
      navbarOffset: 87,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Prevent scrolling when menu is open
      document.body.style.overflow = this.isMenuOpen ? "hidden" : "";
    },
    goToSignup() {
      this.isMenuOpen = false;
      document.body.style.overflow = "";
      this.$router.push("/customer-signup");
    },
    scrollTo(id) {
      const section = document.getElementById(id);
      if (!section) return;

      const smoother = this.$root.smoother;
      if (smoother) {
        smoother.scrollTo(section, true, `top ${this.navbarOffset}`);
      } else {
        this.$gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: section, offsetY: this.navbarOffset },
          ease: "power4.inOut",
        });
      }
    },
    mobileScrollTo(id) {
      this.toggleMenu(); // Close menu
      setTimeout(() => {
        this.scrollTo(id);
      }, 300); // Wait for menu transition
    },
  },
};
</script>

<style scoped>
.sticky-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 87px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: all 0.4s ease;
  /* background: transparent; */
  background: rgba(0, 0, 0, 0.9);
}

.sticky-nav.is-scrolled {
  height: 87px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.nav-wrapper {
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 55px;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 30px;
}

a {
  color: white;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 0;
}

a:hover,
a.active {
  opacity: 1;
  color: #ed017f;
}

.apply-btn {
  background: #ed017f;
  color: rgb(255, 255, 255);
  border: none;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.apply-btn:hover {
  transform: scale(1.05);
}

/* Hamburger Menu Icon */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 10001;
}

.menu-toggle span {
  width: 30px;
  height: 2px;
  background: white;
  transition: 0.3s;
}

/* Hamburger Animation */
.menu-toggle.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.menu-toggle.is-active span:nth-child(2) {
  opacity: 0;
}
.menu-toggle.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Drawer Styles */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.mobile-nav-links a {
  font-size: 24px;
}
.mobile-apply {
  margin-top: 20px;
  padding: 15px 40px;
  font-size: 18px;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

@media (max-width: 991px) {
  .desktop-only {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
}
</style>
