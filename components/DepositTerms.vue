<template>
  <section class="container">
    <div class="terms-condition">
      <div class="terms-heading">
        <h1 class="terms-title">
          {{
            $i18n.locale == "en"
              ? "Terms and Conditions"
              : "শর্তাবলি ও সাধারণ নির্দেশনা"
          }}
        </h1>
      </div>
      <div class="documents-details">
        <a
          class="documents"
          :href="
            $i18n.locale === 'en'
              ? '/deposit-schemes/terms-individual'
              : '/bn/deposit-schemes/terms-individual'
          "
          target="_blank"
        >
          <div class="documents-icon">
            <img src="~assets/image/icon/bankingreport.svg" alt="Documents" />
          </div>
          {{
            $i18n.locale == "en" ? "For Individual" : "ব্যক্তিগত ডিপোজিটের জন্য"
          }}
        </a>
        <a
          class="documents"
          :href="
            $i18n.locale === 'en'
              ? '/deposit-schemes/terms-institutional'
              : '/bn/deposit-schemes/terms-institutional'
          "
          target="_blank"
        >
          <div class="documents-icon">
            <img src="~assets/image/icon/bankingreport.svg" alt="Documents" />
          </div>
          {{
            $i18n.locale == "en"
              ? "For Institution"
              : "প্রাতিষ্ঠানিক ডিপোজিটের জন্য"
          }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.terms-condition {
  padding: 50px 0;
  .terms-heading {
    text-align: center;
    margin-bottom: 50px;
    .terms-title {
      font-weight: bold;
      font-size: 36px;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
  }
  .documents-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;

    .documents {
      position: relative;
      display: flex;
      align-items: center;
      height: 60px;
      padding: 20px 50px;
      border: 2px solid #ed017f;
      border-radius: 4px;
      background: #ed017f;
      gap: 20px;
      justify-content: center;

      text-decoration: none;
      text-transform: uppercase;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 2px;
      line-height: 100%;
      .font-bn & {
        font-size: 19px;
      }

      .documents-icon {
        img {
          max-width: 24px;
          height: 29px;
        }
      }

      &:hover {
        background: #f7f5f5;
        color: #ed017f;
        transition: 0.3s;
        transform: scale(1.02);

        .documents-icon {
          img {
            transition: 0.5s;
            transform: scale(1.4);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .terms-condition {
    padding: 50px 0;
    .terms-heading {
      .terms-title {
        font-weight: bold;
        font-size: 25px;
        line-height: 133%;
        .font-bn & {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
