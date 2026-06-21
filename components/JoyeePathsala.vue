<template>
  <div class="section-container container">
    <client-only>
      <div v-if="heading" class="sec-heading">
        <h1 v-if="$i18n.locale == 'en'">
          <strong v-html="heading.heading"></strong>
        </h1>
        <h1 v-if="$i18n.locale == 'bn'">
          <strong v-html="heading.heading_bn"></strong>
        </h1>
        <div class="separator"></div>
      </div>

      <div class="media-card-row">
        <div
          class="media-card media-card-left"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
        >
          <h3 class="tabtitle text-center">
            {{ $i18n.locale == "en" ? "Joyee Pathsala" : "জয়ী পাঠশালা" }}
          </h3>
          <p class="description">
            {{
              $i18n.locale == "en"
                ? "‘Joyee Pathshala’ is a platform where workshops are conducted to enhance the skills of women entrepreneurs."
                : "‘জয়ী পাঠশালা’, একটি প্ল্যাটফর্ম যার মাধ্যমে নারী উদ্যোক্তাদের দক্ষতা বৃদ্ধি করতে পরিচালিত হয় বিভিন্ন কর্মশালা।"
            }}
          </p>
          <carousel
            :nav="false"
            :loop="true"
            :autoplay="true"
            :autoHeight="true"
            :dots="true"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 1, nav: false },
            }"
          >
            <div v-for="item in images" :key="item.index">
              <div class="slide-image">
                <img :src="item" alt="Flowers" class="image-cover" />
                <div class="overlay"></div>
              </div>
            </div>
          </carousel>
        </div>
        <div
          class="media-card media-card-right"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
        >
          <h3 class="tabtitle text-center">
            {{
              $i18n.locale == "en"
                ? "Joyee Pathsala Training Session Request Form"
                : "জয়ী পাঠশালা প্রশিক্ষণ সেশনের অনুরোধ ফর্ম"
            }}
          </h3>
          <ApplyFormPathsala />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: Object,
      default: () => ({
        heading: "Pathsala",
        heading_bn: "পাঠশালা",
      }),
    },
    images: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.section-container {
  width: 90%;
  margin: 0 auto;
}

.sec-heading {
  text-align: center;
  padding-bottom: 30px;
  padding-top: 30px;
  position: relative;
  h1 {
    font-size: 35px !important;
    padding-bottom: 20px;
    .font-bn & {
      font-size: 40px !important;
    }
    strong {
      background-image: linear-gradient(
        -225deg,
        #b91d5d 0%,
        #ed017f 29%,
        #000 67%,
        #ff279b 100%
      );
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      color: #fff;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 2s linear infinite;
      font-weight: bold;
    }
  }
  p {
    padding: 40px;
    font-weight: 400;
    font-size: 18px;
    .font-bn & {
      font-size: 23px;
    }
  }
}
.sec-heading .separator::after {
  content: "";
  width: 20%;
  height: 4px;
  background-color: #000;
  position: absolute;
  left: 40%;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(254, 226, 164, 0)),
    color-stop(53%, #dca273),
    to(rgba(254, 226, 164, 0))
  );
  background: linear-gradient(
    to right,
    rgba(254, 226, 164, 0) 0%,
    #020202 53%,
    rgba(254, 226, 164, 0) 100%
  );
}
.media-card-row {
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 0px 0px 10px 0px;
}

.media-card {
  position: relative;
  padding: 2%;
  overflow: hidden;
  box-sizing: border-box;

  h3 {
    margin-top: 10px;
    color: #ed017f;
  }

  .description {
    padding: 20px 0;
  }
}

.slide-image {
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .image-cover {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 450px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover .image-cover {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 450px;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 46%,
      rgba(0, 0, 0, 0.6) 100%
    );
    display: flex;
    flex-direction: column-reverse;
    padding: 50px;
    color: white;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
}

.media-card-left {
  flex: 1 1 50%;
}

.media-card-right {
  flex: 1 1 50%;
}

@media (max-width: 1024px) {
  .media-card-row {
    flex-direction: column;
  }

  .media-card {
    flex: 1 1 auto;
  }

  .media-card:last-child {
    margin-bottom: 0;
  }
}
</style>
