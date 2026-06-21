<template>
  <section class="sus-fin-product">
    <div class="sus-fin-product-policy">
      <b-row
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <b-col
          md="6"
          v-for="(testimonial, index) in customerTestimonial"
          :key="index"
        >
          <div class="sus-fin-product-policy-image">
            <picture>
              <source media="(max-width:650px)" :srcset="testimonial.image" />
              <img :src="testimonial.image" alt="sustainability" />
            </picture>
            <p v-if="$i18n.locale == 'en'" v-html="testimonial.description"></p>
            <p
              v-else-if="$i18n.locale == 'bn'"
              v-html="testimonial.description"
            ></p>
            <a :href="testimonial.link" target="_blank">
              <div class="discover-more-button">
                <button v-if="$i18n.locale == 'en'" class="discover-more">
                  Learn More
                </button>
                <button v-if="$i18n.locale == 'bn'" class="discover-more">
                  আরও জানুন
                </button>
              </div>
            </a>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    customerTestimonial: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.sus-fin-product {
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(31, 144, 42, 0.25) 15%,
    rgba(30, 245, 40, 0.15) 50%,
    rgba(30, 245, 200, 0.35) 85%
  );

  .sus-fin-product-policy {
    padding: 20px 40px 40px 40px;
    line-height: 133%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .row {
      // border: 1px solid #666;
      // border-radius: 15px;
      margin: 0;
      gap: 0px;
      flex-wrap: nowrap;
      // align-items: center;
      height: 100%;
      display: flex;
      flex-grow: 1;

      @media (max-width: 768px) {
        gap: 0px;
        flex-direction: column-reverse;
        text-align: center;
      }

      .col-md-6 {
        margin: 0 auto;
        padding: 0;
        flex: inherit;
      }
      .col-md-7 {
        padding: 0;
      }
    }

    .sus-fin-product-policy-image {
      padding: 40px 40px 40px 40px;
      img {
        margin: 0 auto;
        border-radius: 15px;
        height: 450px;
        object-fit: cover;
      }

      @media (max-width: 768px) {
        padding: 20px 40px 40px 40px;
      }

      p {
        text-align: justify;
        font-size: 1.1rem;
        color: #858585;
        padding: 40px 0;
        line-height: 166%;

        @media (max-width: 768px) {
          padding: 0px 40px 20px 40px;
        }
      }

      .discover-more-button {
        position: absolute;
        bottom: 30px;
        left: 40px;
        z-index: 2; /* Ensure button is above overlay */
      }

      .discover-more {
        color: #ffffff;
        background: #ed017f;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
          color: #ffffff;
          background: #ff0088;
          transition: 0.45s all ease-in-out;
          box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
}
</style>
