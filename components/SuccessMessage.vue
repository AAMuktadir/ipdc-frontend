<template>
  <div class="success-message">
    <div class="success">
      <div class="success-image">
        <img :src="link" alt="Success" />
      </div>
      <div class="success-title">
        <h3>{{ title }}</h3>
      </div>
      <div class="success-text">
        <p class="text first-text" v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo_url: "",
      title: "",
      description: "",
    };
  },

  created() {
    this.getAllData();
  },

  computed: {
    link() {
      return this.logo_url;
    },
  },

  methods: {
    async getAllData() {
      const response = await this.$axios.get(`/get-custom-message`);
      this.logo_url = response.data.data.logo_url;
      this.title = response.data.data.title;
      this.description = response.data.data.description;
    },
  },
};
</script>

<style lang="scss" scoped>
.success-message {
  padding-top: 80px;
  .success {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-image {
      padding-top: 40px;
      img {
        width: 80px;
        height: 79px;
      }
    }
    &-title {
      h3 {
        font-weight: 700;
        font-size: 36px;
        line-height: 102px;
        text-align: center;
        color: #27ae60;
        text-transform: uppercase;
        .font-bn & {
          font-size: 41px;
        }
      }
    }
    &-text {
      .text {
        font-weight: 500;
        font-size: 20px;
        line-height: 125%;
        text-align: center;
        color: #4a4a4a;
        padding: 0 35px 34px 35px;
        .font-bn & {
          font-size: 25px;
        }
      }
    }
  }
}
</style>
