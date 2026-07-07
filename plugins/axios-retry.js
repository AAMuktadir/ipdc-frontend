export default function ({ $axios }) {
  // Custom retry logic
  $axios.onError(async (error) => {
    const statusCode = error.response ? error.response.status : null;
    if (statusCode === 429) {
      // Implement retry logic here
      // For example, you could use a simple retry mechanism
      let retryCount = 0;
      const maxRetries = 3;
      const retryDelay = 1000; // 1 second

      while (retryCount < maxRetries) {
        retryCount++;
        try {
          // Wait before retrying
          await new Promise((resolve) =>
            setTimeout(resolve, retryDelay * retryCount)
          );
          // Retry the request
          return $axios.request(error.config);
        } catch (retryError) {
          if (retryCount === maxRetries) {
            // If it's the last retry, rethrow the error
            return Promise.reject(retryError);
          }
        }
      }
    } else {
      return Promise.reject(error);
    }
  });
}
