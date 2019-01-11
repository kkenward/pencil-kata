context = require.context('./src/js', true, /\.spec.js$/);
context.keys().forEach(context);
module.exports = context;