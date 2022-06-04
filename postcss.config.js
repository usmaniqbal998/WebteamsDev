module.exports = () => ({
  plugins: [require('tailwindcss')],
  ...(process.env.NODE_ENV === 'production'
    ? { cssnano: { preset: require('cssnano-preset-default') } }
    : {}),
});
