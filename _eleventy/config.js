const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {

  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));
  
  eleventyConfig.addPassthroughCopy('src/assets/styles/*.css');
  eleventyConfig.addPassthroughCopy('src/CNAME');

  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  }
}