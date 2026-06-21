<template>
  <div v-if="homeAtaGlance" class="ipdc-glance">
    <div v-if="$i18n.locale == 'en'" class="glance-text">
      <h1>{{ homeAtaGlance.title }}</h1>
      <p>{{ homeAtaGlance.description }}</p>
      <div class="glance-button">
        <a href="mission-vision" target="_blank">
          <h3>READ MORE</h3>
          <div class="read-more-circle">
            <img src="~assets/image/rightarrow.png" alt="Arrow" />
          </div>
        </a>
      </div>
    </div>
    <div v-if="$i18n.locale == 'bn'" class="glance-text">
      <h1>{{ homeAtaGlance.title_bangla }}</h1>
      <p>{{ homeAtaGlance.description_bangla }}</p>
      <div class="glance-button">
        <a href="mission-vision" target="_blank">
          <h3>আরও পড়ুন</h3>
          <div class="read-more-circle">
            <img src="~assets/image/rightarrow.png" alt="Arrow" />
          </div>
        </a>
      </div>
    </div>
    <div class="glance-image">
      <img v-if="$i18n.locale == 'en'" :src="homeAtaGlance.image" alt="" />
      <img
        v-if="$i18n.locale == 'bn'"
        :src="homeAtaGlance.image_bangla"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "IpdcGlance",
  props: {
    homeAtaGlance: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.ipdc-glance {
  position: relative;
  overflow: hidden;
  .glance-text {
    position: absolute;
    width: 531px;
    height: 622px;
    right: 120px;
    bottom: -110px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(11px);
    border-radius: 18px;
    padding: 30px 27px 40px 44px;
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #ffffff;
      margin-bottom: 10px;
      .font-bn & {
        font-size: 45px;
      }
    }
    p {
      font-size: 16px;
      line-height: 154.3%;
      color: #ffffff;
      margin-bottom: 36px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 14;
      line-clamp: 14;
      -webkit-box-orient: vertical;
      .font-bn & {
        font-size: 21px;
      }
    }
    .glance-button {
      display: flex;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        h3 {
          font-weight: 600;
          font-size: 14px;
          line-height: 100%;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ed017f;
          text-decoration: none;
          .font-bn & {
            font-size: 21px;
          }
        }
        .read-more-circle {
          width: 16px;
          height: 16px;
          background: rgba(237, 1, 127, 0.37);
          mix-blend-mode: normal;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
          margin-top: -2px;

          img {
            width: 5px;
            height: 7px;
          }
        }
        &:hover {
          transition: 0.3s;
          transform: scale(1.1);
          h3 {
            color: #ff0088;
          }
          .read-more-circle {
            background: rgba(213, 14, 120, 0.301);
            animation: move 0.4s infinite linear alternate;
          }
        }
      }
    }
  }
  .glance-image {
    img {
      width: 100%;
    }
  }
}
@keyframes move {
  0% {
    transform: translate(-4px);
  }
  100% {
    transform: translate(4px);
  }
}
@media screen and (max-width: 1024px) {
  .ipdc-glance {
    position: relative;
    overflow: hidden;
    .glance-text {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      border-radius: 0;
      h1 {
        font-size: 30px;
        .font-bn & {
          font-size: 40px;
        }
      }
    }
    .glance-image {
      img {
        width: 100%;
        height: 550px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .ipdc-glance {
    position: relative;
    overflow: hidden;
    .glance-text {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      border-radius: 0;
      h1 {
        font-size: 30px;
        .font-bn & {
          font-size: 40px;
        }
      }
    }
    .glance-image {
      img {
        width: 100%;
        height: 550px;
      }
    }
  }
}
</style>
