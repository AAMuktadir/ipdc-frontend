<template>
  <section class="apply-form">
    <div class="container">
      <div class="apply-form_details">
        <form @submit.prevent="submitHandler" method="POST">
          <div class="form-group">
            <label for="full_name">
              Full Name <span style="color: red">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              :class="{ error: errors.fullName.length > 0 }"
              id="full_name"
              placeholder="Full Name"
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
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
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
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="business_name">
              Business Name <span style="color: red">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              :class="{ error: errors.businessName.length > 0 }"
              id="business_name"
              placeholder="Write name of your organization"
              v-model="businessName"
            />
            <div v-if="errors.businessName.length > 0" class="errors">
              <ul>
                <li v-for="error in errors.businessName" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>

          <div class="form-group">
            <label for="business_location">
              Business Location <span style="color: red">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              :class="{ error: errors.businessLocation.length > 0 }"
              id="business_location"
              placeholder="Write your business location"
              v-model="businessLocation"
            />
            <div v-if="errors.businessLocation.length > 0" class="errors">
              <ul>
                <li v-for="error in errors.businessLocation" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>

          <div class="form-group">
            <label for="business_page_link">Business Page Link</label>
            <input
              type="text"
              class="form-control"
              id="business_page_link"
              placeholder="Link to your business page"
              v-model="businessPageLink"
            />
          </div>

          <div class="form-group">
            <label for="business_details">
              Business Details <span style="color: red">*</span>
            </label>
            <textarea
              type="text"
              class="form-control"
              :class="{ error: errors.businessDetails.length > 0 }"
              id="business_details"
              placeholder="Describe your business"
              v-model="businessDetails"
            />
            <div v-if="errors.businessDetails.length > 0" class="errors">
              <ul>
                <li v-for="error in errors.businessDetails" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>

          <div class="form-group">
            <label for="business_experience">
              Business Experience <span style="color: red">*</span>
            </label>
            <select
              id="business_experience"
              class="form-control"
              :class="{ error: errors.businessExperience.length > 0 }"
              v-model="businessExperience"
            >
              <option key="0" value="">Select</option>
              <option
                v-for="item in businessExperienceList"
                :key="item.id"
                :value="item.value"
              >
                {{ item.title }}
              </option>
            </select>
            <div v-if="errors.businessExperience.length > 0" class="errors">
              <ul>
                <li v-for="error in errors.businessExperience" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>

          <div class="form-group">
            <label for="availableTrainings">
              Available Trainings <span style="color: red">*</span>
            </label>
            <select
              id="availableTrainings"
              class="form-control"
              :class="{ error: errors.availableTrainings.length > 0 }"
              v-model="availableTrainings"
            >
              <option key="0" value="">Select</option>
              <option
                v-for="item in availableTrainingsList"
                :key="item.id"
                :value="item.id"
              >
                {{ item.title }}
              </option>
            </select>
            <div v-if="errors.availableTrainings.length > 0" class="errors">
              <ul>
                <li v-for="error in errors.availableTrainings" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>

          <div class="form-group">
            <label for="trainingSubject"> Training Subject Requirement: </label>
            <textarea
              type="text"
              class="form-control"
              id="trainingSubject"
              placeholder="Describe your Training Subject Requirements"
              v-model="trainingSubject"
            />
          </div>

          <recaptcha />

          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                :class="{ error: errors.consent_pathsala.length > 0 }"
                type="checkbox"
                id="consent_pathsala"
                v-model="consent_pathsala"
              />
              <label class="form-check-label" for="consent_pathsala">
                I hereby give IPDC Finance PLC. consent to contact me in the
                given information
              </label>
            </div>
            <div v-if="errors.consent_pathsala.length > 0" class="errors">
              <ul>
                <li v-for="error in errors.consent_pathsala" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>

          <div class="apply-form_details_button">
            <div class="btn submit-btn">
              <button type="submit" class="apply-btn submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
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
      businessName: "",
      businessLocation: "",
      businessPageLink: "",
      businessDetails: "",
      businessExperience: "",
      availableTrainings: "",
      trainingSubject: "",
      consent_pathsala: false,
      errors: {
        fullName: [],
        phoneNumber: [],
        email: [],
        businessName: [],
        businessLocation: [],
        businessDetails: [],
        businessExperience: [],
        availableTrainings: [],
        trainingSubject: [],
        consent_pathsala: [],
      },
      businessExperienceList: [
        { id: 1, value: "No-Exp.", title: "No-Experience" },
        { id: 2, value: "0-2 Years", title: "0-2 Years" },
        { id: 3, value: "2-5 Years", title: "2-5 Years" },
        { id: 4, value: "5+ Years", title: "5+ Years" },
      ],
      availableTrainingsList: [
        { id: 1, title: "Digital Marketing", title_bn: "Digital Marketing" },
        {
          id: 2,
          title: "Other Topics of Sessions",
          title_bn:
            "Other Topics of Sessions (Please Mention the Topic in the Training Subject Requirement Box)",
        },
      ],
    };
  },
  computed: {
    today() {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    },
  },
  methods: {
    resetForm() {
      this.fullName = "";
      this.phoneNumber = "";
      this.email = "";
      this.businessName = "";
      this.businessLocation = "";
      this.businessPageLink = "";
      this.businessDetails = "";
      this.businessExperience = "";
      this.availableTrainings = "";
      this.trainingSubject = "";
      this.consent_pathsala = false;
    },
    checkForm() {
      this.errors.fullName = [];
      this.errors.phoneNumber = [];
      this.errors.email = [];
      this.errors.businessName = [];
      this.errors.businessLocation = [];
      this.errors.businessDetails = [];
      this.errors.businessExperience = [];
      this.errors.availableTrainings = [];
      this.errors.trainingSubject = [];
      this.errors.consent_pathsala = [];

      if (!this.fullName) {
        this.errors.fullName.push("Full Name is required.");
      }
      if (!this.phoneNumber) {
        this.errors.phoneNumber.push("Phone Number is required.");
      }
      if (!this.email) {
        this.errors.email.push("Email is required.");
      }
      if (!this.businessName) {
        this.errors.businessName.push("Business Name is required.");
      }
      if (!this.businessLocation) {
        this.errors.businessLocation.push("Business Location is required.");
      }
      if (!this.businessDetails) {
        this.errors.businessDetails.push("Business Details is required.");
      }
      if (!this.businessExperience) {
        this.errors.businessExperience.push("Business Experience is required.");
      }
      if (!this.availableTrainings) {
        this.errors.availableTrainings.push("Select Training.");
      }
      if (!this.consent_pathsala) {
        this.errors.consent_pathsala.push("Consent is required.");
      }

      return (
        this.errors.fullName.length === 0 &&
        this.errors.phoneNumber.length === 0 &&
        this.errors.email.length === 0 &&
        this.errors.businessName.length === 0 &&
        this.errors.businessLocation.length === 0 &&
        this.errors.businessDetails.length === 0 &&
        this.errors.businessExperience.length === 0 &&
        this.errors.availableTrainings.length === 0 &&
        this.errors.consent_pathsala.length === 0
      );
    },
    async submitHandler() {
      try {
        const token = await this.$recaptcha.getResponse();

        if (token && this.checkForm()) {
          const postData = {
            full_name: this.fullName,
            contact_no: this.phoneNumber,
            email: this.email,
            business_name: this.businessName,
            business_location: this.businessLocation,
            business_page_link: this.businessPageLink,
            business_details: this.businessDetails,
            business_experience: this.businessExperience,
            training_id: this.availableTrainings,
            training_subjects: this.trainingSubject,
          };

          const response = await this.$axios.post(
            `/create-joyee-pathshala`,
            postData
          );
          if (response.data.code == 200) {
            this.$bvModal.show("modal-3");
            this.resetForm();
          } else {
            this.$bvModal.show("modal-4");
          }
          await this.$recaptcha.reset();
        } else {
          console.log("Validation Error", this.errors);
        }
      } catch (error) {
        console.log("Submit error:", error);
      }
    },
    async getJoyeeTrainingList() {
      try {
        const response = await this.$axios.get("/get-joyee-training-list");
        this.availableTrainingsList = response.data.data;
      } catch (error) {
        console.log("Error fetching training list:", error);
      }
    },
  },
  created() {
    // this.getJoyeeTrainingList();
  },
};
</script>

<style lang="scss" scoped>
.apply-form {
  padding: 30px;
  &_details {
    h2 {
      font-weight: 400;
      font-size: 64px;
      text-align: center;
      color: #f846a4;
      .font-bn & {
        font-size: 70px;
      }
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
        .form-check {
          padding-top: 20px;
          &-label {
            font-weight: 400;
            font-size: 20px;
            line-height: 120%;
            color: #666666;
            .font-bn & {
              font-size: 25px;
            }
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
    }
    &_button {
      display: flex;
      gap: 30px;
      justify-content: center;
      padding-top: 30px;
      .btn {
        .apply-btn {
          background: #ffffff;
          border: 1px solid #a6a6a6;
          border-radius: 8px;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: #ababab;
          padding: 10px 30px;
          width: 150px;
          .font-bn & {
            font-size: 21px;
          }
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
        .font-bn & {
          font-size: 60px;
        }
      }
      form {
        .form-group {
          label {
            font-size: 16px;
            padding-top: 20px;
            .font-bn & {
              font-size: 21px;
            }
          }
          .form-check {
            padding-top: 20px;
            &-label {
              font-size: 15px;
              .font-bn & {
                font-size: 20px;
              }
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
</style>
