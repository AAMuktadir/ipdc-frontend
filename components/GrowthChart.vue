<template>
  <div class="container">
    <div
      class="strongest-balance-title col-md-12"
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-back"
    >
      <h1 v-if="$i18n.locale == 'en'" class="balance-heading">
        <span class="emphasis">Fastest</span>
        Growing Financial Institution in the Country
      </h1>
      <h1 v-if="$i18n.locale == 'bn'" class="balance-heading">
        দেশের সবচেয়ে দ্রুত <span class="emphasis">বর্ধনশীল</span>
        আর্থিক প্রতিষ্ঠান
      </h1>
    </div>
    <div
      class="growth-chart"
      v-if="growthChart"
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-back"
    >
      <client-only>
        <b-row>
          <b-col>
            <div class="label-top">
              <span>{{ $i18n.locale == "en" ? "Loans" : "ঋণ" }}</span>
            </div>
            <div :class="`circle ${getCircleClass('loan')}`">
              <span>{{ getPercentageChange("loan") }}%</span>
            </div>
            <div class="chart reglar-font-size">
              <div class="bar loan_prev">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.loan_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.loan_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
              <div :class="`bar bar-${getClass('loan')} loan_curr`">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.loan_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.loan_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
            </div>
            <table>
              <tr>
                <td style="text-align: left">
                  {{ growthChart.loan_previous_quarter }}
                </td>
                <td style="text-align: right">
                  {{ growthChart.loan_current_quarter }}
                </td>
              </tr>
            </table>
          </b-col>
          <b-col>
            <div class="label-top" style="background-color: #3a5325">
              <span>{{ $i18n.locale == "en" ? "Deposit" : "আমানত" }}</span>
            </div>
            <div :class="`circle ${getCircleClass('deposit')}`">
              <span>{{ getPercentageChange("deposit") }}%</span>
            </div>
            <div class="chart reglar-font-size">
              <div class="bar deposit_prev">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.deposit_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.deposit_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
              <div :class="`bar bar-${getClass('deposit')} deposit_curr`">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.deposit_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.deposit_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
            </div>
            <table>
              <tr>
                <td style="text-align: left">
                  {{ growthChart.deposit_previous_quarter }}
                </td>
                <td style="text-align: right">
                  {{ growthChart.deposit_current_quarter }}
                </td>
              </tr>
            </table>
          </b-col>
          <b-col>
            <div class="label-top" style="background-color: #f7a742">
              <span>{{ $i18n.locale == "en" ? "Revenue" : "আয়" }}</span>
            </div>
            <div :class="`circle ${getCircleClass('revenue')}`">
              <span>{{ getPercentageChange("revenue") }}%</span>
            </div>
            <div class="chart reglar-font-size">
              <div class="bar revenue_prev">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.revenue_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.revenue_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
              <div :class="`bar bar-${getClass('revenue')} revenue_curr`">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.revenue_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.revenue_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
            </div>
            <table>
              <tr>
                <td style="text-align: left">
                  {{ growthChart.revenue_previous_quarter }}
                </td>
                <td style="text-align: right">
                  {{ growthChart.revenue_current_quarter }}
                </td>
              </tr>
            </table>
          </b-col>
          <b-col>
            <div class="label-top" style="background-color: #ac8e4a">
              <span>{{
                $i18n.locale == "en" ? "Operating Profit" : "পরিচালন মুনাফা"
              }}</span>
            </div>
            <div :class="`circle ${getCircleClass('op')}`">
              <span>{{ getPercentageChange("op") }}%</span>
            </div>
            <div class="chart reglar-font-size">
              <div class="bar op_profit_prev">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.op_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.op_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
              <div :class="`bar bar-${getClass('op')} op_profit_curr`">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.op_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.op_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
            </div>
            <table>
              <tr>
                <td style="text-align: left">
                  {{ growthChart.op_previous_quarter }}
                </td>
                <td style="text-align: right">
                  {{ growthChart.op_current_quarter }}
                </td>
              </tr>
            </table>
          </b-col>
          <b-col>
            <div class="label-top" style="background-color: #e7127d">
              <span>{{
                $i18n.locale == "en" ? "Net Profit" : "নিট মুনাফা"
              }}</span>
            </div>
            <div :class="`circle ${getCircleClass('np')}`">
              <span>{{ getPercentageChange("np") }}%</span>
            </div>
            <div class="chart reglar-font-size">
              <div class="bar net_profit_prev">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.np_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.np_previous_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
              <div :class="`bar bar-${getClass('np')} net_profit_curr`">
                <div class="face side-0">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.np_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face side-1">
                  <span class="percentage-on-bar">{{
                    formatNumber(growthChart.np_current_quarter_value)
                  }}</span>
                  <!-- <div class="growing-bar"></div> -->
                </div>
                <div class="face top"></div>
                <div class="face floor"></div>
              </div>
            </div>
            <table>
              <tr>
                <td style="text-align: left">
                  {{ growthChart.np_previous_quarter }}
                </td>
                <td style="text-align: right">
                  {{ growthChart.np_current_quarter }}
                </td>
              </tr>
            </table>
          </b-col>
        </b-row>
      </client-only>
      <p class="data-basis">* Figures are in BDT million</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrowthChart",
  props: {
    growthChart: {
      type: Object,
      default: {},
    },
  },
  computed: {
    totalShares() {
      return this.growthChart.reduce((sum, item) => sum + item.shares, 0);
    },
  },
  methods: {
    getPercentageChange(category) {
      const present_value =
        this.growthChart[`${category}_current_quarter_value`];
      const previous_value =
        this.growthChart[`${category}_previous_quarter_value`];

      const percentage = (
        ((present_value - previous_value) / previous_value) *
        100
      ).toFixed(1);
      return this.$i18n.locale === "bn"
        ? this.convertToBengali(percentage)
        : percentage;
    },
    getClass(category) {
      const present_value =
        this.growthChart[`${category}_current_quarter_value`];
      const previous_value =
        this.growthChart[`${category}_previous_quarter_value`];

      const percentage = (
        ((present_value - previous_value) / previous_value) *
        100
      ).toFixed(0);

      if (percentage > 0) {
        return "pos-" + percentage;
      } else {
        return "neg-" + percentage * -1;
      }
    },
    getCircleClass(category) {
      const present_value =
        this.growthChart[`${category}_current_quarter_value`];
      const previous_value =
        this.growthChart[`${category}_previous_quarter_value`];

      const percentage = (
        ((present_value - previous_value) / previous_value) *
        100
      ).toFixed(1);
      return percentage > 0 ? "positive" : "negative";
    },
    formatNumber(number) {
      const present_value = parseInt(number)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return this.$i18n.locale === "bn"
        ? this.convertToBengali(present_value)
        : present_value;
    },
    getLabelText(label) {
      return this.$i18n.locale === "bn" ? this.convertToBengali(label) : label;
    },
    convertToBengali(number) {
      const map = {
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
        .map((digit) => map[digit] || digit)
        .join("");
    },
  },
};
</script>

