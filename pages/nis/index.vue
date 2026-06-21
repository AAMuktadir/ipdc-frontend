<template>
  <div>
    <CoverImage :page="page" :cover="cover" />

    <NIS
      :focalPointInformation="focalPointInformation"
      :integrityAwardee="integrityAwardee"
      :integrity="integrity"
      :rightToInformation="rightToInformation"
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
      page: "nis",
      cover: {
        title: "National Integrity Strategy (NIS)",
        title_bangla: "জাতীয় শুদ্ধাচার কৌশল (এনআইএস)",
        image_url: "/_nuxt/assets/image/cover/Career1.jpg",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      focalPointInformation: {},
      integrityAwardee: {},
      integrity: {},
      rightToInformation: {},
    };
  },
  mounted() {
    this.shareholderContent();
  },
  methods: {
    async shareholderContent() {
      try {
        const response = await this.$axios.get("/get-nis");
        if (response.data.code === 200) {
          this.focalPointInformation = response.data.data[0];
          this.integrityAwardee = response.data.data[1];
          this.integrity = response.data.data[2];
          this.rightToInformation = response.data.data[3];
        } else {
          console.error("Error fetching files");
        }
      } catch (error) {
        console.error("Error fetching NIS files:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
