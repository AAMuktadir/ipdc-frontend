<template>
  <div>
    <CoverImage :page="page" />
    <ApplyFormCustomer
      :productList="productList"
      :cityList="cityList"
      :incomeList="incomeList"
      :timeList="timeList"
      :occupationList="occupationList"
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
      productList: [],
      cityList: [],
      incomeList: [],
      timeList: [],
      occupationList: [],
      page: "customer-signup",
      cover: {
        title: "Customer Signup",
        title_bangla: "গ্রাহক নিবন্ধন",
      },
    };
  },
  mounted() {
    this.getProductList();
    this.getCityList();
    this.getIncomeList();
    this.getTimeList();
    this.getOccupationList();
  },
  methods: {
    async getProductList() {
      try {
        const response = await this.$axios.get("/get-apply-now-product-list");
        this.productList = response.data.productList;
      } catch (error) {
        console.error("Error fetching productList data:", error);
      }
    },
    async getCityList() {
      try {
        const response = await this.$axios.get("/get-city-list");
        this.cityList = response.data.data;
      } catch (error) {
        console.error("Error fetching cityList data:", error);
      }
    },
    async getIncomeList() {
      try {
        const response = await this.$axios.get("/get-apply-now-income-range");
        this.incomeList = response.data.data;
      } catch (error) {
        console.error("Error fetching incomeList data:", error);
      }
    },
    async getTimeList() {
      try {
        const response = await this.$axios.get("/get-apply-now-prefered-time");
        this.timeList = response.data.data;
      } catch (error) {
        console.error("Error fetching timeList data:", error);
      }
    },
    async getOccupationList() {
      try {
        const response = await this.$axios.get("/get-apply-now-occupation");
        this.occupationList = response.data.data;
      } catch (error) {
        console.error("Error fetching occupationList data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
