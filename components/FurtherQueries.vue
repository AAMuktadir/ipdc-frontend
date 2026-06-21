<template>
  <section class="container" v-if="queryPerson.length > 0">
    <div class="further-queries">
      <h1 class="queries-title">
        {{
          $i18n.locale == "en"
            ? "For further queries about the campaign"
            : "ক্যাম্পেইন সম্পর্কে আরও প্রশ্নের জন্য"
        }}
      </h1>
      <div class="row">
        <div class="col-md-6" v-for="person in queryPerson" :key="person.id">
          <div class="for-queries">
            <h4>
              {{ $i18n.locale == "en" ? person.name : person.name_bangla }}
            </h4>
            <h5>
              {{
                $i18n.locale == "en"
                  ? person.designation
                  : person.designation_bangla
              }},
              {{
                $i18n.locale == "en"
                  ? person.loan_type
                  : person.loan_type_bangla
              }}
            </h5>
            <p v-if="$i18n.locale == 'en'">IPDC Finance PLC.</p>
            <p v-if="$i18n.locale == 'bn'">আইপিডিসি ফাইন্যান্স পিএলসি.</p>
            <p v-if="$i18n.locale == 'en'">Phone: {{ person.number }}</p>
            <p v-if="$i18n.locale == 'bn'">ফোন: {{ person.number_bangla }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    queryPerson: {
      type: Array,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.further-queries {
  padding-bottom: 84px;
  padding-top: 50px;

  .queries-title {
    font-weight: bold;
    font-size: 25px;
    line-height: 133%;
    color: #343434;
    margin-bottom: 31px;
    .font-bn & {
      font-size: 30px;
    }
  }

  .for-queries {
    background: #fde1f0;
    padding: 27px 27px 21px 27px;
    border-radius: 10px;
    color: #343434;

    h4 {
      font-weight: bold;
      font-size: 20px;
      line-height: 100%;
      margin-bottom: 12px;
      .font-bn & {
        font-size: 25px;
      }
    }
    h5 {
      font-weight: 600;
      font-size: 18px;
      line-height: 122.22%;
      margin-bottom: 12px;
      .font-bn & {
        font-size: 23px;
      }
    }
    p {
      font-size: 14px;
      line-height: 137.1%;
      letter-spacing: 0.02em;
      margin-bottom: 6px;
      .font-bn & {
        font-size: 19px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .further-queries {
    padding-top: 30px;

    .queries-title {
      font-size: 20px;
      line-height: 100%;
      .font-bn & {
        font-size: 25px;
      }
    }

    .for-queries {
      margin-bottom: 35px;
    }
  }
}
</style>
