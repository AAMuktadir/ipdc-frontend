<template>
  <div>
    <VirtualCurrenciesProhibition />
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
      page: "deposit",
      cover: {
        title: "Virtual Currencies Prohibition",
        title_bangla: "ভার্চুয়াল মুদ্রা নিষেধাজ্ঞা",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      allAwards: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
