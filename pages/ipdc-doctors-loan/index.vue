<template>
  <div>
    <CoverImageWithButtonBelow :page="page" />
    <!-- <CoverImageWithButton :page="page" /> -->
    <WhatWeOffer
      :loanWhatWeOfferCards="personalLoanWhatWeOfferCard"
      :offerHeading="offerHeading"
    />

    <!--    <PersonalLoanOffer :personalLoanWhatWeOfferCard="personalLoanWhatWeOfferCard" :offerHeading="offerHeading" />-->
    <Eligibility
      :loanEligibilities="personalLoanEligibility"
      :eligibleHeading="eligibleHeading"
    />
    <PersonalComplacency />
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
        title: "IPDC Doctor’s Loan",
        title_bangla: "আইপিডিসি ডক্টর’স লোন",
      },
      page: "doctors_loan",
      offerHeading: {
        title: "Why IPDC Doctor’s Personal Loan?",
        title_bangla: "আইপিডিসি ডক্টর’স পার্সোনাল লোন কেন নিবেন?",
        sub_title:
          "As a doctor, your time is precious, and your service is invaluable. At IPDC, we recognize your dedication and commitment for society. Our specially designed Doctor’s Personal Loan is to provide you with exclusive financial solutions, faster services and extra privileges to meet your unique financial needs.",
        sub_title_bangla:
          "চিকিৎসক হিসেবে আপনার সময় অমূল্য, অবদান অপ্রতিম। আমরা আইপিডিসি আপনার দায়িত্ববোধ ও সেবার মূল্য জানি। তাই, এক্সক্লুসিভ ফাইন্যান্সিয়াল সমাধান, দ্রুত সার্ভিস এবং প্রয়োজনীয় আর্থিক চাহিদা মেটাতে অতিরিক্ত সুযোগ-সুবিধা প্রদানের উদ্দ্যেশ্যে আপনার জন্য আমরা বিশেষভাবে ডিজাইন করেছি ডক্টর’স পার্সোনাল লোন।",
      },

      button1: {
        url: "/customer-signup",
        btnTxt: "Apply Now",
        btnTxt_bn: "আবেদন করুন আজই",
        bgColor: "#ffffff",
      },

      loanApplyNowText: {
        id: 52,
        component_id: 87,
        page_id: 7,
        title: "Apply Now",
        title_bangla: "আবেদন করুন আজই",
        sub_title:
          "Enjoy the flexibility, speed, and personalized service of IPDC Doctor’s Personal Loan.",
        sub_title_bangla:
          "আইপিডিসি ডক্টর’স পার্সোনাল লোনের ফ্লেক্সিবল, দ্রুত এবং পার্সোনালাইজড সার্ভিস উপভোগ করুন।",
      },
      eligibleHeading: {
        id: 50,
        component_id: 82,
        page_id: 7,
        title: "Eligibility Criteria",
        title_bangla: "যোগ্যতা",
        sub_title: "",
        sub_title_bangla: "",
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
        component_id: 85,
        page_id: 7,
        title: "Documents Required",
        title_bangla: "প্রয়োজনীয় ডকুমেন্ট",
        sub_title: "Documents Required",
        sub_title_bangla: "প্রয়োজনীয় ডকুমেন্ট",
      },
      personalLoanWhatWeOfferCard: [
        {
          id: 159,
          title: "Attractive Interest Rate: Specially curated for doctors",
          title_bangla:
            "আকর্ষণীয় সুদের হার: শুধুমাত্র চিকিৎসকদের জন্য নির্ধারিত",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569310BplOM.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/1662285596j5VIX.png",
        },
        {
          id: 160,
          title:
            "Personalized Door-to-Door Service: Experience in comfort and convenience",
          title_bangla:
            "ডোর-টু-ডোর ব্যক্তিগত সেবা: যেন আপনি স্বাচ্ছন্দ্যে ও আরামে সর্বোচ্চ সেবা পান",

          image: "https:\/\/ipdc.com\/api\/uploads\/1642498832UvZZt.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/16604755315OFuP.png",
        },
        {
          id: 161,
          title: "Loan Amount: Up to BDT 25 Lac",
          title_bangla: "সর্বোচ্চ লোন পরিমাণ: ২৫ লাখ টাকা পর্যন্ত",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569364t4sdE.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/16622856456WGXU.png",
        },
        {
          id: 162,
          title: "No Collateral Required",
          title_bangla: "কোনো জামানত লাগবে না",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569403uh1tX.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/1662285697cEJS7.png",
        },
        {
          id: 163,
          title:
            "Flexible Income Criteria: Income from personal chambers, consultation & surgery fees, or any verifiable source considered",
          title_bangla:
            "ফ্লেক্সিবল ইনকাম ক্রাইটেরিয়া: ব্যক্তিগত চেম্বার, কনসালটেশন ও সার্জারি ফি,  এবং যে-কোনো যাচাইযোগ্য আয়ের উৎস",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569378MBWHA.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/1662285666VpqvQ.png",
        },
        {
          id: 163,
          title: "Faster Processing Time: Because your time is valuable",
          title_bangla: "দ্রুত প্রসেসিং: সহজ ও দ্রুততর আবেদন প্রক্রিয়া",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569341JIqg7.png",
          image_bangla: "https:\/\/ipdc.com\/api\/uploads\/1662285620gFznW.png",
        },
      ],
      personalLoanEligibility: [
        {
          id: 164,
          title: "Must be BMDC Certified",
          title_bangla: "বিএমডিসি সনদপ্রাপ্ত হতে হবে",
        },
        {
          id: 165,
          title: "Minimum Age: 22 years (if income is to be considered)",
          title_bangla: "সর্বনিম্ন বয়স: ২২ বছর (যদি আয় বিবেচনাযোগ্য হয়)",
        },
        {
          id: 166,
          title: "Maximum Age: 65 years or retirement age, whichever is lower",
          title_bangla: "সর্বোচ্চ বয়স: ৬৫ বছর বা অবসরকাল, যেটি প্রযোজ্য",
        },
        {
          id: 167,
          title: "Minimum Monthly Income: BDT 25,000",
          title_bangla: "সর্বনিম্ন মাসিক আয়: ২৫,০০০ টাকা",
        },
      ],
      personalLoanDocumentsRequired: [
        {
          id: 168,
          title: "Duly filled and signed application form",
          title_bangla: "যথাযথভাবে পূরণ করা এবং স্বাক্ষরিত আবেদনপত্র",
        },
        {
          id: 169,
          title: "Copy of NID (applicant & guarantor)",
          title_bangla: "এনআইডি কপি (আবেদনকারী ও গ্যারান্টর)",
        },
        {
          id: 170,
          title: "Salary certificate or recent pay slip",
          title_bangla: "স্যালারি সার্টিফিকেট অথবা সর্বশেষ পে স্লিপ",
        },
        {
          id: 171,
          title: "Chamber Declaration (if applicable)",
          title_bangla: "চেম্বার ঘোষণাপত্র (যদি প্রযোজ্য হয়)",
        },
        {
          id: 172,
          title: "Recent bank statements",
          title_bangla: "ব্যাংক স্টেটমেন্ট",
        },
        {
          id: 173,
          title: "Passport-sized photographs (applicant & guarantor)",
          title_bangla: "পাসপোর্ট সাইজ ছবি (আবেদনকারী ও গ্যারান্টর)",
        },
        {
          id: 174,
          title: "Valid BMDC Certificate",
          title_bangla: "ভ্যালিড বিএমডিসি সার্টিফিকেট",
        },
        {
          id: 574,
          title: "Copy of Specialized degree (if applicable) ",
          title_bangla: "বিশেষায়িত ডিগ্রির কপি (যদি প্রযোজ্য হয়)",
        },
        {
          id: 575,
          title: "Latest Tax Return Copy",
          title_bangla: "সর্বশেষ ট্যাক্স রিটার্ন কপি",
        },
        {
          id: 576,
          title: "Recent utility bill",
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
          description_bangla: "৬ মাস থেকে ৫ বছর পর্যন্ত",
          image: "https:\/\/ipdc.com\/api\/uploads\/1642569802a54H6.png",
        },
      ],
      personalLoanFooterApplicationForm: {
        id: 64,
        component_id: 97,
        page_id: 7,
        title: "Download IPDC Doctor's Personal Loan Application Form",
        title_bangla: "আইপিডিসি ডক্টর’স লোন - এর আবেদনপত্র ডাউনলোড করুন",
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
        // this.personalLoanWhatWeOfferCard =
        //   response.data.data.personalLoanWhatWeOfferCard;
        // this.personalLoanEligibility =
        //   response.data.data.personalLoanEligibility;
        // this.personalLoanDocumentsRequired =
        //   response.data.data.personalLoanDocumentsRequired;
        // this.personalLoanTermAmount = response.data.data.personalLoanTermAmount;
        // this.personalLoanFaq = response.data.data.personalLoanFaq;
        // this.personalLoanFooterApplicationForm =
        //   response.data.data.personalLoanFooterApplicationForm;
        // const resHeading = response.data.data.heading;

        // this.offerHeading = resHeading.personal_loan_what_we_offer_heading[0];
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
