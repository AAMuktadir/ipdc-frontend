<template>
  <div :class="[$i18n.locale == 'bn' ? 'font-bn' : '']">
    <Header :show-search="searchShow" @open="searchShow = !searchShow" />
    <MoreMenu :show="moreMenu" @close="moreMenu = false" />
    <LoanMenu :show="loanMenu" @close="loanMenu = false" />
    <div @click="searchShow = false">
      <Nuxt />
    </div>
    <Footer />
    <MobileMenuBar
      @moreMenuToggle="moreMenuToggler()"
      @loanMenuToggle="loanMenuToggler()"
      @closeMenu="closeMenu()"
    />
    <div class="applyOnlineSideButton">
      <div class="formslink" :class="$i18n.locale === 'bn' ? 'bangla' : ''">
        <nuxt-link :to="localePath('/all-forms')">
          {{ $i18n.locale == "en" ? "All Forms" : "সকল ফর্ম" }}
        </nuxt-link>
      </div>
      <div
        class="applyOnlinelink"
        :class="$i18n.locale === 'bn' ? 'bangla' : ''"
      >
        <nuxt-link :to="localePath('/customer-signup')">
          {{ $i18n.locale == "en" ? "Customer Signup" : "গ্রাহক নিবন্ধন" }}
        </nuxt-link>
      </div>
      <div class="a2gflink" :class="$i18n.locale === 'bn' ? 'bangla' : ''">
        <a
          href="https://a2gf.ipdc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $i18n.locale == "en" ? "A2GF" : "A2GF" }}
        </a>
      </div>
    </div>
    <WhatsAppButton />
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
import MobileMenuBar from "@/components/Navigation/Mobile-Menu/MobileMenuBar";
import MoreMenu from "@/components/Navigation/Mobile-Menu/MoreMenu";
import LoanMenu from "@/components/Navigation/Mobile-Menu/LoanMenu";

export default {
  components: { Header, MobileMenuBar, MoreMenu, LoanMenu },
  data() {
    return {
      moreMenu: false,
      loanMenu: false,
      searchShow: false,
    };
  },

  methods: {
    moreMenuToggler() {
      this.loanMenu = false;
      this.moreMenu = !this.moreMenu;
    },
    loanMenuToggler() {
      this.moreMenu = false;
      this.loanMenu = !this.loanMenu;
    },
    closeMenu() {
      this.loanMenu = false;
      this.moreMenu = false;
    },
  },

  head() {
    const locales = {
      en: "IPDC Finance PLC.",
      bn: "আইপিডিসি ফাইন্যান্স পিএলসি.",
    };
    const currentLocale = this.$i18n ? this.$i18n.locale : "en";
    const siteName = locales[currentLocale];

    return {
      titleTemplate: (titleChunk) =>
        titleChunk ? `${siteName} - ${titleChunk}` : siteName,
    };
  },
};
</script>

<style lang="scss" scoped>
.applyOnlineSideButton {
  position: fixed;
  top: calc(50vh + 195px - 5%);
  z-index: 999;
  right: 15px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  transform: rotate(90deg);
  transform-origin: center right;

  .applyOnlinelink {
    // position: absolute;
    // bottom: 0;
    // transform: rotate(90deg);
    // left: 0px;
    background-color: #ed017f;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 180px;
    border-top: 0 solid #0ef27c;
    font-weight: 400;
    text-transform: uppercase;
    border-radius: 0 0 5px 5px;

    &.bangla {
      font-size: 22px;
    }

    a {
      color: #fff;
      text-decoration: none;
      outline: 0 !important;

      &:hover {
        color: #9b9c9d;
      }
    }
  }

  .a2gflink {
    // position: absolute;
    // bottom: 0;
    // transform: rotate(90deg);
    // left: 0px;
    background-color: #ed017f;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 65px;
    border-top: 0 solid #0ef27c;
    font-weight: 400;
    text-transform: uppercase;
    border-radius: 0 0 5px 5px;

    &.bangla {
      font-size: 16px;
    }

    a {
      color: #fff;
      text-decoration: none;
      outline: 0 !important;

      &:hover {
        color: #9b9c9d;
      }
    }
  }

  .formslink {
    // position: absolute;
    // bottom: 0;
    // transform: rotate(90deg);
    // left: 0px;
    background-color: #ed017f;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 115px;
    border-top: 0 solid #0ef27c;
    font-weight: 400;
    text-transform: uppercase;
    border-radius: 0 0 5px 5px;

    &.bangla {
      font-size: 22px;
    }

    a {
      color: #fff;
      text-decoration: none;
      outline: 0 !important;

      &:hover {
        color: #9b9c9d;
      }
    }
  }
}
</style>
