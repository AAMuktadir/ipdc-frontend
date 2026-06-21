<template>
  <div id="offer-map" class="offer-map">
    <div class="header-wrap" ref="header">
      <h2 class="title-gradient">Unlock Offers Around You</h2>
    </div>
    <div ref="mapContainer" class="map"></div>
  </div>
</template>

<script>
export default {
  name: "OfferMap",

  data() {
    return {
      map: null,
      markers: [],
      observer: null,
      isInitialLoad: true,

      currentLatitude: 23.811056,
      currentLongitude: 90.407608,

      moveTimeout: null,
    };
  },

  mounted() {
    this.initMap();
    this.initScrollAnimation();
  },

  methods: {
    initMap() {
      if (this.map) return;

      this.map = new this.$bkoi.Map({
        container: this.$refs.mapContainer,
        style: this.$bkoi.styles[0].style,
        accessToken: this.$bkoi.apiKey,

        center: [this.currentLongitude, this.currentLatitude],
        zoom: 15,

        antialias: true,
        preserveDrawingBuffer: true,

        failIfMajorPerformanceCaveat: false,
      });

      this.map.addControl(new this.$bkoi.NavigationControl(), "top-left");

      this.map.addControl(new this.$bkoi.FullscreenControl(), "bottom-left");

      const geolocate = new this.$bkoi.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },

        trackUserLocation: false,
        showUserHeading: true,
      });

      geolocate.on("geolocate", (e) => {
        this.currentLatitude = e.coords.latitude;
        this.currentLongitude = e.coords.longitude;

        this.fetchPlaces();
      });

      geolocate.on("error", () => {
        // fallback
        this.fetchPlaces();
      });

      this.map.addControl(geolocate, "top-left");

      this.map.on("load", () => {
        geolocate.trigger();
      });

      // when map movement ends
      this.map.on("moveend", () => {
        const center = this.map.getCenter();

        this.currentLatitude = center.lat;
        this.currentLongitude = center.lng;

        clearTimeout(this.moveTimeout);

        this.moveTimeout = setTimeout(() => {
          this.fetchPlaces();
        }, 500);
      });
    },

    async fetchPlaces() {
      try {
        const res = await this.$axios.get(
          "https://rental.barikoi.com/api/ipdc-offers",
          {
            params: {
              api_key: this.$bkoi.apiKey,

              latitude: this.currentLatitude,
              longitude: this.currentLongitude,

              radius: 3000,
            },
          }
        );

        const places = res.data?.data || [];

        this.setMarkers(places);
      } catch (err) {
        console.error("API error:", err);
      }
    },

    setMarkers(places) {
      if (!this.map) return;

      // clear old markers
      this.markers.forEach((m) => m.remove?.());
      this.markers = [];

      places.forEach((place) => {
        if (!place.latitude || !place.longitude) return;

        const popupHtml = `
          <div class="map-popup" style="color: black;">
            <h4>${place.offer_merchant_name || "Unknown Merchant"}</h4>

            <p>
              <strong>Address:</strong><br>
              ${place.offer_address || "N/A"}
            </p>

            <p>
              <strong>Offer Details:</strong><br>
              ${
                place.multi_offers?.[0]?.bank_names?.[0]
                  ?.offer_bank_description || "N/A"
              }
            </p>
          </div>
        `;

        const popup = new this.$bkoi.Popup({
          offset: 25,
        }).setHTML(popupHtml);

        const marker = new this.$bkoi.Marker()
          .setLngLat([place.longitude, place.latitude])
          .setPopup(popup)
          .addTo(this.map);

        this.markers.push(marker);
      });

      if (this.isInitialLoad && places.length) {
        this.isInitialLoad = false;
      }
    },
    initScrollAnimation() {
      const options = {
        root: null,
        threshold: 0.2,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateSection();
            this.observer.disconnect();
          }
        });
      }, options);

      const section = document.getElementById("offer-map");
      if (section) this.observer.observe(section);
    },

    animateSection() {
      this.$nextTick(() => {
        const tl = this.$gsap.timeline();

        // Header
        tl.fromTo(
          this.$refs.header,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
        this.isInitialLoad = false;
      });
    },
  },
};
</script>

<style scoped>
.offer-map {
  width: 80%;
  justify-self: center;
}
.header-wrap {
  text-align: center;
  margin-bottom: 60px;
}

.header-wrap {
  opacity: 0;
}
.title-gradient {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  background: linear-gradient(180deg, #ed017f 30%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.map {
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
}
</style>
