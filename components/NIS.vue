<template>
  <div
    class="container"
    data-aos="zoom-in"
    data-aos-delay="300"
    data-aos-duration="1000"
  >
    <div class="file-grid">
      <div class="row">
        <div class="column">
          <h3 align="center" v-if="$i18n.locale == 'en'">
            Focal Point Information
          </h3>
          <h3 align="center" v-if="$i18n.locale == 'bn'">ফোকাল পয়েন্ট তথ্য</h3>
          <div class="scrollable-box">
            <ul>
              <li v-for="file in focalPointInformation.files" :key="file.id">
                <a
                  class="files-name-list"
                  :href="file.file_url"
                  target="_blank"
                  >{{ file.file_title }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <h3 align="center" v-if="$i18n.locale == 'en'">Integrity Awardee</h3>
          <h3 align="center" v-if="$i18n.locale == 'bn'">শুদ্ধাচার পুরস্কার</h3>
          <div class="scrollable-box">
            <ul>
              <li v-for="file in integrityAwardee.files" :key="file.id">
                <a
                  class="files-name-list"
                  :href="file.file_url"
                  target="_blank"
                  >{{ file.file_title }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <h3 align="center" v-if="$i18n.locale == 'en'">Integrity</h3>
          <h3 align="center" v-if="$i18n.locale == 'bn'">শুদ্ধাচার</h3>
          <div class="scrollable-box">
            <ul>
              <li v-for="file in integrity.files" :key="file.id">
                <a
                  class="files-name-list"
                  :href="file.file_url"
                  target="_blank"
                  >{{ file.file_title }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <h3 align="center" v-if="$i18n.locale == 'en'">
            Right to Information
          </h3>
          <h3 align="center" v-if="$i18n.locale == 'bn'">তথ্য-অধিকার</h3>
          <div class="scrollable-box">
            <ul>
              <li v-for="file in rightToInformation.files" :key="file.id">
                <a
                  class="files-name-list"
                  :href="file.file_url"
                  target="_blank"
                  >{{ file.file_title }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NIS",
  props: {
    focalPointInformation: {
      type: Object,
      default: {},
    },
    integrityAwardee: {
      type: Object,
      default: {},
    },
    integrity: {
      type: Object,
      default: {},
    },
    rightToInformation: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:color";

h3 {
  padding: 10px;
}
.files-name-list {
  font-size: 16px;
  line-height: 100%;
  color: #343434;
  margin-top: -3px;
  padding: 8px 0 8px 30px;
  position: relative;

  &::before {
    content: "\2713";
    position: absolute;
    left: 0;
    top: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: #2bbb7f;
    color: #ffffff;
    border-radius: 100px;
    margin-right: 20px;
  }
}
.file-grid {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.column {
  flex: 1;
  margin: 10px;
}

.scrollable-box {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}

.scrollable-box ul {
  list-style-type: none;
  padding: 0;
}

.scrollable-box li {
  margin-bottom: 10px;
}

/* Media query for responsive design */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .column {
    margin: 5px 0;
  }
}
strong {
  font-size: 14px;
  font-weight: 400;
}
.shareholder-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  font-weight: 300;
}

.shareholder-table th,
.shareholder-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.shareholder-table {
  th {
    background-color: #ed017f;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
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
    font-weight: 450;
    font-size: 30px;
    line-height: 100%;
    color: #343434;
    margin-bottom: 40px;
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
        line-height: 100%;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 15px;
        color: #fff;
        font-size: 14px;
        font-weight: 300 !important;
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
    font-weight: 450;
    font-size: 24px;
    line-height: 100%;
    color: #343434;
    margin-bottom: 40px;
  }
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);
$yellow: #f1c40f;
$lime: #76c900;
$navy: #0a4069;
$cyan: #57caf4;
$red: #ed017f;
$white: #fefefe;
$gray: #444;
$lightGray: color.adjust($gray, $lightness: 30%);

/*
*
*
START // CHART'S RULES
 -> "if you're picking code, don't forget the variables :)"
*/
.current-shareholders {
  .chart {
    font-size: 1.8em;

    display: flex;
    flex-direction: row;

    // height: 12em;

    justify-content: center;
    // perspective: 1000px;
    // perspective-origin: 50% 50%;
  }

  $faceColor: rgba($white, 0.8);
  $growColor: rgba($cyan, 1);

  @mixin drawSkin($color) {
    &.floor {
      background-color: color.adjust(rgba($color, 0.2), $lightness: -10%);
    }
    & > .growing-bar {
      background-color: rgba($color, 0.8);
      &:before {
        color: color.adjust($color, $lightness: -30%);
        border-top-color: color.adjust($color, $lightness: -10%);
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

      background-color: color.adjust($faceColor, $lightness: -5%);

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

      background-color: color.adjust($faceColor, $lightness: -15%);

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
        background-color: color.adjust($growColor, $lightness: -15%);
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
      transform: translateX(-55%);
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

        opacity: 0.8;
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
      font-size: 30px;
      text-align: center;
    }
  }
  .current-shareholders {
    .chart {
      font-size: 1.5em;

      display: flex;
      flex-direction: column;

      height: 100%;
      width: 100%;

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
