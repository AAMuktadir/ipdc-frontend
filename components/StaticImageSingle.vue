<template>
  <div v-if="staticImage" class="staticImage">
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
      class="centered"
    >
      <picture v-if="$i18n.locale == 'en'">
        <source media="(min-width:650px)" :srcset="staticImage.static_image" />
        <img :src="staticImage.static_mobile_image" alt="Flowers" />
      </picture>
      <picture v-if="$i18n.locale == 'bn'">
        <source media="(min-width:650px)" :srcset="staticImage.static_image" />
        <img :src="staticImage.static_mobile_image" alt="Flowers" />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    staticImage: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.staticImage {
  padding: 30px 20px;
  position: relative;
  width: 100%;
  .centered {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100%; /* Ensure it takes full height of parent .staticImage */
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
}

@media screen and (max-width: 1200px) {
  .staticImage {
    position: relative;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .staticImage {
    position: relative;
    width: 100%;
  }
}
</style>
