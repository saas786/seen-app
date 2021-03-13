module.exports = {
    purge: {
        content: [
            './public/**/*.html',
            './src/**/*.vue',
        ],
        whitelistPatterns: [
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^router-link(|-exact)-active$/
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            height: {
                '0.5': '1px',
            },
            colors: {
                primary: "#34CA98",
                accent: "#FCD34D",
                star: "#FFDD36",
                'background-gray': '#F5F4F3',
                'tag-nft': '#665BE8',
                'tag-tangible': '#3391E8',
                'hero-gray': '#262626',
                'fence-dark': '#262626',
                'fence-gray': '#E6E5E4',
                'fence-light': '#EEEEEE',
                'place-gold': '#FFAE00',
                'place-silver': '#BCBABA',
                'place-bronze': '#DA805C',
                'newsletter': '#333333',
                'footer-grey': '#999999',
                'topbar': '#DDDDDD',
            },
            fontFamily: {
                body: ['Inter', "sans-serif"],
                title: ['Playfair Display', "serif"],
            },
            fontSize: {
                '2xs': '0.8125rem', // 13px
                '2.5xl': '1.6875rem', // 27px
                '4xl': '2.25rem', // 36px
                'md': '0.9375rem',
            },
            borderRadius: {
                '2sm': '0.25rem', // 4px
            },
            spacing: {
                '1.5': '0.375rem', // 6px
                '2.5': '0.625rem', // 10px
                '13': '3.25rem',
                '15': '3.75rem',
                '17': '4.25rem',
                '18': '4.5rem',
                '22': '5.5rem',
                '88': '22rem',
            },
            borderWidth: {
                '3': '3px',
            },
            boxShadow: {
                'lifted-sm': '0 1px 15px 0 #00000026',
                'lifted': '0 2px 36px 0 #0000003d',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
