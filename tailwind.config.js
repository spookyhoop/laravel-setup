const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './resources/**/*.{js,vue,blade.php}',
        './storage/framework/views/*.php',
    ],
    safelist: [],
    mode: false,
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: colors.zinc,
                primary: colors.purple,
                secondary: colors.amber,
            },
            fontSize: {
                '2xs': ['.65rem', '0.75rem'],
            },
            boxShadow: {
                'xs': '0 6px 12px rgba(0,0,0,.030);',
                '2xs': '0 6px 12px rgba(0,0,0,.055);',
                'full': '0px 7px 35px -14px rgba(0, 0, 0, 0.1);',
                '2full': '0px 3px 24px -5px rgba(0, 0, 0, 0.18);',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
