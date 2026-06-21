<template>
  <section v-if="textContent" class="text-content">
    <div class="container">
      <div class="content-main" v-if="$i18n.locale == 'en'">
        <p class="title">
          <b v-html="textContent.title"> </b>
        </p>
        <div v-html="textContent.description" class="content-body"></div>
      </div>
      <div class="content-main" v-if="$i18n.locale == 'bn'">
        <p class="title">
          <b v-html="textContent.title_bn"> </b>
        </p>
        <div v-html="textContent.description_bn" class="content-body"></div>
      </div>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    textContent: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.text-content {
  padding: 120px 0 35px 0;

  .container {
    max-width: 857px !important;
  }

  .content-main {
    // padding-bottom: 80px;
    font-family: "SolaimanLipi";

    .content-body {
      text-align: justify;
    }

    .title {
      font-size: 33px;
      padding-bottom: 10px;
      text-align: center;
      .font-bn & {
        font-size: 33px;
      }
    }
    .text-numbering {
      padding: 15px 0;
      font-size: 18px;
      .font-bn & {
        font-size: 23px;
      }
    }
    span {
      margin-right: 7px;
    }
    p {
      text-align: justify;
      padding-bottom: 10px;
      a {
        padding-right: 5px;
      }
    }
  }
}
</style>
