// postcss.config.js
module.exports = {
  plugins: {
    // 1. CORRECCIÓN: El nombre del plugin es 'tailwindcss', no '@tailwindcss/postcss'
    tailwindcss: {},
    // 2. Necesario para compatibilidad de CSS en navegadores
    autoprefixer: {}, 
  },
};