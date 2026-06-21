<template>
  <section class="sus-fin-disclosures">
    <div class="sus-fin-disclosures-heading">
      <div class="annual-reports">
        <b-row>
          <b-col>
            <h1
              class="sus-fin-disclosures-title"
              align="center"
              v-if="$i18n.locale == 'en'"
            >
              Sustainable Finance Disclosures
            </h1>
            <h1
              class="sus-fin-disclosures-title"
              align="center"
              v-if="$i18n.locale == 'bn'"
            >
              Sustainable Finance Disclosures
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h1
              class="sus-fin-disclosures-title"
              align="center"
              v-if="$i18n.locale == 'en'"
            >
              Sustainable Finance Reports
            </h1>
            <h1
              class="sus-fin-disclosures-title"
              align="center"
              v-if="$i18n.locale == 'bn'"
            >
              Sustainable Finance Reports
            </h1>
            <div class="scrollable-box">
              <ul>
                <li v-for="file in annualReports" :key="file.id">
                  <a
                    class="files-name-list"
                    :href="
                      $i18n.locale === 'en'
                        ? file.file_url
                        : file.file_url_bangla
                    "
                    target="_blank"
                  >
                    {{ $i18n.locale === "en" ? file.title : file.title_bangla }}
                  </a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <h1
              class="sus-fin-disclosures-title"
              align="center"
              v-if="$i18n.locale == 'en'"
            >
              Refinancing schemes of Bangladesh Bank regarding Sustainable
              Finance
            </h1>
            <h1
              class="sus-fin-disclosures-title"
              align="center"
              v-if="$i18n.locale == 'bn'"
            >
              Refinancing schemes of Bangladesh Bank regarding Sustainable
              Finance
            </h1>
            <div class="scrollable-box">
              <ul>
                <li
                  v-for="file in bangladeshBankSupportFunds.files"
                  :key="file.id"
                >
                  <a
                    class="files-name-list"
                    href="#"
                    @click.prevent="openModal(file)"
                    >{{ file.title }}</a
                  >
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="bangladesh-bank-col">
            <h1
              class="sus-fin-disclosures-title"
              align="center"
              v-if="$i18n.locale == 'en'"
            >
              Annual Reports
            </h1>
            <h1
              class="sus-fin-disclosures-title"
              align="center"
              v-if="$i18n.locale == 'bn'"
            >
              Annual Reports
            </h1>
            <div class="scrollable-box">
              <a
                class="applybtn btn"
                id="13"
                :href="localePath('/investor-relations?tab=annualreports')"
                target="_blank"
              >
                {{
                  $i18n.locale == "en"
                    ? "Click here for the updated annual reports"
                    : "হালনাগাদ বার্ষিক প্রতিবেদনের জন্য এখানে ক্লিক করুন"
                }}
              </a>
            </div>
            <!-- <div class="scrollable-box">
              <ul>
                <li v-for="file in annualReports" :key="file.id">
                  <a
                    class="files-name-list"
                    :href="file.file_url"
                    target="_blank"
                    >{{ file.title }}</a
                  >
                </li>
              </ul>
            </div> -->
          </b-col>
        </b-row>
      </div>

      <div
        class="green-banking-portfolio"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h1>Our green portfolio over the years</h1>
        <b-row>
          <b-col md="7">
            <client-only>
              <div class="sus-fin-disclosure-graph">
                <apexchart
                  type="bar"
                  height="340"
                  width="100%"
                  :options="chartOptions"
                  :series="chartSeries"
                />
              </div>
            </client-only>
          </b-col>
          <b-col md="5">
            <div class="sus-fin-disclosure-image">
              <picture>
                <source
                  media="(max-width:650px)"
                  :srcset="susFinDisclosure.image"
                />
                <img :src="susFinDisclosure.image" alt="sustainability" />
              </picture>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="core-banking-sustainability">
        <h1
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Core Banking Sustainability
        </h1>
        <h3
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Asset Quality
        </h3>
        <b-row>
          <b-col md="5">
            <div
              class="core-banking-sustainability-image"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-sine"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <picture>
                <source
                  media="(max-width:650px)"
                  :srcset="assetQuality.image"
                />
                <img :src="assetQuality.image" alt="sustainability" />
              </picture>
              <span class="asset-img">
                <p>Total Asset</p>
                <h1>
                  {{
                    commaSeparatedNumber(
                      Number(this.portfolioFixedData.total_asset)
                    )
                  }}
                  mn
                </h1>
              </span>
            </div>
          </b-col>
          <b-col md="7">
            <client-only>
              <div
                class="core-banking-sustainability-graph"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-sine"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <apexchart
                  class="cbs-chart"
                  type="bar"
                  height="340"
                  width="100%"
                  :options="chartOptionsCBS"
                  :series="chartSeriesCBS"
                />
                <span class="cbs-chart">
                  <p>YoY</p>
                  <h1>{{ this.portfolioFixedData.yoy }}%</h1>
                  <p>CAGR 5 Years</p>
                  <h1>{{ this.portfolioFixedData.cagr_5 }}%</h1>
                  <p>CAGR 10 Years</p>
                  <h1>{{ this.portfolioFixedData.cagr_10 }}%</h1>
                </span>
              </div>
            </client-only>
          </b-col>
        </b-row>

        <b-row class="car-npl">
          <b-col md="7">
            <client-only>
              <div
                class="npl-graph"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-sine"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <apexchart
                  class="npl-chart"
                  type="line"
                  height="340"
                  width="100%"
                  :options="chartOptionsNPL"
                  :series="chartSeriesNPL"
                /></div
            ></client-only>
          </b-col>
          <b-col md="5">
            <client-only>
              <div
                class="car-graph"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-sine"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <apexchart
                  class="car-chart"
                  type="bar"
                  width="100%"
                  height="340"
                  :options="chartOptionsCAR"
                  :series="chartSeriesCAR"
                /></div
            ></client-only>
          </b-col>
        </b-row>
        <br />
        <p style="text-align: right">As of December, 2023</p>
      </div>

      <!-- Gender Equality -->
      <div class="gender-equality">
        <h1
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Gender Equality
        </h1>
        <b-row>
          <b-col md="5">
            <div
              class="gender-equality-image"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-sine"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <span class="gender-equality-img-text">
                <p>Total Employees</p>
                <h1>{{ this.genderData.total_employee }}</h1>
                <p>Total Female Employees</p>
                <h1>{{ this.genderData.total_female }}%</h1>
              </span>
            </div>
          </b-col>
          <b-col md="7">
            <client-only>
              <div
                class="gender-ratio-graph"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-sine"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <span class="gender-chart">
                  <h1>Gender Ratio</h1>
                  <p>
                    We are one of the most gender balanced organizations in the
                    industry. We not only focus on women employment but also
                    focus on women empowerment. We continuously thrive to foster
                    on a gender balance organization by recruiting more female
                    talent. 4 out of 8 business units are led by women.
                  </p>
                </span>
                <div class="gender-chart col-md-7">
                  <apexchart
                    type="donut"
                    width="200"
                    height="200"
                    :options="
                      getChartOptionsGender('Total Talent', chartSeriesGender1)
                    "
                    :series="chartSeriesGender1"
                  />
                  <apexchart
                    type="donut"
                    width="200"
                    height="200"
                    :options="
                      getChartOptionsGender('Board Members', chartSeriesGender2)
                    "
                    :series="chartSeriesGender2"
                  />
                  <apexchart
                    type="donut"
                    width="200"
                    height="200"
                    :options="
                      getChartOptionsGender(
                        'Management Committee',
                        chartSeriesGender3
                      )
                    "
                    :series="chartSeriesGender3"
                  />
                </div>
              </div>

              <div style="height: 20px"></div>

              <div
                class="gender-ratio-redirect"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-sine"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div style="width: 200px">
                  <h1>Empowering</h1>
                  <h1>Women</h1>
                  <h3>through innovative products</h3>
                </div>
                <div class="circle" @click="redirectTo('joyee')">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/products/Other Products On Financial Inclusion & Women Empowerment/Joyee-Logo_2024.png"
                    alt="Logo"
                    class="circle-logo"
                  />
                  <!-- <div class="circle-text">Your Text Here</div> -->
                </div>
                <div class="circle" @click="redirectTo('priti')">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/products/Other Products On Financial Inclusion & Women Empowerment/IPDC Priti logo_Final.png"
                    alt="Logo"
                    class="circle-logo"
                  />
                  <!-- <div class="circle-text">Your Text Here</div> -->
                </div>
              </div>
            </client-only>
          </b-col>
        </b-row>
      </div>

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
                  Greenery in our surroundings symbolizes sustainability, and
                  IPDC promotes this concept by encouraging plantation. IPDC
                  believes this can contribute to larger environmental efforts
                  such as increasing green spaces, reducing carbon footprint,
                  and promoting sustainability.
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
                  use of papers in the office space. Additionally, IPDC has
                  moved on to a digital memo approval system whereby internal
                  memos are approved entirely online. IPDC views transitioning
                  to a paperless system as beneficial for the environment,
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
          <div
            class="card"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="400"
            :style="{ backgroundImage: `url('${best_practice_images[3]}')` }"
          >
            <div class="background-overlay"></div>
            <div class="card-content">
              <h3 class="card-title">Energy Conservation</h3>
            </div>
            <div class="hidden-content">
              <div class="text-content">
                <h3>Energy Conservation</h3>
                <p>
                  Sustainable financing is essential for nation-building and
                  securing the future for our next generation. Going forward,
                  increasing consumer awareness—with a special emphasis on
                  CMSMEs—remains one of our main goals. Additionally, IPDC will
                  keep expanding its portfolio of green finance. Our efforts in
                  corporate social responsibility will also continue to play an
                  integral role. As a responsible corporate citizen, IPDC is
                  dedicated to pursuing projects that tackle climate change,
                  giving particular emphasis to these efforts. IPDC’s innovative
                  services such as Priti, Joyee, and Bhalo Basha Loan are
                  crafted to tackle enduring societal challenges such as women
                  entrepreneurship, financial independence, affordable housing,
                  and so on.
                </p>
              </div>
              <div class="image-content">
                <img
                  src="https://ipdc.com/api/uploads/sustainable/banners/pexels-photo-1108572.jpeg"
                  alt="Card Image"
                  class="card-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Capacity Building -->
      <div
        class="capacity-building-section"
        data-aos="fade-down"
        data-aos-duration="300"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h1>Capacity Building</h1>
        <p
          v-if="$i18n.locale == 'en'"
          v-html="capacityBuilding.description"
        ></p>
        <p
          v-else-if="$i18n.locale == 'bn'"
          v-html="capacityBuilding.description_bn"
        ></p>

        <SliderImageCarousel
          :heading="capacityBuilding"
          :images="capacityBuildingImages"
        />
      </div>
    </div>

    <div class="complaint">
      <b-modal id="modal-template" v-if="selectedFile" hide-footer>
        <template #modal-header>
          <div class="d-flex justify-content-between align-items-center w-100">
            <h5 class="modal-title text-center flex-grow-1">
              {{ selectedFile.title || "Disclosures" }}
            </h5>
            <b-button
              variant="link"
              class="close-button"
              @click="$bvModal.hide('modal-template')"
              >&times;</b-button
            >
          </div>
        </template>
        <div class="modal-body">
          <p>{{ selectedFile.description }}</p>
          <p><strong>Facility Type:</strong> {{ selectedFile.type }}</p>
          <p><strong>Major Purposes::</strong></p>
          <ul class="list-style-dot">
            <li v-for="purpose in selectedFile.purpose" :key="purpose">
              {{ purpose }}
            </li>
          </ul>
          <p>
            <strong>Interest Rate:</strong> {{ selectedFile.interest_rate }}
          </p>
          <p>
            <strong>Project Cost Participation:</strong>
            {{ selectedFile.cost_participation }}
          </p>
          <p><strong>Circular Links:</strong></p>
          <ul class="list-style-dot">
            <li v-for="link in selectedFile.circular_link" :key="link">
              <a :href="link" target="_blank">{{ link }}</a>
            </li>
          </ul>
        </div>
        <template #modal-footer>
          <b-button variant="secondary" @click="$bvModal.hide('modal-template')"
            >Close</b-button
          >
        </template>
      </b-modal>
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
        "https://ipdc.com/api/uploads/sustainable/banners/pexels-photo-1108572.jpeg",
      ],
      colors: ["#008FFB", "#ed017f"],
      selectedFile: null,
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: "bar",
          height: 300,
          width: "100%",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 4,
            borderRadiusApplication: "end",
            barHeight: "70%", // Adjust the bar height to reduce gap (e.g., 70% of the available space)
            distributed: true, // Enable distributed mode to apply different colors to each bar
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toLocaleString(); // Format numbers with commas
          },
        },
        xaxis: {
          categories: this.portfolioData?.categoriesLoan || [],
          labels: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        title: {
          text: "Growth Portfolio (BDT mn)",
          align: "center",
        },
        colors: ["#ED027E", "#4E4199", "#F7931D", "#EE3E35", "#939598"], // Colors for each bar
      };
    },
    chartSeries() {
      return [
        {
          name: "Portfolio",
          data: this.portfolioData.loanData || [],
        },
      ];
    },

    chartOptionsCBS() {
      return {
        chart: {
          type: "bar",
          height: "300",
          width: "100%",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            borderRadiusApplication: "end",
            columnWidth: "40%", // Adjust the bar height to reduce gap (e.g., 70% of the available space)
            distributed: true, // Enable distributed mode to apply different colors to each bar
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toLocaleString(); // Format numbers with commas
          },
        },
        xaxis: {
          categories: this.portfolioData?.categoriesOther || [],
          labels: {
            show: true,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: false, // Hide the grid for a cleaner look
        },
        title: {
          text: "Loan, Lease & Advances (BDT mn)",
          align: "center",
        },
        colors: ["#ED027E", "#4E4199", "#F7931D", "#EE3E35", "#939598"],
      };
    },
    chartSeriesCBS() {
      return [
        {
          name: "Portfolio",
          data: this.portfolioData.CBSData || [],
        },
      ];
    },

    chartOptionsCAR() {
      return {
        chart: {
          type: "bar",
          height: "300",
          width: "100%",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            borderRadiusApplication: "end",
            columnWidth: "60%", // Adjust the bar height to reduce gap (e.g., 70% of the available space)
            distributed: true, // Enable distributed mode to apply different colors to each bar
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%"; // Format numbers with commas
          },
        },
        xaxis: {
          categories: this.portfolioData?.categoriesOther || [],
          labels: {
            show: true,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: false, // Hide the grid for a cleaner look
        },
        title: {
          text: "Capital Adequacy Ratio (CAR)",
          align: "center",
        },
        colors: ["#ED027E", "#4E4199", "#F7931D", "#EE3E35", "#939598"], // Colors for each bar
      };
    },
    chartSeriesCAR() {
      return [
        {
          name: "Portfolio",
          data: this.portfolioData.CARData || [],
        },
      ];
    },

    chartOptionsNPL() {
      return {
        chart: {
          type: "line",
          height: "350",
          width: "100%",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            borderRadiusApplication: "end",
            columnWidth: "100%",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%"; // Format numbers with commas
          },
        },
        xaxis: {
          categories: this.portfolioData?.categoriesOther || [],
          labels: {
            show: true,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          min: 1,
          max: 6,
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: true, // Hide the grid for a cleaner look
        },
        title: {
          text: "NPL Trend (Below 5%)",
          align: "center",
        },
      };
    },
    chartSeriesNPL() {
      return [
        {
          name: "Portfolio",
          data: this.portfolioData.NPLdata || [],
        },
      ];
    },

    chartOptionsGender() {
      return {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: "Gradient Donut with custom Start-angle",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };
    },
    chartSeriesGender1() {
      return [this.genderData.total_male, this.genderData.total_female] || [];
    },
    chartSeriesGender2() {
      return [this.genderData.mancom_male, this.genderData.mancom_female] || [];
    },
    chartSeriesGender3() {
      return [this.genderData.bod_male, this.genderData.bod_female] || [];
    },
  },

  methods: {
    openModal(file) {
      this.selectedFile = file;
      this.$bvModal.show("modal-template");
    },
    redirectTo(location) {
      this.$router.push(`/${location}`);
    },
    getChartOptionsGender(label, series) {
      return {
        chart: {
          type: "donut",
          toolbar: { show: false },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "85%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#333",
                  offsetY: -20,
                  formatter: function (val) {
                    return val.split(" "); // Optional formatting of value
                  },
                },
                value: {
                  show: true,
                  fontSize: "25px",
                  color: "#222",
                  offsetY: 10,
                  formatter: function (val) {
                    return val + "%"; // Optional formatting of value
                  },
                },
                total: {
                  show: true,
                  label: label, // Set custom label inside the donut
                  fontSize: "12px",
                  fontWeight: "bold",
                  formatter: function () {
                    // Generate label as "Management Committee 75:25"
                    const malePercentage = series[0];
                    const femalePercentage = series[1];
                    return `${malePercentage} : ${femalePercentage}`;
                  },
                },
              },
            },
          },
        },
        stroke: {
          // show: false,
          width: 1,
          colors: ["#666"],
        },
        labels: ["Male", "Female"],
        colors: this.colors,
        legend: { show: false },
        tooltip: { enabled: false },
        dataLabels: { enabled: false },
      };
    },
    commaSeparatedNumber(amount) {
      // Ensure the value is a number and defined, default to 0 if not
      if (typeof amount !== "number" || isNaN(amount)) {
        return "0";
      }

      return amount.toLocaleString();
    },
  },
  props: {
    capacityBuilding: {
      type: Object,
      default() {
        return {};
      },
    },
    capacityBuildingImages: {
      type: Array,
      default() {
        return [];
      },
    },
    genderData: {
      type: Object,
      default() {
        return {};
      },
    },
    portfolioData: {
      type: Object,
      default() {
        return {};
      },
    },
    portfolioFixedData: {
      type: Object,
      default() {
        return {};
      },
    },
    susFinDisclosure: {
      type: Object,
      default() {
        return {
          id: 1,
          image:
            "https://ipdc.com/api/uploads/sustainable/banners/pexels-photo-1108572.jpeg",
          image_mobile_url:
            "https://ipdc.com/api/uploads/sustainable/banners/pexels-photo-1108572.jpeg",
          title: "Our Strategy Towards Sustainability",
          title_bangla: "জয়ী হবার লক্ষ্যে",
          description:
            "With over 40 years of history, IPDC understands the importance of value that stands the test of time. Sustainability initiatives without strong profits are not actually sustainable, while strong profits to the detriment of sustainability weaken the endurance of a business. IPDC has employed a Sustainable Finance strategy that aligns with the policy guidelines of Bangladesh Bank and adheres to international standards such as the Paris Agreement, the broader United Nations Sustainable Development Goals (SDGs), Intended Nationally Determined Contributions (INDCs), and the industry best practices.",
          description_bangla:
            "নারী উদ্যোক্তাদের জন্য আইপিডিসি ফাইন্যান্স পিএলসি. নিয়ে এসেছে স্বল্প ও দীর্ঘ মেয়াদী ঋণের সুবিধা।",
        };
      },
    },
    assetQuality: {
      type: Object,
      default() {
        return {
          image:
            "https://texamericascenter.com/wp-content/uploads//2020/05/iconfinder_share-house-1-real-estate-construction-building-share-house-property-buy-sell-rent-business-hand_5659013.svg",
        };
      },
    },
    annualReports: {
      type: Array,
      default() {
        return [];
      },
    },
    sustainableFinanceReports: {
      type: Object,
      default() {
        return {};
      },
    },
    bangladeshBankSupportFunds: {
      type: Object,
      default() {
        return {
          files: [
            {
              id: 1,
              title:
                "Refinance Scheme for Environment Friendly Products/ Projects/Initiatives",
              description:
                "Bangladesh Bank has introduced a fund of BDT 4,000 million for 70 green projects with a tenure starting from 36 months. Clients may avail this refinancing facility through IPDC to receive financing at a lower cost, subject to approval from appropriate authority.",
              type: "Term Loan",
              purpose: [
                "Renewable Energy (e.g. Solar Projects)",
                "Energy Efficiency",
                "Fire Safety",
                "Biological ETP",
                "Recycling",
                "Green Building/Industry",
                "Others",
              ],
              interest_rate: "Up to 5.00%",
              cost_participation: "Up to 70% of project cost",
              circular_link: [
                "https://www.bb.org.bd/mediaroom/circulars/gbcrd/aug302023sfd02.pdf",
              ],
            },
            {
              id: 2,
              title: "Technology Development Fund (TDF)",
              description:
                "Bangladesh Bank has introduced a fund of BDT 10,000 million aimed at supporting export-oriented businesses with a vision of achieving sustainable development goals (SDGs) and transforming Bangladesh into a developed country. Clients in 35 different sectors can access this fund at a lower cost for technological upgrades.",
              type: "Term Loan",
              purpose: [
                "Energy efficiency",
                "Renewable energy",
                "Business process automation",
                "Waste management",
                "Operations management",
                "Human capital development",
                "Others",
              ],
              interest_rate: "Up to 5.00%",
              cost_participation: "Up to 70% of project cost",
              circular_link: [
                "https://www.bb.org.bd/mediaroom/circulars/gbcrd/jan172021sfd02.pdf",
                "https://www.bb.org.bd/mediaroom/circulars/gbcrd/jun082023sfdl01.pdf",
              ],
            },
          ],
        };
      },
    },
  },
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

  .sus-fin-disclosures-heading {
    padding: 40px 40px 20px 40px;
    line-height: 133%;
    height: 100%;

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
        flex-direction: column;
        text-align: center;
      }
    }

    .sus-fin-disclosures-title {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 40px;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
    }

    .scrollable-box {
      width: 75%; /* Set width to 75% */
      margin: 0 auto; /* Center horizontally */
      height: 200px;
      overflow-y: auto;
      border: 1px solid #ccc;
      padding: 10px;

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
    }

    .scrollable-box ul {
      list-style-type: none;
      padding: 0;
    }

    .scrollable-box li {
      margin-bottom: 10px;
    }

    .bangladesh-bank-col {
      .scrollable-box {
        width: 50%;
        border: 0px solid #ccc;
        text-align: center;
      }
      .applybtn {
        border: 0;
        font-size: 18px;
        cursor: pointer;
        font-weight: 500;
        padding: 8px 30px;
        white-space: nowrap;
        background: #ed017f;
        color: #fff;
        border-radius: 0px;
        transition: 0.45s all ease-in-out;
        // transform: translateY(100px);
        -webkit-box-shadow: -26px 1px 27px rgba(0, 0, 0, 0.3);
        box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);
        &:hover {
          color: #fff;
          border-radius: 0px;
          transition: 0.45s all ease-in-out;
          box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
        }
      }
    }
  }

  .green-banking-portfolio {
    background: linear-gradient(
      90deg,
      rgba(106, 127, 145, 0.25) 15%,
      rgba(106, 127, 145, 0.15) 50%,
      rgba(54, 92, 54, 0.35) 85%
    );
    margin: 20px -40px -20px -40px;
    padding: 20px 40px 40px 40px;
    line-height: 133%;
    height: 100%;

    h1 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 20px;
      text-align: center;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
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

    .sus-fin-disclosure-image {
      padding: 40px;
      img {
        border-radius: 15px;
        height: 300px;
        object-fit: cover;
      }

      @media (max-width: 768px) {
        padding: 20px 40px 40px 40px;
      }
    }

    .sus-fin-disclosure-graph {
      text-align: justify;
      font-size: 1.1rem;
      color: #858585;
      padding: 40px;
      line-height: 133%;

      @media (max-width: 768px) {
        padding: 0px 40px 20px 40px;
      }
    }
  }

  .core-banking-sustainability {
    background: linear-gradient(
      90deg,
      rgba(106, 127, 74, 0.25) 15%,
      rgba(160, 220, 190, 0.15) 50%,
      rgba(160, 220, 190, 0.35) 85%
    );
    margin: 20px -40px -20px -40px;
    padding: 20px 40px 40px 40px;
    line-height: 133%;
    height: 100%;

    .car-npl {
      padding-top: 40px;

      @media (max-width: 768px) {
        padding-top: 20px;
      }

      .car-graph,
      .npl-graph {
        height: 400px;
        border: 1px solid #858585;
        border-radius: 15px;
        text-align: justify;
        font-size: 1.1rem;
        color: #858585;
        padding: 40px;
        line-height: 133%;

        @media (max-width: 768px) {
          height: 100%;
          padding: 0px 40px 20px 40px;
        }

        .npl-chart {
          max-height: 250px;
        }

        h1 {
          font-size: 2.2rem;
          font-weight: bold;
          color: #d63333;
          padding: 10px 10px 25px 10px;
          text-align: center;
        }

        p {
          font-size: 1.4rem;
          font-weight: bold;
          text-align: center;
        }
      }
    }

    h1 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 20px;
      padding-bottom: 40px;
      text-align: center;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #343434;
      padding: 20px;
      padding-bottom: 40px;
      text-align: center;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
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
        gap: 20px;
        flex-direction: column;
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

    .core-banking-sustainability-image {
      height: 400px;
      border: 1px solid #858585;
      border-radius: 15px;
      padding: 40px;
      text-align: -webkit-center;
      img {
        border-radius: 15px;
        height: 220px;
        object-fit: cover;
      }

      @media (max-width: 768px) {
        height: 100%;
        padding: 40px;
        img {
          height: 100%;
        }
      }

      .asset-img {
        h1 {
          font-size: 2.2rem;
          font-weight: bold;
          color: #d63333;
          padding: 10px 10px 25px 10px;
          text-align: center;
        }

        p {
          font-size: 1.4rem;
          font-weight: bold;
          text-align: center;
          color: #858585;
        }
      }
    }

    .core-banking-sustainability-graph {
      height: 400px;
      border: 1px solid #858585;
      border-radius: 15px;
      text-align: justify;
      font-size: 1.1rem;
      color: #858585;
      padding: 40px;
      line-height: 133%;
      display: flex;

      @media (max-width: 768px) {
        height: 100%;
        padding: 0px 40px 20px 40px;
      }

      .cbs-chart {
        flex-grow: 1;
      }

      h1 {
        font-size: 2.2rem;
        font-weight: bold;
        color: #d63333;
        padding: 10px 10px 25px 10px;
        text-align: center;
      }

      p {
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
      }
    }
  }

  .gender-equality {
    background: linear-gradient(
      90deg,
      rgba(15, 190, 50, 0.25) 15%,
      rgba(75, 130, 80, 0.15) 50%,
      rgba(15, 150, 130, 0.35) 85%
    );
    margin: 20px -40px -20px -40px;
    padding: 20px 40px 40px 40px;
    line-height: 133%;
    height: 100%;

    .car-npl {
      padding-top: 40px;

      @media (max-width: 768px) {
        padding-top: 20px;
      }

      .car-graph,
      .npl-graph {
        height: 400px;
        border: 1px solid #858585;
        border-radius: 15px;
        text-align: justify;
        font-size: 1.1rem;
        color: #858585;
        padding: 40px;
        line-height: 133%;

        @media (max-width: 768px) {
          height: 100%;
          padding: 0px 40px 20px 40px;
        }

        .npl-chart {
          max-height: 250px;
        }

        h1 {
          font-size: 2.2rem;
          font-weight: bold;
          color: #d63333;
          padding: 10px 10px 25px 10px;
          text-align: center;
        }

        p {
          font-size: 1.4rem;
          font-weight: bold;
          text-align: center;
        }
      }
    }

    h1 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 20px;
      padding-bottom: 40px;
      text-align: center;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #343434;
      padding: 20px;
      padding-bottom: 40px;
      text-align: center;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
    }

    .row {
      margin: 0 auto;
      gap: 20px;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      height: 100%;
      display: flex;
      flex-grow: 1;

      @media (max-width: 768px) {
        gap: 20px;
        flex-direction: column;
        text-align: center;
      }

      .col-md-5 {
        padding: 0;
        flex: inherit;
        max-width: 358px;
      }
      .col-md-7 {
        padding: 0;
      }
    }

    .gender-equality-image {
      height: 620px;
      border: 1px solid #858585;
      border-radius: 15px;
      padding: 20px 20px 20px 130px;
      text-align: -webkit-center;
      background-image: url("~assets/image/gender-equality.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      img {
        border-radius: 15px;
        height: 220px;
        object-fit: cover;
      }

      @media (max-width: 768px) {
        height: 620px;
        padding: 20px 20px 20px 130px;
        img {
          height: 100%;
        }
      }

      .gender-equality-img-text {
        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #858585;
          padding: 10px 0 30px;
          text-align: right;
        }

        p {
          font-size: 1.6rem;
          font-weight: bold;
          text-align: right;
          padding: 0;
          color: #050505;
        }
      }
    }

    .gender-ratio-graph {
      height: 350px;
      border: 1px solid #858585;
      border-radius: 15px;
      text-align: justify;
      font-size: 1.1rem;
      color: #858585;
      padding: 25px;
      line-height: 133%;
      display: flex;

      @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
        padding: 20px 40px 20px 40px;
      }

      .gender-chart {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
      }

      h1 {
        font-size: 1.4rem;
        font-weight: bold;
        color: #ed017f;
        padding: 0 0 10px 0;
        text-align: left;
      }

      p {
        font-size: 1rem;
        text-align: justify;
      }
    }

    .gender-ratio-redirect {
      height: 250px;
      border: 1px solid #858585;
      border-radius: 15px;
      text-align: justify;
      font-size: 1.1rem;
      color: #858585;
      padding: 25px;
      line-height: 133%;
      display: flex;

      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 40px;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
        padding: 20px 40px 20px 40px;
      }

      h1 {
        font-size: 2rem;
        font-weight: bold;
        color: #ed017f;
        padding: 0 0 10px 0;
        text-align: center;
      }

      h3 {
        font-size: 1.2rem;
        font-weight: normal;
        padding: 0 0 10px 0;
        text-align: center;
      }

      .circle {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle at 0% -5%, #d9d9d9, #c3c3c3);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.6s ease;

        @media (max-width: 768px) {
          background: radial-gradient(circle at 0% -5%, #ffffff, #dddddd);
        }

        &:hover {
          background: radial-gradient(circle at 0% -5%, #ffffff, #dddddd);
          transform: scale(1.1);
        }

        .circle-logo {
          width: 75%;
          height: auto;
          position: absolute;
        }

        .circle-text {
          position: absolute;
          font-size: 14px;
          color: #333;
          text-align: center;
          line-height: 140%;
          z-index: 1; /* Ensure text is above the logo */
        }
      }
    }
  }

  .best-practice-section {
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(15, 190, 50, 0.35) 15%,
      rgba(15, 90, 20, 0.15) 50%,
      rgba(15, 90, 80, 0.25) 85%
    );
    margin: 20px -40px -20px -40px;
    padding: 20px 40px 40px 40px;
    line-height: 133%;
    height: 100%;

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
      margin-right: -40px;
      margin-left: -40px;

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
          background-color: rgba(255, 255, 255, 0.6);
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

  .capacity-building-section {
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(31, 144, 42, 0.25) 15%,
      rgba(30, 245, 40, 0.15) 50%,
      rgba(30, 245, 200, 0.35) 85%
    );
    margin: 20px -40px -20px -40px;
    padding: 20px 40px 40px 40px;
    line-height: 133%;
    height: 100%;

    h1 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 20px;
      padding-bottom: 40px;
      text-align: center;
    }

    p {
      text-align: justify;
      font-size: 1.1rem;
      color: #858585;
      padding: 0 40px;
      line-height: 133%;
    }
  }
}
</style>
