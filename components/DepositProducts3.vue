<template>
  <section class="grid-section">
    <!-- HEADER -->
    <div class="section-header">
      <h2>Deposit Products</h2>
      <p>Choose the best scheme that fits your financial goals</p>
    </div>

    <!-- GRID -->
    <div class="container">
      <div class="grid-content">
        <!-- Render three rows for the 3x3 grid -->
        <div class="row">
          <div
            class="card-item"
            v-for="(item, itemIndex) in depositSchemePackage"
            :key="itemIndex"
          >
            <div class="face face1">
              <div class="content">
                <p class="name">
                  {{
                    $i18n.locale == "en"
                      ? item.short_name
                      : item.short_name_bangla
                  }}
                </p>

                <h3 class="amount">
                  ৳
                  {{
                    $i18n.locale == "en"
                      ? item.minimum_deposit_amount
                      : item.minimum_deposit_amount_bangla
                  }}
                </h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h4>
                  {{ $i18n.locale == "en" ? item.name : item.name_bangla }}
                </h4>

                <div class="details-grid">
                  <div>
                    <p>
                      {{
                        $i18n.locale == "en"
                          ? "Minimum Tenure"
                          : "ন্যূনতম মেয়াদ"
                      }}
                    </p>
                    <h5>
                      {{
                        $i18n.locale == "en"
                          ? item.minimum_tenure
                          : item.minimum_tenure_bangla
                      }}
                    </h5>
                  </div>

                  <div>
                    <p>
                      {{
                        $i18n.locale == "en"
                          ? "Mode of Interest"
                          : "আগ্রহের প্রকার"
                      }}
                    </p>
                    <h5>
                      {{
                        $i18n.locale == "en"
                          ? item.mode_of_interest
                          : item.mode_of_interest_bangla
                      }}
                    </h5>
                  </div>

                  <div>
                    <p>{{ $i18n.locale == "en" ? "Renewal" : "নবায়ন" }}</p>
                    <h5>
                      {{
                        $i18n.locale == "en"
                          ? item.renewal
                          : item.renewal_bangla
                      }}
                    </h5>
                  </div>
                </div>

                <a href="/customer-signup" target="_blank" class="apply-btn">
                  {{ $i18n.locale == "en" ? "Apply Now" : "আবেদন করুন" }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DepositProducts",
  props: {
    depositSchemePackage: Array,
  },
};
</script>

<style lang="scss" scoped>
/*
  The following CSS is adapted from your provided CSS,
  modified to fit within a Vue component's scoped styles
  and ensure responsiveness.
*/

.grid-section {
  // scale: 80%;
  min-height: 100vh;
  /* background: #333; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Increased container max-width to accommodate larger cards */
}

/* HEADER */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.section-header p {
  color: #666;
  font-size: 15px;
}

.container .row {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px; /* Adjusted gap between cards for better spacing with increased size */
  margin-bottom: -200px; /* Adjusted margin-bottom for spacing between rows with larger cards */
}

@media (min-width: 769px) {
  .grid-section {
    margin-bottom: 200px;
  }
  .container .row {
    justify-content: space-around; /* Use space-around for slightly more even distribution if total width isn't exact */
    margin-bottom: -180px;
  }
}

.container .card-item {
  position: relative;
  cursor: pointer;
  flex: 1 1 calc(33.333% - 30px); /* Adjusted flex-basis for new gap */
  max-width: 380px; /* Increased max-width */
  box-sizing: border-box;
  margin: 0 auto;
  background: none;
  border: unset;
  max-height: 570px;
}

@media (max-width: 768px) {
  .container .card-item {
    flex: 1 1 100%; /* 1 cards per row on tablet, adjusted for new gap */
    margin-bottom: -250px;
  }
  .grid-section {
    padding-bottom: 450px; /* Ensure there's enough space at the bottom on smaller screens */
  }
  .container .row {
    margin-bottom: 40px;
  }
}

@media (max-width: 480px) {
  .container .card-item {
    flex: 1 1 100%; /* 1 card per row on mobile */
    margin-bottom: -250px;
  }
  .grid-section {
    padding-bottom: 450px;
  }
}

.container .card-item .face {
  width: 100%;
  height: 380px; /* Increased height */
  transition: 0.5s;
  border-radius: 20px;
}

.container .card-item .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(190px); /* Adjusted to new height (half of 280px) */
  overflow: hidden;
}

.container .card-item:hover .face.face1 {
  background: #ed017f;
  transform: translateY(0);
  border-radius: 20px 20px 0 0;
}

.container .card-item .face.face1 .content {
  opacity: 0.2;
  transition: 0.5s;
  text-align: center;
}

.container .card-item:hover .face.face1 .content {
  opacity: 1;
}

.container .card-item .face.face1 .content p {
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 2em; /* Slightly increased font size */
}

.container .card-item .face.face1 .content h3 {
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.8em; /* Slightly increased font size */
}

.container .card-item .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px; /* Slightly increased padding */
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-190px); /* Adjusted to new height (half of 280px) */
}

.container .card-item:hover .face.face2 {
  transform: translateY(0);
  z-index: 10;
  border-radius: 0 0 20px 20px;
}

.container .card-item .face.face2 .content {
  text-align: center;
}

.container .card-item .face.face2 .content p {
  margin: 0;
  padding: 0;
  color: #333;
  line-height: 1.6; /* Improved line height for readability */
  font-size: 0.95em; /* Slightly adjusted font size */
}

.container .card-item .face.face2 .content a {
  margin-top: 20px; /* Adjusted margin */
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 10px 20px; /* Increased padding */
  border: 1px solid #333;
  border-radius: 5px;
  transition: 0.3s ease;
}

.container .card-item .face.face2 .content a:hover {
  background: #333;
  color: #fff;
}
</style>
