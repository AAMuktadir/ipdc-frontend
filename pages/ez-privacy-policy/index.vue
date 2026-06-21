<template>
  <div>
    <CoverImageOnly :page="page" :coverImage="coverImage" />
    <PrivacyPolicyEZ />
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
        title: "EZ App Privacy Policy",
        title_bangla: "EZ App প্রাইভেসি পলিসি",
      },
      page: "ez-app-privacy-policy",
      coverImage: {
        image_url: "/api/uploads/background/header-09.jpg",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
