const { DateTime } = require("luxon");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ "src/static": "static" });
  eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "admin/config.yml" });
  eleventyConfig.addPassthroughCopy("static/favicon.ico");

  //aktuality -> raw
  eleventyConfig.addFilter("raw", function(value) {
    return value;
  });


  // Kolekce "news"
  eleventyConfig.addCollection("news", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/news/*.md").reverse();
  });

  // Formátování data
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd. MMMM yyyy");
  });

  // Sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://www.savasana.cz",
    },
  });

  // Výstupní složky
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};


