<template>
  <div
    class="container"
    data-aos="zoom-in"
    data-aos-delay="300"
    data-aos-duration="1000"
  >
    <details v-if="$i18n.locale == 'en'" class="main" open>
      <summary><nuxt-link to="/">IPDC</nuxt-link></summary>
      <ul>
        <li><nuxt-link to="/deposit-schemes">Deposit</nuxt-link></li>
        <li>
          <details open>
            <summary>Loans</summary>
            <ul>
              <li>
                <details open>
                  <summary>Individual Loans</summary>
                  <ul>
                    <li><nuxt-link to="/autoloan">Auto Loan</nuxt-link></li>
                    <li><nuxt-link to="/homeloan">Home Loan</nuxt-link></li>
                    <li>
                      <details open>
                        <summary>
                          <nuxt-link to="/personalloan"
                            >Personal Loan</nuxt-link
                          >
                        </summary>
                        <ul>
                          <li>
                            <nuxt-link to="/ipdc-teachers-loan"
                              >IPDC Teacher’s Loan - প্রজ্ঞা</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/ipdc-doctors-loan"
                              >IPDC Doctor’s Loan</nuxt-link
                            >
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <nuxt-link to="/bhalobasa-loan"
                        >Bhalo Basha Loan</nuxt-link
                      >
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details open>
                  <summary>Institutional Loans</summary>
                  <ul>
                    <li><nuxt-link to="/ipdc-sme">SME Financing</nuxt-link></li>
                    <li>
                      <nuxt-link to="/corporate-financial-service"
                        >Corporate Financial Services</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/supply-chain"
                        >Supply Chain Finance</nuxt-link
                      >
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Women Financing</summary>
            <ul>
              <li><nuxt-link to="/joyee">IPDC Joyee</nuxt-link></li>
              <li><nuxt-link to="/priti">IPDC Priti</nuxt-link></li>
            </ul>
          </details>
        </li>
        <li><nuxt-link to="/campaign">Ongoing Campaigns</nuxt-link></li>
        <li>
          <details open>
            <summary>About Us</summary>
            <ul>
              <li><nuxt-link to="/mission-vision">About IPDC</nuxt-link></li>
              <li><nuxt-link to="/management">Management</nuxt-link></li>
              <li><nuxt-link to="/shareholders">Shareholders</nuxt-link></li>
              <li>
                <nuxt-link to="/investor-relations"
                  >Investor Relation</nuxt-link
                >
              </li>
              <li><nuxt-link to="/news">News</nuxt-link></li>
              <li><nuxt-link to="/career">Career</nuxt-link></li>
              <li>
                <nuxt-link to="/signature-events">Events</nuxt-link>
              </li>
              <li><nuxt-link to="/ipdc-awards">IPDC Awards</nuxt-link></li>
              <li><nuxt-link to="/contact-us">Branches</nuxt-link></li>
              <!-- <li><nuxt-link to="/covid-19">COVID 19</nuxt-link></li> -->
              <!-- <li>
                <nuxt-link to="/digital-presence">Digital Presence</nuxt-link>
              </li> -->
              <!-- <li><nuxt-link to="/green-banking">Green Banking</nuxt-link></li> -->
              <li>
                <nuxt-link to="/citizen-charter"
                  >IPDC Citizen's Charter</nuxt-link
                >
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Others</summary>
            <ul>
              <li>
                <nuxt-link to="/csr">CSR Activities</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/financial-literacy"
                  >Financial Literacy</nuxt-link
                >
              </li>
              <!-- <li><nuxt-link to="/">IPDC calender</nuxt-link></li> -->
              <!-- <li><nuxt-link to="/">IPDC 40 </nuxt-link></li> -->
              <!-- <li>
                <nuxt-link to="/api/uploads/esrm/1719688299.pdf"
                  >Environmental and Social Risk Management</nuxt-link
                >
              </li> -->
              <li>
                <a
                  target="_blank"
                  href="https://www.ipdc.com/api/uploads/esrm/1719688299.pdf"
                  >Environmental and Social Risk Management</a
                >
              </li>
              <li>
                <nuxt-link to="/govsecwindow"
                  >Government Securities Investment Window</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/nis"
                  >National Integrity Strategy (NIS)</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
              </li>
              <!-- <li>
                <a
                  target="_blank"
                  href="https://www.ipdcbd.com/national-mourning-day-2023"
                  >National Mourning Day 2023</a
                >
              </li> -->
              <!-- <li><nuxt-link to="/smart-rate">Smart Rate</nuxt-link></li> -->
              <!-- <li>
                <nuxt-link
                  to="/api/uploads/DownloadableFile/Cluster_Financing_Policy.pdf"
                  >Cluster Financing Policy</nuxt-link
                >
              </li> -->
              <li>
                <a
                  target="_blank"
                  href="https://www.ipdc.com/api/uploads/DownloadableFile/Cluster_Financing_Policy.pdf"
                  >Cluster Financing Policy</a
                >
              </li>
              <li>
                <nuxt-link to="/virtual-currencies-prohibition"
                  >Virtual Currencies Prohibition</nuxt-link
                >
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
    <details v-if="$i18n.locale == 'bn'" class="main" open>
      <summary><nuxt-link to="/bn/">আইপিডিসি</nuxt-link></summary>
      <ul>
        <li><nuxt-link to="/bn/deposit-schemes">ডিপোজিট</nuxt-link></li>
        <li>
          <details open>
            <summary>লোন</summary>
            <ul>
              <li>
                <details open>
                  <summary>ব্যক্তিগত ঋণ</summary>
                  <ul>
                    <li><nuxt-link to="/bn/autoloan">অটো লোন</nuxt-link></li>
                    <li><nuxt-link to="/bn/homeloan">হোম লোন</nuxt-link></li>
                    <li>
                      <details open>
                        <summary>
                          <nuxt-link to="/bn/personalloan"
                            >পার্সোনাল লোন</nuxt-link
                          >
                        </summary>
                        <ul>
                          <li>
                            <nuxt-link to="/bn/ipdc-teachers-loan"
                              >আইপিডিসি শিক্ষক লোন - প্রজ্ঞা</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/bn/ipdc-doctors-loan"
                              >আইপিডিসি ডক্টর’স লোন</nuxt-link
                            >
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <nuxt-link to="/bn/bhalobasa-loan"
                        >ভালো বাসা লোন</nuxt-link
                      >
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details open>
                  <summary>প্রাতিষ্ঠানিক ঋণ</summary>
                  <ul>
                    <li>
                      <nuxt-link to="/bn/ipdc-sme">এসএমই ফাইন্যান্স</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/bn/corporate-financial-service"
                        >কর্পোরেট ফাইন্যান্স</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/bn/supply-chain"
                        >সাপ্লাই চেইন ফাইন্যান্স</nuxt-link
                      >
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>নারী অর্থায়ন</summary>
            <ul>
              <li><nuxt-link to="/bn/joyee">আইপিডিসি জয়ী</nuxt-link></li>
              <li><nuxt-link to="/bn/priti">আইপিডিসি প্রীতি</nuxt-link></li>
            </ul>
          </details>
        </li>
        <li><nuxt-link to="/bn/campaign">চলমান ক্যাম্পেইন</nuxt-link></li>
        <li>
          <details open>
            <summary>আমাদের সম্পর্কে</summary>
            <ul>
              <li>
                <nuxt-link to="/bn/mission-vision">আইপিডিসি সম্পর্কে</nuxt-link>
              </li>
              <li><nuxt-link to="/bn/management">ব্যবস্থাপনা</nuxt-link></li>
              <li>
                <nuxt-link to="/bn/shareholders">শেয়ারহোল্ডারগণ</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/bn/investor-relations"
                  >ইনভেস্টর রিলেশন</nuxt-link
                >
              </li>
              <li><nuxt-link to="/bn/news">নিউজ</nuxt-link></li>
              <li><nuxt-link to="/bn/career"> ক্যারিয়ার </nuxt-link></li>
              <li>
                <nuxt-link to="/bn/signature-events"> ইভেন্টস </nuxt-link>
              </li>
              <li><nuxt-link to="/bn/ipdc-awards"> পুরস্কার </nuxt-link></li>
              <li><nuxt-link to="/bn/contact-us"> শাখাসমূহ </nuxt-link></li>
              <!-- <li><nuxt-link to="/bn/covid-19"> কোভিড ১৯ </nuxt-link></li> -->
              <!-- <li>
                <nuxt-link to="/bn/digital-presence"
                  >ডিজিটালে উপস্থিতি
                </nuxt-link>
              </li> -->
              <li>
                <nuxt-link to="/bn/green-banking">গ্রীন ব্যাংকিং</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/bn/citizen-charter"
                  >আইপিডিসি সিটিজেন'স চার্টার</nuxt-link
                >
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>অন্যান্য</summary>
            <ul>
              <li>
                <nuxt-link to="/bn/csr">কর্পোরেট সামাজিক দায়িত্ব</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/bn/financial-literacy"
                  >আর্থিক সাক্ষরতা</nuxt-link
                >
              </li>
              <!-- <li><nuxt-link to="/bn/">আইপিডিসি ক্যালেন্ডার</nuxt-link></li> -->
              <!-- <li><nuxt-link to="/bn/">আইপিডিসি ৪০</nuxt-link></li> -->

              <li>
                <a
                  target="_blank"
                  href="https://www.ipdc.com/api/uploads/esrm/1719688299.pdf"
                  >পরিবেশগত ও সামাজিক ঝুঁকি ব্যবস্থাপনা</a
                >
              </li>
              <li>
                <nuxt-link to="/bn/govsecwindow"
                  >সরকারি নিরাপত্তা বিনিয়োগ উইন্ডো</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/bn/nis"
                  >জাতীয় শুদ্ধাচার কৌশল (এনআইএস)</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/bn/privacy-policy">প্রাইভেসি পলিসি</nuxt-link>
              </li>
              <!-- <li>
                <a
                  target="_blank"
                  href="https://www.ipdcbd.com/national-mourning-day-2023"
                  >জাতীয় শোক দিবস ২০২৩</a
                >
              </li> -->
              <!-- <li><nuxt-link to="/bn/smart-rate">স্মার্ট রেট</nuxt-link></li> -->
              <li>
                <a
                  target="_blank"
                  href="https://www.ipdc.com/api/uploads/DownloadableFile/Cluster_Financing_Policy.pdf"
                  >ক্লাস্টার ফাইন্যান্সিং পলিসি</a
                >
              </li>
              <li>
                <nuxt-link to="/bn/virtual-currencies-prohibition"
                  >ভার্চুয়াল মুদ্রা নিষেধাজ্ঞা</nuxt-link
                >
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </div>
</template>

