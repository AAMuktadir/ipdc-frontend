<template>
  <section class="sus-fin-product">
    <div class="green-fin-products">
      <b-row id="last-row">
        <b-col
          v-for="(card, index) in cards_other"
          :key="index"
          :class="`card-${index + 1}`"
          :data-aos="`fade-up`"
          :data-aos-duration="`300`"
          :data-aos-easing="`ease-in-out-sine`"
          :data-aos-mirror="`true`"
          :data-aos-once="`false`"
          :data-aos-delay="`${card.index * 100}`"
        >
          <div
            class="card"
            :style="{ backgroundImage: `url('${card.image}')` }"
          >
            <div class="card-overlay">
              <!-- <span class="serial-number">{{ card.index }}</span> -->
              <!-- <img :src="card.logo" alt="logo" class="card-logo" /> -->
              <h3>{{ card.title }}</h3>
              <p class="hover-text">{{ card.text }}</p>
            </div>
            <div class="card-glow"></div>
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
          title: "সাহসী",
          // logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon15.png",
          image: "https://ipdc.com/api/uploads/brave.jpg",
          text: "অত্যাচার-নিপীড়ন-নির্যাতন উপেক্ষা করে অকুতোভয়ে দৃপ্ত প্রত্যয়ে স্রোতের বিপরীতে ঘুরে দাঁড়ানো আমিই সাহসী",
        },
        {
          index: 2,
          title: "স্বপ্নদর্শী",
          // logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon16.png",
          image: "https://ipdc.com/api/uploads/dreamer.jpg",
          text: "আগামীর পথটা আমি এখনই দেখতে পাই, কঠিন সময়ে সঠিক সিদ্ধান্ত নেয়া আমিই তো স্বপ্নদর্শী",
        },
        {
          index: 3,
          title: "স্বাধীন",
          // logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon17.png",
          image: "https://ipdc.com/api/uploads/independent.webp",
          text: "প্রতিকূলতা আমার কাছে অস্তিত্বহীন, কঠিন বাঁধাকে সহজ সমীকরণে ফেলা সফল আমিই স্বাধীন",
        },
      ],
    };
  },
  props: {
    coverImage: {
      type: Object,
      default() {
        return {};
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
    rgba(31, 144, 42, 0.1) 15%,
    rgba(30, 245, 40, 0.1) 50%,
    rgba(30, 245, 200, 0.1) 85%
  );

  .green-fin-products {
    padding: 15px;
    // padding-bottom: 60px;

    #last-row {
      padding-left: 10%;
      padding-right: 10%;
      // padding-bottom: 60px;
    }

    .discover-more-button {
      position: relative;
      // bottom: 0;
      // left: 43vw;
      // width: 16vw;
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

    .col {
      padding-right: unset;
      padding-left: unset;
    }

    .card {
      position: relative;
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
      min-height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      overflow: hidden;
      margin: 15px;
      transition: all 0.6s ease;
      border: 0px;

      .card-glow {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 2;
        opacity: 0;
        background-image: radial-gradient(
          circle at 20% -20%,
          rgba(255, 255, 255, 0.55),
          rgba(0, 0, 0, 0.15)
        );
        transition: all 1.6s ease;
      }

      .card-overlay {
        position: absolute;
        top: 20%;
        left: 10%;
        width: 80%;
        height: 60%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 10px;
        transform: rotateY(0deg);
        backface-visibility: hidden;
        transition: all 0.6s ease;

        .serial-number {
          font-size: 3.2rem;
          margin-bottom: 5px;
        }

        .card-logo {
          // width: 40%;
          width: 5vw;
          margin-bottom: 10px;
        }

        .card-logo-women {
          width: 60%;
          margin-bottom: 10px;
        }

        h3 {
          width: 15.5vw;
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
          // -webkit-text-stroke: 2px #000;
          color: #fff;
        }

        .hover-text {
          width: 15.5vw;
          display: none;
          font-weight: 600;
          font-size: 1.2rem;
          margin-top: 10px;
          // -webkit-text-stroke: 1px #000;
        }
      }

      &:hover {
        // top: -2%;
        box-shadow: 10px 20px 30px 10px rgba(0, 0, 0, 0.3);

        .hover-text,
        h3 {
          z-index: 3;
          display: block;
          text-shadow: 5px 5px 10px #00000061;
        }

        .card-glow {
          opacity: 1;
        }
      }

      &:hover .card-overlay {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // transform: rotateX(360deg);
        // transform: rotateY(360deg);

        .hover-text {
          display: block;
        }
      }
    }

    .card-1 .card-overlay {
      background: rgba(73, 152, 63, 0.8);
    } /* Red */
    .card-2 .card-overlay {
      background: rgba(12, 84, 132, 0.8);
    } /* Green */
    .card-3 .card-overlay {
      background: rgba(229, 146, 42, 0.8);
    } /* Blue */
    .card-4 .card-overlay {
      background: rgba(6, 79, 130, 0.8);
    } /* Yellow */
    .card-5 .card-overlay {
      background: rgba(81, 156, 73, 0.7);
    } /* Magenta */
    .card-6 .card-overlay {
      background: rgba(0, 255, 255, 0.7);
    } /* Cyan */
    .card-7 .card-overlay {
      background: rgba(128, 0, 128, 0.7);
    } /* Purple */
    .card-8 .card-overlay {
      background: rgba(255, 165, 0, 0.7);
    } /* Orange */
    .card-9 .card-overlay {
      background: rgba(0, 128, 128, 0.7);
    } /* Teal */
    .card-10 .card-overlay {
      background: rgba(128, 128, 0, 0.7);
    } /* Olive */
    .card-11 .card-overlay {
      background: rgba(128, 0, 0, 0.7);
    } /* Maroon */
    .card-12 .card-overlay {
      background: rgba(0, 0, 128, 0.7);
    } /* Navy */
    .card-13 .card-overlay {
      background: rgba(128, 128, 128, 0.7);
    } /* Gray */
    .card-14 .card-overlay {
      background: rgba(255, 192, 203, 0.7);
    } /* Pink */

    @media (max-width: 768px) {
      padding: 10px;

      #last-row {
        padding-left: 2%;
        padding-right: 2%;
        flex-direction: column;
        gap: 20px;
      }

      .b-row {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .b-col {
        flex: 0 0 auto;
        max-width: 100%;
        margin-bottom: 10px; /* Add spacing between cards */
        padding: 0;
      }

      .card {
        min-height: 250px;
        // border: 2px solid black;
        width: 100%; /* Ensure cards take full width of the container */
        background-size: cover;
        margin: 0;
        background-position: center;

        .card-overlay {
          font-size: 0.8rem;
          top: 10%;
          left: 5%;
          width: 90%;
          height: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px;
          transition: all 0.6s ease;
          transform: rotateY(0deg);
          backface-visibility: hidden;

          .serial-number {
            font-size: 0.8rem;
            margin-bottom: 5px;
          }

          .card-logo {
            width: 25px;
            margin-bottom: 8px;
          }

          h3 {
            font-size: 1.2rem;
            margin: 0;
          }

          .hover-text {
            font-size: 0.8rem;
            margin-top: 8px;
            width: 80%;
          }
        }
      }

      .card:hover .card-overlay {
        transform: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .hover-text {
          display: block;
        }
      }
    }
  }
}
</style>
