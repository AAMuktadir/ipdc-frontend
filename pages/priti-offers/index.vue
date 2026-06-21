<template>
  <div>
    <CoverImageOnly :page="page" :coverImage="cover" />
    <ButtonOnly :buttonText="button1" />
    <CoverImageOnly :page="page" :coverImage="offerImage" />
    <ButtonOnly :buttonText="button2" />
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
        title: "Priti",
        title_bangla: "প্রীতি",
        image_url: "/api/uploads/background/ipdc-priti-offer.jpg",
      },
      page: "priti",
      offerImage: {
        image_url: "/api/uploads/background/priti-offes-2023-v7.jpg",
      },
      button1: {
        url: "/customer-signup",
        btnTxt: "Apply Now",
        btnTxt_bn: "আবেদন করুন",
      },
      button2: {
        url: "/api/uploads/priti_terms_and_conditions.pdf",
        btnTxt: "Terms & Conditions",
        btnTxt_bn: "শর্তাবলী",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
