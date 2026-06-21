<template>
  <section class="corporate-financial-documents">
    <div class="container">
      <div class="corporate-list-heading" v-if="documentRequiredHeading">
        <h1 class="corporate-list-heading-title">
          {{
            $i18n.locale == "en"
              ? documentRequiredHeading.title
              : documentRequiredHeading.title_bangla
          }}
        </h1>
        <!-- <p class="corporate-list-heading-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum augue arcu, porttitor id sollicitudin suscipit.
        </p> -->
      </div>
      <div style="overflow: auto">
        <table class="table required-documents-table">
          <thead>
            <tr v-if="$i18n.locale == 'en'">
              <th>SL No.</th>
              <th>Documents</th>
              <th>
                Proprietorship<br />
                Concern
              </th>
              <th>
                Partnership<br />
                Firm
              </th>
              <th>Private Limited <br />Company</th>
              <th>
                Public Limited<br />
                Company
              </th>
            </tr>
            <tr v-if="$i18n.locale == 'bn'">
              <th>নং</th>
              <th>ডকুমেন্টস</th>
              <th>
                মালিকানা<br />

                চিন্তা
              </th>
              <th>
                অংশীদারিত্ব<br />
                ব্যবসা
              </th>
              <th>ব্যক্তিগত <br />প্রতিষ্ঠান</th>
              <th>
                পাবলিক<br />
                প্রতিষ্ঠান
              </th>
            </tr>
          </thead>
          <tbody v-if="requiredDocuments.length > 0">
            <tr v-for="(item, index) in requiredDocuments" :key="item.id">
              <td class="text">
                {{ $i18n.locale == "en" ? index + 1 : serial_bangla[index] }}
              </td>
              <td class="text">
                {{ $i18n.locale == "en" ? item.title : item.title_bangla }}
              </td>
              <td :class="item.proprietorship_concern ? 'tick' : 'cross'" />
              <td :class="item.partnership_firm ? 'tick' : 'cross'" />
              <td :class="item.private_limited_company ? 'tick' : 'cross'" />
              <td :class="item.public_limited_company ? 'tick' : 'cross'" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types
    requiredDocuments: {
      required: true,
    },

    documentRequiredHeading: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      serial_bangla: [
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯",
        "১০",
        "১১",
        "১২",
        "১৩",
        "১৪",
        "১৫",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.corporate-financial-documents {
  padding: 84px 0 130px 0;
  text-align: center;
  .corporate-list-heading {
    padding-bottom: 80px;

    &-title {
      font-weight: bold;
      font-weight: 36px;
      line-height: 133%;
      color: #343434;
    }
    &-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .required-documents-table {
    thead {
      tr {
        text-align: center !important;
        padding: 24px 0 24px 20px;

        th {
          font-weight: 600;
          font-size: 16px;
          line-height: 100%;
          color: #ffffff;
          padding: 24px 12px 24px 12px;
          background: #f13499;
          .font-bn & {
            font-size: 21px;
          }

          &:first-child {
            border-radius: 8px 0 0 0;
          }
          &:last-child {
            border-radius: 0 8px 0 0;
          }
        }
      }
    }

    tbody {
      tr {
        // border: 1px solid #dddddd;
        text-align: center !important;
        background: #ffffff;
        &:nth-child(even) {
          background-color: #f3f3f3;
        }

        .text {
          font-size: 15px;
          line-height: 149.3%;
          color: #343434;
          padding: 18px;
          .font-bn & {
            font-size: 20px;
          }
        }
        .tick {
          &::before {
            content: "\2713";
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            background: #f13499 !important;
            color: #ffffff;
            border-radius: 100px;
            margin-right: 0 !important;
          }
        }

        .cross {
          &::before {
            content: "\2716";
            color: #2887f5 !important;
            width: 12px;
            height: 12px;
            // margin-left: 30px;
          }
        }
      }
      tr:last-child {
        td:first-child {
          border-radius: 0 0 0 8px;
        }
        td:last-child {
          border-radius: 0 0 8px 0;
        }
      }
    }
  }
}

@media screen {
  .corporate-financial-documents {
    width: 100%;
    padding: 50px 0;
    text-align: center;
    .corporate-list-heading {
      padding-bottom: 40px;

      &-title {
        font-weight: 25px;
      }
      &-description {
        padding: 15px 0;
      }
    }
    .required-documents-table {
      // display: none;
      thead {
        tr {
          text-align: left;
          padding: 24px 0 24px 20px;

          th {
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            color: #ffffff;
            padding: 24px 12px 24px 12px;
            background: #f13499;
            .font-bn & {
              font-size: 21px;
            }

            &:first-child {
              border-radius: 8px 0 0 0;
            }
            &:last-child {
              border-radius: 0 8px 0 0;
            }
          }
        }
      }

      tbody {
        tr {
          // border: 1px solid #dddddd;
          text-align: left;
          background: #ffffff;
          &:nth-child(even) {
            background-color: #f3f3f3;
          }

          .text {
            font-size: 15px;
            line-height: 149.3%;
            color: #343434;
            padding: 18px;
            .font-bn & {
              font-size: 20px;
            }
          }
          .tick {
            &::before {
              content: "\2713";
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 18px;
              height: 18px;
              background: #2887f5;
              color: #ffffff;
              border-radius: 100px;
              margin-right: 20px;
            }
          }

          .cross {
            &::before {
              content: "\2716";
              color: #f13499;
              width: 12px;
              height: 12px;
            }
          }
        }
        tr:last-child {
          td:first-child {
            border-radius: 0 0 0 8px;
          }
          td:last-child {
            border-radius: 0 0 8px 0;
          }
        }
      }
    }
  }
}
</style>
