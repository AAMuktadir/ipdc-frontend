import Vue from "vue";
import {
  Map,
  Marker,
  Popup,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "bkoi-gl";
import "bkoi-gl/dist/style/bkoi-gl.css";

const Barikoi_API_key =
  "bkoi_5176abc61fb836805c1b255dfd8e68cfda2045d7734b1856eea1da2cce6d2f78";

const styles = [
  {
    style: `https://map.barikoi.com/styles/barikoi-light/style.json`,
    image: "https://docs.barikoi.com/img/barikoi-light.svg",
    name: "Light Style",
  },
  {
    style: `https://map.barikoi.com/styles/barikoi-green/style.json?key=${Barikoi_API_key}`,
    image: "https://docs.barikoi.com/img/barikoi-green.png",
    name: "Green Style",
  },
  {
    style: `https://map.barikoi.com/styles/barikoi-dark-mode/style.json?key=${Barikoi_API_key}`,
    image: "https://docs.barikoi.com/img/barikoi-dark.png",
    name: "Dark Style",
  },
];

const BarikoiGL = {
  install(Vue) {
    Vue.prototype.$bkoi = {
      Map,
      Marker,
      Popup,
      FullscreenControl,
      GeolocateControl,
      NavigationControl,

      // 👇 ADD THIS
      styles,
      apiKey: Barikoi_API_key,
    };
  },
};

Vue.use(BarikoiGL);
