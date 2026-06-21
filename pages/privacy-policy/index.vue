<template>
  <div>
    <privacy-policy />
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
        title: "Privacy Policy",
        title_bangla: "প্রাইভেসি পলিসি",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
