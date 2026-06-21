<template>
  <div :class="['test-page', { 'bn-locale': isBn }]">
    <section class="hero-shell">
      <div class="hero-copy">
        <p class="eyebrow">{{ content.eyebrow }}</p>
        <h1>{{ content.heroTitle }}</h1>
        <p class="lead">
          {{ content.lead }}
        </p>

        <div class="hero-metrics">
          <div class="metric-card">
            <span>{{ content.metrics.layout.label }}</span>
            <strong>{{ content.metrics.layout.value }}</strong>
          </div>
          <div class="metric-card">
            <span>{{ content.metrics.palette.label }}</span>
            <strong>{{ content.metrics.palette.value }}</strong>
          </div>
          <div class="metric-card">
            <span>{{ content.metrics.useCase.label }}</span>
            <strong>{{ content.metrics.useCase.value }}</strong>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="image-frame image-primary">
          <img :src="heroImage" :alt="content.altHero" />
          <div class="image-badge">{{ content.heroBadge }}</div>
        </div>
        <div class="image-frame image-secondary">
          <img :src="accentImage" :alt="content.altAccent" />
          <div class="support-copy">
            <span>{{ content.support.label }}</span>
            <strong>{{ content.support.value }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-grid">
      <article class="feature-card feature-pink">
        <span class="feature-index">01</span>
        <h2>{{ content.features.first.title }}</h2>
        <p>
          {{ content.features.first.description }}
        </p>
      </article>

      <article class="feature-card feature-green">
        <span class="feature-index">02</span>
        <h2>{{ content.features.second.title }}</h2>
        <p>
          {{ content.features.second.description }}
        </p>
      </article>

      <article class="feature-card feature-neutral">
        <span class="feature-index">03</span>
        <h2>{{ content.features.third.title }}</h2>
        <p>
          {{ content.features.third.description }}
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  head() {
    return {
      title: this.content.metaTitle
    }
  },
  data() {
    return {
      heroImage: require('~/assets/image/31.jpg'),
      accentImage: require('~/assets/image/31.jpg')
    }
  },
  computed: {
    isBn() {
      return this.$i18n && this.$i18n.locale === 'bn'
    },
    content() {
      if (this.isBn) {
        return {
          metaTitle: 'টেস্ট পেজ',
          eyebrow: 'আইপিডিসি / টেস্ট পেজ',
          heroTitle: 'ভিজ্যুয়াল টেস্টিংয়ের জন্য আধুনিক, ব্র্যান্ড-সমন্বিত একটি স্পেস।',
          lead:
            'পরিমিত দৈর্ঘ্যের এই ডামি পেজে রয়েছে পরিপাটি হিরো সেকশন, আরামদায়ক হোয়াইটস্পেস, এবং আইপিডিসির গোলাপি-সবুজ প্যালেটের সাথে সামঞ্জস্যপূর্ণ একটি শান্ত লেআউট।',
          metrics: {
            layout: {
              label: 'লেআউট',
              value: 'পরিচ্ছন্ন ও ভারসাম্যপূর্ণ'
            },
            palette: {
              label: 'প্যালেট',
              value: 'আইপিডিসি পিংক + গ্রিন'
            },
            useCase: {
              label: 'ব্যবহার',
              value: 'হিরো ও সেকশন প্রিভিউ'
            }
          },
          altHero: 'সাজসজ্জার হিরো ভিজ্যুয়াল',
          heroBadge: 'হিরো ইমেজের জন্য স্পেস',
          altAccent: 'সহায়ক সাজসজ্জার ভিজ্যুয়াল',
          support: {
            label: 'ভিজ্যুয়াল রিদম',
            value: 'সফট শ্যাডো, রাউন্ডেড কর্নার এবং লেয়ার্ড কার্ডের সমন্বয়।'
          },
          features: {
            first: {
              title: 'পঠনযোগ্য হায়ারার্কি',
              description:
                'পরিষ্কার হেডলাইন স্পেসিং, সংক্ষিপ্ত ইন্ট্রো এবং কমপ্যাক্ট কার্ড পেজটিকে সহজে স্ক্যানযোগ্য রাখে।'
            },
            second: {
              title: 'ছবির জন্য পর্যাপ্ত জায়গা',
              description:
                'হিরো ইমেজ এলাকাটি ইচ্ছাকৃতভাবে এমন রাখা হয়েছে যাতে ভবিষ্যতের ব্যানার, মকআপ বা ক্যাম্পেইন প্রিভিউ সহজে বসানো যায়।'
            },
            third: {
              title: 'হেডার-ফ্রেন্ডলি স্পেসিং',
              description:
                'উপরের অতিরিক্ত প্যাডিং এবং সংযত উচ্চতা সাইট হেডারের সাথে স্বাচ্ছন্দ্যপূর্ণ ভিজ্যুয়াল রিদম তৈরি করে।'
            }
          }
        }
      }

      return {
        metaTitle: 'Test Page',
        eyebrow: 'IPDC / Test Page',
        heroTitle: 'Modern, brand-aligned space for visual testing.',
        lead:
          'A compact dummy page with a polished hero, generous whitespace, and a calm layout that reflects the IPDC pink and green palette.',
        metrics: {
          layout: {
            label: 'Layout',
            value: 'Clean & balanced'
          },
          palette: {
            label: 'Palette',
            value: 'IPDC pink + green'
          },
          useCase: {
            label: 'Use case',
            value: 'Hero and section preview'
          }
        },
        altHero: 'Decorative hero visual',
        heroBadge: 'Hero image space',
        altAccent: 'Supporting decorative visual',
        support: {
          label: 'Visual rhythm',
          value: 'Soft shadows, rounded corners, and layered cards.'
        },
        features: {
          first: {
            title: 'Readable hierarchy',
            description:
              'Strong headline spacing, a short intro, and compact cards keep the page easy to scan without feeling empty.'
          },
          second: {
            title: 'Room for imagery',
            description:
              'The hero image area is intentionally large enough to support future mockups, banners, or campaign previews.'
          },
          third: {
            title: 'Header-friendly spacing',
            description:
              'Extra top padding and a restrained page height leave comfortable space for the site header and overall page rhythm.'
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.test-page {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 6.5rem 1.5rem 4.5rem;
  background:
    radial-gradient(circle at top left, rgba(237, 1, 127, 0.12), transparent 28%),
    radial-gradient(circle at bottom right, rgba(43, 187, 127, 0.12), transparent 30%),
    linear-gradient(180deg, #fffdfd 0%, #fff7fb 56%, #ffffff 100%);
}

.test-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(237, 1, 127, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(237, 1, 127, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.35), transparent 88%);
  pointer-events: none;
}

.hero-shell,
.feature-grid {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 2rem;
  align-items: center;
}

.hero-copy {
  padding: 0.5rem 0;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(237, 1, 127, 0.09);
  color: #ed017f;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.bn-locale .eyebrow,
.bn-locale .metric-card span,
.bn-locale .feature-index,
.bn-locale .support-copy span {
  letter-spacing: 0;
  text-transform: none;
}

.hero-copy h1 {
  max-width: 12ch;
  margin: 0;
  color: #111111;
  font-size: clamp(2.4rem, 4vw, 4.5rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
}

.lead {
  max-width: 38rem;
  margin: 1.25rem 0 0;
  color: #5e5e5e;
  font-size: 1.05rem;
  line-height: 1.8;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.metric-card {
  padding: 1rem 1.05rem;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.06);
  backdrop-filter: blur(14px);
}

.metric-card span,
.feature-index {
  display: block;
  color: #8a8a8a;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.metric-card strong {
  display: block;
  margin-top: 0.5rem;
  color: #111111;
  font-size: 1rem;
  line-height: 1.35;
}

.hero-visual {
  display: grid;
  gap: 1rem;
}

.image-frame {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  border: 1px solid rgba(17, 17, 17, 0.08);
  box-shadow: 0 30px 70px rgba(17, 17, 17, 0.12);
}

.image-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-primary {
  min-height: 420px;
  background: linear-gradient(135deg, #ed017f 0%, #2bbb7f 100%);
}

.image-primary img {
  opacity: 0.9;
}

.image-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(237, 1, 127, 0.15), rgba(17, 17, 17, 0.12));
}

.image-badge {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 2;
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  color: #111111;
  font-size: 0.86rem;
  font-weight: 700;
}

.image-secondary {
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 0.85rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.86);
}

.image-secondary img {
  height: 100px;
  border-radius: 18px;
}

.support-copy span {
  display: block;
  margin-bottom: 0.35rem;
  color: #ed017f;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.support-copy strong {
  color: #111111;
  font-size: 0.98rem;
  line-height: 1.55;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.feature-card {
  min-height: 190px;
  padding: 1.45rem;
  border-radius: 24px;
  border: 1px solid rgba(17, 17, 17, 0.08);
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 20px 40px rgba(17, 17, 17, 0.05);
}

.feature-card h2 {
  margin: 0.9rem 0 0.65rem;
  color: #111111;
  font-size: 1.15rem;
}

.feature-card p {
  margin: 0;
  color: #5f5f5f;
  line-height: 1.75;
}

.feature-pink {
  background: linear-gradient(180deg, rgba(237, 1, 127, 0.07), rgba(255, 255, 255, 0.9));
}

.feature-green {
  background: linear-gradient(180deg, rgba(43, 187, 127, 0.08), rgba(255, 255, 255, 0.9));
}

.feature-neutral {
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.03), rgba(255, 255, 255, 0.9));
}

@media screen and (max-width: 991px) {
  .test-page {
    padding: 5.5rem 1.25rem 4rem;
  }

  .hero-shell,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    max-width: 14ch;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .image-primary {
    min-height: 340px;
  }

  .feature-grid {
    margin-top: 1.5rem;
  }
}

@media screen and (max-width: 576px) {
  .test-page {
    padding: 5rem 1rem 3.5rem;
  }

  .hero-copy h1 {
    font-size: 2.2rem;
  }

  .image-secondary {
    grid-template-columns: 1fr;
  }

  .image-secondary img {
    width: 100%;
    height: 160px;
  }
}
</style>