/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    // text fonts
    'text-heading-l',
    'text-heading-m',
    'text-heading-s',
    'text-heading-s-variant',
    'text-body',
    'text-body-variant',

    // text colors
    'text-light-blue',
    'text-dark-blue',
    'text-blue',
    'text-dark-01',
    'text-dark-02',
    'text-dark-03',
    'text-light-grey',
    'text-dark-grey',
    'text-red',
    'text-light-red',
    'text-white',
    'text-dark',
    'text-orange',
    'text-green',

    'bg-orange',
    'bg-green',
  ],
  theme: {
    screens: {
      tablet: '758px',
      desktop: '1440px',
    },
    fontSize: {
      'heading-l': ['36px', { lineHeight: '33px', letterSpacing: '-1px', fontWeight: '700' }],
      'heading-m': ['24px', { lineHeight: '22px', letterSpacing: '-0.75px', fontWeight: '700' }],
      'heading-s': ['15px', { lineHeight: '24px', letterSpacing: '-0.25px', fontWeight: '700' }],
      'heading-s-variant': [
        '15px',
        { lineHeight: '15px', letterSpacing: '-0.25px', fontWeight: '700' },
      ],

      body: ['13px', { lineHeight: '18px', letterSpacing: '-0.1px', fontWeight: '500' }],
      'body-variant': ['13px', { lineHeight: '15px', letterSpacing: '-0.25px', fontWeight: '500' }],
    },
    colors: {
      'light-blue': 'var(--light-blue)',
      'dark-blue': 'var(--dark-blue)',
      blue: 'var(--blue)',
      'dark-01': 'var(--dark-01)',
      'dark-02': 'var(--dark-02)',
      'dark-03': 'var(--dark-03)',
      'light-grey': 'var(--light-grey)',
      'dark-grey': 'var(--dark-grey)',
      red: 'var(--red)',
      'light-red': 'var(--light-red)',
      white: 'var(--white)',
      'pure-white': '#FFFFFF',
      dark: 'var(--dark)',
      green: 'rgb(var(--green))',
      orange: 'rgb(var(--orange))',
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
