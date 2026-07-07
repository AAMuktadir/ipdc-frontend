<template>
  <section class="additional">
    <div class="container" v-if="specialNote">
      <div class="additional-details">
        <h2 class="additional-details-title">
          {{
            $i18n.locale == "en" ? specialNote.title : specialNote.title_bangla
          }}
        </h2>
        <p class="additional-details-description">
          {{
            $i18n.locale == "en"
              ? specialNote.description
              : specialNote.description_bangla
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    specialNote: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.additional {
  // margin-bottom: 60px;
  .additional-details {
    padding: 50px 0;
    text-align: center;
    &-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    &-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px;
      text-align: justify;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
}
</style>
