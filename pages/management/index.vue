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
export default {
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
    };
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
