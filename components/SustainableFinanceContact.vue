<template>
  <section class="sus-fin-contact">
    <div class="heading">
      <h1
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        Contact Point
      </h1>
    </div>
    <div class="sus-fin-contact-heading">
      <b-row>
        <b-col md="1"></b-col>
        <b-col
          md="5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
          class="test-bg"
        >
          <h1 class="sus-fin-contact-person-title">
            Contact Point For Sustainable Finance
            <!-- {{
              $i18n.locale == "en"
                ? susFinProducts.title
                : susFinProducts.title_bangla
            }} -->
          </h1>
          <br />
          <br />
          <br />
          <div class="sus-fin-contact-person-list">
            <div class="sus-fin-contact-person">
              <p style="font-size: 2rem">Jumaratul Banna</p>
              <p>Head of Sustainable Business</p>
              <p>IPDC Finance PLC.</p>
              <br />

              <p>
                <img src="~assets/icons/phone.svg" class="icon" />
                (88-02) 2222-90371
              </p>
              <br />
              <p>
                <img src="~assets/icons/email.svg" class="icon" />
                jumaratul.banna@ipdcbd.com
              </p>
              <!-- {{
              $i18n.locale == "en"
                ? susFinProducts.description
                : susFinProducts.description_bangla
            }} -->
            </div>
            <div class="sus-fin-contact-person">
              <p style="font-size: 2rem">Akif Chowdhury</p>
              <p>Sustainable Business Coordinator</p>
              <p>IPDC Finance PLC.</p>
              <br />

              <p>
                <img src="~assets/icons/phone.svg" class="icon" />
                (88-02) 55068929, Ext: 259
              </p>
              <br />
              <p>
                <img src="~assets/icons/email.svg" class="icon" />
                akif.chowdhury@ipdcbd.com
              </p>
              <!-- {{
              $i18n.locale == "en"
                ? susFinProducts.description
                : susFinProducts.description_bangla
            }} -->
            </div>
          </div>
        </b-col>
        <b-col
          md="5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 class="sus-fin-contact-title">
            Consumer Feedback/Concerns
            <!-- {{
              $i18n.locale == "en"
                ? susFinProducts.title
                : susFinProducts.title_bangla
            }} -->
          </h1>

          <div class="feedback-form">
            <form @submit.prevent="submitHandler" method="POST">
              <div class="form-group">
                <label for="full_name">
                  Your Name <span style="color: red">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ error: errors.fullName.length > 0 }"
                  id="full_name"
                  placeholder="Your Name"
                  v-model="fullName"
                />
                <div v-if="errors.fullName.length > 0" class="errors">
                  <ul>
                    <li v-for="error in errors.fullName" :key="error">
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="form-group-row">
                <div class="form-group">
                  <label for="phone_number">
                    Contact Number <span style="color: red">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ error: errors.phoneNumber.length > 0 }"
                    id="phone_number"
                    placeholder="01xxxxxxxxxx"
                    v-model="phoneNumber"
                  />
                  <div v-if="errors.phoneNumber.length > 0" class="errors">
                    <ul>
                      <li v-for="error in errors.phoneNumber" :key="error">
                        <!-- {{ error }} -->
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    :class="{ error: errors.email.length > 0 }"
                    id="email"
                    placeholder="example@email.com"
                    v-model="email"
                  />
                  <div v-if="errors.email.length > 0" class="errors">
                    <ul>
                      <li v-for="error in errors.email" :key="error">
                        <!-- {{ error }} -->
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="feedback_details">
                  Feedback <span style="color: red">*</span>
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  :class="{ error: errors.feedbackDetails.length > 0 }"
                  id="feedback_details"
                  placeholder="Your Feedback"
                  v-model="feedbackDetails"
                />
                <div v-if="errors.feedbackDetails.length > 0" class="errors">
                  <ul>
                    <li v-for="error in errors.feedbackDetails" :key="error">
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>

              <recaptcha style="text-align: center" />

              <div class="feedback-form-button">
                <div class="btn submit-btn">
                  <button type="submit" class="feedback-btn submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </b-col>
      </b-row>
    </div>

    <!-- Modal Start -->
    <b-modal id="modal-3">
      <div class="success">
        <div class="success-image">
          <img src="~assets/icons/success.png" alt="Success" />
        </div>
        <div class="success-title">
          <h3>Success</h3>
        </div>
        <div class="success-text">
          <p class="text first-text">
            Thank you for your request.<br />Our representative will contact you
            shortly.
          </p>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-4">
      <div class="error">
        <div class="error-image">
          <img src="~assets/icons/error.png" alt="Error" />
        </div>
        <div class="error-title">
          <h3>Error!</h3>
        </div>
        <div class="error-text">
          <p class="text first-text">
            We are sorry!<br />We are unable to continue<br />
            the process
          </p>
          <p class="text second-text">
            Please try again to complete<br />
            the request
          </p>
        </div>
      </div>
    </b-modal>
    <!-- Modal End -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      phoneNumber: "",
      email: "",
      feedbackDetails: "",
      errors: {
        fullName: [],
        phoneNumber: [],
        email: [],
        feedbackDetails: [],
      },
    };
  },
  methods: {
    resetForm() {
      this.fullName = "";
      this.phoneNumber = "";
      this.email = "";
      this.feedbackDetails = "";
    },
    validateField(field, rules) {
      const errors = [];
      for (const rule of rules) {
        const error = rule();
        if (error) errors.push(error);
      }
      return errors;
    },
    checkForm() {
      this.errors.fullName = this.validateField(this.fullName, [
        () => (!this.fullName ? "Full Name is required." : null),
        () =>
          this.fullName.length < 3 || this.fullName.length > 50
            ? "Full Name must be between 3 and 50 characters."
            : null,
        () =>
          !/^[a-zA-Z\s]+$/.test(this.fullName)
            ? "Full Name can only contain letters and spaces."
            : null,
      ]);

      this.errors.phoneNumber = this.validateField(this.phoneNumber, [
        () => (!this.phoneNumber ? "Contact Number is required." : null),
        () =>
          !/^01[3-9]\d{8}$/.test(this.phoneNumber)
            ? "Contact Number must be a valid Bangladeshi mobile number."
            : null,
      ]);

      this.errors.email = this.validateField(this.email, [
        () =>
          this.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
            ? "Please enter a valid Email Address."
            : null,
      ]);

      this.errors.feedbackDetails = this.validateField(this.feedbackDetails, [
        () => (!this.feedbackDetails ? "Your Feedback is required." : null),
        () =>
          this.feedbackDetails.length < 10 || this.feedbackDetails.length > 500
            ? "Feedback must be between 10 and 500 characters."
            : null,
      ]);

      return Object.values(this.errors).every(
        (fieldErrors) => fieldErrors.length === 0
      );
    },
    async submitHandler() {
      try {
        const token = await this.$recaptcha.getResponse();
        if (!token) {
          this.$bvModal.show("modal-4");
          return;
        }

        if (this.checkForm()) {
          const postData = {
            name: this.fullName,
            phone: this.phoneNumber,
            email: this.email,
            feedback: this.feedbackDetails,
          };

          const response = await this.$axios.post(
            `create-sustainability-feedback`,
            postData
          );

          if (response.data.code === 200) {
            this.$bvModal.show("modal-3");
            this.resetForm();
          } else {
            this.$bvModal.show("modal-4");
          }

          await this.$recaptcha.reset();
        }
      } catch (error) {
        console.log("Submit error:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sus-fin-contact {
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(15, 190, 50, 0.25) 15%,
    rgba(15, 90, 20, 0.15) 50%,
    rgba(15, 90, 80, 0.35) 85%
  );

  .heading {
    h1 {
      font-size: 2.5rem;
      line-height: 133%;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: #343434;
      padding: 40px;
      text-align: center;
    }
  }

  .sus-fin-contact-heading {
    padding: 20px 40px 20px 40px;
    line-height: 133%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .test-bg {
      background-color: #666;
      color: white;
      font-size: 15px;
      padding: 50px 40px;
      border-radius: 20px;
      background: linear-gradient(
        300deg,
        rgb(44, 54, 48) 1.75%,
        rgb(48, 50, 48) 20%,
        rgb(6, 89, 48) 71.55%
      );
    }

    .row {
      margin: 0;
      gap: 10px;
      flex-wrap: nowrap;
      align-items: top;
      height: 100%;
      display: flex;
      flex-grow: 1;

      @media (max-width: 768px) {
        gap: 0px;
        flex-direction: column;
        text-align: center;
      }

      .col-md-6 {
        padding: 0;
        flex: inherit;
      }

      .col-md-5 {
        padding: 0;
      }
    }

    .sus-fin-contact-title {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 40px;
      text-align: center;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
    }

    .sus-fin-contact-person-title {
      font-size: 2.2rem;
      font-weight: bold;
      color: #ffffff;
      padding: 40px;
      text-align: center;

      @media (max-width: 768px) {
        padding: 40px 40px 20px 40px;
      }
    }
    .sus-fin-contact-person-list {
      display: flex;
      justify-content: space-evenly;
      @media (max-width: 1366px) {
        flex-direction: column;
        align-items: center;
        gap: 100px;
      }

      .sus-fin-contact-person {
        font-size: 1rem;
        line-height: 150%;
        width: max-content;

        // font-size: 1rem;
        // line-height: 150%;
        // color: #ffffff;
        // padding: 40px 40px 40px 40px;
        // margin: 0 auto;
        // left: 15%;
        // position: relative;
        // transform: scale(1.1);

        p {
          width: fit-content;
        }

        .icon {
          position: relative;
          display: inline;
          width: 18px;
          bottom: 2px;
        }

        @media (max-width: 768px) {
          transform: scale(1);
          left: 0;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 20px 40px 0px 40px;
    }
  }

  .feedback-form {
    padding: 40px;
    h2 {
      font-weight: 400;
      font-size: 64px;
      text-align: center;
      color: #f846a4;
    }
    form {
      .form-group {
        margin-bottom: 15px;
        label {
          font-weight: 400;
          color: #666666;
          padding-left: 5px;
        }
        .form-control {
          background: #ffffff;
          border: 1px solid #cccccc;
          border-radius: 10px;
          &:focus {
            box-shadow: none;
            background: #f6f1f1;
          }
          &.error {
            border: 1px solid red;
          }
        }
      }
      .form-group-row {
        display: flex;
        gap: 30px;
        .form-group {
          flex: 1;
        }
      }
      .feedback-form-button {
        display: flex;
        gap: 30px;
        justify-content: center;
        padding-top: 30px;
        .btn {
          .feedback-btn {
            background: #ffffff;
            border: 1px solid #a6a6a6;
            border-radius: 8px;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: #ababab;
            padding: 10px 30px;
            width: 150px;
            &.submit,
            &:hover {
              background: #f846a4;
              color: #ffffff;
              border: 1px solid #f846a4;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .apply-form {
      padding: 20px;
      &_details {
        h2 {
          font-size: 54px;
        }
        form {
          .form-group {
            label {
              font-size: 16px;
              padding-top: 20px;
            }
            .form-check {
              padding-top: 20px;
              &-label {
                font-size: 15px;
              }
            }
          }
          .form-group-row {
            flex-direction: column;
            gap: 10px;
          }
        }
        &_button {
          gap: 20px;
          padding-top: 20px;
          .btn {
            .apply-btn {
              width: unset;
            }
          }
        }
      }
    }
  }
}
</style>
