<template>
  <transition name="slide-Mobile-Menu">
    <section v-if="show" class="more-menu">
      <div class="more-menu-heading">
        <a class="More-menu-arrow" @click="$emit('close')">
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
        <a href="#" class="more-menu-logo">
          <img src="~assets/image/logo/footerLogo.png" alt="Ipdc" />
        </a>
      </div>
      <div class="more-menu-section">
        <ul>
          <li>
            <h4 v-if="$i18n.locale == 'en'">About Us</h4>
            <h4 v-if="$i18n.locale == 'bn'">আমাদের সম্পর্কে</h4>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/mission-vision')">
              {{ $i18n.locale == "en" ? "About IPDC" : "আইপিডিসি সম্পর্কে" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/management')">
              {{ $i18n.locale == "en" ? "Management" : "ম্যানেজমেন্ট" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/shareholders')">
              {{ $i18n.locale == "en" ? "Shareholders" : "শেয়ারহোল্ডারস" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/investor-relations')">
              {{
                $i18n.locale == "en"
                  ? "Investor Relations"
                  : "বিনিয়োগকারীর সাথে সম্পর্ক"
              }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/sustainability')">
              {{ $i18n.locale == "en" ? "Sustainability" : "সাসটেইনেবিলিটি" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/csr')">
              {{
                $i18n.locale == "en"
                  ? "CSR Activities"
                  : "কর্পোরেট সামাজিক দায়িত্ব"
              }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/news')">
              {{ $i18n.locale == "en" ? "News" : "নিউজ" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/career')">
              {{ $i18n.locale == "en" ? "Career" : "ক্যারিয়ার" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/signature-events')">
              {{ $i18n.locale == "en" ? "Events" : "ইভেন্টস" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/ipdc-awards')">
              {{ $i18n.locale == "en" ? "Awards" : "পুরস্কার" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/contact-us')">
              {{ $i18n.locale == "en" ? "Branch" : "শাখাসমূহ" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>

          <!-- <li @click="$emit('close')">
            <nuxt-link :to="localePath('/covid-19')">
              {{ $i18n.locale == "en" ? "COVID 19" : "কোভিড ১৯" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li> -->

          <!-- <li @click="$emit('close')">
            <nuxt-link :to="localePath('/digital-presence')">
              {{
                $i18n.locale == "en" ? "Digital Presence" : "ডিজিটাল প্রেজেন্স"
              }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li> -->
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/green-banking')">
              {{
                $i18n.locale == "en" ? "Green Financing" : "গ্রিন ফাইন্যান্সিং"
              }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/citizen-charter')">
              {{
                $i18n.locale == "en" ? "Citizen’s Charter" : "সিটিজেন'স চার্টার"
              }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>

          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/durjoy')">
              {{ $i18n.locale == "en" ? "Durjoy" : "দুর্জয়" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>

          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/ipdc-infinite')">
              <h4 v-if="$i18n.locale == 'en'">IPDC Infinite</h4>
              <h4 v-if="$i18n.locale == 'bn'">আইপিডিসি ইনফিনিট</h4>
              <!-- {{
                $i18n.locale == "en" ? "IPDC Infinite" : "আইপিডিসি ইনফিনিট"
              }} -->
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/cards')">
              <!-- <h4 v-if="$i18n.locale == 'en'">IPDC Infinite</h4> -->
              <!-- <h4 v-if="$i18n.locale == 'bn'">আইপিডিসি ইনফিনিট</h4> -->
              └─
              {{ $i18n.locale == "en" ? "Ucchash Card" : "উচ্ছ্বাস কার্ড" }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
        </ul>
        <!-- <ul>
          <li><h4>IPDC Business</h4></li>
          <li @click="$emit('close')">
            <nuxt-link to="ipdc-sme">
              SME
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="corporate-financial-service">
              Corporate
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
        </ul> -->
        <ul>
          <!-- <li><h4>Others</h4></li> -->
          <li @click="$emit('close')">
            <nuxt-link :to="localePath('/campaign')">
              <!-- <h4 v-if="$i18n.locale == 'en'">Ongoing Campaigns</h4>
              <h4 v-if="$i18n.locale == 'bn'">চলমান ক্যাম্পেইন</h4> -->
              {{
                $i18n.locale == "en" ? "Ongoing Campaigns" : "চলমান ক্যাম্পেইন"
              }}
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <!-- <li @click="$emit('close')">
            <nuxt-link to="campaign">
              Campaigns
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li> -->
          <!-- <li @click="$emit('close')">
            <nuxt-link to="/">
              CSR Activities
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="green-banking">
              Green Banking
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="/">
              News
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="career">
              Career
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="/">
              Goverment Securities Investment Window
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="/">
              Nis
              <div class="circle">
                <img src="~assets/image/right.png" alt="Right" />
              </div>
            </nuxt-link>
          </li> -->
        </ul>
      </div>
      <ul class="language-switcher" role="list">
        <li @click="$emit('close')">
          <nuxt-link
            v-if="$i18n.locale !== 'bn'"
            :to="switchLocalePath('bn')"
            class="lang-btn"
          >
            বাংলা
          </nuxt-link>
        </li>
        <li @click="$emit('close')">
          <nuxt-link
            v-if="$i18n.locale !== 'en'"
            :to="switchLocalePath('en')"
            class="lang-btn"
          >
            English
          </nuxt-link>
        </li>
      </ul>
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
.more-menu {
  // display: none;
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
    .More-menu-arrow {
      svg {
        width: 25px;
        height: 20px;
        path {
          fill: #343434;
        }
      }
    }
    .more-menu-logo {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      img {
        width: 110px;
        height: 35px;
      }
    }
  }

  .more-menu-section {
    padding: 10px 0 0 0;

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
          font-size: 15px;
          color: #343434;
          text-decoration: none;
        }
        h4 {
          font-weight: 600;
          font-size: 18px;
          line-height: 122%;
          color: #343434;
        }
        &:first-child {
          border: none;
        }
        .circle {
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
  .language-switcher {
    background-color: rgba(17, 108, 212, 0.3);
    width: 43%;
    border-radius: 100px;
    // display: flex;
    overflow: hidden;
    padding: 0;
    margin: 25px auto 0 auto;

    .lang-btn {
      height: 100%;
      padding: 20px 25px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.55px;
      border: none;
      border-radius: 100px;
      background: transparent;
      cursor: pointer;
      text-decoration: none;
      color: #343434;
      display: flex;
      align-items: center;
      justify-content: center;

      &.active {
        background-color: #ed017f;
        color: #ffffff;
      }
    }
  }
}
.slide-Mobile-Menu-enter-active,
.slide-Mobile-Menu-leave-active {
  transition: all 0.4s ease-out;
}
.slide-Mobile-Menu-enter,
.slide-Mobile-Menu-leave-to {
  transform: translateX(100%);
}

@media screen and (min-width: 1050px) {
  .more-menu {
    display: none;
  }
}
</style>
