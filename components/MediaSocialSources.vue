<template>
  <section class="social-sources">
    <div class="container">
      <div class="social-media">
        <div v-if="$i18n.locale == 'en'" class="social-media-title">
          <h1>Other Social Sources</h1>
        </div>
        <div v-if="$i18n.locale == 'bn'" class="social-media-title">
          <h1>অন্যান্য সামাজিক উৎস</h1>
        </div>
        <div
          v-if="$i18n.locale == 'en'"
          class="other-social"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <a
            href="https://onelink.to/5u75fp"
            target="_blank"
            class="other-social-source"
          >
            <img src="~/assets/icons/down.svg" alt="Download" />
            <p>Download</p>
          </a>
        </div>
        <div
          v-if="$i18n.locale == 'bn'"
          class="other-social"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <a
            href="https://onelink.to/5u75fp"
            target="_blank"
            class="other-social-source"
          >
            <img src="~/assets/icons/down.svg" alt="ডাউনলোড" />
            <p>ডাউনলোড</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.social-sources {
  .social-media {
    &-title {
      h1 {
        font-weight: bold;
        font-size: 22px;
        line-height: 140.91%;
        color: #343434;
        margin-bottom: 32px;
      }
    }

    .other-social {
      display: flex;
      gap: 35px;
      padding-bottom: 100px;
      &-source {
        display: flex;
        width: 357px;
        background: #4b7fcd;
        border-radius: 12px;
        padding: 22px 0 22px 32px;
        text-decoration: none;
        img {
          width: 15px;
          height: 29px;
          margin-right: 30px;
        }
        p {
          font-weight: 600;
          font-size: 18px;
          line-height: 122.22%;
          color: #ffffff;
          margin-top: 5px;
        }
        &:hover {
          transition: 0.3s;
          transform: scale(1.05);
        }
      }
      .twitter {
        background: #4a71fb;
        img {
          width: 23px;
          height: 29px;
        }
      }
      .instagram {
        background: #ed017f;
        img {
          width: 29px;
          height: 29px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .social-sources {
    .social-media {
      // &-title {
      //   h1 {
      //   }
      // }

      .other-social {
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        // &-source {
        //   width: unset;
        //   img {
        //   }
        //   p {
        //   }
        // }
        // .twitter {
        //   img {
        //   }
        // }
        // .instagram {
        //   img {
        //   }
        // }
      }
    }
  }
}
</style>