<style lang="scss" scoped>
.strongest-balance-title {
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: center;
  padding-bottom: 80px;
  .balance-heading {
    font-size: 36px;
    line-height: 133.33%;
    color: #343434;

    .emphasis {
      color: #ed017f;
      font-weight: bold;
      font-size: 56px;
      // text-shadow: 4px 4px 58px rgb(18 13 13 / 41%);
      .font-bn & {
        font-size: 61px;
      }
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

$loan_prev: #0a73b5;
$loan_curr: #29bae9;
$deposit_prev: #1b8e55;
$deposit_curr: #5f883c;
$revenue_prev: #1d695d;
$revenue_curr: #f8b25a;
$op_profit_prev: #ab8a43;
$op_profit_curr: #b79a58;
$net_profit_prev: #eb89b3;
$net_profit_curr: #ee248a;

/*
*
*
START // CHART'S RULES
 -> "if you're picking code, don't forget the variables :)"
*/
.growth-chart {
  transform: scale(0.8);
  .col {
    justify-items: anchor-center;
  }
  .label-top {
    width: 150px;
    height: 90px;
    background-color: $loan_curr;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    span {
      font-size: 1.5em;
      font-weight: 700;
      color: $white;
      text-align: center;
    }
  }
  .circle {
    z-index: 1;
    position: relative;
    opacity: 0.9;
    margin: 0 25px;
    width: 100px;
    height: 100px;
    background-color: $loan_curr;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &.positive {
      background-color: $cyan;
    }
    &.negative {
      background-color: red;
    }
    span {
      font-size: 1.5em;
      font-weight: 700;
      color: $white;
      text-align: center;
    }
  }
  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 133%;
    color: #343434;
  }
  table {
    margin-top: 15px;
    line-height: 2;
    width: 74%;
  }
  p {
    font-size: 16px;
    line-height: 154.3%;
    color: #858585;
    padding: 10px;

    position: relative;
    text-align: center;
    margin-right: 60px;
    margin-top: 40px;
  }
  .chart {
    font-size: 1.8em;

    display: flex;
    flex-direction: row;
    gap: 2.5em;
    // gap: 10px;

    // height: 12em;

    justify-content: center;
    // padding-top: 100px;
    padding-top: 6em;
    padding-bottom: 100px;

    // perspective: 1000px;
    // perspective-origin: 50% 50%;
  }
  .data-basis {
    text-align: end;
    margin-top: 15px;
    margin-right: 10px;
    font-size: 12px;
  }

  $faceColor: rgba($cyan, 0.8);
  $growColor: rgba($cyan, 1);

  @mixin drawSkin($color) {
    &.side-0 {
      background-color: darken($color, 15);
    }
    &.side-1 {
      background-color: darken($color, 05);
    }
    &.top {
      background-color: $color;
    }
    &.floor {
      background-color: darken(rgba($color, 0.2), 10);
    }
    & > .growing-bar {
      background-color: darken($color, 05);
      &:before {
        color: darken($color, 30);
        border-top-color: darken($color, 10);
      }
    }
  }

  .bar {
    font-size: 1em;

    position: relative;

    // width: 5em;
    height: 10em;
    padding: 1em;
    margin: -0.6em;

    transition: transform 2s linear;
    transform: rotateX(0deg) rotateY(0deg) scale(1.5);

    transform-style: preserve-3d;

    &:hover {
      transform: rotateX(-15deg) rotateY(-45deg) scale(1.5);
      transition: transform 0.5s ease-in-out;
    }

    &.loan_prev .face {
      @include drawSkin($loan_prev);
    }
    &.loan_curr .face {
      @include drawSkin($loan_curr);
    }
    &.deposit_prev .face {
      @include drawSkin($deposit_prev);
    }
    &.deposit_curr .face {
      @include drawSkin($deposit_curr);
    }
    &.revenue_prev .face {
      @include drawSkin($revenue_prev);
    }
    &.revenue_curr .face {
      @include drawSkin($revenue_curr);
    }
    &.op_profit_prev .face {
      @include drawSkin($op_profit_prev);
    }
    &.op_profit_curr .face {
      @include drawSkin($op_profit_curr);
    }
    &.net_profit_prev .face {
      @include drawSkin($net_profit_prev);
    }
    &.net_profit_curr .face {
      @include drawSkin($net_profit_curr);
    }
    img {
      max-width: 2.5em;
    }
    .face {
      position: relative;
      bottom: 0;

      width: 1.5em;
      height: 2em;

      background-position: center center;
    }
    .side-0,
    .side-1 {
      overflow: hidden;

      height: 10em;
    }
    .side-0 {
      transform: rotateY(90deg) translateX(0.26em) translateZ(0.74em)
        scaleX(1.34);

      background-color: darken($faceColor, 05);

      .percentage-on-bar {
        transform: rotate(-90deg);
        transform-origin: top left;
        /* display: inline-block; */
        font-size: 0.6em;
        font-weight: 700;
        display: inline-block;
        box-sizing: content-box;
        padding-top: 0.5em;
        position: fixed;
        top: 50%;
        text-align: center;
        opacity: 1;
        color: $white;
      }

      .growing-bar {
        background-color: $growColor;
      }
    }
    .side-1 {
      transform: rotateY(360deg) translateY(-10em) translateZ(0.74em);

      background-color: darken($faceColor, 15);

      .percentage-on-bar {
        transform: rotate(-90deg);
        transform-origin: top left;
        /* display: inline-block; */
        font-size: 0.6em;
        font-weight: 700;
        display: inline-block;
        box-sizing: content-box;
        padding-top: 0.5em;
        position: fixed;
        top: 50%;
        text-align: center;
        opacity: 1;
        color: $white;
      }

      .growing-bar {
        background-color: darken($growColor, 15);
      }
    }
    .top {
      transform: rotateX(90deg) translateY(-0.26em) translateZ(21em);
      text-align: center;

      background-color: $faceColor;
    }
    .floor {
      transform: rotateX(-90deg) translateY(0.26em) translateZ(-13em)
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
      top: 22em;
      left: 40%;
      transform: translateX(-55%);
      font-size: 12px;
      color: #0a4069;
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

  @for $i from 50 to 0 {
    $percentage: calc($i / 10);
    .chart .bar-neg-#{$i} {
      bottom: calc(#{$percentage}em * -3);
    }
    .chart .bar-neg-#{$i} .face.side-0 {
      height: calc(10em - #{$percentage}em);
      bottom: #{$percentage}em;
    }
    .chart .bar-neg-#{$i} .face.side-1 {
      height: calc(10em - #{$percentage}em);
    }
    .chart .bar-neg-#{$i} .face.top {
      bottom: calc(#{$percentage}em * -1);
    }

    .chart .bar-pos-#{$i} {
      bottom: calc(#{$percentage}em * 3);
    }
    .chart .bar-pos-#{$i} .face.side-0 {
      height: calc(10em + #{$percentage}em);
      bottom: calc(0em - #{$percentage}em);
    }
    .chart .bar-pos-#{$i} .face.side-1 {
      height: calc(10em + #{$percentage}em);
    }
    .chart .bar-pos-#{$i} .face.top {
      bottom: #{$percentage}em;
    }
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
@media screen and (max-width: 1200px) {
  .col {
    flex-grow: 0;
    margin: 0 auto;
  }
}

@media screen and (max-width: 768px) {
  .growth-chart {
    .bar {
      p {
        left: 55%;
      }
    }
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
    }
    p {
      margin-right: 0px;
      bottom: 250px;
    }
  }
  .growth-chart {
    table {
      position: relative;
      margin: 12px 4px;
      line-height: 2;
      width: 95%;
    }
    .chart {
      font-size: 1.5em;

      display: flex;
      flex-direction: row;

      // height: 100%;
      width: 100%;
      gap: 30px;

      align-items: center;
      justify-content: center;
      // perspective: 1000px;
      // perspective-origin: 50% 50%;
    }
    .bar {
      // height: 17em;
      width: 3.5em;
    }
  }
}
</style>
