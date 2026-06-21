<template>
  <div>
    <CoverImage :page="page" />

    <FormsDownload :personData="personData" />
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
      page: "all_forms",
      cover: {
        title: "Download Forms",
        title_bangla: "ফর্ম ডাউনলোড",
        description: "",
      },
      personData: [],
    };
  },
  created() {
    this.getFormDownloadData();
  },
  methods: {
    async getFormDownloadData() {
      try {
        const response = await this.$axios.get(
          // "http://localhost/api/v1/get-form-download-data.php"
          `https://ipdc.com/demo/api/get-form-download-data.php`
        );
        this.personData = response.data.data.formDownload;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
