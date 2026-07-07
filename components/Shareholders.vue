<template>
  <div
    class="container"
    data-aos="zoom-in"
    data-aos-delay="300"
    data-aos-duration="1000"
  >
    <!-- Founding Shareholder -->

    <div class="our-shareholders" v-if="foundingShareholders">
      <h1 v-if="$i18n.locale == 'en'">Founding Shareholders</h1>
      <h1 v-if="$i18n.locale == 'bn'">প্রতিষ্ঠাতা শেয়ারহোল্ডারগণ</h1>
      <client-only>
        <carousel
          :nav="false"
          :autoplay="true"
          :responsive="{
            0: { items: 1, nav: false },
            600: { items: 5, nav: false },
          }"
        >
          <div
            v-for="item in foundingShareholders"
            :key="item.id"
            class="shareholder-slide"
          >
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front shareholders bd-image">
                    <img v-if="$i18n.locale == 'en'" :src="item.image" />
                    <img v-if="$i18n.locale == 'bn'" :src="item.image_bangla" />
                  </div>
                  <div class="back shareholders bd-image">
                    <p v-if="$i18n.locale == 'en'">
                      {{ item.name }}
                    </p>
                    <p v-if="$i18n.locale == 'bn'">
                      {{ item.name_bangla }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </carousel>
      </client-only>
    </div>

    <!-- Current Shareholder -->

    <div
      class="current-shareholders"
      v-if="share_summary && currentShareholders"
    >
      <h1 v-if="$i18n.locale == 'en'">Current Shareholders</h1>
      <h1 v-if="$i18n.locale == 'bn'">বর্তমান শেয়ারহোল্ডারগণ</h1>
      <p
        v-if="$i18n.locale == 'en'"
        v-html="share_summary.current_shareholder"
      ></p>
      <p
        v-if="$i18n.locale == 'bn'"
        v-html="share_summary.current_shareholder_bn"
      ></p>
      <client-only>
        <div class="chart reglar-font-size">
          <a
            v-for="item in currentShareholders"
            :key="item.id"
            :href="item.official_link"
            :target="item.official_link ? '_blank' : ''"
            rel="noopener noreferrer"
          >
            <div
              :class="`bar bar-${calculatePercentageBar(
                item.number_of_share
              )} red`"
            >
              <picture>
                <source :srcset="item.logo_url" />
                <img :src="item.logo_url" alt="logo" />
              </picture>
              <div class="face side-0">
                <span class="percentage-on-bar" v-if="$i18n.locale == 'en'">{{
                  calculatePercentage(item.number_of_share)
                }}</span>
                <span class="percentage-on-bar" v-if="$i18n.locale == 'bn'">{{
                  convertToBengali(calculatePercentage(item.number_of_share))
                }}</span>
                <div class="growing-bar"></div>
              </div>
              <div class="face side-1">
                <span class="percentage-on-bar" v-if="$i18n.locale == 'en'">{{
                  calculatePercentage(item.number_of_share)
                }}</span>
                <span class="percentage-on-bar" v-if="$i18n.locale == 'bn'">{{
                  convertToBengali(calculatePercentage(item.number_of_share))
                }}</span>
                <div class="growing-bar"></div>
              </div>
              <div class="face top"></div>
              <div class="face floor"></div>
              <p v-if="$i18n.locale == 'en'">{{ item.title }}</p>
              <p v-if="$i18n.locale == 'bn'">{{ item.title_bn }}</p>
            </div>
          </a>
        </div>
      </client-only>
    </div>

    <!-- Shareholder Structure-->

    <div class="shareholding-structure">
      <h1 v-if="$i18n.locale == 'en'">
        Shareholding Structure as on {{ formatDate(share_summary.as_on_date) }}
      </h1>
      <h1 v-if="$i18n.locale == 'bn'">
        শেয়ারহোল্ডিং কাঠামো -
        {{ convertToBengali(formatDateBengali(share_summary.as_on_date)) }}
      </h1>
      <div class="col-md-5">
        <div class="table-responsive">
          <table class="table" style="border: none">
            <tbody v-if="$i18n.locale == 'en'">
              <tr>
                <td style="text-align: left">
                  <strong>Authorised Capital (Tk.)</strong>
                </td>
                <td style="text-align: right">
                  <strong>
                    {{ formatNumber(share_summary.total_authorized_capital) }}
                  </strong>
                </td>
              </tr>
              <tr>
                <td style="text-align: left">
                  <strong>Total paid-up capital (Tk.)</strong>
                </td>
                <td style="text-align: right">
                  <strong>
                    {{ formatNumber(share_summary.total_paid_up_capital) }}
                  </strong>
                </td>
              </tr>
              <tr>
                <td style="text-align: left">
                  <strong>Total Number of Shares</strong>
                </td>
                <td style="text-align: right">
                  <strong>
                    {{ formatNumber(share_summary.total_shares) }}
                  </strong>
                </td>
              </tr>
            </tbody>
            <tbody v-if="$i18n.locale == 'bn'">
              <tr>
                <td style="text-align: left">
                  <strong>অনুমোদিত মূলধন (টাকা.)</strong>
                </td>
                <td style="text-align: right">
                  <strong>
                    {{
                      convertToBengali(
                        formatNumber(share_summary.total_authorized_capital)
                      )
                    }}
                  </strong>
                </td>
              </tr>
              <tr>
                <td style="text-align: left">
                  <strong>পরিশোধিত মূলধন (টাকা.)</strong>
                </td>
                <td style="text-align: right">
                  <strong>
                    {{
                      convertToBengali(
                        formatNumber(share_summary.total_paid_up_capital)
                      )
                    }}
                  </strong>
                </td>
              </tr>
              <tr>
                <td style="text-align: left">
                  <strong>মোট শেয়ারের সংখ্যা</strong>
                </td>
                <td style="text-align: right">
                  <strong>
                    {{
                      convertToBengali(formatNumber(share_summary.total_shares))
                    }}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <table
        class="shareholder-table table table-borderless table-hover table-striped shadow-lg p-3 mb-5 bg-white rounded"
      >
        <thead>
          <tr v-if="$i18n.locale == 'en'">
            <!-- <th style="text-align: center">SL No.</th> -->
            <th>Name of Sponsor</th>
            <th style="text-align: right">No. of Shares</th>
            <th style="text-align: right">% of paid-up capital</th>
          </tr>
          <tr v-if="$i18n.locale == 'bn'">
            <!-- <th style="text-align: center">ক্রমিক নং</th> -->
            <th>স্পন্সরের নাম</th>
            <th style="text-align: right">শেয়ার সংখ্যা</th>
            <th style="text-align: right">পরিশোধিত মূলধনের শতাংশ (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-if="$i18n.locale == 'en'"
            v-for="item in currentShareholders"
            :key="item.id"
          >
            <!-- <td style="text-align: center">
              {{ item.id }}
            </td> -->
            <td>{{ item.title }}</td>
            <td style="text-align: right">
              {{ formatNumber(item.number_of_share) }}
            </td>
            <td style="text-align: right">
              {{ calculatePercentage(item.number_of_share) }}
            </td>
          </tr>
          <tr
            v-if="$i18n.locale == 'bn'"
            v-for="item in currentShareholders"
            :key="item.id"
          >
            <!-- <td style="text-align: center">
              {{ convertToBengali(item.id) }}
            </td> -->
            <td>{{ item.title_bn }}</td>
            <td style="text-align: right">
              {{ convertToBengali(formatNumber(item.number_of_share)) }}
            </td>
            <td style="text-align: right">
              {{ convertToBengali(calculatePercentage(item.number_of_share)) }}
            </td>
          </tr>
          <tr v-if="$i18n.locale == 'en'">
            <!-- <td /> -->
            <td>Total Shares</td>
            <td style="text-align: right">
              {{ formatNumber(totalShares) }}
            </td>
            <td style="text-align: right">100.0000%</td>
          </tr>
          <tr v-if="$i18n.locale == 'bn'">
            <!-- <td /> -->
            <td>মোট শেয়ার</td>
            <td style="text-align: right">
              {{ convertToBengali(formatNumber(totalShares)) }}
            </td>
            <td style="text-align: right">১০০.০০০০%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shareholders",
  props: {
    foundingShareholders: {
      type: Array,
      default: [],
    },
    share_summary: {
      type: Object,
      default: {},
    },
    currentShareholders: {
      type: Array,
      default: [],
    },
  },
  computed: {
    totalShares() {
      return this.share_summary.total_shares;
    },
  },
  methods: {
    getLogoUrl(item) {
      const defaultPath = require("@/assets/image/shareholders/1.png");
      return item.logo_url
        ? require(`@/assets/image/${item.logo_url}`)
        : defaultPath;
    },
    calculatePercentage(shares) {
      return ((shares / this.totalShares) * 100).toFixed(4) + "%";
    },
    calculatePercentageBar(shares) {
      return Math.ceil(((shares / this.totalShares) * 100).toFixed(0));
    },
    formatNumber(number) {
      return parseInt(number)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    },
    formatDateBengali(dateString) {
      const date = new Date(dateString);
      const bengaliMonthNames = [
        "জানুয়ারি",
        "ফেব্রুয়ারি",
        "মার্চ",
        "এপ্রিল",
        "মে",
        "জুন",
        "জুলাই",
        "আগস্ট",
        "সেপ্টেম্বর",
        "অক্টোবর",
        "নভেম্বর",
        "ডিসেম্বর",
      ];
      const month = bengaliMonthNames[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    },
    convertToBengali(number) {
      const englishToBengaliMap = {
        0: "০",
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
      };
      return number
        .toString()
        .split("")
        .map((digit) => englishToBengaliMap[digit] || digit)
        .join("");
    },
  },
};
</script>

<style lang="scss" scoped>
.table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(237, 1, 127, 0.2);
  transition: all 0.3s linear;
  transform: scale(1.01);
}
strong {
  font-size: 16px;
  font-weight: 400;
  .font-bn & {
    font-size: 21px;
  }
}
.shareholder-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  font-weight: 300;
  .font-bn & {
    font-size: 21px;
  }
}

.shareholder-table th,
.shareholder-table td {
  // border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.shareholder-table {
  th {
    background-color: #ed017f;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    .font-bn & {
      font-size: 21px;
    }
  }
}

.our-shareholders {
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  margin-bottom: 105px;
  margin-top: 102px;
  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 133%;
    color: #343434;
    margin-bottom: 40px;
    .font-bn & {
      font-size: 41px;
    }
  }
  .shareholder-slide {
    perspective: 1000px;
    .flip-container {
      width: 125px;
      height: 125px;
    }
    .flipper {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }
    &:hover .flipper {
      transform: rotateY(180deg);
    }
    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      .font-bn & {
        font-size: 25px;
      }
    }
    .front {
      background: #fff;
      color: #000;
    }
    .back {
      background: #ed1983;
      color: #fff;
      transform: rotateY(180deg);
      padding: 10px;
      text-align: center;
      p {
        font-weight: 200;
        line-height: 112.5%;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 15px;
        color: #fff;
        font-size: 16px;
        font-weight: 300 !important;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
  }
}

.shareholding-structure {
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  margin-bottom: 105px;
  margin-top: 102px;
  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 133%;
    color: #343434;
    margin-bottom: 40px;
    .font-bn & {
      font-size: 41px;
    }
  }
}

//@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);
$yellow: #f1c40f;
$lime: #76c900;
$navy: #0a4069;
$cyan: #57caf4;
$red: #ed017f;
$white: #fefefe;
$gray: #444;
$lightGray: lighten($gray, 30);

/*
*
*
START // CHART'S RULES
 -> "if you're picking code, don't forget the variables :)"
*/
.current-shareholders {
  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 133%;
    color: #343434;
    .font-bn & {
      font-size: 41px;
    }
  }
  p {
    font-size: 16px;
    line-height: 154.3%;
    color: #858585;
    padding: 10px;
    .font-bn & {
      font-size: 21px;
    }
  }
  .chart {
    font-size: 1.8em;

    display: flex;
    flex-direction: row;
    gap: 10px;

    // height: 12em;

    justify-content: center;
    padding-bottom: 50px;

    // perspective: 1000px;
    // perspective-origin: 50% 50%;
  }

  $faceColor: rgba($white, 0.8);
  $growColor: rgba($cyan, 1);

  @mixin drawSkin($color) {
    &.floor {
      background-color: darken(rgba($color, 0.2), 10);
    }
    & > .growing-bar {
      background-color: #ed017f;
      &:before {
        color: darken($color, 30);
        border-top-color: darken($color, 10);
      }
    }
  }

  .bar {
    font-size: 1em;

    position: relative;

    width: 5em;
    height: 15em;
    padding: 1em;

    transition: transform 2s linear;
    transform: rotateX(-30deg) rotateY(-25deg);

    transform-style: preserve-3d;

    &:hover {
      transform: rotateX(-30deg) rotateY(-15deg) scale(1.25);
      transition: transform 0.5s ease-in-out;
    }

    &.red .face {
      @include drawSkin($red);
    }
    &.cyan .face {
      @include drawSkin($cyan);
    }
    &.navy .face {
      @include drawSkin($navy);
    }
    &.lightGray .face {
      @include drawSkin($lightGray);
    }
    &.yellow .face {
      @include drawSkin($yellow);
    }
    &.lime .face {
      @include drawSkin($lime);
    }
    &.gray .face {
      @include drawSkin($gray);
    }
    img {
      max-width: 2.5em;
    }
    .face {
      position: relative;
      bottom: 0;

      width: 2em;
      height: 2em;

      background-position: center center;
    }
    .side-0,
    .side-1 {
      overflow: hidden;

      height: 10em;
    }
    .side-0 {
      transform: rotateY(90deg) translateZ(1em);

      background-color: darken($faceColor, 05);

      .percentage-on-bar {
        transform: rotate(-90deg);
        transform-origin: bottom center;
        display: inline-block;
        // font-family: "Open Sans", sans-serif;
        font-size: 0.6em;
        font-weight: 700;
        display: inline-block;
        box-sizing: content-box;
        padding-top: 3em;
        text-align: center;
        opacity: 1;
        color: $navy;
      }

      .growing-bar {
        background-color: $growColor;
      }
    }
    .side-1 {
      transform: rotateY(360deg) translateY(-10em) translateZ(1em);

      background-color: darken($faceColor, 15);

      .percentage-on-bar {
        transform: rotate(-90deg);
        transform-origin: bottom center;
        display: inline-block;
        // font-family: "Open Sans", sans-serif;
        font-size: 0.6em;
        font-weight: 700;
        display: inline-block;
        box-sizing: content-box;
        padding-top: 3em;
        text-align: center;
        opacity: 1;
        color: $navy;
      }

      .growing-bar {
        background-color: darken($growColor, 15);
      }
    }
    .top {
      transform: rotateX(90deg) translateZ(21em);
      text-align: center;

      background-color: $faceColor;
    }
    .floor {
      transform: rotateX(-90deg) translateY(0em) translateZ(-13em)
        rotate(180deg);
      text-align: center;

      background-color: transparent;
      box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.3),
        0.6em -1em 3em rgba(0, 0, 0, 0.3), 1em 1em 10em $faceColor;
    }
    .growing-bar {
      display: inline-block;

      width: 100%;
      height: 100%;

      transition: all 0.3s ease-in-out;
      transform: translateY(100%);

      opacity: 0;
    }
    p {
      width: 100%;
      position: absolute;
      top: 25em;
      left: 50%;
      transform: translateX(-65%);
      font-size: 0.6em;
      color: $navy;
      margin: 0;
      padding: 0;
      writing-mode: horizontal-tb;
      transform-origin: bottom;
      text-align: center;
    }
  }

  .small-font-size {
    font-size: 1em;
  }

  .reglar-font-size {
    font-size: 1.5em;
  }

  .big-font-size {
    font-size: 1.8em;
  }

  @for $i from 60 to -1 {
    $percentage: calc($i / 100 * 100%);

    .chart .bar-#{$i} .face.side-0,
    .chart .bar-#{$i} .face.side-1 {
      .growing-bar {
        transition: transform 2s linear;
        transform: translateY(calc(70% - #{$percentage}));

        transform-style: preserve-3d;

        opacity: 1;
      }
    }
  }
}

/*
END // CHART'S RULES
*
*
*/

@media screen and (max-width: 768px) {
  .our-shareholders,
  .current-shareholders {
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
  }
  .current-shareholders {
    .chart {
      font-size: 1.5em;

      display: flex;
      flex-direction: column;

      height: 100%;
      width: 100%;
      gap: 60px;

      align-items: center;
      justify-content: center;
      // perspective: 1000px;
      // perspective-origin: 50% 50%;
    }
    .bar {
      height: 17em;
      width: 3.5em;
    }
  }
}
</style>
