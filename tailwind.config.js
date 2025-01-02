import defaultTheme from 'tailwindcss/defaultTheme';
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                'Inter': ['"Inter"', 'sans-serif'],
                'InterSemiBold': ['"Inter SemiBold"', 'sans-serif'],
                'InterBold': ['"Inter Bold"', 'sans-serif'],
            },
            colors: {
                grey: {
                    900: '#141414',
                    800: '#1F1F1F',
                    700: '#333333',
                },
                green: '#C4F82A',
                white: '#ffffff',
            },
            spacing: {
                50: '4px',
                100: '8px',
                150: '12px',
                200: '16px',
                300: '24px',
                500: '40px',
            }
        },
    },
    plugins: [
        plugin(function({ addUtilities, theme })
        {
            const newUtilities = {
                '.text-preset-1': {
                    fontFamily: theme('fontFamily.InterSemiBold'),
                    fontSize: '24px',
                    lineHeight: '150%',
                    letterSpace: '0px',
                },
                '.text-preset-2': {
                    fontFamily: theme('fontFamily.Inter'),
                    fontSize: '14px',
                    lineHeight: '150%',
                    letterSpace: '0px',
                },
                '.text-preset-2-bold': {
                    fontFamily: theme('fontFamily.InterBold'),
                    fontSize: '14px',
                    lineHeight: '150%',
                    letterSpace: '0px',
                }

            }
            addUtilities(newUtilities, ['responsive', 'hover', 'dark']);
        })

    ],
};
