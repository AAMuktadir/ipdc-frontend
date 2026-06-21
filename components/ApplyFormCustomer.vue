<template>
  <section class="apply-form">
    <div class="container">
      <div class="apply-form_details">
        <!-- <h2>Apply Now</h2> -->
        <form @submit.prevent="submitHandler" method="POST">
          <b-row>
            <div class="form-group col-md-12">
              <label for="product">{{
                $i18n.locale == "en" ? "Apply For" : "প্রোডাক্ট"
              }}</label>
              <select
                id="product"
                class="form-control"
                v-model="product"
                :class="[errors.product.length > 0 ? 'error' : '']"
              >
                <option v-for="product in productList" :value="product.id">
                  {{ product.title }}
                </option>
              </select>
            </div>
            <div v-if="errors.product.length > 0" class="errors">
              <ul>
                <li v-for="error in errors.product">{{ error }}</li>
              </ul>
            </div>
          </b-row>
          <b-row>
            <div class="form-group col-md-12">
              <label for="fullName">{{
                $i18n.locale == "en" ? "Full Name" : "নাম"
              }}</label>
              <input
                type="text"
                class="form-control"
                :class="[errors.fullName.length > 0 ? 'error' : '']"
                id="fullName"
                placeholder="Write Your Name"
                v-model="fullName"
              />
              <div v-if="errors.fullName.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.fullName">{{ error }}</li>
                </ul>
              </div>
            </div>
            <!-- <div class="form-group col-md-6">
              <label for="amount">{{
                $i18n.locale == "en" ? "Amount in Tk." : "পরিমাণ (টাকায়)"
              }}</label>
              <input
                type="number"
                class="form-control"
                :class="[errors.amount.length > 0 ? 'error' : '']"
                id="amount"
                placeholder="Amount in Tk."
                v-model="amount"
                min="0"
              />
              <div v-if="errors.amount.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.amount">{{ error }}</li>
                </ul>
              </div>
            </div> -->
          </b-row>
          <!-- <b-row>
            <div class="form-group col-md-6">
              <label for="dateOfBirth">{{
                $i18n.locale == "en" ? "Date of Birth" : "জন্ম তারিখ"
              }}</label>
              <input
                type="date"
                class="form-control"
                :class="[errors.dateOfBirth.length > 0 ? 'error' : '']"
                id="dateOfBirth"
                placeholder="dd/mm/yyyy"
                v-model="dateOfBirth"
              />
              <div v-if="errors.dateOfBirth.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.dateOfBirth">{{ error }}</li>
                </ul>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="nid">{{
                $i18n.locale == "en"
                  ? "National ID"
                  : "জাতীয় পরিচয় পত্র নাম্বার"
              }}</label>
              <input
                type="text"
                class="form-control"
                id="nid"
                :class="[errors.nid.length > 0 ? 'error' : '']"
                placeholder="XXXXXXXXXXXXX"
                v-model="nid"
              />
              <div v-if="errors.nid.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.nid">{{ error }}</li>
                </ul>
              </div>
            </div>
          </b-row> -->
          <b-row>
            <div class="form-group col-md-12">
              <label for="phoneNumber">{{
                $i18n.locale == "en" ? "Phone Number" : "মোবাইল নাম্বার"
              }}</label>
              <input
                type="text"
                class="form-control"
                :class="[errors.phoneNumber.length > 0 ? 'error' : '']"
                id="phoneNumber"
                placeholder="01xxxxxxxxxx"
                v-model="phoneNumber"
              />
              <div v-if="errors.phoneNumber.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.phoneNumber">{{ error }}</li>
                </ul>
              </div>
            </div>
            <!-- <div class="form-group col-md-6">
              <label for="email">{{
                $i18n.locale == "en" ? "Email" : "ইমেইল"
              }}</label>
              <input
                type="email"
                :class="[errors.email.length > 0 ? 'error' : '']"
                class="form-control"
                id="email"
                placeholder="example@email.com"
                v-model="email"
              />
              <div v-if="errors.email.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.email">{{ error }}</li>
                </ul>
              </div>
            </div> -->
          </b-row>
          <!-- <b-row>
            <div class="form-group col-md-8">
              <label for="presentAddress">{{
                $i18n.locale == "en" ? "Present Address" : "বর্তমান ঠিকানা"
              }}</label>
              <input
                type="text"
                class="form-control"
                :class="[errors.presentAddress.length > 0 ? 'error' : '']"
                id="presentAddress"
                placeholder="Your Address"
                v-model="presentAddress"
              />
              <div v-if="errors.presentAddress.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.presentAddress">{{ error }}</li>
                </ul>
              </div>
            </div>
            <div class="form-group col-md-4">
              <label for="presentAddressCity">{{
                $i18n.locale == "en" ? "Select City" : "জেলা"
              }}</label>
              <select
                id="presentAddressCity"
                class="form-control"
                v-model="presentAddressCity"
                :class="[errors.presentAddressCity.length > 0 ? 'error' : '']"
              >
                <option v-for="city in cityList" :value="city.title">
                  {{ city.title }}
                </option>
              </select>
              <div v-if="errors.presentAddressCity.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.presentAddressCity">
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
          </b-row>
          <hr /> -->
          <!-- <b-row>
            <div class="form-group col-md-6">
              <label for="occupation">{{
                $i18n.locale == "en" ? "Occupation" : "পেশা"
              }}</label>
              <select
                id="occupation"
                class="form-control"
                v-model="occupation"
                :class="[errors.occupation.length > 0 ? 'error' : '']"
              >
                <option
                  v-for="occupation in occupationList"
                  :value="occupation.title"
                >
                  {{ occupation.title }}
                </option>
              </select>
              <div v-if="errors.occupation.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.occupation">{{ error }}</li>
                </ul>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="designation">{{
                $i18n.locale == "en" ? "Designation" : "পদবী"
              }}</label>
              <input
                type="text"
                class="form-control"
                id="designation"
                placeholder="Your Designation"
                v-model="designation"
                :class="[errors.designation.length > 0 ? 'error' : '']"
              />
              <div v-if="errors.designation.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.designation">{{ error }}</li>
                </ul>
              </div>
            </div>
          </b-row> -->
          <!-- <b-row>
            <div class="form-group col-md-6">
              <label for="nameOfCompany">{{
                $i18n.locale == "en" ? "Name of Company" : "প্রতিষ্ঠানের নাম"
              }}</label>
              <input
                type="text"
                class="form-control"
                :class="[errors.nameOfCompany.length > 0 ? 'error' : '']"
                id="nameOfCompany"
                placeholder="Your Comapny Name"
                v-model="nameOfCompany"
              />
              <div v-if="errors.nameOfCompany.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.nameOfCompany">{{ error }}</li>
                </ul>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="lengthOfService">{{
                $i18n.locale == "en" ? "Length of Service" : "যোগদানের মেয়াদ"
              }}</label>
              <input
                type="text"
                class="form-control"
                id="lengthOfService"
                placeholder="Your Length of Service"
                v-model="lengthOfService"
                :class="[errors.lengthOfService.length > 0 ? 'error' : '']"
              />
              <div v-if="errors.lengthOfService.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.lengthOfService">{{ error }}</li>
                </ul>
              </div>
            </div>
          </b-row> -->
          <!-- <b-row>
            <div class="form-group col-md-6">
              <label for="companyAddress">{{
                $i18n.locale == "en" ? "Company Address" : "প্রতিষ্ঠানের ঠিকানা"
              }}</label>
              <input
                type="text"
                class="form-control"
                :class="[errors.companyAddress.length > 0 ? 'error' : '']"
                id="companyAddress"
                placeholder="Company Address"
                v-model="companyAddress"
              />
              <div v-if="errors.companyAddress.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.companyAddress">{{ error }}</li>
                </ul>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="incomeRange">{{
                $i18n.locale == "en" ? "Income Range" : "আয়"
              }}</label>
              <select
                id="incomeRange"
                class="form-control"
                v-model="incomeRange"
                :class="[errors.incomeRange.length > 0 ? 'error' : '']"
              >
                <option v-for="range in incomeList" :value="range.value">
                  {{ range.title }}
                </option>
              </select>

              <div v-if="errors.incomeRange.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.incomeRange">{{ error }}</li>
                </ul>
              </div>
            </div>
          </b-row> -->
          <!-- <b-row>
            <div class="form-group col-md-12">
              <label for="preferredTime">{{
                $i18n.locale == "en"
                  ? "Preferred Time to Call"
                  : "যোগাযোগের সময়"
              }}</label>
              <select
                id="preferredTime"
                class="form-control"
                v-model="preferredTime"
                :class="[errors.preferredTime.length > 0 ? 'error' : '']"
              >
                <option v-for="time in timeList" :value="time.title">
                  {{ time.title }}
                </option>
              </select>

              <div v-if="errors.preferredTime.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.preferredTime">{{ error }}</li>
                </ul>
              </div>
            </div>
          </b-row> -->
          <b-row>
            <div class="form-group col-md-12">
              <label for="message">{{
                $i18n.locale == "en" ? "Message" : "Message"
              }}</label>
              <textarea
                class="form-control"
                :class="[errors.message.length > 0 ? 'error' : '']"
                id="message"
                placeholder="Message"
                v-model="message"
              />
              <div v-if="errors.message.length > 0" class="errors">
                <ul>
                  <li v-for="error in errors.message">{{ error }}</li>
                </ul>
              </div>
            </div>
          </b-row>
          <b-row>
            <div class="form-group col-md-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="permission"
                  v-model="permission"
                  :class="[errors.permission.length > 0 ? 'error' : '']"
                />
                <label
                  class="form-check-label"
                  for="permission"
                  style="text-align: justify"
                  >{{
                    $i18n.locale == "en"
                      ? "I hereby give IPDC Finance PLC. consent to contact me in the given information"
                      : "আমি আইপিডিসি ফাইন্যান্সকে দেওয়া তথ্য অনুযায়ী আমার সাথে যোগাযোগের অনুমতি প্রদান করছি।"
                  }}
                </label>
                <div v-if="errors.permission.length > 0" class="errors">
                  <ul>
                    <li v-for="error in errors.permission">{{ error }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <recaptcha class="col-md-12" />
          </b-row>

          <b-row>
            <div class="apply-form_details_button col-md-12">
              <div class="btn cancel-btn">
                <button type="submit" class="apply-btn cancel">
                  {{ $i18n.locale == "en" ? "Cancel" : "বাতিল" }}
                </button>
              </div>
              <div class="btn submit-btn">
                <button type="submit" class="apply-btn submit">
                  {{ $i18n.locale == "en" ? "Submit" : "সাবমিট" }}
                </button>
              </div>
            </div>
          </b-row>
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
  props: {
    productList: { type: Array, default: () => [] },
    cityList: { type: Array, default: () => [] },
    incomeList: { type: Array, default: () => [] },
    timeList: { type: Array, default: () => [] },
    occupationList: { type: Array, default: () => [] },
  },
  data() {
    return {
      product: null,
      fullName: "",
      // amount: null,
      // dateOfBirth: null,
      // nid: "",
      phoneNumber: "",
      // email: "",
      // presentAddress: "",
      // presentAddressCity: null,
      // occupation: null,
      // designation: "",
      // nameOfCompany: "",
      // lengthOfService: null,
      // companyAddress: "",
      // incomeRange: null,
      // preferredTime: null,
      permission: false,
      message: "",
      errors: {
        product: [],
        fullName: [],
        // amount: [],
        // dateOfBirth: [],
        // nid: [],
        phoneNumber: [],
        // email: [],
        // presentAddress: [],
        // presentAddressCity: [],
        // occupation: [],
        // designation: [],
        // nameOfCompany: [],
        // lengthOfService: [],
        // companyAddress: [],
        // incomeRange: [],
        // preferredTime: [],
        permission: [],
        message: [],
      },
    };
  },
  methods: {
    resetForm() {
      this.product = null;
      this.fullName = "";
      // this.amount = null;
      // this.dateOfBirth = null;
      // this.nid = "";
      this.phoneNumber = "";
      // this.email = "";
      // this.presentAddress = "";
      // this.presentAddressCity = null;
      // this.occupation = null;
      // this.designation = "";
      // this.nameOfCompany = "";
      // this.lengthOfService = null;
      // this.companyAddress = "";
      // this.incomeRange = null;
      // this.preferredTime = null;
      this.permission = false;
      this.message = "";
      Object.keys(this.errors).forEach((key) => (this.errors[key] = []));
    },
    checkForm() {
      let valid = true;
      // Reset all errors
      Object.keys(this.errors).forEach((key) => (this.errors[key] = []));

      // Validate product
      if (!this.product) {
        this.errors.product.push("Product is required.");
        valid = false;
      }

      // Validate full name
      if (!this.fullName.trim()) {
        this.errors.fullName.push("Full name is required.");
        valid = false;
      } else if (this.fullName.length < 3 || this.fullName.length > 60) {
        this.errors.fullName.push(
          "Full name must be between 3 and 60 characters long."
        );
        valid = false;
      }

      // Validate amount
      // if (!this.amount) {
      //   this.errors.amount.push("Amount is required.");
      //   valid = false;
      // } else if (this.amount < 1000 || this.amount > 1000000000) {
      //   this.errors.amount.push(
      //     "Amount must be between 1,000 and 100,00,00,000."
      //   );
      //   valid = false;
      // }

      // Validate date of birth
      // if (!this.dateOfBirth) {
      //   this.errors.dateOfBirth.push("Date of birth is required.");
      //   valid = false;
      // } else {
      //   const age = this.calculateAge(this.dateOfBirth);
      //   if (age < 18 || age > 65) {
      //     this.errors.dateOfBirth.push("Age must be between 18 and 65 years.");
      //     valid = false;
      //   }
      // }

      // Validate NID
      // if (!this.nid.trim()) {
      //   this.errors.nid.push("National ID is required.");
      //   valid = false;
      // } else if (this.nid.length < 10 || this.nid.length > 17) {
      //   this.errors.nid.push(
      //     "National ID must be between 10 and 17 characters."
      //   );
      //   valid = false;
      // }

      // Validate phone number
      const phonePattern = /^01[3-9]\d{8}$/;
      if (!this.phoneNumber.trim()) {
        this.errors.phoneNumber.push("Phone number is required.");
        valid = false;
      } else if (!phonePattern.test(this.phoneNumber)) {
        this.errors.phoneNumber.push("Invalid phone number format.");
        valid = false;
      }

      // Validate email
      // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // if (!this.email.trim()) {
      //   this.errors.email.push("Email is required.");
      //   valid = false;
      // } else if (!emailPattern.test(this.email)) {
      //   this.errors.email.push("Invalid email format.");
      //   valid = false;
      // }

      // Validate present address
      // if (!this.presentAddress.trim()) {
      //   this.errors.presentAddress.push("Present address is required.");
      //   valid = false;
      // }

      // Validate city
      // if (!this.presentAddressCity) {
      //   this.errors.presentAddressCity.push("City is required.");
      //   valid = false;
      // }

      // Validate length of service
      // if (
      //   this.lengthOfService !== null &&
      //   (this.lengthOfService < 0 || this.lengthOfService > 50)
      // ) {
      //   this.errors.lengthOfService.push(
      //     "Length of service must be between 0 and 50 years."
      //   );
      //   valid = false;
      // }

      // Validate permission
      if (!this.permission) {
        this.errors.permission.push("You must agree to the terms.");
        valid = false;
      }

      return valid;
    },
    // calculateAge(dateOfBirth) {
    //   const today = new Date();
    //   const dob = new Date(dateOfBirth);
    //   let age = today.getFullYear() - dob.getFullYear();
    //   const monthDiff = today.getMonth() - dob.getMonth();
    //   if (
    //     monthDiff < 0 ||
    //     (monthDiff === 0 && today.getDate() < dob.getDate())
    //   ) {
    //     age--;
    //   }
    //   return age;
    // },
    async submitHandler() {
      try {
        const token = await this.$recaptcha.getResponse();

        if (token && this.checkForm()) {
          const postData = {
            product: this.product,
            name: this.fullName,
            // amount: this.amount,
            // dob: this.dateOfBirth,
            // nid: this.nid,
            phone: this.phoneNumber,
            // email: this.email,
            // address: this.presentAddress,
            // city: this.presentAddressCity,
            // occupation: this.occupation,
            // designation: this.designation,
            // company_name: this.nameOfCompany,
            // length_of_service: this.lengthOfService,
            // company_address: this.companyAddress,
            // income_range: this.incomeRange,
            // preferred_time: this.preferredTime,
            message: this.message,
          };

          const response = await this.$axios.post(
            `/customer-signup-form`,
            postData
          );
          if (response.data.code == 200) {
            this.$bvModal.show("modal-3");
            this.resetForm();
          } else {
            this.$bvModal.show("modal-4");
          }
          await this.$recaptcha.reset();
        }
      } catch (error) {
        console.log("Axios error:", error);
        this.$bvModal.show("modal-4");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apply-form {
  width: 40vw;
  margin: 0 auto;
  padding: 40px 0 100px 0;
  &_details {
    h2 {
      font-weight: 400;
      font-size: 64px;
      text-align: center;
      color: #f846a4;
      padding-bottom: 70px;
      .font-bn & {
        font-size: 70px;
      }
    }
    form {
      .form-group {
        label {
          font-weight: 600;
          font-size: 18px;
          line-height: 100%;
          color: #666666;
          padding-top: 10px;
          .font-bn & {
            font-size: 23px;
          }
        }
        select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          text-overflow: "";
        }

        .form-control {
          background: #ffffff;
          border: 1px solid #cccccc;
          border-radius: 8px;
          height: 40px;
          &:focus {
            box-shadow: none;
            background: #f6f1f1;
          }
          &.error {
            border: 1px solid red;
          }
        }
        textarea.form-control {
          height: 150px;
        }
        #inputState {
          background: #ffffff url("~/assets/image/form-down-arrow.png") right
            16px center/8px 10px no-repeat;
          background-size: 12px 8px;
        }
        .form-check {
          padding-top: 20px;
          &-input {
            padding-top: 30px;
          }
          &-label {
            font-weight: 400;
            font-size: 20px;
            line-height: 120%;
            color: #666666;
            padding-top: 0;
            .font-bn & {
              font-size: 25px;
            }
          }
        }
      }
    }
    &_button {
      display: flex;
      gap: 30px;
      justify-content: center;
      padding: 30px 0 0 0;
      .btn {
        .apply-btn {
          background: #ffffff;
          border: 1px solid #a6a6a6;
          border-radius: 8px;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: #ababab;
          padding: 10px 45px;
          // width: 250px;
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
    width: 80vw;
    padding: 40px 0 100px 0;
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
            padding-top: 10px;
            .font-bn & {
              font-size: 21px;
            }
          }
          //.form-control {
          //}
          .form-check {
            padding-top: 30px;
            &-input {
              padding-top: 30px;
            }
            &-label {
              font-size: 15px;
              .font-bn & {
                font-size: 20px;
              }
            }
          }
        }
      }
      &_button {
        gap: 20px;
        padding: 30px 0 0 0;
        .btn {
          .apply-btn {
            width: unset;
            //&.submit,
            //&:hover {
            //}
          }
        }
      }
    }
  }
}
</style>
