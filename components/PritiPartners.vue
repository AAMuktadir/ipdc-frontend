<template>
  <section
    class="container"
    data-aos="zoom-in"
    data-aos-delay="300"
    data-aos-duration="1000"
    v-if="partnersHeading && partnersData.length > 0"
  >
    <div class="priti-partners">
      <h1 class="priti-partners-heading">
        {{
          $i18n.locale == "en"
            ? partnersHeading.title
            : partnersHeading.title_bangla
        }}
      </h1>
      <client-only>
        <carousel
          :nav="false"
          :autoplay="true"
          :responsive="{
            0: { items: 1, nav: false },
            600: { items: 4, nav: false },
          }"
        >
          <div
            class="partners-slide"
            v-for="item in partnersData"
            :key="item.id"
          >
            <div class="partners slide-image">
              <img :src="item.icon" alt="Image" />
            </div>
          </div>
        </carousel>
      </client-only>
      <br />
      <br />
      <br />
      <h1 class="priti-partners-heading">
        {{
          $i18n.locale == "en"
            ? "Priti Privilege Card"
            : "প্রীতি প্রিভিলেজ কার্ড"
        }}
      </h1>
      <div class="priti-gif">
        <b-row>
          <b-col>
            <img src="~assets/image/priti previllage card.gif" alt="Image" />
          </b-col>
          <b-col>
            <h3>AVAIL EXCLUSIVE OFFERS</h3>
            <!-- <h3 class="border-only">PRITI PRIVILAGE CARD</h3> -->
            <br />
            <a class="offer-btn" href="/priti-offers"
              >DISCOVER PRITI OFFERS</a
            ></b-col
          >
        </b-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    partnersHeading: {
      type: Object,
      default: {},
    },
    partnersData: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.priti-partners {
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 102px;
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 36px;
    line-height: 133%;
    color: #343434;
    margin-bottom: 80px;
    .font-bn & {
      font-size: 41px;
    }
  }
  .partners-slide {
    margin-bottom: 59px;
    .partners {
      height: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 150px;
      }
    }
    &:hover {
      transition: 0.2s;
      transform: scale(1.2);
    }
  }
  .priti-gif {
    h3 {
      font-size: 45px;
      text-align: center;
    }
    .col {
      align-content: space-evenly;
      text-align: center;
    }
    .border-only {
      font-size: 30px;
      padding: 20px 30px;
      margin: 20px auto;
      border-radius: 20px;
      // border: 1px solid black;
      color: white;
      background-color: #e1a9f0;
      width: 35vw;
    }
    .offer-btn {
      text-decoration: none;
      text-align: center;
      font-size: 30px;
      padding: 15px 30px;
      border-radius: 20px;
      // border: 1px solid black;
      color: white;
      background-color: #c971e7;
      width: 35vw;
      display: block;
      margin: 0 auto;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 768px) {
  .priti-partners {
    h1 {
      font-size: 30px;
      text-align: center;
      .font-bn & {
        font-size: 35px;
      }
    }
    .priti-gif {
      .row {
        flex-direction: column;
        gap: 20px;
      }
    }
  }
}
</style>
