<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logos">
        <nuxt-link class="logo_ipdc" :to="localePath('/')">
          <img src="~assets/image/logo/footerLogo.png" alt="location" />
        </nuxt-link>
        <a class="logo_ucchas" href="#">
          <img src="~assets/image/logo/ucchas.png" alt="location" />
        </a>
      </div>
      <div class="links-and-description">
        <div class="short-description-and-contacts">
          <div class="short-description">
            <p v-if="$i18n.locale == 'en'">
              We are happy to help you find the right solutions for all your
              financial needs. To know more, call us or visit any of our
              branches throughout the country
            </p>
            <p v-if="$i18n.locale == 'bn'">
              আপনার প্রয়োজন অনুযায়ী সঠিক সমাধান খুঁজে পেতে আপনাকে সাহায্য করতে
              পারাটাই আমাদের কাছে সবচেয়ে আনন্দের। তাই, নির্দ্বিধায় চলে আসতে
              পারেন সারাদেশে আমাদের যে-কোনো শাখায়।
            </p>
          </div>
          <div class="contacts">
            <a href="https://ipdc.com/contact-us" style="text-decoration: none">
              <div class="contact location">
                <div class="icon">
                  <img src="~assets/icons/location.svg" alt="location" />
                </div>

                <div class="info">
                  <h5 v-if="$i18n.locale == 'en'">Gulshan, Dhaka</h5>
                  <h5 v-if="$i18n.locale == 'bn'">গুলশান, ঢাকা</h5>
                  <p v-if="$i18n.locale == 'en'">
                    Hosna centre, Gulshan Avenue
                  </p>
                  <p v-if="$i18n.locale == 'bn'">
                    হোসনা সেন্টার, গুলশান অ্যাভিনিউ
                  </p>
                </div>
              </div>
            </a>

            <a href="tel:16519" style="text-decoration: none">
              <div class="contact helpline">
                <div class="icon">
                  <img src="~assets/icons/phone.svg" alt="location" />
                </div>
                <div class="info">
                  <h5 v-if="$i18n.locale == 'en'">16519</h5>
                  <h5 v-if="$i18n.locale == 'bn'">১৬৫১৯</h5>
                  <p v-if="$i18n.locale == 'en'">Give us a call</p>
                  <p v-if="$i18n.locale == 'bn'">কল করুন</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="quick-links">
          <ul role="list" class="footer-menu">
            <!-- <li><nuxt-link href="/">About Us</nuxt-link></li>
          <li><nuxt-link href="/">Loans</nuxt-link></li> -->
            <li class="footer-menu-list list-circle">
              <a class="footer-menu-list-link circle">
                {{ $i18n.locale == "en" ? "About Us" : "আমাদের সম্পর্কে" }}
                <div class="down-circle">
                  <img src="~assets/image/rightarrow.png" alt="Arrow" />
                </div>
              </a>

              <ul class="dropdown-menu">
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/mission-vision')"
                  >
                    {{
                      $i18n.locale == "en"
                        ? "Purpose (Mission vision & values)"
                        : "উদ্দেশ্য (লক্ষ্য এবং দর্শন)"
                    }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/management')"
                  >
                    {{ $i18n.locale == "en" ? "Management" : "ম্যানেজমেন্ট" }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/shareholders')"
                  >
                    {{ $i18n.locale == "en" ? "Shareholder" : "শেয়ারহোল্ডার" }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/investor-relations')"
                  >
                    {{
                      $i18n.locale == "en"
                        ? "Investor Relation"
                        : "বিনিয়োগকারীর সাথে সম্পর্ক"
                    }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/sustainability')"
                  >
                    {{
                      $i18n.locale == "en" ? "Sustainability" : "সাসটেইনেবিলিটি"
                    }}
                  </nuxt-link>
                </li>

                <!-- <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/covid-19')"
                  >
                    {{ $i18n.locale == "en" ? "COVID 19" : "কোভিড -১৯" }}
                  </nuxt-link>
                </li> -->

                <!-- <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/digital-presence')"
                  >
                    {{
                      $i18n.locale == "en"
                        ? "Digital Presence"
                        : "ডিজিটাল প্রেজেন্স"
                    }}
                  </nuxt-link>
                </li> -->
              </ul>
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/csr')"
                >{{
                  $i18n.locale == "en"
                    ? "CSR Activities"
                    : "কর্পোরেট সামাজিক দায়িত্ব"
                }}</nuxt-link
              >
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/news')"
                >{{ $i18n.locale == "en" ? "News" : "নিউজ" }}</nuxt-link
              >
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/financial-literacy')"
                >{{
                  $i18n.locale == "en"
                    ? "Financial Literacy"
                    : "আর্থিক সাক্ষরতা"
                }}</nuxt-link
              >
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/career')"
                >{{ $i18n.locale == "en" ? "Career" : "ক্যারিয়ার" }}</nuxt-link
              >
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/signature-events')"
                >{{ $i18n.locale == "en" ? "Events" : "ইভেন্টস" }}</nuxt-link
              >
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/ipdc-awards')"
                >{{ $i18n.locale == "en" ? "Awards" : "পুরস্কার" }}</nuxt-link
              >
            </li>
            <!-- <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/contact-us')"
                >{{ $i18n.locale == "en" ? "Branches" : "শাখাসমূহ" }}</nuxt-link
              >
            </li> -->
            <li class="footer-menu-list list-circle">
              <a class="footer-menu-list-link circle">
                {{ $i18n.locale == "en" ? "Loans" : "লোন" }}
                <div class="down-circle">
                  <img src="~assets/image/rightarrow.png" alt="Arrow" />
                </div>
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/autoloan')"
                  >
                    {{
                      $i18n.locale == "en"
                        ? "IPDC Auto Loan"
                        : "আইপিডিসি অটো লোন"
                    }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/homeloan')"
                  >
                    {{
                      $i18n.locale == "en"
                        ? "IPDC Home Loan"
                        : "আইপিডিসি হোম লোন"
                    }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/personalloan')"
                  >
                    {{
                      $i18n.locale == "en"
                        ? "IPDC Personal Loan"
                        : "আইপিডিসি পার্সোনাল লোন"
                    }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/bhalobasa-loan')"
                  >
                    {{
                      $i18n.locale == "en"
                        ? "Bhalo Basha Loan"
                        : "ভালো বাসা লোন"
                    }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/ipdc-sme')"
                  >
                    {{ $i18n.locale == "en" ? "SME" : "এসএমই" }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/corporate-financial-service')"
                  >
                    {{ $i18n.locale == "en" ? "Corporate" : "কর্পোরেট" }}
                  </nuxt-link>
                </li>
                <li class="dropdown-menu-lists">
                  <nuxt-link
                    class="dropdown-menu-lists-links"
                    :to="localePath('/supply-chain')"
                  >
                    {{
                      $i18n.locale == "en"
                        ? "Supply Chain Finance"
                        : "সাপ্লাই চেইন ফাইন্যান্স"
                    }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/deposit-schemes')"
                >{{ $i18n.locale == "en" ? "Deposit" : "ডিপোজিট" }}</nuxt-link
              >
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/campaign')"
                >{{
                  $i18n.locale == "en"
                    ? "Ongoing Campaigns"
                    : "চলমান ক্যাম্পেইন"
                }}</nuxt-link
              >
            </li>
          </ul>

          <ul role="list" class="footer-menu">
            <!-- <li class="footer-menu-list">
              <a
                class="footer-menu-list-link"
                target="_blank"
                href="http://ipdcecalendar.com/"
              >
                {{
                  $i18n.locale == "en"
                    ? "IPDC Calender"
                    : "আইপিডিসি ক্যালেন্ডার"
                }}
              </a>
            </li> -->
            <!-- <li class="footer-menu-list">
              <a
                class="footer-menu-list-link"
                target="_blank"
                href="https://www.ipdcbd.com/40/"
              >
                {{ $i18n.locale == "en" ? "IPDC 40" : "আইপিডিসি ৪০" }}
              </a>
            </li> -->
            <li class="footer-menu-list">
              <a
                v-if="$i18n.locale == 'en'"
                class="footer-menu-list-link"
                target="_blank"
                :href="esrmFile.file_link"
              >
                Environmental and Social Risk Management
              </a>
              <a
                v-if="$i18n.locale == 'bn'"
                class="footer-menu-list-link"
                target="_blank"
                :href="esrmFile.file_link_bn"
                >পরিবেশগত ও সামাজিক ঝুঁকি ব্যবস্থাপনা</a
              >
            </li>
            <!-- <li><nuxt-link to="/">News</nuxt-link></li> -->
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/govsecwindow')"
                >{{
                  $i18n.locale == "en"
                    ? "Government Securities Investment Window"
                    : "সরকারি নিরাপত্তা বিনিয়োগ উইন্ডো"
                }}</nuxt-link
              >
            </li>

            <li class="footer-menu-list">
              <nuxt-link class="footer-menu-list-link" :to="localePath('/nis')">
                {{
                  $i18n.locale == "en"
                    ? "National Integrity Strategy (NIS)"
                    : "জাতীয় শুদ্ধাচার কৌশল (এনআইএস)"
                }}
              </nuxt-link>
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/contact-us')"
              >
                {{ $i18n.locale == "en" ? "Branches" : "শাখাসমূহ" }}
              </nuxt-link>
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/privacy-policy')"
              >
                {{
                  $i18n.locale == "en" ? "Privacy Policy" : "প্রাইভেসি পলিসি"
                }}
              </nuxt-link>
            </li>
            <!-- <li class="footer-menu-list">
              <a
                class="footer-menu-list-link"
                target="_blank"
                href="https://www.ipdcbd.com/national-mourning-day-2023"
              >
                {{
                  $i18n.locale == "en"
                    ? "National Mourning Day 2023"
                    : "জাতীয় শোক দিবস ২০২৩"
                }}
              </a>
            </li> -->
            <!-- <li class="footer-menu-list">
              <a
                class="footer-menu-list-link"
                target="_blank"
                href="https://www.ipdcbd.com/smart-rate"
              >
                {{ $i18n.locale == "en" ? "Smart Rate" : "স্মার্ট রেট" }}
              </a>
            </li> -->
            <li class="footer-menu-list">
              <a
                class="footer-menu-list-link"
                target="_blank"
                href="https://ipdc.com/api/uploads/DownloadableFile/Cluster_Financing_Policy.pdf"
              >
                {{
                  $i18n.locale == "en"
                    ? "Cluster Financing Policy"
                    : "ক্লাস্টার ফাইন্যান্সিং পলিসি"
                }}
              </a>
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/virtual-currencies-prohibition')"
              >
                {{
                  $i18n.locale == "en"
                    ? "Virtual Currencies Prohibition"
                    : "ভার্চুয়াল মুদ্রা নিষেধাজ্ঞা"
                }}
              </nuxt-link>
            </li>
            <li class="footer-menu-list">
              <a
                class="footer-menu-list-link"
                target="_blank"
                href="https://ipdc.com/api/uploads/DownloadableFile/IPDC-Deposit-Slip-MTB.pdf"
              >
                {{
                  $i18n.locale == "en"
                    ? "MTBL Deposit Slip"
                    : "MTBL ডিপোজিট স্লিপ"
                }}
              </a>
            </li>
            <li class="footer-menu-list">
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/contact-us')"
                >{{
                  $i18n.locale == "en" ? "Contact Us" : "যোগাযোগ করুন"
                }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright-text">
          <p v-if="$i18n.locale == 'en'">
            &copy; IPDC Finance PLC. {{ currentYear }}
          </p>
          <p v-if="$i18n.locale == 'bn'">
            &copy; আইপিডিসি ফাইন্যান্স পিএলসি. {{ currentYearBn }}
          </p>
        </div>
        <div class="bottom-links">
          <ul role="list">
            <li>
              <a
                target="_blank"
                href="https://ipdc.com/api/uploads/DownloadableFile/Terms_of_use.pdf"
              >
                {{ $i18n.locale == "en" ? "Terms of Use" : "ব্যবহারের শর্ত" }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ipdc.com/api/uploads/DownloadableFile/AML_CFT_policy.pdf"
              >
                {{
                  $i18n.locale == "en"
                    ? "AML & CFT Policy"
                    : "এএমএল অ্যান্ড সিটিএফ পলিসি"
                }}
              </a>
            </li>
            <li>
              <nuxt-link
                class="footer-menu-list-link"
                :to="localePath('/sitemap')"
              >
                {{ $i18n.locale == "en" ? "Sitemap" : "সাইটম্যাপ" }}
              </nuxt-link>
            </li>
            <li>
              <a v-b-modal.modal-1>
                {{ $i18n.locale == "en" ? "Complaint Cell" : "অভিযোগ সেল" }}
              </a>
            </li>
            <li>
              <a v-b-modal.modal-2>
                {{
                  $i18n.locale == "en" ? "Information Booth" : "তথ্য কেন্দ্র"
                }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ipdc.com/api/uploads/DownloadableFile/IPDC_Logo.ai"
                ><img
                  src="~assets/icons/down.svg"
                  alt="icon"
                  class="svg-pink"
                />
                IPDC Logo
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ipdc.com/api/uploads/DownloadableFile/Disclosure_on_CAMD.pdf"
              >
                {{
                  $i18n.locale == "en"
                    ? "Disclosure on CAMD"
                    : "CAMD উপর ডিসক্লোজার"
                }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ipdc.com/api/uploads/DownloadableFile/IPDC_Finance_calendar_current.pdf"
              >
                {{
                  $i18n.locale == "en"
                    ? "IPDC Calender"
                    : "আইপিডিসি ক্যালেন্ডার"
                }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ipdc.com/api/uploads/DownloadableFile/SOC_current.pdf"
              >
                {{
                  $i18n.locale == "en"
                    ? "Schedule of Fees & Charges"
                    : "ফি ও চার্জ সূচি"
                }}
              </a>
            </li>
            <!-- <li><a href="#">Information Booth</a></li>
          <li><a href="#">Disclosure on CAMD</a></li>
          <li><a href="#">Schedule of fees & charges</a></li> -->
            <!-- <li>
            <a href="#">More</a>
            <a href="#" class="more"><img src="~assets/image/rightarrow.png" alt=""></a>
          </li> -->
          </ul>
        </div>
        <div class="social-links">
          <ul role="list">
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/ipdcfinance?_rdc=1&_rdr"
              >
                <img src="~assets/icons/fb.svg" alt="FB" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/user/ipdcbd">
                <img src="~assets/icons/youtube.svg" alt="Youtube" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ipdc-finance/?viewAsMember=true"
              >
                <img src="~assets/icons/linkdin.svg" alt="Linkdin" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/ipdc.finance/">
                <img src="~assets/icons/insta.svg" alt="Insta" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="complaint">
      <b-modal id="modal-1">
        <template #modal-header>
          <div class="d-flex justify-content-between align-items-center w-100">
            <h5
              class="modal-title text-center flex-grow-1"
              v-if="$i18n.locale == 'bn'"
            >
              {{ complaintCell.title_bn || "Information Booth" }}
            </h5>
            <h5 class="modal-title text-center flex-grow-1" v-else>
              {{ complaintCell.title || "Information Booth" }}
            </h5>
            <b-button
              variant="link"
              class="close-button"
              @click="$bvModal.hide('modal-1')"
              >&times;</b-button
            >
          </div>
        </template>
        <div class="modal-body">
          <p v-if="$i18n.locale == 'bn'">
            {{
              complaintCell.description_bn ||
              "For any information, please visit our head office."
            }}
          </p>
          <p v-else>
            {{
              complaintCell.description ||
              "For any information, please visit our head office."
            }}
          </p>
          <div class="contact-information">
            <p>
              <span>Name of the Contact: </span>
              <span v-if="$i18n.locale == 'bn'">{{
                complaintCell.name_of_contact_bn || "N/A"
              }}</span>
              <span v-else>{{ complaintCell.name_of_contact || "N/A" }}</span>
            </p>
            <p>
              <span>Designation: </span>
              <span v-if="$i18n.locale == 'bn'">{{
                complaintCell.designation_bn || "N/A"
              }}</span>
              <span v-else>{{ complaintCell.designation || "N/A" }}</span>
            </p>
            <p><span>Phone: </span>{{ complaintCell.phone || "N/A" }}</p>
            <p><span>Fax: </span>{{ complaintCell.fax || "N/A" }}</p>
            <p>
              <span>E-mail: </span>
              <a :href="'mailto:' + complaintCell.email">{{
                complaintCell.email || "N/A"
              }}</a>
            </p>
          </div>
        </div>
        <template #modal-footer>
          <b-button variant="secondary" @click="$bvModal.hide('modal-1')"
            >Close</b-button
          >
        </template>
      </b-modal>
    </div>
    <div class="complaint">
      <b-modal id="modal-2">
        <template #modal-header>
          <div class="d-flex justify-content-between align-items-center w-100">
            <h5
              class="modal-title text-center flex-grow-1"
              v-if="$i18n.locale == 'bn'"
            >
              {{ informationBooth.title_bn || "Information Booth" }}
            </h5>
            <h5 class="modal-title text-center flex-grow-1" v-else>
              {{ informationBooth.title || "Information Booth" }}
            </h5>
            <b-button
              variant="link"
              class="close-button"
              @click="$bvModal.hide('modal-2')"
              >&times;</b-button
            >
          </div>
        </template>
        <div class="modal-body">
          <p v-if="$i18n.locale == 'bn'">
            {{
              informationBooth.description_bn ||
              "For any information, please visit our head office."
            }}
          </p>
          <p v-else>
            {{
              informationBooth.description ||
              "For any information, please visit our head office."
            }}
          </p>
          <div class="contact-information">
            <p>
              <span>Name of the Contact: </span>
              <span v-if="$i18n.locale == 'bn'">{{
                informationBooth.name_of_contact_bn || "N/A"
              }}</span>
              <span v-else>{{
                informationBooth.name_of_contact || "N/A"
              }}</span>
            </p>
            <p>
              <span>Designation: </span>
              <span v-if="$i18n.locale == 'bn'">{{
                informationBooth.designation_bn || "N/A"
              }}</span>
              <span v-else>{{ informationBooth.designation || "N/A" }}</span>
            </p>
            <p><span>Phone: </span>{{ informationBooth.phone || "N/A" }}</p>
            <p><span>Fax: </span>{{ informationBooth.fax || "N/A" }}</p>
            <p>
              <span>E-mail: </span>
              <a :href="'mailto:' + informationBooth.email">{{
                informationBooth.email || "N/A"
              }}</a>
            </p>
          </div>
        </div>
        <template #modal-footer>
          <b-button variant="secondary" @click="$bvModal.hide('modal-2')"
            >Close</b-button
          >
        </template>
      </b-modal>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerFile: Object,
      esrmFile: [],
      informationBooth: [],
      complaintCell: [],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    currentYearBn() {
      return this.toBanglaNumber(new Date().getFullYear());
    },
  },
  created() {
    // this.getNisFile();
    this.getExtraData();
    this.getESRMFile();
  },
  methods: {
    toBanglaNumber(number) {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return number
        .toString()
        .split("")
        .map((d) => bnDigits[d])
        .join("");
    },
    async getNisFile() {
      const response = await this.$axios.get("/get-footer-component");
      this.footerFile = response.data.nis_file;
    },
    async getExtraData() {
      try {
        const response = await this.$axios.get(
          // "http://localhost/api/v1/get-extra-data.php"
          `https://ipdc.com/demo/api/get-extra-data.php`
        );
        this.informationBooth = response.data.data.informationBooth;
        this.complaintCell = response.data.data.complaintCell;
        // console.log(this.informationBooth);
        // console.log(this.complaintCell);
        // console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async getESRMFile() {
      const response = await this.$axios.get("/get-esrm-file");
      this.esrmFile = response.data.data;
    },
  },
};
</script>

<style lang="scss" scoped>
#modal-1,
#modal-2 {
  .modal-header {
    padding: 20px !important;
  }
  .modal-title {
    font-size: 1.5rem;
    color: #ed017f;
    font-weight: 700;
    text-align: center;
    width: 100%;
  }
  .modal-body {
    padding: 10px;
    border-radius: 5px;
    p {
      font-size: 1rem;
      color: #5a5555;
    }
  }
  .contact-information {
    margin-top: 15px;
    p {
      font-size: 1rem;
      span {
        font-weight: bold;
        color: #5a5555;
      }
      a {
        color: #ed017f;
        text-decoration: none;
      }
      a:hover {
        text-decoration: none;
      }
    }
  }
  .btn::before {
    right: unset;
  }
  .w-100 {
    text-align: center;
    .close-button {
      font-size: 40px;
      color: #ed017f;
    }
    .close-button:hover {
      text-decoration: none;
    }
  }
}
.footer {
  width: 100%;
  background: rgba(253, 225, 240, 0.1);
  padding: 50px 0 10px 0;
  .footer-logos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo_ipdc {
      display: inline-block;
      margin-bottom: 20px;
      img {
        // width: 100px;
        height: 40px;
      }
    }
    .logo_ucchas {
      img {
        height: 40px;
        margin: 0 10px 10px 0;
      }
    }
  }
  .links-and-description {
    display: flex;
    justify-content: space-between;
    .short-description-and-contacts {
      flex-basis: 50%;
      .short-description {
        p {
          font-size: 14px;
          line-height: 157.1%;
          color: #5d5d5d;
          .font-bn & {
            font-size: 19px;
          }
        }
      }
      .contacts {
        display: flex;
        margin-top: 56px;
        .contact {
          flex-basis: 50%;
          display: flex;
          align-items: flex-start;
          .icon {
            margin-right: 10px;
            img {
              width: 29px;
              height: 36px;
            }
          }
          .info {
            margin-left: 4px;
            h5 {
              margin: 0;
              font-weight: 500;
              font-size: 18px;
              line-height: 122.22%;
              color: #f467b2;
              .font-bn & {
                font-size: 25px;
              }
            }
            p {
              margin-right: 15px;
              font-weight: normal;
              font-size: 14px;
              line-height: 157.1%;
              color: #f467b2;
              .font-bn & {
                font-size: 19px;
              }
            }
          }
        }
      }
    }
    .quick-links {
      flex-basis: 40%;
      display: flex;
      justify-content: space-between;
      .footer-menu {
        padding: 0;
        // flex-basis: 32%;
        &-list {
          position: relative;
          // margin-right: 30px;
          margin-bottom: 5px;
          .dropdown-menu {
            display: none;
            margin: 0;
            padding: 10px 0;
            position: absolute;
            top: 20px;
            left: 0;
            width: 150px;
            // background: rgba($color: #ffffff, $alpha: 0.8);
            background: #ffffff;
            animation: footerDropdownAnimation 0.6s ease-in-out forwards;
            &-lists {
              padding: 0 15px;
              text-align: left;
              &:not(:last-child) {
                border-bottom: 1px solid #ccc;
              }
              &-links {
                display: inline-block;
                text-decoration: none;
                padding: 5px 0;
                color: #333;
                font-size: 10px;
                position: relative;
                .font-bn & {
                  font-size: 15px;
                }

                &::after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  height: 2px;
                  width: 0;
                  background: #333;
                  transition: all 0.3s;
                }

                &:hover {
                  color: #ed017f;
                  &::after {
                    width: 100%;
                  }
                }
              }
            }
          }
          &:hover {
            .dropdown-menu {
              display: block;
            }
          }
          &-link {
            text-decoration: none;
            font-size: 14px;
            line-height: 157.1%;
            color: #5d5d5d;
            position: relative;
            display: inline-block;
            cursor: pointer;
            .font-bn & {
              font-size: 19px;
            }
            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              height: 2px;
              width: 0;
              background: #333;
              transition: all 0.3s;
            }
            &:hover {
              &::after {
                width: 100%;
              }
            }
          }
          .circle {
            display: flex;
            .down-circle {
              width: 15px;
              height: 15px;
              background: rgba(237, 1, 127, 0.37);
              mix-blend-mode: normal;
              border-radius: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 10px;
              margin-top: 2px;
              img {
                width: 5px;
                height: 7px;
                transform: rotate(90deg);
              }
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e7e7e7;
    margin-top: 20px;
    .copyright-text {
      margin-top: 20px;
      width: 21%;
      p {
        font-size: 13px;
        line-height: 149.3%;
        color: #343434;
        .font-bn & {
          font-size: 18px;
        }
      }
    }

    .bottom-links {
      margin-top: 20px;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
          display: flex;
          margin: 0 25px 10px 0;
          .svg-pink {
            width: 20px;
            filter: invert(52%) sepia(73%) saturate(260%) hue-rotate(295deg);
          }
          a {
            text-decoration: none;
            font-size: 12px;
            color: #5d5d5d;
            position: relative;
            display: inline-flex;
            .font-bn & {
              font-size: 17px;
            }
            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              height: 2px;
              width: 0;
              background: #333;
              transition: all 0.3s;
            }
            &:hover {
              &::after {
                width: 100%;
              }
            }
          }
          .more {
            width: 16px;
            height: 16px;
            background: rgb(237, 1, 127, 0.3);
            mix-blend-mode: normal;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: -10px;
            img {
              width: 7px;
              height: 7px;
            }
          }
        }
      }
    }
    .social-links {
      margin-top: 20px;
      ul {
        display: flex;
        align-items: center;
        gap: 15px;
        li {
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            img {
              width: auto;
              max-height: 100% !important;
            }
            &:hover {
              img {
                transition: 0.3s;
                transform: scale(1.15);
              }
            }
          }
        }
      }
    }
  }
}

@keyframes footerDropdownAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (max-width: 768px) {
  .footer {
    width: 100%;
    background: white;
    padding: 50px 0 30px 0;
    .links-and-description {
      flex-direction: column;
      .short-description-and-contacts {
        flex-basis: 50%;
        // .short-description {
        // }
        .contacts {
          flex-direction: column;
          margin-bottom: 30px;
          .contact {
            margin-bottom: 40px;
            .icon {
              margin-right: 10px;
              // img {
              // }
            }
            // .info {
            //   h5 {
            //   }
            //   p {
            //   }
            // }
          }
        }
      }
      .quick-links {
        flex-direction: column;
        // ul {
        //   li {
        //   }
        // }
      }
    }

    .footer-bottom {
      flex-direction: column;
      border-top: none;
      margin-top: -35px;
      margin-left: -40px;
      padding-bottom: 120px;
      .copyright-text {
        order: 3;
        border-top: 1px solid #e7e7e7;
        margin-left: 35px;
        width: unset;
        p {
          margin-top: 20px;
        }
      }
      .bottom-links {
        border-top: 1px solid #e7e7e7;
        margin: 30px 0 0 35px;
        order: 1;
        ul {
          flex-direction: column;
          margin-top: 10px;
          margin-left: -35px;
          // li {
          //   a {
          //   }
          // }
        }
      }
      .social-links {
        margin-top: 5px;
        order: 2;
        // ul {
        //   li {
        //     a {
        //       img {
        //       }
        //     }
        //   }
        // }
      }
    }
  }
}
@media screen and (max-width: 830px) {
  .footer {
    width: 100%;
    background: white;
    padding: 50px 0 30px 0;
    .links-and-description {
      flex-direction: column;
      .short-description-and-contacts {
        flex-basis: 50%;
        // .short-description {
        // }
        .contacts {
          flex-direction: column;
          margin-bottom: 30px;
          .contact {
            margin-bottom: 40px;
            .icon {
              margin-right: 10px;
              // img {
              // }
            }
            // .info {
            //   h5 {
            //   }
            //   p {
            //   }
            // }
          }
        }
      }
      .quick-links {
        flex-direction: column;
        // ul {
        //   li {
        //   }
        // }
      }
    }

    .footer-bottom {
      flex-direction: column;
      border-top: none;
      margin-top: -35px;
      margin-left: -40px;
      padding-bottom: 120px;
      .copyright-text {
        order: 3;
        border-top: 1px solid #e7e7e7;
        margin-left: 35px;
        width: unset;
        p {
          margin-top: 20px;
        }
      }
      .bottom-links {
        border-top: 1px solid #e7e7e7;
        margin: 30px 0 0 35px;
        order: 1;
        ul {
          flex-direction: column;
          margin-top: 10px;
          margin-left: -35px;
          // li {
          //   a {
          //   }
          // }
        }
      }
      .social-links {
        margin-top: 5px;
        order: 2;
        // ul {
        //   li {
        //     a {
        //       img {
        //       }
        //     }
        //   }
        // }
      }
    }
  }
}

.font-bn
  .footer
  .links-and-description
  .quick-links
  .footer-menu-list
  .dropdown-menu-lists-links {
  letter-spacing: 0;
}
</style>
