<template>
  <div class="container" data-aos-delay="300" data-aos-duration="1000">
    <div class="govsecwindow" v-if="personData">
      <!-- <p v-if="$i18n.locale == 'en'">
        To know about yield on Treasury Bills/Bonds, available investment
        options, process of investment, open investment account with central
        bank (named as Business Participant (BP) ID) and to purchase/sell
        Government Treasury Bills and Bonds:
      </p>
      <p v-if="$i18n.locale == 'bn'" style="font-size: 21px">
        ট্রেজারি বিল/বন্ডের ফলন, উপলব্ধ বিনিয়োগের বিকল্প, বিনিয়োগের
        প্রক্রিয়া, কেন্দ্রীয় ব্যাঙ্কে বিনিয়োগ অ্যাকাউন্ট খুলতে (বিজনেস
        পার্টিসিপ্যান্ট (বিপি) আইডি নামে) এবং সরকারি ট্রেজারি বিল এবং বন্ড
        ক্রয়/বিক্রয় সম্পর্কে জানতে:
      </p> -->
      <p></p>
      <br />
      <client-only>
        <table
          class="govsec-table table table-borderless table-hover table-striped shadow-lg p-3 mb-5 bg-white rounded"
        >
          <thead>
            <tr v-if="$i18n.locale == 'en'">
              <th>Products</th>
              <th></th>
            </tr>
            <tr v-if="$i18n.locale == 'bn'">
              <th>প্রোডাক্ট</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="$i18n.locale == 'en'"
              v-for="item in personData"
              :key="item.id"
            >
              <td>{{ item.title }}</td>
              <td style="text-align: center">
                <div class="service_button">
                  <a :href="item.file_url" target="_blank">
                    <button class="buttonText">Download</button>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              v-if="$i18n.locale == 'bn'"
              v-for="item in personData"
              :key="item.id"
            >
              <td>{{ item.title_bn }}</td>
              <td style="text-align: center">
                <div class="service_button">
                  <a :href="item.file_url" target="_blank">
                    <button class="buttonText">ডাউনলোড</button>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "govsecwindow",
  props: {
    personData: {
      type: Array,
      default: [],
    },
  },
  methods: {
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
.govsec-table {
  width: 80%;
  border-collapse: collapse;
  font-size: 16px;
  font-weight: 300;
  margin: 0 auto;
  .font-bn & {
    font-size: 21px;
  }
  .service_button {
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
    .buttonText {
      min-height: 35px;
      background: #ed017f;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 400;
      padding: 5px 25px;
      white-space: nowrap;
      box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);
      .font-bn & {
        font-size: 19px;
      }
      &:hover {
        color: #ffffff;
        background: #ff0088;
        transition: 0.45s all ease-in-out;
        box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
      }
    }
  }
}

.govsec-table th,
.govsec-table td {
  // border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.govsec-table {
  th {
    text-align: center;
    background-color: #ed017f;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    .font-bn & {
      font-size: 21px;
    }
  }
}

.govsecwindow {
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 50px;
  h1 {
    font-weight: 450;
    font-size: 30px;
    line-height: 100%;
    color: #343434;
    margin-bottom: 40px;
    .font-bn & {
      font-size: 35px;
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

@media screen and (max-width: 768px) {
  .govsecwindow,
  .current-shareholders {
    h1 {
      font-size: 30px;
      text-align: center;
      .font-bn & {
        font-size: 35px;
      }
    }
  }
}
</style>
