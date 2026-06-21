<template>
  <div class="container">
    <div class="virtual-currency">
      <div class="title-wanring">
        <h1
          style="text-transform: uppercase; font-weight: bold; color: #ed017f"
          v-if="$i18n.locale == 'en'"
        >
          Urgent Notice
        </h1>
        <h1
          style="text-transform: uppercase; font-weight: bold; color: #ed017f"
          v-if="$i18n.locale == 'bn'"
        >
          জরুরী বিজ্ঞপ্তি
        </h1>
      </div>
      <div class="align-cneter">
        <img
          class="align-cneter"
          src="https://ipdc.com/api/uploads/prohibition.png"
          alt=""
          width="200"
        />
      </div>
      <div>
        <h2 class="align-center" v-if="$i18n.locale == 'en'">
          According to Bangladesh Bank guidelines, virtual assets and virtual
          Currency trading and assistance in such activities is strictly
          prohibited.
        </h2>
        <h2 class="align-center" v-if="$i18n.locale == 'bn'">
          বাংলাদেশ ব্যাংকের নির্দেশনা অনুযায়ী, ভার্চুয়াল সম্পদ ও ভার্চুয়াল
          মুদ্রা লেনদেন এবং এ ধরণের কাজে সহায়তা প্রদান সম্পূর্ণভাবে নিষিদ্ধ।
        </h2>
      </div>
      <div class="align-cneter bblink">
        <a
          href="https://ipdc.com/api/uploads/DownloadableFile/Prohibition_Circular.pdf"
          target="_blank"
          ><h4 class="text-center" v-if="$i18n.locale == 'en'">
            Bangladesh Bank Circular
          </h4>
          <h4 class="text-center" v-if="$i18n.locale == 'bn'">
            বাংলাদেশ ব্যাংক কর্তৃক ঘোষিত সার্কুলার
          </h4></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 100px;
}
.virtual-currency {
  text-align: center;
  font-family: "SolaimanLipi";
  width: 60%;
  margin: 0 auto;
  padding: 35px;
  border: 2px solid #ed017f;
}
.align-cneter {
  padding: 20px;
  margin: 0 auto;
  font-weight: 400;
}
h2 {
  font-size: 24px;
  line-height: 137.5%;
  .font-bn & {
    font-size: 29px;
  }
}
h4 {
  line-height: 25px;
}
.bblink {
  padding-top: 100px;
}
a {
  color: #000;
}
h1 {
  padding-top: 50px;
  font-size: 32px;
  line-height: 125%;
  .font-bn & {
    font-size: 37px;
  }
}
</style>
