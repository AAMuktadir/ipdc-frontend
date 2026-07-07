import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
}

Vue.prototype.$gsap = gsap;
Vue.prototype.$ScrollTrigger = ScrollTrigger;
Vue.prototype.$ScrollSmoother = ScrollSmoother;
Vue.prototype.$ScrollToPlugin = ScrollToPlugin;