<script>
export default {
  name: "Sitemap",
};
</script>

<style lang="scss" scoped>
.main {
  width: 40%;
  left: 10%;
  position: relative;
}
summary {
  color: #ed017f;
  &:hover {
    color: #ff0088;
    // transition: 0.15s all ease-in-out;
    // text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
}
.container {
  padding-top: 40px;
}
a {
  text-decoration: none;
  color: #ed017f;
  &:hover {
    color: #ff0088;
    // transition: 0.15s all ease-in-out;
    // text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
}
@mixin tree-view-lines($elem-height) {
  margin-left: 15px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -10px;
    width: 1px;
    height: calc(#{$elem-height} + 10px);
    background-color: #c7d3df;
  }

  &:last-child::after {
    height: calc(#{$elem-height} / 2 + 5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: calc(#{$elem-height} / 2);
    left: -10px;
    width: 8px;
    height: 1px;
    background-color: #c7d3df;
  }

  &[open]:not(:last-child)::after {
    height: calc(100% + 5px);
  }
}

@mixin big-blue {
  color: white;
  padding: 8px;
  background-color: #174378;
  border: 1px solid #174378;
  border-radius: 3px;

  &::-webkit-details-marker {
    margin-right: 14px;
  }
}

@mixin small-grey {
  margin: 5px 0;
  padding: 5px 10px;
  // background-color: #dfe7ec;
  // border: 1px solid #c7d3df;
  // border-radius: 3px;
  color: #000000;
  position: relative;

  span {
    color: #041320;
  }
}

html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;
  // font-family: sans-serif;
  max-width: 350px;
}

* {
  box-sizing: border-box;
}

body > details {
  width: 100%;
  margin-bottom: 10px;

  summary {
    @include big-blue;
  }

  > details {
    margin: 5px 0;
    @include tree-view-lines(36px);

    summary {
      @include big-blue;
    }

    > details {
      margin: 5px 0;
      @include tree-view-lines(28px);

      summary {
        @include small-grey;
      }
    }
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  @include small-grey;
  @include tree-view-lines(28px);
}
</style>
