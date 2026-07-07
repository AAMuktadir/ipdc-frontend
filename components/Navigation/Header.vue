<template>
  <!--  @focusout="handleClose()"-->
  <header class="header" :class="[frostedHeader ? 'frosted' : '']">
    <div class="header-inner">
      <div class="header-logo">
        <nuxt-link class="logo_ipdc" :to="localePath('/')">
          <img v-if="frostedHeader" src="/logo/Logo.png" alt="location" />
          <img v-else src="/logo/Logo.png" alt="location" />
        </nuxt-link>
      </div>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button> -->
      <nav class="navbar">
        <ul class="navbar-menu">
          <li class="navbar-menu_list">
            <nuxt-link
              :to="localePath('/deposit-schemes')"
              class="navbar-menu_link"
            >
              {{ $i18n.locale == "en" ? "Deposit" : "ডিপোজিট" }}
            </nuxt-link>
          </li>

          <!-- Deposit - Individual & Institutional -->
          <!-- <li class="navbar-menu_list">
            <a href="#" class="navbar-menu_link">
              {{ $i18n.locale == "en" ? "Deposit" : "ডিপোজিট" }}
              <img src="~assets/image/Vector.png" alt="downArrow"
            /></a>
            <ul class="dropdown-menus" role="list">
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/deposit-schemes')"
                >
                  {{
                    $i18n.locale == "en"
                      ? "Individual Deposit"
                      : "ব্যক্তিগত ডিপোজিট"
                  }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link class="dropdown-menus-link" :to="localePath('/')">
                  {{
                    $i18n.locale == "en"
                      ? "Institutional Deposit"
                      : "প্রাতিষ্ঠানিক ডিপোজিট"
                  }}
                </nuxt-link>
              </li>
            </ul>
          </li> -->

          <li class="navbar-menu_list">
            <a href="#" class="navbar-menu_link">
              {{ $i18n.locale == "en" ? "LOANS" : "লোন" }}
              <img src="~assets/image/Vector.png" alt="downArrow"
            /></a>
            <ul class="dropdown-menus" role="list" style="padding: 0">
              <!-- Individual Loans -->
              <li class="dropdown-menus-fixed" @click="toggleIndividualLoans">
                {{ $i18n.locale == "en" ? "Individual Loans" : "ব্যক্তিগত ঋণ" }}
                <span class="dropdown-toggle-icon">
                  {{ individualLoansExpanded ? "−" : "+" }}
                </span>
              </li>
              <transition name="slide">
                <div v-show="individualLoansExpanded" class="submenu-container">
                  <li class="dropdown-menus-list">
                    <nuxt-link
                      class="dropdown-menus-link"
                      :to="localePath('/autoloan')"
                    >
                      {{ $i18n.locale == "en" ? "Auto Loan" : "অটো লোন" }}
                    </nuxt-link>
                  </li>
                  <li class="dropdown-menus-list">
                    <nuxt-link
                      class="dropdown-menus-link"
                      :to="localePath('/homeloan')"
                    >
                      {{ $i18n.locale == "en" ? "Home Loan" : "হোম লোন" }}
                    </nuxt-link>
                  </li>
                  <li class="dropdown-menus-list">
                    <nuxt-link
                      class="dropdown-menus-link"
                      :to="localePath('/personalloan')"
                    >
                      {{
                        $i18n.locale == "en" ? "Personal Loan" : "পার্সোনাল লোন"
                      }}
                    </nuxt-link>
                  </li>
                  <li class="dropdown-menus-list">
                    <nuxt-link
                      class="dropdown-menus-link"
                      :to="localePath('/bhalobasa-loan')"
                    >
                      {{
                        $i18n.locale == "en"
                          ? "Bhalo Basha Loan"
                          : "ভালো বাসা লোন"
                      }}
                    </nuxt-link>
                  </li>
                </div>
              </transition>

              <!-- Institutional Loans -->
              <li
                class="dropdown-menus-fixed"
                @click="toggleInstitutionalLoans"
              >
                {{
                  $i18n.locale == "en"
                    ? "INSTITUTIONAL LOANS"
                    : "প্রাতিষ্ঠানিক ঋণ"
                }}
                <span class="dropdown-toggle-icon">
                  {{ institutionalLoansExpanded ? "−" : "+" }}
                </span>
              </li>
              <transition name="slide">
                <div
                  v-show="institutionalLoansExpanded"
                  class="submenu-container"
                >
                  <li class="dropdown-menus-list">
                    <nuxt-link
                      class="dropdown-menus-link"
                      :to="localePath('/ipdc-sme')"
                    >
                      {{ $i18n.locale == "en" ? "SME" : "এসএমই" }}
                    </nuxt-link>
                  </li>
                  <li class="dropdown-menus-list">
                    <nuxt-link
                      class="dropdown-menus-link"
                      :to="localePath('/corporate-financial-service')"
                    >
                      {{ $i18n.locale == "en" ? "Corporate" : "কর্পোরেট" }}
                    </nuxt-link>
                  </li>
                  <li class="dropdown-menus-list">
                    <nuxt-link
                      class="dropdown-menus-link"
                      :to="localePath('/supply-chain')"
                    >
                      {{
                        $i18n.locale == "en"
                          ? "Supply Chain Finance"
                          : "সাপ্লাই চেইন ফাইন্যান্স"
                      }}
                    </nuxt-link>
                  </li>
                </div>
              </transition>
            </ul>
          </li>

          <!-- Women Financing -->
          <li class="navbar-menu_list">
            <a href="#" class="navbar-menu_link">
              {{ $i18n.locale == "en" ? "WOMEN FINANCING" : "নারী অর্থায়ন" }}
              <img src="~assets/image/Vector.png" alt="downArrow"
            /></a>
            <ul class="dropdown-menus" role="list">
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/joyee')"
                >
                  {{ $i18n.locale == "en" ? "Joyee" : "জয়ী" }}
                </nuxt-link>
              </li>
              <!-- <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/priti')"
                >
                  {{ $i18n.locale == "en" ? "Priti" : "প্রীতি" }}
                </nuxt-link>
              </li> -->
            </ul>
          </li>

          <!-- Proposition -->
          <li class="navbar-menu_list">
            <a href="#" class="navbar-menu_link">
              {{ $i18n.locale == "en" ? "PROPOSITION" : "প্রোপজিশন" }}
              <img src="~assets/image/Vector.png" alt="downArrow"
            /></a>
            <ul class="dropdown-menus" role="list">
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/durjoy')"
                >
                  {{ $i18n.locale == "en" ? "Durjoy" : "দুর্জয়" }}
                </nuxt-link>
              </li>
            </ul>
          </li>

          <!-- <li class="navbar-menu_list">
            <nuxt-link :to="localePath('/campaign')" class="navbar-menu_link">
              {{
                $i18n.locale == "en" ? "Ongoing Offers" : "চলমান অফার"
              }}
            </nuxt-link>
          </li> -->

          <!-- Proposition -->
          <li class="navbar-menu_list">
            <nuxt-link
              :to="localePath('/ipdc-infinite')"
              class="navbar-menu_link"
            >
              {{ $i18n.locale == "en" ? "IPDC Infinite" : "আইপিডিসি ইনফিনিট"
              }}<img src="~assets/image/Vector.png" alt="downArrow" />
            </nuxt-link>
            <ul class="dropdown-menus" role="list">
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/cards')"
                >
                  {{ $i18n.locale == "en" ? "Ucchash Card" : "উচ্ছ্বাস কার্ড" }}
                </nuxt-link>
              </li>
            </ul>
          </li>

          <li class="navbar-menu_list">
            <a href="#" class="navbar-menu_link">
              {{ $i18n.locale == "en" ? "About Us" : "আমাদের সম্পর্কে" }}
              <img src="~assets/image/Vector.png" alt="downArrow" />
            </a>
            <ul class="dropdown-menus" role="list">
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/mission-vision')"
                >
                  {{
                    $i18n.locale == "en" ? "About IPDC" : "আইপিডিসি সম্পর্কে"
                  }}
                </nuxt-link>
              </li>
              <!-- <li class="dropdown-menus-list">
                <nuxt-link class="dropdown-menus-link" to="/mission-vision">
                  Purpose (Mission, Vision & Values)
                </nuxt-link>
              </li> -->
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/management')"
                >
                  {{ $i18n.locale == "en" ? "Management" : "ম্যানেজমেন্ট" }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/shareholders')"
                >
                  {{ $i18n.locale == "en" ? "Shareholders" : "শেয়ারহোল্ডারস" }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/investor-relations')"
                >
                  {{
                    $i18n.locale == "en"
                      ? "Investors' relations"
                      : "বিনিয়োগকারীর সাথে সম্পর্ক"
                  }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/sustainability')"
                >
                  {{
                    $i18n.locale == "en" ? "Sustainability" : "সাসটেইনেবিলিটি"
                  }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/news')"
                >
                  {{ $i18n.locale == "en" ? "News" : "নিউজ" }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/career')"
                >
                  {{ $i18n.locale == "en" ? "Career" : "ক্যারিয়ার" }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/signature-events')"
                >
                  {{ $i18n.locale == "en" ? "Events" : "ইভেন্টস" }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/ipdc-awards')"
                >
                  {{ $i18n.locale == "en" ? "Awards" : "পুরস্কার" }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/contact-us')"
                >
                  {{ $i18n.locale == "en" ? "Branches" : "শাখাসমূহ" }}
                </nuxt-link>
              </li>
              <!-- <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/covid-19')"
                >
                  {{ $i18n.locale == "en" ? "COVID 19" : "কোভিড ১৯" }}
                </nuxt-link>
              </li> -->

              <!-- <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/digital-presence')"
                >
                  {{
                    $i18n.locale == "en"
                      ? "Digital Presence"
                      : "ডিজিটাল প্রেজেন্স"
                  }}
                </nuxt-link>
              </li> -->
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/green-banking')"
                >
                  {{
                    $i18n.locale == "en"
                      ? "Green Financing"
                      : "গ্রীন ফাইন্যান্সিং"
                  }}
                </nuxt-link>
              </li>
              <li class="dropdown-menus-list">
                <nuxt-link
                  class="dropdown-menus-link"
                  :to="localePath('/citizen-charter')"
                >
                  {{
                    $i18n.locale == "en"
                      ? "Citizen’s Charter"
                      : "সিটিজেন'স চার্টার"
                  }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="search-container">
        <form method="get" @submit.prevent>
          <transition name="slide-searchBox">
            <input
              v-if="showSearch"
              id="search-left"
              v-model="search"
              class="search"
              type="search"
              name="q"
              :placeholder="$i18n.locale == 'en' ? 'Start typing' : 'টাইপ করুন'"
              autocomplete="off"
              @keyup="getSearchData()"
              @click.stop
            />
          </transition>
          <label
            class="button search-button"
            for="search-left"
            @click="$emit('open')"
            ><span class="mg-lass">&#9906;</span></label
          >
          <div
            v-if="searchData.length > 0 && showSearch"
            class="header-search"
            @click.stop
          >
            <button class="close-button" @click="closeSearchResult">
              &#x2715;
            </button>
            <div class="search-result">
              <h4 v-if="$i18n.locale == 'en'">Search Result</h4>
              <h4 v-if="$i18n.locale == 'bn'">সার্চের ফলাফল</h4>

              <ul role="list">
                <li
                  v-for="item in searchData"
                  :key="item.id"
                  @click="handleRedirect(item.page_link)"
                >
                  <nuxt-link
                    class="search-result-list"
                    :to="localePath(item.page_link)"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>

      <!-- Hotline number
      <a href="tel:16519">
        <div class="service_button">
          <button class="iService" style="line-height: 1; padding: 0">
            <span class="phone-icon-span">
              <img
                :src="require('~/assets/image/icon/phone_cir.png')"
                alt="Phone"
                class="phone-icon"
              />
              <span>
                <span
                  style="font-size: 15px; line-height: 1.1; font-weight: 700"
                >
                  16519
                </span>
                <br style="line-height: 0; margin: 0; padding: 0" />
                <span style="font-size: 9px; line-height: 1; font-weight: 700">
                  8am - 10pm
                </span>
              </span>
            </span>
          </button>
        </div>
      </a> -->

      <!-- ez app -->
      <a href="/ez-app/" aria-label="EZ app">
        <div class="service_button">
          <button class="iService ez-service">
            <img
              :src="require('~/assets/image/icon/ez-logo.png')"
              alt="EZ app"
              class="ez-logo"
              width="98"
              height="41"
            />
          </button>
        </div>
      </a>

      <a href="https://shiri.ipdcbd.com/" target="_blank">
        <div class="service_button">
          <button v-if="$i18n.locale == 'en'" class="iService">
            i-Service
          </button>
          <button v-if="$i18n.locale == 'bn'" class="iService">
            i-সার্ভিস
          </button>
        </div>
      </a>
      <ul class="language-switcher" role="list">
        <li>
          <!-- <nuxt-link v-if="$i18n.locale !== 'bn'" :to="switchLocalePath('bn')" class="lang-btn">Bangla</nuxt-link> -->
          <nuxt-link
            v-if="$i18n.locale !== 'bn'"
            :to="switchLocalePath('bn')"
            class="lang-btn font-bn"
          >
            বাংলা
          </nuxt-link>
        </li>
        <li>
          <!-- <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')" class="lang-btn active">English</nuxt-link> -->
          <nuxt-link
            v-if="$i18n.locale !== 'en'"
            :to="switchLocalePath('en')"
            class="lang-btn"
          >
            English
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    showSearch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      frostedHeader: false,
      search: null,
      searchData: [],
      activeUrl: "",
      lan: "en",
      individualLoansExpanded: false,
      institutionalLoansExpanded: false,
    };
  },
  watch: {
    showSearch: {
      handler() {
        this.search = "";
        this.searchData = [];
      },
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    toggleIndividualLoans() {
      this.individualLoansExpanded = !this.individualLoansExpanded;
      if (this.individualLoansExpanded) {
        // this.institutionalLoansExpanded = false;
      }
    },
    toggleInstitutionalLoans() {
      this.institutionalLoansExpanded = !this.institutionalLoansExpanded;
      if (this.institutionalLoansExpanded) {
        // this.individualLoansExpanded = false;
      }
    },
    handleScroll() {
      this.closeSearchResult();
      if (window.scrollY > 150) {
        this.frostedHeader = true;
      } else {
        this.frostedHeader = false;
      }
    },

    async getSearchData() {
      const pathArray = window.location.pathname.split("/");
      if (pathArray.includes("bn")) {
        this.lan = "bn";
      } else {
        this.lan = "en";
      }
      const response = await this.$axios.get("get-search-result", {
        params: {
          q: this.search,
          lan: this.lan,
        },
      });

      if (this.search == null) {
        this.searchData = [];
      } else {
        this.searchData = response.data.details;
      }
    },

    closeSearchResult() {
      this.search = "";
      this.searchData = [];
    },

    handleRedirect(url) {
      this.activeUrl = url;

      this.search = null;
      this.searchData = [];
      // this.$router.push({ path: '/bn/'+url });
      // this.$router.push({ path: url });
      // eslint-disable-next-line vue/no-mutating-props
      this.showSearch = false;
    },

    handleClose() {
      // this.search = '';
      // this.searchData = [];
      // this.$router.push({ path: this.activeUrl });
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menus-fixed {
  cursor: pointer;
  position: relative;
  transition: background-color 0.7s ease-in-out;

  .dropdown-toggle-icon {
    position: absolute;
    right: 5px;
    align-self: anchor-center;
    font-size: medium;
    font-weight: 500;
    transition: transform 0.7s ease;
  }

  &:hover {
    background-color: darken(#ed017f, 10%);
  }
}

.submenu-container {
  overflow: hidden;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s ease-in-out;
  max-height: 500px; /* Adjust based on your content height */
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 87px;
  background: linear-gradient(
    180deg,
    rgba(79, 78, 78, 0.78) 0%,
    rgba(133, 133, 133, 0) 80.65%,
    rgba(255, 255, 255, 0) 75.52%,
    rgba(255, 255, 255, 0) 100%
  );
  &.frosted {
    // background: rgb(2, 0, 36);
    // background: linear-gradient(
    //   152.61deg,
    //   #d65f5f -2.16%,
    //   #ed017f 37.81%,
    //   #d65f5f 87.08%
    // );
    //backdrop-filter: blur(100px);
    // background: rgba(255, 255, 255, 0.1);
    background: #000;
    // backdrop-filter: blur(100px);

    .header-inner {
      .navbar {
        .navbar-menu {
          &_link {
            color: #ffffff;
            // img {
              // filter: brightness(0) invert(0.2);
            // }
            &:hover {
              color: #ed017f;
            }
          }
        }
      }
      .header-search {
        width: 20px;
        height: 20px;
        margin-left: -25px;
        margin-right: 20px;
        // img {
        // }
      }
      .service_button {
        .iservice {
          width: 113px;
          height: 41px;
          background: #ed017f;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          .phone-icon-span {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .phone-icon {
              width: 30px;
              height: 30px;
              margin-right: 6px;
            }
          }
        }
      }
    }
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: 0 auto;

    .header-logo {
      display: flex;
      align-items: center;
      margin-top: 0px;

      // .logo_ipdc {
      //   img {
      //     background-color: black;
      //   }
      // }
    }
    .navbar {
      height: 100%;
      padding: 0;
      .navbar-menu {
        height: 50%;
        margin: 0 auto;
        display: flex;
        list-style-type: none;
        //margin-right: 15%; // Latest CR Uncomment
        &_list {
          height: 100%;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          // margin-right: 30px;
          margin: 0 20px;

          .dropdown-menus {
            display: none;
            margin: 0;
            padding: 10px 0;
            position: absolute;
            top: 90%;
            left: 0;
            width: 150px;
            background: rgba($color: #ffffff, $alpha: 0.8);
            animation: dropdownAnimation 0.4s ease-in-out forwards;
            &-list {
              text-align: left;
              &:not(:last-child) {
                border-bottom: 1px solid #ccc;
              }
            }
            &-link {
              display: block;
              text-decoration: none;
              padding: 7px 15px;
              color: #333;
              font-size: 0.7em;
              .font-bn & {
                letter-spacing: 0;
                font-size: 0.95rem;
              }

              &:hover {
                // color: #ffffff;
                color: #ed017f;

                transition: 0.15s all ease-in-out;
                box-shadow: -1px 1px 15px rgba(0, 0, 0, 0.6);
              }
            }
            &-fixed {
              display: block;
              text-decoration: none;
              padding: 7px 15px;
              color: #ffffff;
              font-size: 0.7em;
              background: #ed017f;
              .font-bn & {
                letter-spacing: 0;
                font-size: 0.95rem;
              }
            }
          }

          &:hover {
            .dropdown-menus {
              display: block;
            }
          }
        }
        &_link {
          height: 100%;
          display: flex;
          align-items: center;
          // margin-right: 20px;
          text-decoration: none;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
          .font-bn & {
            font-size: 17px;
          }
          img {
            // width: 10px;
            height: 7px;
            margin: 5px;
          }

          &:hover {
            color: #ed017f;

            transition: 0.15s all ease-in-out;
            text-shadow: 0px 0px 10px #ed017f;
            // color: #ed017f;
          }
        }
      }
    }
    .search-container {
      position: relative;
      display: inline-block;
      margin: 4px 2px;
      height: 50px;
      width: 50px;
      vertical-align: bottom;

      .search {
        position: absolute;
        right: 35px;
        top: 60px;
        background-color: white;
        box-shadow: rgba(109, 64, 64, 0.35) 0px 5px 15px;
        outline: none;
        border: none;
        height: 55px;
        width: 650px;
        border-radius: 5px;
        padding: 20px;
        z-index: 10;
        transition-duration: 0.4s;

        &:focus + .search-button {
          transition-duration: 0.4s;
          color: rgb(243, 8, 86);
        }
        &:focus {
          height: 55px;
          padding: 20px;
        }

        // .header-search {
        //   display: inline-block;
        // }
      }
      .search-button {
        width: 50px;
        height: 50px;
        background: none;
        position: absolute;
        font-size: 40px;
        color: #ed017f;
        margin: 0 0 0 -30px;
        border-radius: 25px 0 0 25px;
        cursor: pointer;
        .mg-lass {
          display: inline-block;
          pointer-events: none;
          transform: rotate(-45deg);
          margin-left: 20px;
        }
      }
      .header-search {
        position: absolute;
        top: 120px;
        left: -635px;
        width: 100%;
        min-width: 650px;
        background: linear-gradient(
          90.25deg,
          hsla(0, 0%, 98.8%, 0.75) 5.68%,
          hsla(0, 0%, 98.8%, 0.718594) 143.91%
        );
        border: 1px solid hsla(0, 0%, 100%, 0.2);
        box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
        backdrop-filter: blur(30px);
        border-radius: 0 0 15px 15px;
        padding: 15px 30px;
        .close-button {
          position: absolute;
          right: 12px;
          top: 10px;
          height: 35px;
          width: 35px;
          font-weight: bold;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: 0 0;
          outline: 0;
          border: none;
          color: #8b8484;
          padding: 0;
        }
        .search-result-list {
          display: block;
        }
        .search-result {
          cursor: pointer;
          h4 {
            font-size: 16px;
            line-height: 150%;
            letter-spacing: 0.75px;
            color: #a0a3bd;
          }
          ul {
            padding: 0;
            li {
              padding: 10px 0;
              a {
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 0.25px;
                color: #bb196f;
              }
            }
          }
        }
      }
    }

    .service_button {
      // margin-top: 20px;
      .iService {
        width: 113px;
        min-height: 41px;
        background: #ed017f;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        margin-right: 25px;
        .phone-icon-span {
          font-family: "Open Sans", Helvetica, Arial, sans-serif;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .phone-icon {
            width: 30px;
            height: 30px;
            margin-right: 6px;
          }
        }
        .font-bn & {
          font-size: 19px;
        }
        &:hover {
          // background: #ff0088;
          // transition: 0.3s;
          // transform: scale(0.99);
          // background: #ffffff;
          // border: 2px solid #ed017f;
          // box-shadow: none;
          // color: #ed017f;
          color: #ffffff;
          background: #ff0088;
          transition: 0.45s all ease-in-out;
          box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
        }

        // EZ-app: render as just the transparent PNG (no button chrome), flip + shadow on hover
        &.ez-service {
          width: auto; // hug the logo instead of base .iService 113px box (higher specificity wins)
          min-height: 0;
          height: 41px; // fixed height keeps the row aligned and avoids hydration shift
          padding: 0;
          background: transparent !important; // force over any global button/.iService/theme rule
          border: none;
          border-radius: 0;
          box-shadow: none;
          overflow: visible; // don't clip the flip or the drop-shadow
          display: inline-flex;
          align-items: center;
          justify-content: center;
          perspective: 600px; // gives the flip real 3D depth
          cursor: pointer;

          .ez-logo {
            width: auto;
            height: 41px; // 2.4:1 logo -> ~98px wide, reserved by the img width/height attrs
            display: block;
            object-fit: contain;
            transform-origin: center;
            transition: transform 0.55s ease, filter 0.55s ease;
          }

          &:hover {
            background: transparent !important; // stay chrome-less on hover
            color: inherit;
            box-shadow: none; // shadow lives on the logo (drop-shadow) so it hugs the shape

            .ez-logo {
              transform: rotateY(360deg) !important; // horizontal flip on hover
              filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.35)); // shape-hugging shadow
            }
          }
        }
      }
    }
    .language-switcher {
      background-color: #d9dbe9;
      border-radius: 100px;
      display: flex;
      // overflow: hidden;
      padding: 0;
      margin: 0 0 0 0;

      .lang-btn {
        height: 32px;
        padding: 8px 0;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        border: none;
        border-radius: 100px;
        background: transparent;
        cursor: pointer;
        text-decoration: none;
        color: #4e4b66;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4.5vw;
        .font-bn & {
          letter-spacing: 0.55px;
          font-size: 12px;
        }

        &:hover {
          // background: #ff0088;
          // transition: 0.3s;
          // transform: scale(0.99);
          // background: #ffffff;
          // border: 2px solid #ed017f;
          // box-shadow: none;
          // color: #ed017f;
          color: #ffffff;
          background: #ff0088;
          transition: 0.15s all ease-in-out;
        }

        &.active {
          background-color: #ed017f;
          color: #ffffff;
        }
      }
    }
  }
}

@keyframes dropdownAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 1024px) {
  header {
    height: 70px;

    .header-inner {
      justify-content: center;

      .navbar-toggler {
        display: none;
      }
      .navbar {
        display: none;
      }
      .header-search {
        display: none;
      }
      .service_button {
        display: none;
      }
      .search-container {
        display: none;
      }
      .language-switcher {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  header {
    height: 70px;

    .header-inner {
      justify-content: center;

      .navbar-toggler {
        display: none;
      }
      .navbar {
        display: none;
      }
      .header-search {
        display: none;
      }
      .service_button {
        display: none;
      }
      .search-container {
        display: none;
      }
      .language-switcher {
        display: none;
      }
    }
  }
}

.slide-searchBox-enter-active,
.slide-searchBox-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-searchBox-enter {
  opacity: 0;
}
.slide-searchBox-enter,
.slide-searchBox-leave-to {
  opacity: 0;
}
</style>