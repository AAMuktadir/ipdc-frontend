<template>
  <section class="sus-fin-disclosures">
    <!-- Our Best Practice -->
    <div class="best-practice-section">
      <h1
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        Our Best Practices
      </h1>
      <div class="best-practice">
        <div
          class="card"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="100"
          :style="{ backgroundImage: `url('${best_practice_images[0]}')` }"
        >
          <div class="background-overlay"></div>
          <div class="card-content">
            <h3 class="card-title">Plantation</h3>
          </div>
          <div class="hidden-content">
            <div class="text-content">
              <h3>Plantation</h3>
              <p>
                Greenery in our surroundings symbolizes sustainability, and IPDC
                promotes this concept by encouraging plantation. IPDC believes
                this can contribute to larger environmental efforts such as
                increasing green spaces, reducing carbon footprint, and
                promoting sustainability.
              </p>
            </div>
            <div class="image-content">
              <img
                src="https://ipdc.com/api/uploads/sustainable/banners/Picture7.jpg"
                alt="Card Image"
                class="card-image"
              />
            </div>
          </div>
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="200"
          :style="{ backgroundImage: `url('${best_practice_images[1]}')` }"
        >
          <div class="background-overlay"></div>
          <div class="card-content">
            <h3 class="card-title">
              Improving IT Infrastructure To Go Paperless
            </h3>
          </div>
          <div class="hidden-content">
            <div class="text-content">
              <h3>Improving IT Infrastructure To Go Paperless</h3>
              <p>
                IPDC is already using electronic document system to reduce the
                use of papers in the office space. Additionally, IPDC has moved
                on to a digital memo approval system whereby internal memos are
                approved entirely online. IPDC views transitioning to a
                paperless system as beneficial for the environment,
                cost-effective, productivity-boosting, space-saving, conducive
                to information sharing, and protective of personal data.
              </p>
            </div>
            <div class="image-content">
              <img
                src="https://ipdc.com/api/uploads/sustainable/banners/ob_1689612076.jpg"
                alt="Card Image"
                class="card-image"
              />
            </div>
          </div>
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="300"
          :style="{ backgroundImage: `url('${best_practice_images[2]}')` }"
        >
          <div class="background-overlay"></div>
          <div class="card-content">
            <h3 class="card-title">
              Future Commitments For Bolstering Sustainable Portfolio
            </h3>
          </div>
          <div class="hidden-content">
            <div class="text-content">
              <h3>Future Commitments For Bolstering Sustainable Portfolio</h3>
              <p>
                &#9632; Setting the thermostat at temperatures above 24°C.
                <br />
                &#9632; Assessing the insulation of the building for optimal
                energy conservation. <br />
                &#9632; Using energy-saving settings on electronic devices.
                <br />
                &#9632; Upgrading outdated, inefficient equipment with
                energy-efficient alternatives. <br />
                &#9632; Switching off power sources when not in use.
              </p>
            </div>
            <div class="image-content">
              <img
                src="https://ipdc.com/api/uploads/sustainable/banners/Picture36.jpg"
                alt="Card Image"
                class="card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // capacityBuilding: {
      //   id: 1,
      //   heading: "Capacity Building",
      //   heading_bn:
      //     "নারী উদ্যোক্তাদের জন্য বিশেষায়িত<br> মিরপুর উপশাখা 'জয়ী 360'",
      //   description:
      //     "Multiple training sessions on Sustainable Finance have been conducted across IPDC Finance branches, significantly enhancing employees' understanding on Sustainable Finance and equipping them to integrate sustainable practices into their roles, ultimately contributing to the company's long-term success.",
      //   description_bn:
      //     "ঢাকার মিরপুরে অবস্থিত জয়ী 360 নারী উদ্যোক্তাদের জন্য আইপিডিসি ফাইন্যান্স-এর একটি বিশেষায়িত উপশাখা। ‘জয়ী 360’ উপশাখায় ‘জয়ী আলাপন’ নামে একটি বিশেষ মিটিং স্পেসের ব্যবস্থা রাখা হয়েছে যেটি ‘জয়ী’ গ্রাহকরা তাদের ব্যবসায়িক মিটিং পরিচালনার জন্য বুকিং দিয়ে ব্যবহার করতে পারবেন। এছাড়া উদ্যোগ বিষয়ে নিয়মিত কর্মশালা ও ট্রেনিং পরিচালনা করতে এখানে থাকছে ‘জয়ী পাঠশালা’ নামে বিশেষ কার্যক্রম। এছাড়া, এই উপশাখায় আইপিডিসি’র অন্যান্য নিয়মিত প্রোডাক্ট যেমন ডিপোজিট, হোম লোন, অটো লোনসহ সমস্ত সেবা চালু থাকবে।",
      //   deleted_at: null,
      //   created_at: null,
      //   updated_at: "2024-06-21 19:49:47",
      // },
      // capacityBuildingImages: [
      //   "https://ipdc.com/api/uploads/sustainable/disclosures/Capacity Building/Capacity_Building_1.JPG",
      //   "https://ipdc.com/api/uploads/sustainable/disclosures/Capacity Building/Capacity_Building_2.JPG",
      //   "https://ipdc.com/api/uploads/sustainable/disclosures/Capacity Building/Capacity_Building_3.JPG",
      //   "https://ipdc.com/api/uploads/sustainable/disclosures/Capacity Building/Capacity_Building_4.JPG",
      //   "https://ipdc.com/api/uploads/sustainable/disclosures/Capacity Building/Capacity_Building_5.JPG",
      // ],
      best_practice_images: [
        "https://ipdc.com/api/uploads/sustainable/banners/Picture7.jpg",
        "https://ipdc.com/api/uploads/sustainable/banners/ob_1689612076.jpg",
        "https://ipdc.com/api/uploads/sustainable/banners/Picture36.jpg",
        // "https://ipdc.com/api/uploads/sustainable/banners/pexels-photo-1108572.jpeg",
      ],
    };
  },

  props: {},
};
</script>

