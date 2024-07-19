// eleventy.config.js

module.exports = function (eleventyConfig) {
 eleventyConfig.addPassthroughCopy("./src/styles/");
 eleventyConfig.addWatchTarget("./src/styles/");
 eleventyConfig.addPassthroughCopy("./src/img/");
 eleventyConfig.addWatchTarget("./src/img/");

 return {
   dir: {
	 input: 'src',
	 output: 'dist',
	 includes: '_includes',
	 layouts: '_layouts'
   },
 };
};