/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,css}"],
  theme: {
    extend: {
      keyframes:{
        move:{
          '0%':{transform:'translateX(-100%)'},

        '100%':{transform:`translateX(100vw)`},
        }
      },
      animation:{
        move: 'move 60s linear infinite',
      },
      screens:{
        vsmobile:'320px',
        mediumphone:'375px',
        resize:'481px',
        custom:'480px',
        sm:'640px',
        md:'786px',
        lg:'1024px',
        xl:'1280px',
      },
      spacing:{
        '13': '3.25rem',
        '15': '3.75rem',
        '16': '10rem',
        '128':'32rem',
        '144':'36rem',
        '150':'42rem',
        '170':'50rem',
        '200':'60rem',
        '250':'70rem',
      },
      fontSize:{
        vs:'14px',
        sm: '16px',
        md:'18px',
        base: '20px',
        lg:'30px',
        xl: '40px',
        vlg:'100px',
      },
    },
  },
  plugins: [],
}

