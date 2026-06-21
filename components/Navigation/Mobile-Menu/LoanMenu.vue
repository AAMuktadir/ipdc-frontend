<template>
  <transition name="slide-Loan-Menu">
    <section v-if="show" class="loan-menu">
      <div class="loan-menu-heading">
        <a @click="$emit('close')" class="loan-menu-arrow">
          <svg
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.1247 11.375H7.99591L15.0084 4.38375C15.4086 3.9836 15.6334 3.44089 15.6334 2.875C15.6334 2.30911 15.4086 1.76639 15.0084 1.36625C14.6083 0.966102 14.0655 0.741302 13.4997 0.741302C12.9338 0.741302 12.3911 0.966102 11.9909 1.36625L1.36591 11.9912C1.17245 12.1933 1.0208 12.4317 0.919658 12.6925C0.707119 13.2099 0.707119 13.7901 0.919658 14.3075C1.0208 14.5683 1.17245 14.8067 1.36591 15.0087L11.9909 25.6337C12.1885 25.8329 12.4235 25.991 12.6824 26.0989C12.9414 26.2068 13.2191 26.2623 13.4997 26.2623C13.7802 26.2623 14.0579 26.2068 14.3169 26.0989C14.5758 25.991 14.8109 25.8329 15.0084 25.6337C15.2076 25.4362 15.3657 25.2012 15.4736 24.9422C15.5814 24.6833 15.637 24.4055 15.637 24.125C15.637 23.8445 15.5814 23.5667 15.4736 23.3078C15.3657 23.0488 15.2076 22.8138 15.0084 22.6162L7.99591 15.625H24.1247C24.6882 15.625 25.2287 15.4011 25.6273 15.0026C26.0258 14.6041 26.2497 14.0636 26.2497 13.5C26.2497 12.9364 26.0258 12.3959 25.6273 11.9974C25.2287 11.5989 24.6882 11.375 24.1247 11.375Z"
            />
          </svg>
        </a>
        <a href="#" class="loan-menu-logo">
          <img src="~assets/image/logo/footerLogo.png" alt="Ipdc" />
        </a>
      </div>
      <div class="loan-menu-section">
        <ul>
          <li>
            <h4 v-if="$i18n.locale == 'en'">IPDC Loan</h4>
            <h4 v-if="$i18n.locale == 'bn'">আইপিডিসি লোন</h4>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/autoloan')">
              {{ $i18n.locale == "en" ? "Auto Loan" : "অটো লোন" }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/homeloan')">
              {{ $i18n.locale == "en" ? "Home Loan" : "হোম লোন" }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/personalloan')">
              {{ $i18n.locale == "en" ? "Personal Loan" : "পার্সোনাল লোন" }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/bhalobasa-loan')">
              {{ $i18n.locale == "en" ? "Bhalo Basha Loan" : "ভালো বাসা লোন" }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/ipdc-sme')">
              {{ $i18n.locale == "en" ? "Sme" : "এসএমই" }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/corporate-financial-service')">
              {{ $i18n.locale == "en" ? "Corporate" : "কর্পোরেট" }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/supply-chain')">
              {{
                $i18n.locale == "en"
                  ? "Supply Chain Finance"
                  : "সাপ্লাই চেইন ফাইন্যান্স"
              }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/joyee')">
              {{ $i18n.locale == "en" ? "Joyee" : "জয়ী" }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/priti')">
              {{ $i18n.locale == "en" ? "Priti" : "প্রীতি" }}
              <div class="loan-circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.loan-menu {
  //   display: none;
  position: fixed;
  top: 0;
  background: #dedede;
  z-index: 101;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;

  &-heading {
    display: flex;
    padding: 25px 0 0 30px;

    .loan-menu-arrow {
      svg {
        width: 25px;
        height: 20px;
        path {
          fill: #343434;
        }
      }
    }
    .loan-menu-logo {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      img {
        width: 110px;
        height: 35px;
      }
    }
  }
  &-section {
    padding: 20px 0 0 0;
    ul {
      padding: 0;
      li {
        list-style: none;
        padding: 0 20px 0 30px;
        margin: 7px 0;
        border-bottom: 1px solid #e7e7e7;
        a {
          display: flex;
          justify-content: space-between;
          font-weight: 400;
          font-size: 18px;
          color: #343434;
          text-decoration: none;
        }
        h4 {
          font-weight: 600;
          font-size: 20px;
          line-height: 134%;
          color: #343434;
          margin-bottom: 10px;
        }
        &:first-child {
          border: none;
        }
        .loan-circle {
          width: 20px;
          height: 20px;
          background: rgba(40, 135, 245, 0.2);
          mix-blend-mode: normal;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 6px;
            height: 7px;
          }
        }
      }
    }
  }
}

.slide-Loan-Menu-enter-active,
.slide-Loan-Menu-leave-active {
  transition: all 0.4s ease-out;
}
.slide-Loan-Menu-enter,
.slide-Loan-Menu-leave-to {
  transform: translateX(100%);
}

@media screen and (min-width: 1050px) {
  .loan-menu {
    display: none;
  }
}
</style>
