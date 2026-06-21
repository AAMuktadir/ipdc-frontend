<template>
  <div>
    <OnlyTextComponent :textContent="textContent" />
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
        title: "Terms and Conditions for Individuals",
        title_bangla: "Terms and Conditions for Individuals",
      },
      textContent: {},
    };
  },
  created() {
    this.termsConditionContent();
  },
  methods: {
    async termsConditionContent() {
      try {
        const response = await this.$axios.get(
          `https://ipdc.com/demo/api/get-deposit-terms-individual-data.php`
        );
        this.textContent = response.data.data.dataItem;
      } catch (error) {
        console.log("Error fetching termsConditionContent:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
