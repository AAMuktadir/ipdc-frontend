<template>
  <section
    class="error"
    :style="{
      backgroundImage: `url(` + require(`~/assets/image/12.jpg`) + `)`,
    }"
  >
    <div class="error-title">
      <h1 v-if="error.statusCode === 404">404</h1>
      <h1 v-else>An error occurred</h1>
      <h6>Page not Found</h6>
      <p>Opps! We can’t seem to find the page you’re looking for.</p>
    </div>
    <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  </section>
</template>

<script>
export default {
  layout: "error",
  props: ["error"],
};
</script>

<style lang="scss" scoped>
.error {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  position: relative;

  .error-title {
    width: 542px;
    height: 305px;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(11px);
    border-radius: 20px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    padding: 41px 0 0 0;
    color: #ffffff;
    text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
    h1 {
      font-weight: 900;
      font-size: 63px;
      line-height: 114.3%;
    }
    h6 {
      font-weight: 600;
      font-size: 18px;
      line-height: 122%;
    }
    p {
      font-weight: bold;
      font-size: 22px;
      line-height: 133%;
      padding: 30px 40px 0 40px;
    }
  }
}

@media screen and (max-width: 768px) {
  .error {
    .error-title {
      width: 90%;
      height: 235px;
      top: 40%;
      h1 {
        font-size: 50px;
        line-height: 118%;
      }
      // h6 {
      // }
      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 154.3%;
        padding: 20px;
      }
    }
  }
}
</style>
