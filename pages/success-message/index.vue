<template>
  <div>
    <SuccessMessage />
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
        title: "Success",
        title_bangla: "সফল",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
