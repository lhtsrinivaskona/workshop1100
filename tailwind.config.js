/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      // specifying screens is mandatory in every tailwind.config file
      xs: { min: "320px", max: "480px" },
      sm: { min: "481px", max: "640px" },
      md: { min: "641px", max: "768px" },
      lg: { min: "769px", max: "900px" },
      xl: { min: "900px", max: "1024px" },
      "2xl": { min: "1025px", max: "1290px" },
      "3xl": { min: "1291px", max: "1440px" },
      "4xl": "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: {
        50: "#0D0F37",
        100: "#525272",
      },
      primary: {
        50: "#FFDB0A",
      },
      blue: {
        50: "#3D61B0",
        100: "#395FF1",
      },
      grey: {
        50: "#EBECEF",
        100: "#F3F3F6",
        150: "#949CAE",
        200: "#949CAE2E",
        250: "#F7F7F9",
        300: "#949CAE33",
      },
      red: {
        50: "#FF6142",
      },
      navyBlue: {
        50: "#26458C",
      },
      darkGrey: {
        50: "#333333",
      },
      brown: {
        50: "#FAD59A",
      },
      green: {
        50: "#ABD559",
      },
      orange: {
        50: "#FAD59A",
      },
    },

    fontSize: {
      ft10: [
        "10px",
        {
          letterSpacing: "0em",
          lineHeight: "14px",
        },
      ],
      ft14: [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "19px",
        },
      ],
      ft16: [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "22px",
        },
      ],
      ft18: [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      ft20: [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "27px",
        },
      ],
      ft22: [
        "22px",
        {
          letterSpacing: "0em",
          lineHeight: "30px",
        },
      ],
      ft24: [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "33px",
        },
      ],
    },

    fontFamily: {
      OpenSansSemiBold: ["OpenSans-SemiBold", "sans-serif"],
      OpenSansRegular: ["OpenSans-Regular", "sans-serif"],
    },

    borderRadius: {
      xsm: "5px",
      sm: "10px",
      lsm: "25px",
      md: "35px",
    },

    dropShadow: {
      loginform: "0 3px 6px #949CAE2E",
    },

    extend: {
      spacing: {
        "9px": "9px",
        "11px": "11px",
        "13px": "13px",
        3.5: "14px",
        "15px": "15px",
        "17px": "17px",
        4.5: "18px",
        "19px": "19px",
        "21px": "21px",
        "23px": "23px",
        "25px": "25px",
        7.5: "30px",
        "31px": "31px",
        "35px": "35px",
        9.5: "38px",
        "45px": "45px",
        12.5: "50px",
        13: "52px",
        13.5: "54px",
        14.5: "58px",
        15: "60px",
        "65px": "65px",
        17.5: "70px",
        25: "100px",
        "115px": "115px",
        30: "120px",
        "125px": "125px",
        37.5: "150px",
        38: "152px",
        42: "168px",
        "171px": "171px",
        62.5: "250px",
        75: "300px",
        76: "304px",
        79: "316px",
        100: "400px",
        115: "460px",
        125: "500px",
        133.5: "534px",
        279: "1116px",
        "7.5per": "7.5%",
        "17per": "17%",
        "40per": "40%",
        "48per": "45%",
        "60per": "60%",
        "80per": "80%",
      },
      maxWidth: {
        115: "460px",
        1600: "1600px",
      },
      minWidth: {
        60: "240px",
        300: "300px",
      },
    },
  },
  plugins: [],
};
