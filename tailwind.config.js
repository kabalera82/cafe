/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Semántica: Definimos colores por su función y emoción
        coffee: {
          50: '#f9f5f3',  // Fondo de tarjetas sutil
          100: '#f3eae6', // Hover en botones claros
          200: '#e6d0c6', // Bordes decorativos
          300: '#d2af9e', // Texto secundario suave
          400: '#b88569', // Elementos de UI inactivos
          500: '#9e6144', // Marca primaria, botones de acción secundaria
          600: '#7f4834', // Color principal de marca
          700: '#67382a', // Textos de párrafo
          800: '#552f26', // Títulos secundarios
          900: '#3c241e', // Títulos principales (reemplaza al negro)
          950: '#261410', // Fondos oscuros (footer)
        },
        cream: {
          DEFAULT: '#FDFBF7', // Fondo principal de la aplicación (Papel)
          alt: '#F5F5F0',     // Fondo alternativo para secciones
        },
        accent: {
          green: '#4A7832', // Éxito, productos veganos/matcha [6]
          gold: '#D4B190',  // Premium, destaques, ofertas
          error: '#B91C1C', // Errores en formularios
        }
      },
      fontFamily: {
        // Inter para legibilidad en UI (Botones, precios)
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        // Playfair Display para evocar elegancia en títulos
        display: ['"Playfair Display"', 'serif'], 
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/texture-paper.png')", // Textura sutil
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(60, 36, 30, 0.1)', // Sombra cálida
      }
    },
  },
  plugins: [],
}