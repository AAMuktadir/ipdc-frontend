<template>
  <div :class="[$i18n.locale == 'bn' ? 'font-bn' : '']">
    <Nuxt />
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
  </div>
</template>

<script>
export default {
  name: "BlankLayout",
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

/* ---- Mobile-only refinement: thinner buttons + smaller text ---- */
/* Affects ONLY the side buttons on small screens. Desktop view is unchanged. */
@media (max-width: 767px) {
  .applyOnlineSideButton {
    .applyOnlinelink,
    .a2gflink,
    .formslink {
      height: 24px;
      line-height: 24px;
      font-size: 13px;
    }

    .applyOnlinelink.bangla,
    .formslink.bangla {
      font-size: 17px;
    }

    .a2gflink.bangla {
      font-size: 13px;
    }
  }
}
</style>