<style lang="scss" scoped>
.sus-fin-disclosures {
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(15, 190, 50, 0.25) 15%,
    rgba(15, 90, 20, 0.15) 50%,
    rgba(15, 90, 80, 0.35) 85%
  );

  .best-practice-section {
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(15, 190, 50, 0.35) 15%,
      rgba(15, 90, 20, 0.15) 50%,
      rgba(15, 90, 80, 0.25) 85%
    );
    // margin: 20px -40px -20px -40px;
    // padding: 20px 40px 40px 40px;
    line-height: 133%;
    height: 100%;
    width: 70%;

    h1 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 20px;
      padding-bottom: 40px;
      text-align: center;
    }

    .best-practice {
      display: flex;
      justify-content: space-between;
      gap: 0;
      // margin-right: -40px;
      // margin-left: -40px;

      .card {
        flex: 1;
        height: 500px;
        background-color: #f0f0f0;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: flex-grow 0.6s ease, transform 0.6s ease;
        padding: 20px;
        background-size: cover;
        background-position: center;
        border: 0px;

        .background-overlay {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background-color: rgba(255, 255, 255, 0.15);
        }

        // Initial cropped content (title over image)
        .card-content {
          border: 0px;
          position: relative;
          text-align: center;
          bottom: 10px;
          width: 20vw;
          left: 10px;
          color: #212529;
          font-size: 24px;
          z-index: 1;
          font-weight: 550;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          transition: opacity 0.3s ease, transform 0.8s ease;
          transform-origin: center;
        }

        // Hidden content that shows on hover (text and image)
        .hidden-content {
          border: 0px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: none;
          flex-direction: row;
          opacity: 0;
        }

        // Text column on hover
        .text-content {
          // width: 50%;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.7);
          border: 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          opacity: 0;
          h3 {
            font-weight: 500;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          }
          p {
            text-align: justify;
            width: 40vw;
          }
        }

        // Image column on hover
        .image-content {
          border: 0px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.7);
        }

        .card-image {
          width: 100%;
          height: auto;
          display: block;
          transition: opacity 0.3s ease;
        }

        &:hover {
          flex-grow: 12;
          transform: scale(1);

          .hidden-content {
            display: flex;
            opacity: 1;

            .text-content {
              opacity: 1;
              transition: opacity 1.3s 1.5s ease-in !important;
            }
          }

          .card-content {
            opacity: 0;
          }

          background-image: none;
        }
      }

      // Rotate titles of all non-hovered cards
      &:hover .card:not(:hover) .card-content {
        position: relative;
        text-align: center;
        width: 450px;
        transform: rotate(-90deg);
        margin-right: 25%;
        text-orientation: upright;
        bottom: unset;
        opacity: 1;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      // Media query for smaller screens
      @media (max-width: 768px) {
        flex-direction: column;

        .card {
          flex-grow: 1;
          flex-direction: column;
          height: auto;
          background-image: none;

          .card-content {
            display: none;
          }

          // Show hidden content by default
          .hidden-content {
            display: flex;
            opacity: 1;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: auto;
          }

          .text-content,
          .image-content {
            width: 100%;
            padding: 10px;
          }

          .image-content {
            order: 2; // Ensure image comes below the text in column view
          }
        }
      }
    }
  }
}
</style>
