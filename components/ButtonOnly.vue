<template>
  <div
    v-if="buttonText"
    class="coverimage"
    :style="{ backgroundColor: buttonText.bgColor || '#faf8eb' }"
  >
    <div class="service_button">
      <a :href="buttonText.url" target="_blank">
        <button v-if="$i18n.locale == 'en'" class="buttonText">
          {{ buttonText.btnTxt }}
        </button>
        <button v-if="$i18n.locale == 'bn'" class="buttonText">
          {{ buttonText.btnTxt_bn }}
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.coverimage {
  // background-color: #faf8eb;
  .service_button {
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    .buttonText {
      min-height: 40px;
      background: #b775b2;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 40px;
      white-space: nowrap;
      box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);
      .font-bn & {
        font-size: 21px;
      }
      &:hover {
        color: #ffffff;
        background: #ff0088;
        transition: 0.45s all ease-in-out;
        box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
      }
    }
  }
}
</style>
