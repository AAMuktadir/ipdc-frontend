import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    // disable: true,
    // offset: 200,
    duration: 600,
    easing: "ease-in-out-cubic",
    once: true,
  });
};
