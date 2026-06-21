// plugins/scroll-directive.js
export default {
  inserted(el) {
    const handleClick = (e) => {
      const anchor = el.tagName === "A" ? el : el.querySelector("a"); // Handle cases where the element itself is an <a> or contains one

      if (anchor) {
        const href = anchor.getAttribute("href");

        // Proceed if href exists and starts with '#'
        if (href && href.startsWith("#")) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            e.preventDefault();

            const navbarHeight = 90; // Adjust this value to match the height of your navbar
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollBy({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    };

    el.__handleClick = handleClick;
    el.addEventListener("click", handleClick);
  },
  unbind(el) {
    el.removeEventListener("click", el.__handleClick);
    delete el.__handleClick;
  },
};
