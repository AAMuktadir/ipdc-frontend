<template>
  <div>
    <CoverImageWithButtonBelow :page="page" :cover="cover" />
    <WhatWeOffer
      :loanWhatWeOfferCards="personalLoanWhatWeOfferCard"
      :offerHeading="offerHeading"
    />

    <!--    <PersonalLoanOffer :personalLoanWhatWeOfferCard="personalLoanWhatWeOfferCard" :offerHeading="offerHeading" />-->
    <Eligibility
      :loanEligibilities="personalLoanEligibility"
      :eligibleHeading="eligibleHeading"
    />
    <TermAmount
      :loanTermAmount="personalLoanTermAmount"
      :termAmountHeading="termAmountHeading"
    />
    <!--    <PersonalTermAmont :personalLoanTermAmount="personalLoanTermAmount" :termAmountHeading="termAmountHeading"/>-->
    <RequiredDocuments
      :loanRequiredDocuments="personalLoanDocumentsRequired"
      :documentsRequiredHeading="documentsRequiredHeading"
    />
    <Conditions
      :loanConditions="loanConditions"
      :conditionsHeading="conditionsHeading"
    />
    <!-- <LoansVideo :page="page" /> -->

    <ApplyNowButtonforLoan
      :termAmountHeading="loanApplyNowText"
      :buttonText="button1"
    />
    <Faqs :page="page" />
    <OngoingCampaigns :page="page" />
    <DownloadApplicationform
      :footerApplicationForm="personalLoanFooterApplicationForm"
      :page="page"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
    };
  },
  data() {
    return {
      cover: {
        title: "IPDC Teacher's Loan - প্রজ্ঞা",
        title_bangla: "আইপিডিসি শিক্ষক লোন - প্রজ্ঞা",
        description:
          "<p>At IPDC, we believe that teachers are the foundation of a progressive nation. Your tireless dedication shapes generations, and for that, you deserve more than just gratitude, you deserve meaningful support. We proudly introduce Teacher’s Personal Loan: <font style='font-family: \"SolaimanLipi\";font-size:24px;'>প্রজ্ঞা</font>, a specially crafted financial solution to honor the noble teaching profession with enhanced benefits and personalized services.</p>",
        descriptionBangla:
          "<p>আইপিডিসি বিশ্বাস করে, শিক্ষকরাই হলেন জাতি গঠনের প্রধান কারিগর। তাদের নিরলস শ্রমে গড়ে ওঠে ভবিষ্যৎ প্রজন্ম, আর তাই কৃতজ্ঞতার চেয়ে আরো অনেক বেশি কিছু তাদের প্রাপ্য। শিক্ষকদের প্রতি আমাদের শ্রদ্ধা ও ভালোবাসা থেকে আমরা নিয়ে এসেছি ‘প্রজ্ঞা’ একটি বিশেষ পার্সোনাল লোন, যা শিক্ষকদের জন্য তৈরি—আরো সুবিধাজনক শর্ত ও ব্যক্তিগত সেবার আশ্বাসে।</p>",
      },

      page: "teachers_loan",
      offerHeading: {
        title: "Why Choose প্রজ্ঞা?",
        title_bangla: "কেন প্রজ্ঞা বেছে নিবেন?",
        sub_title:
          "Personalized exclusively for teachers, this loan comes with thoughtful privileges that reflect the respect you deserve:",
        sub_title_bangla:
          "শিক্ষকদের জন্য বিশেষভাবে তৈরি এই লোনে থাকছে কিছু বিশেষ সুবিধা, যা আপনার প্রতি আমাদের শ্রদ্ধা ও কৃতজ্ঞতার প্রতিফলন।",
      },

      button1: {
        url: "/customer-signup",
        btnTxt: "Apply Now",
        btnTxt_bn: "আবেদন করুন এখনই",
        bgColor: "#ffffff",
      },

      loanApplyNowText: {
        id: 52,
        title: "Apply Now",
        title_bangla: "আবেদন করুন এখনই",
        sub_title:
          "Your dreams matter, just like the dreams you help shape your students. Whether you're planning for your family, upgrading your lifestyle, or investing in your future, IPDC প্রজ্ঞা is here to walk with you.",
        sub_title_bangla:
          "আপনি যেমন ছাত্রছাত্রীদের স্বপ্ন গড়েন, তেমনভাবেই আপনার স্বপ্নগুলোও আমাদের কাছে গুরুত্বপূর্ণ। তাই, আপনার পরিবারের জন্য পরিকল্পনা, জীবনযাত্রার মান উন্নয়ন অথবা ভবিষ্যতে বিনিয়োগ যে-কোনো পরিকল্পনায়, আইপিডিসি প্রজ্ঞা আচ্ছে আপনার পাশে।",
      },
      eligibleHeading: {
        id: 50,
        title: "Eligibility Criteria",
        title_bangla: "যোগ্যতা",
      },
      termAmountHeading: {
        id: 52,
        component_id: 87,
        page_id: 7,
        title: "Loan Term and Amount",
        title_bangla: "মেয়াদ ও পরিমাণ",
        sub_title: "",
        sub_title_bangla: "",
      },
      documentsRequiredHeading: {
        id: 51,
        title: "Documents Required",
        title_bangla: "প্রয়োজনীয় ডকুমেন্ট",
        sub_title: "Documents Required",
        sub_title_bangla: "প্রয়োজনীয় ডকুমেন্ট",
      },
      personalLoanWhatWeOfferCard: [
        {
          id: 159,
          title: "Special Interest Rate: Lower than our standard card rate",
          title_bangla: "বিশেষ সুদের হার: আমাদের সাধারণ কার্ড রেটের চেয়ে কম",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569310BplOM.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/1662285596j5VIX.png",
        },
        {
          id: 160,
          title: "50% Discount on Processing Fee",
          title_bangla: "প্রসেসিং ফি-তে ৫০% ছাড়",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642498832UvZZt.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/16604755315OFuP.png",
        },
        {
          id: 161,
          title: "Loan Amount: Up to BDT 25 Lac",
          title_bangla: "লোন পরিমাণ: ২৫ লাখ টাকা পর্যন্ত",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569364t4sdE.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/16622856456WGXU.png",
        },
        {
          id: 162,
          title: "No Collateral Required",
          title_bangla: "জামানত প্রয়োজন নেই",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569403uh1tX.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/1662285697cEJS7.png",
        },
        {
          id: 163,
          title:
            "Additional Income Considered – Tuition or coaching income is accepted",
          title_bangla:
            "অ্যাডিশনাল ইনকাম গ্রহণযোগ্য – টিউশন / কোচিং ইনকাম গ্রহণযোগ্য",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569378MBWHA.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/1662285666VpqvQ.png",
        },
        {
          id: 163,
          title: "Faster Processing",
          title_bangla: "দ্রুত প্রসেসিং",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569341JIqg7.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/1662285620gFznW.png",
        },
      ],
      personalLoanEligibility: [
        {
          id: 164,
          title:
            "Full-time teachers from government, non-government, and MPO-listed schools and colleges, universities of both public & private",
          title_bangla:
            "সরকারি, বেসরকারি এবং এমপিও-ভুক্ত স্কুল অ্যান্ড কলেজ অথবা বিশ্ববিদ্যালয়ের ফুলটাইম শিক্ষক",
        },
        {
          id: 165,
          title:
            "Retired (from service) Teachers can also apply, provided they have any active income source",
          title_bangla:
            "চাকরি থেকে অবসরপ্রাপ্ত শিক্ষকও আবেদন করতে পারবেন, যদি অন্য কোনো ক্ষেত্রে সক্রিয় আয় থাকে",
        },
        {
          id: 166,
          title: "Minimum Income: BDT 20,000 per month",
          title_bangla: "সর্বনিম্ন আয়: মাসিক ২০,০০০ টাকা",
        },
        {
          id: 167,
          title:
            "Age Range: 22 to 65 years or until retirement (whichever is earlier)",
          title_bangla: "বয়স: ২২ থেকে ৬৫ বছর বা অবসরকাল (যেটি প্রযোজ্য)",
        },
      ],
      personalLoanDocumentsRequired: [
        {
          id: 168,
          title: "Completed and signed Application Form",
          title_bangla: "পূরণকৃত এবং স্বাক্ষরিত আবেদনপত্র",
        },
        {
          id: 169,
          title: "Copy of NID (Applicant & Guarantor)",
          title_bangla: "এনআইডি কপি (আবেদনকারী ও গ্যারান্টর)",
        },
        {
          id: 170,
          title: "Bank Statements (last 6 months preferred)",
          title_bangla: "৬ মাসের ব্যাংক স্টেটমেন্ট",
        },
        {
          id: 171,
          title: "Salary Certificate or Pay Slip",
          title_bangla: "স্যালারি সার্টিফিকেট অথবা পে-স্লিপ",
        },
        {
          id: 172,
          title: "Proof/ Declaration of Tuition Income (if applicable)",
          title_bangla: "টিউশন ইনকামের প্রমাণ/ঘোষণা (যদি প্রযোজ্য হয়)",
        },
        {
          id: 173,
          title: "Recent Photographs of applicants & guarantor",
          title_bangla: "আবেদনকারী ও গ্যারান্টরের রিসেন্ট ছবি",
        },
        {
          id: 174,
          title: "Valid Tax Return Copy",
          title_bangla: "ভ্যালিড ট্যাক্স রিটার্ন কপি",
        },
        {
          id: 574,
          title: "Recent Utility Bill",
          title_bangla: "ইউটিলিটি বিল কপি",
        },
      ],
      personalLoanTermAmount: [
        {
          id: 177,
          title: "Amount",
          title_bangla: "লোনের পরিমাণ",
          description: "Up to BDT 25 Lacs",
          description_bangla: "সর্বোচ্চ ২৫ লক্ষ টাকা",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569769UyVv7.png",
        },
        {
          id: 178,
          title: "Term",
          title_bangla: "লোনের মেয়াদ",
          description: "Flexible terms from 6 months to 5 years",
          description_bangla: "সহজ শর্তে ৬ মাস থেকে ৫ বছর পর্যন্ত",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569802a54H6.png",
        },
      ],
      personalLoanFooterApplicationForm: {
        id: 64,
        title: "Download IPDC Teacher's Loan Application Form",
        title_bangla:
          "আইপিডিসি শিক্ষক লোন: প্রজ্ঞা - এর আবেদনপত্র ডাউনলোড করুন",
        image: "https:\/\/ipdc.com\/api\/uploads\/1744133223bLHof.png",
        image_bangla: "https:\/\/ipdc.com\/api\/uploads\/174413322351TJg.png",
        button_link:
          "https:\/\/ipdc.com\/api\/uploads\/DownloadableFile\/1744133193.pdf",
        button_link_bangla:
          "https:\/\/ipdc.com\/api\/uploads\/DownloadableFile\/1744133193.pdf",
      },
      conditionsHeading: {},
      loanConditions: [],
    };
  },
  created() {
    // this.personalLoanContent();
  },
  methods: {
    async personalLoanContent() {
      try {
        const response = await this.$axios.get(
          `/get-personal-loan-content/${this.page}`
        );
        // console.log(response.data.data);
        // this.personalLoanWhatWeOfferCard =
        // response.data.data.personalLoanWhatWeOfferCard;
        // this.personalLoanEligibility =
        //   response.data.data.personalLoanEligibility;
        // this.personalLoanDocumentsRequired =
        //   response.data.data.personalLoanDocumentsRequired;
        // this.personalLoanTermAmount = response.data.data.personalLoanTermAmount;
        // this.personalLoanFaq = response.data.data.personalLoanFaq;
        // this.personalLoanFooterApplicationForm =
        //   response.data.data.personalLoanFooterApplicationForm;
        // const resHeading = response.data.data.heading;

        // // this.offerHeading = resHeading.personal_loan_what_we_offer_heading[0];
        // this.eligibleHeading = resHeading.personal_loan_eligibility_heading[0];
        // this.termAmountHeading =
        //   resHeading.personal_loan_term_amount_heading[0];
        // this.documentsRequiredHeading =
        //   resHeading.personal_loan_documents_required_heading[0];

        // if (resHeading.personal_loan_conditions_heading) {
        //   this.conditionsHeading =
        //     resHeading.personal_loan_conditions_heading[0];
        // }

        // if (resHeading.personal_loan_conditions) {
        //   this.loanConditions = resHeading.personal_loan_conditions;
        // }
      } catch (error) {
        console.log("Error fetching personalLoanContent:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
