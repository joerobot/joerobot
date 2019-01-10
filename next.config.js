const withSass = require('@zeit/next-sass');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.(md|mdx)$/
});
module.exports = withSass(withMDX());
