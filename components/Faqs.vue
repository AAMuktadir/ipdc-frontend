<template>
  <section class="faq-card" v-if="faqs.length > 0 && page">
    <div
      class="container"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-delay="200"
      data-aos-duration="600"
    >
      <div class="faq-heading" v-if="faqHeading">
        <h1>
          {{
            $i18n.locale == "en" ? faqHeading.title : faqHeading.title_bangla
          }}
        </h1>
        <p>
          {{
            $i18n.locale == "en"
              ? faqHeading.sub_title
              : faqHeading.sub_title_bangla
          }}
        </p>
      </div>
      <div class="accordion" role="tablist">
        <b-card v-for="(singleFaq, index) in faqs" :key="index" no-body>
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle="'accordion-' + index" block variant="info">
              {{
                $i18n.locale == "en"
                  ? singleFaq.question
                  : singleFaq.question_bangla
              }}
            </b-button>
          </b-card-header>
          <b-collapse
            :id="'accordion-' + index"
            :visible="false"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                v-if="$i18n.locale == 'en'"
                v-html="singleFaq.answer"
              ></b-card-text>
              <b-card-text
                v-if="$i18n.locale == 'bn'"
                v-html="singleFaq.answer_bangla"
              ></b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      faqs: [],
      faqHeading: {},
    };
  },

  created() {
    this.getFaqByPage();
  },

  methods: {
    async getFaqByPage() {
      const response = await this.$axios.get(`/get-faqs/${this.page}`);
      this.faqs = response.data.data;
      this.faqHeading = response.data.faqHeading[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-card {
  .faq-heading {
    text-align: center;
    padding: 58px 84px 58px 84px;
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }

    p {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 140px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .faq-card {
    .faq-heading {
      padding: 50px 0;
      h1 {
        font-size: 25px;
        padding-bottom: 30px;
        .font-bn & {
          font-size: 30px;
        }
      }

      p {
        padding: 0;
      }
    }
  }
}
</style>
