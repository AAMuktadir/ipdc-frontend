export async function getSeoData($axios, slug) {
  try {
    const response = await $axios.get(`/get-seo-contents?slug=${slug}`);

    return response.data.data || {};
  } catch (error) {
    console.error(`SEO fetch failed for ${slug}`, error);

    return {};
  }
}

export function generateSeoHead(seo = {}) {
  return {
    title: seo.meta_title || "IPDC Finance PLC.",

    meta: [
      {
        hid: "description",
        name: "description",
        content: seo.meta_description || "",
      },

      {
        hid: "og:title",
        property: "og:title",
        content: seo.meta_title || "IPDC Finance PLC.",
      },

      {
        hid: "og:description",
        property: "og:description",
        content: seo.meta_description || "",
      },

      {
        hid: "twitter:title",
        name: "twitter:title",
        content: seo.meta_title || "IPDC Finance PLC.",
      },

      {
        hid: "twitter:description",
        name: "twitter:description",
        content: seo.meta_description || "",
      },
    ],

    script: seo.schema_markup
      ? [
          {
            hid: "schema-jsonld",
            type: "application/ld+json",
            json: JSON.parse(seo.schema_markup),
          },
        ]
      : [],
  };
}
