<template>
  <section class="sus-fin-product">
    <div class="sus-fin-product-heading">
      <b-row>
        <b-col md="7">
          <p
            class="sus-fin-product-description"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            {{
              $i18n.locale == "en"
                ? susFinProducts.description
                : susFinProducts.description_bangla
            }}
          </p>
        </b-col>
        <b-col md="5">
          <h1
            class="sus-fin-product-title"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            {{
              $i18n.locale == "en"
                ? susFinProducts.title
                : susFinProducts.title_bangla
            }}
          </h1>
        </b-col>
      </b-row>
    </div>

    <div class="sus-fin-product-policy">
      <b-row>
        <b-col md="5">
          <div
            class="sus-fin-product-policy-image"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <picture>
              <source
                media="(max-width:650px)"
                :srcset="susFinProducts.image"
              />
              <img :src="susFinProducts.image" alt="sustainability" />
            </picture>
          </div>
        </b-col>
        <b-col md="7">
          <div
            class="sus-fin-product-policy-points"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            The company’s sustainable finance policy is deeply rooted in its
            commitment to:
            <br />
            <br />
            <div class="points-wrapper">
              <div class="points red">
                <div class="points-logo">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/products/Our Strategy/economic-contribution.png"
                  />
                </div>
                <div class="points-text">Economic Contribution</div>
              </div>
              <div class="points green">
                <div class="points-logo">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/products/Our Strategy/env-cont-1.png"
                  />
                </div>
                <div class="points-text">Environmental Contribution</div>
              </div>
              <div class="points blue">
                <div class="points-logo">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/products/Our Strategy/env-cont-2.png"
                  />
                </div>
                <div class="points-text">Social Contribution</div>
              </div>
              <div class="points yellow">
                <div class="points-logo">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/products/Our Strategy/good-gov.png"
                  />
                </div>
                <div class="points-text">
                  Governance <br />(i.e., Good Governance, Green Governance)
                </div>
              </div>
            </div>
            <!-- {{
              $i18n.locale == "en"
                ? susFinProducts.title
                : susFinProducts.title_bangla
            }} -->
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="sus-fin-product-types">
      <b-row>
        <b-col md="12">
          <div
            class="sus-fin-product-types-image"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 class="sus-fin-product-title">Green Finance Products</h1>
            <picture>
              <source
                media="(max-width:650px)"
                :srcset="susFinProducts.image"
              />
              <img :src="susFinProducts.image" alt="sustainability" />
            </picture>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="sus-fin-product-types">
      <div
        class="sus-fin-product-types-p"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <span
          v-if="$i18n.locale == 'en'"
          v-html="coverImage.green_product_description"
        ></span>
        <span
          v-else-if="$i18n.locale == 'bn'"
          v-html="coverImage.green_product_description_bn"
        ></span>
      </div>
    </div>

    <div class="green-fin-products">
      <b-row>
        <b-col
          v-for="(card, index) in cards1"
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
              <img :src="card.logo" alt="logo" class="card-logo" />
              <h3>{{ card.title }}</h3>
              <p class="hover-text">{{ card.text }}</p>
            </div>
            <div class="card-glow"></div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="(card, index) in cards2"
          :key="index"
          :class="`card-${index + 6}`"
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
              <img :src="card.logo" alt="logo" class="card-logo" />
              <h3>{{ card.title }}</h3>
              <p class="hover-text">{{ card.text }}</p>
            </div>
            <div class="card-glow"></div>
          </div>
        </b-col>
      </b-row>
      <b-row id="last-row">
        <b-col
          v-for="(card, index) in cards3"
          :key="index"
          :class="`card-${index + 11}`"
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
              <img :src="card.logo" alt="logo" class="card-logo" />
              <h3>{{ card.title }}</h3>
              <p class="hover-text">{{ card.text }}</p>
            </div>
            <div class="card-glow"></div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <a
            :href="coverImage.product_pdf"
            target="_blank"
            style="text-align: center"
          >
            <div class="discover-more-button">
              <button v-if="$i18n.locale == 'en'" class="discover-more">
                Learn More
              </button>
              <button v-if="$i18n.locale == 'bn'" class="discover-more">
                আরও জানুন
              </button>
            </div>
          </a>
        </b-col>
      </b-row>
    </div>

    <div class="sus-fin-product-types">
      <b-row>
        <b-col md="12">
          <div
            class="sus-fin-product-types-image"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 class="sus-fin-product-title">
              Other Sustainable Finance Products
            </h1>
            <picture>
              <source
                media="(max-width:650px)"
                :srcset="susFinProducts.image"
              />
              <img :src="susFinProducts.image" alt="sustainability" />
            </picture>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="sus-fin-product-types">
      <div
        class="sus-fin-product-types-p"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <span
          v-if="$i18n.locale == 'en'"
          v-html="coverImage.other_product_description"
        ></span>
        <span
          v-else-if="$i18n.locale == 'bn'"
          v-html="coverImage.other_product_description_bn"
        ></span>
      </div>
    </div>

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
              <img :src="card.logo" alt="logo" class="card-logo" />
              <h3>{{ card.title }}</h3>
              <p class="hover-text">{{ card.text }}</p>
            </div>
            <div class="card-glow"></div>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="sus-fin-product-types">
      <b-row>
        <b-col md="12">
          <div
            class="sus-fin-product-types-image"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 class="sus-fin-product-title no-image">
              Other Products On Financial Inclusion & Women Empowerment
            </h1>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="women-empowerment">
      <div class="media-card">
        <div
          class="media-image col-md-7"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <picture>
            <source
              media="(min-width:650px)"
              :srcset="images.joyeeInformation"
            />
            <img :src="images.joyeeInformation" alt="Access to Information" />
          </picture>
          <div class="overlay">
            <h3 class="text">
              {{
                $i18n.locale == "en"
                  ? texts.accessToBusinessSupport
                  : texts.accessToBusinessSupport_bn
              }}
            </h3>
            <a href="/joyee">
              <div class="discover-more-button">
                <button v-if="$i18n.locale == 'en'" class="discover-more">
                  Discover More
                </button>
                <button v-if="$i18n.locale == 'bn'" class="discover-more">
                  আরও জানুন
                </button>
              </div>
            </a>
            <p class="description">
              {{
                $i18n.locale == "en"
                  ? texts.businessSupportDescription
                  : texts.businessSupportDescription_bn
              }}
            </p>
          </div>
        </div>
        <div
          class="media-image col-md-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <picture>
            <source
              media="(min-width:650px)"
              :srcset="images.pritiInformation"
            />
            <img :src="images.pritiInformation" alt="Access to Market" />
          </picture>
          <div class="overlay">
            <h3 class="text">
              {{
                $i18n.locale == "en"
                  ? texts.pritiInformation
                  : texts.pritiInformation_bn
              }}
            </h3>
            <a href="/priti">
              <div class="discover-more-button">
                <button v-if="$i18n.locale == 'en'" class="discover-more">
                  Discover More
                </button>
                <button v-if="$i18n.locale == 'bn'" class="discover-more">
                  আরও জানুন
                </button>
              </div>
            </a>
            <p class="description">
              {{
                $i18n.locale == "en"
                  ? texts.marketAccessDescription
                  : texts.marketAccessDescription_bn
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="media-card">
        <div
          class="media-image col-md-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <picture>
            <source
              media="(min-width:650px)"
              :srcset="images.homeLoanInformation"
            />
            <img :src="images.homeLoanInformation" alt="Access to Finance" />
          </picture>
          <div class="overlay">
            <h3 class="text">
              {{
                $i18n.locale == "en"
                  ? texts.homeLoanInformation
                  : texts.homeLoanInformation_bn
              }}
            </h3>
            <a href="/bhalobasa-loan">
              <div class="discover-more-button">
                <button v-if="$i18n.locale == 'en'" class="discover-more">
                  Discover More
                </button>
                <button v-if="$i18n.locale == 'bn'" class="discover-more">
                  আরও জানুন
                </button>
              </div>
            </a>
            <p class="description">
              {{
                $i18n.locale == "en"
                  ? texts.financeAccessDescription
                  : texts.financeAccessDescription_bn
              }}
            </p>
          </div>
        </div>
        <div
          class="media-image col-md-7"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <picture>
            <source
              media="(min-width:650px)"
              :srcset="images.danaInformation"
            />
            <img
              :src="images.danaInformation"
              alt="Access to Business Development"
            />
          </picture>
          <div class="overlay">
            <h3 class="text">
              {{
                $i18n.locale == "en"
                  ? texts.accessToCapacityDevelopment
                  : texts.accessToCapacityDevelopment_bn
              }}
            </h3>
            <a href="#pathsala" v-scroll>
              <div class="discover-more-button">
                <button v-if="$i18n.locale == 'en'" class="discover-more">
                  Discover More
                </button>
                <button v-if="$i18n.locale == 'bn'" class="discover-more">
                  আরও জানুন
                </button>
              </div>
            </a>
            <p class="description">
              {{
                $i18n.locale == "en"
                  ? texts.capacityDevelopmentDescription
                  : texts.capacityDevelopmentDescription_bn
              }}
            </p>
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
      cards1: [
        {
          index: 1,
          title: "Renewable Energy",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon1.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture31.jpg",
          text: "Empowering a sustainable future with clean, innovative energy solutions.",
        },
        {
          index: 2,
          title: "Energy & Resource Efficiency",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon2.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture32.jpg",
          text: "Optimizing resources and energy to drive sustainability and cut costs.",
        },
        {
          index: 3,
          title: "Alternative Energy",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon3.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture25.jpg",
          text: "Transforming power with innovative and sustainable energy solutions.",
        },
        {
          index: 4,
          title: "Liquid Waste Management",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon4.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture34.jpg",
          text: "Streamlining liquid waste management to safeguard the environment and enhance resource sustainability.",
        },
        {
          index: 5,
          title: "Solid Waste Management",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon5.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture33.jpg",
          text: "Manage solid waste sustainably for a cleaner, greener future.",
        },
      ],
      cards2: [
        {
          index: 6,
          title: "Circular Economy & Eco-Projects Financing",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon6.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture35.jpg",
          text: "Investing in eco-projects to advance circular economy practices and sustainable progress.",
        },
        {
          index: 7,
          title: "Environment Friendly Brick Production",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon7.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture36.jpg",
          text: "Promoting eco-friendly bricks for sustainable construction and a greener future.",
        },
        {
          index: 8,
          title: "Green/ Environment Friendly Establishments",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon8.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture37.jpg",
          text: "Creating environmentally friendly establishments that champion sustainability and reduce adverse environmental impact.",
        },
        {
          index: 9,
          title: "Green Agriculture",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon9.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture39.jpg",
          text: "Promoting sustainable agricultural practices for a healthier planet and greener harvests.",
        },
        {
          index: 10,
          title: "Green CMSME",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon10.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture24.jpg",
          text: "Empowering cottage enterprises for sustainable growth.",
        },
      ],
      cards3: [
        {
          index: 11,
          title: "Green SRF",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon11.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture7.jpg",
          text: "Supporting green projects with socially responsible financing.",
        },
        {
          index: 12,
          title: "Blue Economy Financing",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon12.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture22.jpg",
          text: "Funding sustainable solutions to advance the blue economy.",
        },
        {
          index: 13,
          title: "Information and Communication Technology",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon13.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture23.jpg",
          text: "Transforming the future with innovative information and communication technology solutions.",
        },
        {
          index: 14,
          title: "Miscellaneous",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon14.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture27.jpg",
          text: "Offering diverse solutions to meet a wide range of unique needs and challenges sustainably.",
        },
      ],
      cards_other: [
        {
          index: 1,
          title: "Sustainable Agriculture",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon15.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture22.jpg",
          text: "Advancing agricultural sectors with sustainable practices for a resilient future.",
        },
        {
          index: 2,
          title: "Sustainable MSME",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon16.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture23.jpg",
          text: "Fostering growth in MSMEs through sustainable practices for greater economic growth and economic resilience.",
        },
        {
          index: 3,
          title: "Socially Responsible Financing",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon17.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture24.jpg",
          text: "Empowering impactful projects with financing that prioritizes social responsibilities.",
        },
        {
          index: 4,
          title: "Other Sustainable Linked Finance Products",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Green Finance/Icons (Green Finance)/icon18.png",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Picture25.jpg",
          text: "Promoting sustainability through financing in other sustainable linked finance projects.",
        },
      ],
      cards_women: [
        {
          index: 1,
          title: "Joyee",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Other Products On Financial Inclusion & Women Empowerment/Joyee-Logo_2024.png",
          link: "/joyee",
          image:
            "https://ipdc.com/api/uploads/joyee/Joyee_Web_banner_08062402.webp",
          text: "IPDC Finance PLC. has brought short and long term loan facilities for women entrepreneurs.",
        },
        {
          index: 2,
          title: "Priti",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Other Products On Financial Inclusion & Women Empowerment/IPDC Priti logo_Final.png",
          link: "/priti",
          image: "https://ipdc.com/api/uploads/1674102489jKRf1.jpg",
          text: "The world has seen revolutionary women like Pritilata Waddedar setting a fierce benchmark. As a woman-friendly financial institution, we are always in awe of that strange force in women to overcome any obstacle.",
        },
        {
          index: 3,
          title: "Home Loan",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Other Products On Financial Inclusion & Women Empowerment/Bhalo Basha Loan.png",
          link: "/bhalobasa-loan",
          image: "https://ipdc.com/api/uploads/1674101914gh7yf.jpg",
          text: "Fast and hassle-free affordable home loan for that dream address beyond megacities",
        },
        {
          index: 4,
          title: "Dana",
          logo: "https://ipdc.com/api/uploads/sustainable/products/Other Products On Financial Inclusion & Women Empowerment/Dana.png",
          link: "/",
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/Stock image 1.jpg",
          text: "Empowering a sustainable future with clean, innovative energy solutions.",
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
    susFinProducts: {
      type: Object,
      default() {
        return {
          id: 1,
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/2023_10_10_143131_1696927486._large.jpg",
          image_mobile_url:
            "https://ipdc.com/api/uploads/sustainable/banners/2023_10_10_143131_1696927486._large.jpg",
          title: "Our Strategy Towards Sustainability",
          title_bangla: "জয়ী হবার লক্ষ্যে",
          description:
            "With over 40 years of history, IPDC understands the importance of value that stands the test of time. Sustainability initiatives without strong profits are not actually sustainable, while strong profits to the detriment of sustainability weaken the endurance of a business. IPDC has employed a Sustainable Finance strategy that aligns with the policy guidelines of Bangladesh Bank and adheres to international standards such as the Paris Agreement, the broader United Nations Sustainable Development Goals (SDGs), Intended Nationally Determined Contributions (INDCs), and the industry best practices.",
          description_bangla:
            "নারী উদ্যোক্তাদের জন্য আইপিডিসি ফাইন্যান্স পিএলসি. নিয়ে এসেছে স্বল্প ও দীর্ঘ মেয়াদী ঋণের সুবিধা।",
        };
      },
    },
    images: {
      type: Object,
      default() {
        return {
          joyeeInformation:
            "https://ipdc.com/api/uploads/joyee/Joyee_Web_banner_08062402.webp",
          pritiInformation: "https://ipdc.com/api/uploads/1674102489jKRf1.jpg",
          homeLoanInformation:
            "https://ipdc.com/api/uploads/1674101914gh7yf.jpg",
          danaInformation: "https://ipdc.com/api/uploads/1677054862TfNqH.jpg",
        };
      },
    },
    texts: {
      type: Object,
      default() {
        return {
          accessToBusinessSupport: "IPDC Joyee",
          accessToBusinessSupport_bn: "অ্যাক্সেস টু বিজনেস সাপোর্ট",
          businessSupportDescription:
            "IPDC Finance PLC. has brought short and long term loan facilities for women entrepreneurs.",
          businessSupportDescription_bn:
            "নারী উদ্যোক্তাদের জন্য ব্যবসা শুরু করার প্রস্তুতি সংক্রান্ত তথ্যাবলি, ট্রেড লাইসেন্স, বিভিন্ন বৈধ কাগজপত্র কীভাবে তৈরি করা যায় ইত্যাদি সম্পর্কে পরামর্শ সেবা নেওয়ার ব্যবস্থাও করে দিয়ে থাকে ‘আইপিডিসি জয়ী’।",
          pritiInformation: "IPDC Priti",
          pritiInformation_bn: "অ্যাক্সেস টু মার্কেট",
          marketAccessDescription:
            "As a woman-friendly financial institution, we are always in awe of that strange force in women to overcome any obstacle.",
          marketAccessDescription_bn:
            "নারী উদ্যোক্তারা যেন তাদের পণ্য সঠিক ক্রেতা বা মার্কেটের অ্যাক্সেস পায়, ক্রেতাদের সাথে যোগাযোগ স্থাপন করে তাদের চাহিদা সম্পর্কে জানতে পারেন এবং নিজেদের নেটওয়ার্কিং বাড়িয়ে উদ্যোগকে আরও সফলতার দিকে এগিয়ে নিতে পারেন এজন্য ‘জয়ী’ বিভিন্ন উদ্যোক্তা মেলা, ইভেন্ট ইত্যাদির আয়োজনে অর্থায়ন করে থাকে।",
          homeLoanInformation: "Bhalo Basha Loan",
          homeLoanInformation_bn: "অ্যাক্সেস টু ফাইন্যান্স",
          financeAccessDescription:
            "A Home Loan that lets you enjoy a cup of tea on a lazy afternoon, with your loved ones, on your balcony.",
          financeAccessDescription_bn:
            "নারী উদ্যোক্তাদের যেন চলার পথে আর্থিক যোগান বন্ধ হয়ে না যায়, সেই বিষয়টি খেয়াল রাখতে ‘আইপিডিসি জয়ী’ প্রদান করে জামানতবিহীন উদ্যোক্তা লোন।",
          accessToCapacityDevelopment: "IPDC Dana",
          accessToCapacityDevelopment_bn: "অ্যাক্সেস টু ক্যাপাসিটি ডেভেলপমেন্ট",
          capacityDevelopmentDescription:
            "IPDC DANA simplifies access to financing for even micro-retailers through a streamlined documentation process.",
          capacityDevelopmentDescription_bn:
            "শুধু পণ্য বিক্রির সুযোগ করে দেওয়াই নয়, নারী উদ্যোক্তাদের দক্ষতা বৃদ্ধির লক্ষ্যে বিভিন্ন ট্রেনিং, অফলাইন ব্যবসা ছাড়াও অনলাইনে ব্যবসা প্রসারের জন্য ডিজিটাল মার্কেটিং, ডিজিটাল কমার্স বিষয়ক বিভিন্ন ধারণা দিতে কর্মশালাসমূহ পরিচালনার উদ্যোগে সামিল হয় ‘আইপিডিসি জয়ী’।",
        };
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

  .sus-fin-product-heading {
    padding: 40px 40px 20px 40px;
    line-height: 133%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .row {
      margin: 0;
      gap: 50px;
      flex-wrap: nowrap;
      align-items: center;
      height: 100%;
      display: flex;
      flex-grow: 1;

      @media (max-width: 768px) {
        gap: 0px;
        flex-direction: column-reverse;
        text-align: center;
      }

      .col-md-5 {
        padding: 0;
        flex: inherit;
      }
      .col-md-7 {
        padding: 0;
      }
    }

    .sus-fin-product-title {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 40px;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
    }

    .sus-fin-product-description {
      text-align: justify;
      font-size: 1.1rem;
      color: #858585;
      padding: 40px;
    }

    @media (max-width: 768px) {
      padding: 20px 40px 0px 40px;
    }
  }

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
      margin: 0;
      gap: 50px;
      flex-wrap: nowrap;
      align-items: center;
      height: 100%;
      display: flex;
      flex-grow: 1;

      @media (max-width: 768px) {
        gap: 0px;
        flex-direction: column-reverse;
        text-align: center;
      }

      .col-md-5 {
        padding: 0;
        flex: inherit;
      }
      .col-md-7 {
        padding: 0;
      }
    }

    .sus-fin-product-policy-image {
      padding: 40px 0 40px 40px;
      img {
        border-radius: 15px;
        height: 450px;
        object-fit: cover;
      }

      @media (max-width: 768px) {
        padding: 20px 40px 40px 40px;
      }
    }

    .sus-fin-product-policy-points {
      text-align: center;
      font-size: 1.1rem;
      color: #858585;
      padding: 40px 0;
      line-height: 166%;

      @media (max-width: 768px) {
        padding: 0px 40px 20px 40px;
      }

      .points-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 40px; /* Space between circles */
        flex-wrap: wrap; /* Allow wrapping if needed */

        .points {
          width: 25vw;
          height: 10vw;
          border-radius: 15px;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
          // background: radial-gradient(circle at 0% -5%, #ffffff, #a3a3a3);
          background: radial-gradient(#ffffff, #d8d8d8);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.6s ease;

          @media (max-width: 1024px) {
            width: 50vw;
            height: 15vw;
            &.red {
              background: radial-gradient(circle at 0% -5%, #ffffff, #96313188);
            }
            &.green {
              background: radial-gradient(circle at 0% -5%, #ffffff, #487c1e8a);
            }
            &.blue {
              background: radial-gradient(circle at 0% -5%, #ffffff, #3f28a77e);
            }
            &.yellow {
              background: radial-gradient(circle at 0% -5%, #ffffff, #56829c86);
            }
          }

          @media (max-width: 768px) {
            width: 85vw;
            height: 25vw;
            &.red {
              background: radial-gradient(circle at 0% -5%, #ffffff, #96313188);
            }
            &.green {
              background: radial-gradient(circle at 0% -5%, #ffffff, #487c1e8a);
            }
            &.blue {
              background: radial-gradient(circle at 0% -5%, #ffffff, #3f28a77e);
            }
            &.yellow {
              background: radial-gradient(circle at 0% -5%, #ffffff, #56829c86);
            }
          }

          &:hover {
            transform: scale(1.1);
            box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
            &.red {
              background: radial-gradient(circle at 0% -5%, #ffffff, #96313188);
            }
            &.green {
              background: radial-gradient(circle at 0% -5%, #ffffff, #487c1e8a);
            }
            &.blue {
              background: radial-gradient(circle at 0% -5%, #ffffff, #3f28a77e);
            }
            &.yellow {
              background: radial-gradient(circle at 0% -5%, #ffffff, #56829c86);
            }
          }

          .points-logo {
            width: 25%;
            height: auto;
            left: 15px;
            top: 20%;
            position: absolute;
            @media (max-width: 1024px) {
              top: 10%;
            }
          }

          .points-text {
            position: absolute;
            width: 60%;
            right: 20px;
            font-size: 1.1rem;
            font-weight: bold;
            color: #333;
            text-align: center;
            line-height: 140%;
            z-index: 1; /* Ensure text is above the logo */

            @media (max-width: 1024px) {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }

  .sus-fin-product-types {
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
      margin: 0;
      gap: 50px;
      flex-wrap: nowrap;
      align-items: center;
      height: 100%;
      display: flex;
      flex-grow: 1;

      @media (max-width: 768px) {
        gap: 0px;
        flex-direction: column-reverse;
        text-align: center;
      }

      .col-md-12 {
        padding: 0;
        flex: inherit;
        position: relative;
      }
    }

    .sus-fin-product-types-image {
      padding: 40px 40px 0 40px;
      position: relative;
      img {
        border-radius: 15px;
        height: 300px;
        object-fit: cover;
        width: 100%;
      }

      @media (max-width: 768px) {
        padding: 20px 40px 40px 40px;
      }

      .sus-fin-product-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.2rem;
        font-weight: bold;
        color: white;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        text-align: center;
        z-index: 2;
        pointer-events: none;

        &.no-image {
          padding-top: 20px;
          padding-bottom: 20px;
          color: #343434;
          text-shadow: none;
        }
      }

      &:before {
        content: "";
        position: absolute;
        top: 40px;
        left: 40px;
        width: calc(100% - 80px);
        height: calc(100% - 40px);
        background: rgba(0, 0, 0, 0.4); // dark overlay for better readability
        border-radius: 15px;
        z-index: 1;
        pointer-events: none;
      }
    }

    .sus-fin-product-types-tiles {
      text-align: justify;
      font-size: 1.1rem;
      color: #858585;
      padding: 40px;
      line-height: 133%;

      @media (max-width: 768px) {
        padding: 0px 40px 20px 40px;
      }
    }

    .sus-fin-product-types-p {
      text-align: justify;
      font-size: 1.1rem;
      color: #858585;
      padding: 0 40px;
      line-height: 133%;

      @media (max-width: 768px) {
        padding: 0px 40px 20px 40px;
      }
    }
  }

  .green-fin-products {
    padding: 15px;
    padding-bottom: 60px;

    #last-row {
      padding-left: 10%;
      padding-right: 10%;
      padding-bottom: 60px;
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
        top: 30%;
        left: 5%;
        width: 90%;
        height: 65%;
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
          font-size: 1.5rem;
          margin: 0;
        }

        .hover-text {
          width: 15.5vw;
          display: none;
          font-size: 1rem;
          margin-top: 10px;
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
  .women-empowerment {
    .media-card {
      position: relative;
      left: 15%;
      max-width: 70%;
      display: flex;
      gap: 10px;
      padding: 0px 10px 10px 0px;

      .col-md-7,
      .col-md-5 {
        padding: 0px 0px 0px 0px;
      }

      .media-image {
        position: relative;
        max-height: 420px;
        height: 250px;
        border-radius: 5px;
        cursor: pointer;
        overflow: hidden;
        background-color: #858585;
        // filter: blur(5px);
        // -webkit-filter: blur(5px);

        picture,
        img {
          display: block;
          margin: auto;
          width: 100%;
          height: 100%;
          object-fit: fill;
          scale: 1.01;
          transition: transform 1s ease-out;
        }

        &:hover img {
          transform: scale(1.08);
        }

        .service_button {
          .iservice {
            width: 113px;
            height: 38px;
            background: #ed017f;
            color: #ffffff;
            border: none;
            border-radius: 4px;
          }
        }

        .discover-more-button {
          position: absolute;
          bottom: 30px;
          left: 30px;
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

        .overlay {
          content: "";
          position: absolute;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0) 46%,
            rgba(0, 0, 0, 0.6) 100%
          );
          display: flex;
          flex-direction: column-reverse;
          // justify-content: flex-end;
          padding: 30px;
          color: white;
          transition: background-color 0.3s ease-in-out;

          .text {
            font-weight: bold;
            margin-bottom: 60px;
          }

          .description {
            font-size: 1rem;
            opacity: 0;
            // padding-right: 5em;
          }
        }

        &:hover .overlay {
          background-color: rgba(255, 255, 255, 0.85);
          flex-direction: column;
          color: black;

          .text {
            margin-bottom: 10px;
            position: relative;
            color: #000;
            bottom: 2rem;
            -webkit-transform: translateY(2rem);
            -ms-transform: translateY(2rem);
            -o-transform: translateY(2rem);
            transform: translateY(2rem);
            -webkit-transition: transform 0.5s ease-in-out;
            -o-transition: transform 0.5s ease-in-out;
            transition: transform 0.5s ease-in-out;
          }

          .description {
            opacity: 1;
            -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateY(0);
            -webkit-transition: all 0.6s 0.4s ease-in-out;
            -o-transition: all 0.6s 0.4s ease-in-out;
            transition: all 0.6s 0.4s ease-in-out;
          }
        }
      }
    }

    @media screen and (max-width: 1024px) {
      .media-card {
        display: flex;
        flex-direction: column;
        padding: 0 0 10px 0;

        .media-image {
          width: unset;
          height: 357px;
          border-radius: 14px 14px 0 0;
        }
      }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      .col-md-7,
      .col-md-5 {
        flex: auto;
        max-width: 100%;
      }
    }
  }
}
</style>
