// plugins/load-csrf-token.js
export default async function ({ $axios }) {
  try {
    await $axios.get("https://ipdc.com/api/sanctum/csrf-cookie");
  } catch (error) {
    // Handle error if the backend is unavailable
    console.error("Could not load CSRF token.");
  }
}
