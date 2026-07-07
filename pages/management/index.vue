<template>
  <div>
    <CoverImage :page="page" />
    <Management
      :all-directors="allDirectors"
      :default-open-director="defaultOpenDirector"
      :all-managements="allManagements"
      :default-o-pen-management="defaultOPenManagement"
    />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "management");
      return {
        seo,
      };
    } catch (error) {
      console.error("SEO fetch failed:", error);

      return {
        seo: {},
      };
    }
  },

  head() {
    return generateSeoHead(this.seo);
  },
  data() {
    return {
      page: "management",
      cover: {
        title: "Management",
        title_bangla: "ব্যবস্থাপনা",
      },
      allDirectors: [],
      allManagements: [],
      defaultOpenDirector: null,
      defaultOPenManagement: null,
    };
  },
  created() {
    this.getAllManagement();
  },
  methods: {
    async getAllManagement() {
      try {
        const response = await this.$axios.get("/get-all-management");
        this.allDirectors = response.data.data.BordOfDirector;
        this.defaultOpenDirector = this.allDirectors[0];
        this.allManagements = response.data.data.ManagementTeam;
        this.defaultOPenManagement = this.allManagements[0];
      } catch (error) {
        console.log("Error fetching getAllManagement:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
