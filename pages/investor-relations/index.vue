<template>
  <div>
    <CoverImage :page="page" />

    <StrongestBalance
      :balanceSheetTitle="balanceSheetTitle"
      :balanceSheet="balanceSheet"
      :asOnDate="asOnDate"
    />

    <GrowthChart :growthChart="growthChart" />

    <CodeOfConduct />
    <MonthlyRate :monthlyBaseRateHeading="monthlyBaseRateHeading" />
    <InvestorMeet
      :investorMeet="investorMeet"
      :investorMeetsHeading="investorMeetsHeading"
    />
    <RelationDepartment
      :investorRelationDepartment="investorRelationDepartment"
    />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "investor_relations");
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
      page: "investor_relations",
      cover: {
        title: "Investor Relations",
        title_bangla: "ইনভেস্টর রিলেশন",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      investorMeet: [],
      investorRelationDepartment: {},
      ratesForRetailDepositProduct: {},
      balanceSheet: [],
      growthChart: {},
      balanceSheetTitle: null,
      fastestGrowingHeading: null,
      monthlyBaseRateHeading: null,
      investorMeetsHeading: null,
      asOnDate: {},
    };
  },
  created() {
    this.getInvestorAndRelation();
    this.getGrowthChartData();
  },
  methods: {
    async getInvestorAndRelation() {
      const response = await this.$axios.get(
        `get-investor-and-relation/${this.page}`
      );
      const resHeading = response.data.data.heading;
      this.investorMeet = response.data.data.investorMeet;
      this.investorRelationDepartment =
        response.data.data.investorRelationDepartment;
      this.ratesForRetailDepositProduct =
        response.data.data.ratesForRetailDepositProduct;
      this.balanceSheet = response.data.data.balanceSheet;
      this.balanceSheetTitle = response.data.data.balanceSheetTitle[0];

      // if (
      //   resHeading.investor_relation_fastest_growing_financial_institution_heading
      // ) {
      //   this.fastestGrowingHeading =
      //     resHeading.investor_relation_fastest_growing_financial_institution_heading[0];
      // }

      if (resHeading.investor_relation_monthly_base_rate_heading) {
        this.monthlyBaseRateHeading =
          resHeading.investor_relation_monthly_base_rate_heading[0];
      }

      if (resHeading.investor_relation_investor_meets_heading) {
        this.investorMeetsHeading =
          resHeading.investor_relation_investor_meets_heading[0];
      }
    },
    async getGrowthChartData() {
      const response2 = await this.$axios.get(
        `/get-extra-mile-data`
      );
      this.growthChart = response2.data.data.investorRelationGrowthChart;
      this.asOnDate = response2.data.data.asOnDate;
    },
  },
};
</script>

<style lang="scss" scoped></style>
