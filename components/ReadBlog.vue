<template>
  <section class="read-blog">
    <div class="blog-details">
      <h1 class="blog-title">Read Our Blog</h1>
      <p class="blog-description">
        Relieve your anxieties before opting for any financial decision by<br />
        learning more about the world of finance
      </p>
    </div>

    <div class="our-blogs">
      <div class="blog about-loans" v-for="item in homeBlog" :key="item.id">
        <img :src="item.image_url" alt="img" />
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
        <a href="#"><span>Learn more</span> &#8594;</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Read-blog",
  props: {
    homeBlog: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.read-blog {
  padding: 80px 0 130px 0;
  .blog-details {
    text-align: center;
    .blog-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      margin-bottom: 15px;
      .font-bn & {
        font-size: 41px;
      }
    }
    .blog-description {
      font-size: 16px;
      line-height: 137.5%;
      color: #999999;
      margin-bottom: 74px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .our-blogs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 34px;
    .blog {
      width: 259px;
      height: 387px;
      background: #ffffff;
      box-shadow: 2.98772px 2.98772px 43.3219px rgba(0, 0, 0, 0.07);
      border-radius: 7.46929px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-top: 36px;
      img {
        width: 51px;
        height: 51px;
        margin-bottom: 36px;
      }
      h4 {
        font-weight: 600;
        font-size: 18px;
        line-height: 122.22%;
        color: #343434;
        margin-bottom: 10px;
        .font-bn & {
          font-size: 23px;
        }
      }
      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #858588;
        margin-bottom: 39px;
        min-height: 80px;
        padding: 0 10px;
        .font-bn & {
          font-size: 21px;
        }
      }
      a {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #ed017f;
        text-decoration: none;
        .font-bn & {
          font-size: 19px;
        }
      }
      &:hover {
        background: linear-gradient(
          152.61deg,
          #fa0085 -2.16%,
          #fa0085 37.81%,
          #ff9292 87.08%
        );
        box-shadow: 2.98772px 25.99px 43.3219px rgba(255, 123, 144, 0.52);
        img {
          filter: brightness(0) invert(1);
        }
        h4 {
          color: #ffffff;
        }
        p {
          color: #ffffff;
        }
        a {
          color: #ffffff;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .read-blog {
    .blog-details {
      // .blog-title {
      // }
      .blog-description {
        padding: 0 30px;
      }
    }
    .our-blogs {
      display: flex;
      flex-direction: column;
      .blog {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        height: unset;
        padding: 25px 20px 0 40px;
        // img {
        // }
        h4 {
          margin-right: auto;
          margin-left: 25px;
          padding-bottom: 10px;
        }
        p {
          display: none;
        }
        a {
          margin: 0 20px 20px 0;
          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>
