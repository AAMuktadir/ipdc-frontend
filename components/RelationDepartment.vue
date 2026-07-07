<template>
  <section class="relation-department">
    <div class="container">
      <div v-if="$i18n.locale == 'en'" class="relation-department-title">
        <h1 class="department-heading">Investors Relation Department</h1>
        <p class="department-description"></p>
      </div>
      <div v-if="$i18n.locale == 'bn'" class="relation-department-title">
        <h1 class="department-heading">ইনভেস্টরস রিলেশন ডিপার্টমেন্ট</h1>
        <p class="department-description"></p>
      </div>
      <div class="department-contact">
        <b-row>
          <b-col md="7">
            <div v-if="$i18n.locale == 'en'" class="key-contact">
              <div class="key-contact-title">
                <h1 class="contact-heading">Key Contact</h1>
                <p class="contact-description">
                  {{ investorRelationDepartment.key_contact }}
                </p>
              </div>
              <div class="contact-info">
                <h3 class="name">
                  {{ investorRelationDepartment.contact_name }}
                </h3>
                <h4 class="designation">
                  {{ investorRelationDepartment.contact_designation }}
                </h4>
                <p>Phone: {{ investorRelationDepartment.contact_phone }}</p>
                <p>Fax: {{ investorRelationDepartment.contact_fax }}</p>
                <p>E-mail: {{ investorRelationDepartment.contact_email }}</p>
              </div>
            </div>
            <div v-if="$i18n.locale == 'bn'" class="key-contact">
              <div class="key-contact-title">
                <h1 class="contact-heading">মূল যোগাযোগ</h1>
                <p class="contact-description">
                  {{ investorRelationDepartment.key_contact_bangla }}
                </p>
              </div>
              <div class="contact-info">
                <h3 class="name">
                  {{ investorRelationDepartment.contact_name_bangla }}
                </h3>
                <h4 class="designation">
                  {{ investorRelationDepartment.contact_designation_bangla }}
                </h4>
                <p>
                  ফোন: {{ investorRelationDepartment.contact_phone_bangla }}
                </p>
                <p>
                  ফ্যাক্স: {{ investorRelationDepartment.contact_fax_bangla }}
                </p>
                <p>ই-মেইল: {{ investorRelationDepartment.contact_email }}</p>
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="contact-details">
              <div class="contact">
                <div class="contact-image">
                  <img src="~/assets/image/icon/phone.svg" alt="phone" />
                </div>
                <div v-if="$i18n.locale == 'en'" class="contact-number">
                  <p class="phone">Phone</p>
                  <p class="number">
                    {{ investorRelationDepartment.phone }}
                  </p>
                </div>
                <div v-if="$i18n.locale == 'bn'" class="contact-number">
                  <p class="phone">ফোন</p>
                  <p class="number">
                    {{ investorRelationDepartment.phone_bangla }}
                  </p>
                </div>
              </div>
              <div class="contact">
                <div class="contact-image">
                  <img src="~/assets/image/icon/fax.svg" alt="phone" />
                </div>
                <div v-if="$i18n.locale == 'en'" class="contact-number">
                  <p class="phone">Fax</p>
                  <p class="number">
                    {{ investorRelationDepartment.fax }}
                  </p>
                </div>
                <div v-if="$i18n.locale == 'bn'" class="contact-number">
                  <p class="phone">ফ্যাক্স</p>
                  <p class="number">
                    {{ investorRelationDepartment.fax_bangla }}
                  </p>
                </div>
              </div>
              <div class="contact">
                <div class="contact-image">
                  <img src="~/assets/image/icon/mail.svg" alt="phone" />
                </div>
                <div v-if="$i18n.locale == 'en'" class="contact-number">
                  <p class="phone">E-mail</p>
                  <p class="number">
                    {{ investorRelationDepartment.email }}
                  </p>
                </div>
                <div v-if="$i18n.locale == 'bn'" class="contact-number">
                  <p class="phone">ই-মেইল</p>
                  <p class="number">
                    {{ investorRelationDepartment.email }}
                  </p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    investorRelationDepartment: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.relation-department {
  padding: 84px 0 0 0;
  &-title {
    text-align: center;
    .department-heading {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    .department-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 220px;
      display: none;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .department-contact {
    padding: 84px 0;
    .key-contact {
      background: #539ff7;
      border-radius: 10px;
      padding: 27px;
      color: #ffffff;
      &-title {
        .contact-heading {
          font-weight: bold;
          font-size: 25px;
          line-height: 133%;
          .font-bn & {
            font-size: 30px;
          }
        }
        .contact-description {
          font-size: 16px;
          line-height: 154.3%;
          padding: 12px 0 30px 0;
          .font-bn & {
            font-size: 21px;
          }
        }
      }

      .contact-info {
        .name {
          font-weight: bold;
          font-size: 20px;
          line-height: 100%;
          margin-bottom: 12px;
          .font-bn & {
            font-size: 25px;
          }
        }
        .designation {
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
          padding-bottom: 12px;
          .font-bn & {
            font-size: 19px;
          }

          &:last-child {
            padding-bottom: 0;
          }
        }
      }
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 30px;
      // padding: 18px 0 0 0;
      .contact {
        display: flex;
        align-items: center;
        gap: 20px;
        border: 1px solid #dfedfe;
        border-radius: 8px;
        padding: 17px;
        .contact-image {
          width: 48px;
          height: 48px;
          background: #e5f1fe;
          border-radius: 100px;
          position: relative;
          img {
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translateY(-50%);
            width: 16.61px;
            height: 16.56px;
          }
        }

        .contact-number {
          .phone {
            font-size: 14px;
            line-height: 137.1%;
            letter-spacing: 0.02em;
            color: #5d5d5d;
            margin-bottom: 8px;
            .font-bn & {
              font-size: 19px;
            }
          }
          .number {
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            color: #343434;
            .font-bn & {
              font-size: 21px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .relation-department {
    padding: 84px 0 0 0;
    &-title {
      // .department-heading {
      // }
      .department-description {
        padding: 15px 0;
      }
    }

    .department-contact {
      padding: 40px 0 70px 0;
      .key-contact {
        margin-bottom: 30px;
        // &-title {
        //   .contact-heading {
        //   }
        //   .contact-description {
        //   }
        // }

        // .contact-info {
        //   .name {
        //   }
        // }
      }
    }
  }
}
</style>
