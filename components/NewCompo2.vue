<template>
  <section class="sus-fin-product">
    <div class="green-fin-products">
      <b-row id="last-row">
        <b-col
          v-for="(card, index) in cards_other"
          :key="index"
          :class="`card-${index + 1}`"
          :data-aos="'fade-up'"
          :data-aos-duration="'300'"
          :data-aos-easing="'ease-in-out-sine'"
          :data-aos-mirror="'true'"
          :data-aos-once="'false'"
          :data-aos-delay="`${card.index * 100}`"
        >
          <div
            class="card"
            :style="{ backgroundImage: `url('${card.image}')` }"
            @click="goToLink(card)"
          >
            <div class="card-glow">
              <a :href="card.link" v-scroll v-if="$i18n.locale == 'en'">
                <div class="discover-more-button">
                  <button class="discover-more">Discover More</button>
                </div>
              </a>
              <a :href="card.link_bn" v-scroll v-if="$i18n.locale == 'bn'">
                <div class="discover-more-button">
                  <button class="discover-more">আরও জানুন</button>
                </div>
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards_other: [
        {
          index: 1,
          image: "https://ipdc.com/api/uploads/Generic.jpg",
          link: "/ipdc-personal-loan",
          link_bn: "/bn/ipdc-personal-loan",
        },
        {
          index: 2,
          image: "https://ipdc.com/api/uploads/Progga.jpg",
          link: "/ipdc-teachers-loan",
          link_bn: "/bn/ipdc-teachers-loan",
        },
        {
          index: 3,
          image: "https://ipdc.com/api/uploads/Doctor.jpg",
          link: "/ipdc-doctors-loan",
          link_bn: "/bn/ipdc-doctors-loan",
        },
      ],
    };
  },
  methods: {
    goToLink(card) {
      const locale = this.$i18n.locale;
      const link = locale === "bn" && card.link_bn ? card.link_bn : card.link;
      if (link) {
        this.$router.push(link);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sus-fin-product {
  margin-top: 50px;
  // background: linear-gradient(
  //   90deg,
  //   rgba(31, 144, 42, 0.1) 15%,
  //   rgba(30, 245, 40, 0.1) 50%,
  //   rgba(30, 245, 200, 0.1) 85%
  // );

  .green-fin-products {
    padding: 15px;

    .row {
      gap: 50px;
      justify-content: center;
    }

    #last-row {
      padding-left: 10%;
      padding-right: 10%;
    }

    .col {
      padding: 0;
    }

    .card {
      position: relative;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      aspect-ratio: 4 / 4; // Adjust this ratio according to image proportions
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
      transition: box-shadow 0.4s ease;

      margin: 0;
      padding: 0;
      border: none;
      outline: none;

      .card-glow {
        position: absolute;
        inset: 0;
        z-index: 2;
        opacity: 0;
        background-image: radial-gradient(
          circle at 20% -20%,
          rgba(255, 255, 255, 0.55),
          rgba(0, 0, 0, 0.15)
        );
        transition: opacity 1.6s ease;
      }

      &:hover {
        box-shadow: 10px 20px 30px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;

        .card-glow {
          opacity: 1;
        }
      }
      .discover-more-button {
        position: absolute;
        bottom: 40px;
        left: 50px;
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
        .font-bn & {
          font-size: 23px;
        }

        &:hover {
          color: #ffffff;
          background: #ff0088;
          transition: 0.45s all ease-in-out;
          box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
        }
      }
    }

    @media (max-width: 768px) {
      #last-row {
        padding: 0 2%;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .card {
        aspect-ratio: 4 / 4;
        width: 100%;
      }
    }
  }
}
</style>
