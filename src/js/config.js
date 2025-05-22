tailwind.config = {
    theme: {
    extend: {
        colors: {
        primary: '#6e3ebc',
        secondary: '#f9a826',
        dark: '#252422',
        light: '#FFFCF9',
        accent: '#9ce500',
        },
        fontFamily: {
        sans: ['Poppins'],
        },
        animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.7s ease-in forwards',
        'slide-up': 'slideUp 0.9s ease-in-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        },
        keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
        },
        slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
        }
        },
        backdropBlur: {
        'xs': '80px',
        }
    }
    }
}