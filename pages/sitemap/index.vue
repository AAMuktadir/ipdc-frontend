<template>
  <div>
    <CoverImageNew :page="page" :coverImage="cover" />

    <SiteMap />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
    };
  },
  data() {
    return {
      page: "sitemap",
      cover: {
        title: "Sitemap",
        title_bangla: "সাইট ম্যাপ",
        image_url: "/_nuxt/assets/image/cover/sitemap.jpg",
        description:
          "A site map (or sitemap) is a list of pages of a web site accessible to crawlers or users. It can be either a document in any form used as a planning tool for Web design, or a Web page that lists the pages on a Web site, typically organized in hierarchical fashion.",
        description_bangla:
          "সাইট ম্যাপ ব্যবহারকারীদের কাছে প্রবেশযোগ্য ওয়েবসাইটের একটি তালিকা। এটি ওয়েব ডিজাইনের জন্য একটি টুল হিসেবে ব্যবহৃত কোনো ডকুমেন্ট হতে পারে অথবা হতে পারে ওয়েব পেজ যা ওয়েবসাইটের পেজগুলোকে সুবিন্যস্ত পদ্ধতিতে তালিকাভুক্ত করে।",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
