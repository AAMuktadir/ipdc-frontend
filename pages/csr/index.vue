<template>
  <div>
    <CoverVideo :page="page" :videoSrc="cover" />
    <!-- <CoverImage :page="page" :cover="cover" /> -->

    <div v-if="allCSR.length > 0">
      <CorporateSocialResponsibility :allCSR="allCSR" />
    </div>
    <!-- <CorporateSocialResponsibility :allCSR="allCSR" /> -->
    <!-- <CorporateSocialResponsibility /> -->

    <SliderImageOnly :page="page" />
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
      page: "csr",
      cover: {
        title: "CSR Activities",
        title_bangla: "কর্পোরেট সামাজিক দায়িত্ব",
        image_url: "/_nuxt/assets/image/cover/News-Media.jpg",
        video_url: "https://www.ipdc.com/api/uploads/csr/csrbanner.mp4",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      allCSR: [],
    };
  },
  created() {
    this.getAllCSR();
  },
  methods: {
    async getAllCSR() {
      // console.log("Fetching CSR data...");
      try {
        const response = await this.$axios.get(`/get-csr`);
        // console.log("CSR API response:", response); // Check if data is being received
        this.allCSR = response.data.data.csr;
      } catch (error) {
        console.error("Error fetching CSR data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
