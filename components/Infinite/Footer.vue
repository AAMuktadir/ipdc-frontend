<template>
  <section class="elite-footer" ref="eliteFooter">
    <!-- FOOTER CONTENT -->
    <div
      class="elite-footer__content"
      :style="{
        backgroundImage: `url(${backgroundImage})`,
      }"
    >
      <div class="header-wrap">
        <div class="elite-footer-title" ref="footerTitle">
          <h2 class="footer-title">
            {{
              $i18n.locale == "en"
                ? "Step Into the Infinite World"
                : "ইনফিনিট দুনিয়ায় আপনাকে স্বাগতম"
            }}
          </h2>
          <h3 class="footer-description">
            {{
              $i18n.locale == "en"
                ? "Experience a new standard of financing relationship and lifestyle privileges with IPDC Infinite."
                : "আইপিডিসি ইনফিনিট-এর সাথে আপনার লাইফস্টাইল ও ফাইন্যান্সিয়াল সম্পর্কে যুক্ত হোক নতুন সব স্পেশাল প্রিভিলেজ।"
            }}
          </h3>
          <p>
            {{
              $i18n.locale == "en"
                ? "Apply now and redefine your financial journey."
                : "আজই অ্যাপ্লাই করুন এবং আপনার ফাইন্যান্সিয়াল লাইফে নিয়ে আসুন এক নতুন দিগন্ত।"
            }}
          </p>
        </div>
      </div>

      <div class="elite-footer__flex">
        <!-- LEFT -->
        <div class="elite-footer__left" ref="leftSide">
          <h2 class="elite-footer__heading">
            {{ $i18n.locale == "en" ? "Stay Connected" : "যোগাযোগ" }}
          </h2>

          <div class="elite-footer__info">
            <p class="label">
              {{
                $i18n.locale == "en"
                  ? "Priority Hotline:"
                  : "প্রায়োরিটি হটলাইন:"
              }}
            </p>
            <p>
              {{
                $i18n.locale == "en"
                  ? "16519 | +880 9612 816519"
                  : "১৬৫১৯ | +৮৮০ ৯৬১২ ৮১৬৫১৯"
              }}
            </p>
          </div>

          <div class="elite-footer__info">
            <p class="label">
              {{ $i18n.locale == "en" ? "Address:" : "ঠিকানা:" }}
            </p>
            <p>
              {{
                $i18n.locale == "en"
                  ? "Hosna Center (4th Floor), 106 Gulshan Avenue, Dhaka"
                  : "হোসনা সেন্টার (৪র্থ তলা), ১০৬ গুলশান এভিনিউ, ঢাকা"
              }}
            </p>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="elite-footer__right" ref="rightSide">
          <img :src="goldenLogo" alt="" />
        </div>
      </div>

      <div class="elite-footer__disclaimer" ref="disclaimer">
        <h4>{{ $i18n.locale == "en" ? "Disclaimer" : "ডিসক্লেইমার" }}</h4>
        <p>
          {{
            $i18n.locale == "en"
              ? "Membership to IPDC Elite and Infinite is subject to maintaining the required portfolio balance. Terms and conditions apply to all privileges and partner offers."
              : "আইপিডিসি এলিট এবং ইনফিনিট-এর মেম্বারশিপ বা সুবিধাগুলো সচল রাখতে নির্দিষ্ট পরিমাণ পোর্টফোলিও ব্যালেন্স বজায় রাখা বাধ্যতামূলক। এছাড়া সকল প্রিভিলেজ এবং পার্টনার অফারের ক্ষেত্রে সংশ্লিষ্ট শর্তাবলী প্রযোজ্য হবে।"
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      page: 25,
      section: "Bottom",
      backgroundImage: "https://ipdc.com/api/uploads/background/1674114184.jpg",
      observer: null,
      goldenLogo: require("~/assets/image/logo/goldenLogo.png"),
    };
  },

  mounted() {
    this.initObserver();
  },

  methods: {
    subscribe() {
      if (!this.email) return;
      this.$toast.success("Subscribed successfully!");
      this.email = "";
    },
    initObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            this.animateTravel();
            this.observer.disconnect();
          });
        },
        { threshold: 0.2 }
      );

      if (this.$refs.eliteFooter) {
        this.observer.observe(this.$refs.eliteFooter);
      }
    },

    animateTravel() {
      this.$nextTick(() => {
        const tl = this.$gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // LEFT SIDE
        tl.fromTo(
          this.$refs.eliteFooter,
          { opacity: 0 },
          { opacity: 1, duration: 0.05 }
        );

        // TITLE BLOCK
        tl.fromTo(
          this.$refs.footerTitle,
          {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
          }
        );

        // LEFT SIDE
        tl.fromTo(
          this.$refs.leftSide,
          { opacity: 0, x: -80 },
          { opacity: 1, x: 0, duration: 1 }
        );

        // RIGHT SIDE
        tl.fromTo(
          this.$refs.rightSide,
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 1 },
          "-=0.7"
        );

        // DISCLAIMER
        tl.fromTo(
          this.$refs.disclaimer,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.elite-footer {
  // padding: 88px 0;
  opacity: 0;
}

.header-wrap {
  text-align: center;
  width: 100%;
  .elite-footer-title {
    text-align: center;
    padding-bottom: 50px;
    .footer-title {
      font-size: 3rem;
      color: #e6c27a;
      .font-bn & {
        font-size: 41px;
      }
    }
    .footer-description {
      // text-align: justify;
      text-align: center;
      justify-self: center;
      margin: 10px 0;
      font-weight: 400;
      color: #fff;
      .font-bn & {
        font-size: 21px;
      }
    }
    p {
      color: #eee;
      margin-top: 15px;
    }
  }
}

/* BACKGROUND WRAPPER */
.elite-footer__content {
  position: relative;
  padding: 80px 60px;
  // border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  /* dark premium overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 15, 0.65);
    backdrop-filter: blur(6px);
  }
}

/* FLEX LAYOUT */
.elite-footer__flex {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  z-index: 2;
  align-items: center;
}

/* LEFT SIDE */
.elite-footer__left {
  flex: 1;
  color: #ffffff;
  margin-left: 90px;
}

.elite-footer__heading {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #e6c27a;
}

.elite-footer__info {
  margin-bottom: 20px;

  p {
    margin: 0;
    font-size: 1.3rem;
    line-height: 1.6;
    color: #eaeaea;
  }

  .label {
    font-weight: 600;
    color: #ffffff;
  }
}

.elite-footer__disclaimer {
  z-index: 2;
  position: relative;
  margin: 49px auto 0;
  width: fit-content;
  text-align: center;

  h4 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: #ffffff;
  }

  p {
    font-size: 1.3rem;
    color: #bfbfbf;
    line-height: 1.6;
  }
}

/* RIGHT SIDE */
.elite-footer__right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.elite-footer__right img {
  max-width: 50%;
}

/* NEWSLETTER CARD */
.elite-footer__newsletter {
  width: 100%;
  max-width: 420px;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #e6c27a;
  }
  h4 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 25px;
    color: #dcdcdc;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      padding: 14px;
      border-radius: 8px;
      border: none;
      outline: none;
      font-size: 1.1rem;
    }

    button {
      padding: 14px;
      border-radius: 8px;
      border: none;
      background: #ed017f;
      color: #fff;
      font-weight: 600;
      transition: all 0.3s ease;
      font-size: 1.3rem;

      &:hover {
        background: #c80068;
      }
    }
  }
}

/* RESPONSIVE */
@media screen and (max-width: 768px) {
  .elite-footer__content {
    padding: 40px 20px;
  }

  .elite-footer__flex {
    flex-direction: column;
    gap: 40px;
  }
  .elite-footer__left {
    margin-left: unset;
    text-align: center;
  }
  .elite-footer__right img {
    max-width: 80%;
  }

  .elite-footer__newsletter {
    padding: 25px;
  }
}
</style>
