tailwind.config = {
  theme: {
    extend: {
      colors: {
        green: "#7AA65A",
        white: "#FFFFFF",
        black: "#000000",
        red: "red",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        lx: "1190px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".underline-hover-div::after": {
          content: '""',
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "5px",
          backgroundColor: "#7AA65A",
          transition: "transform 0.3s ease-in-out",
          transform: "scaleX(0)",
        },
        ".underline-hover-div:hover::after": {
          transform: "scaleX(1)",
        },
        ".w-550": {
          width: "550px",
        },
        ".w-101": {
          width: "101px",
        },
        ".w-227": {
          width: "227px",
        },
        // ".swiper-button-prev": {
        //   position: "absolute",
        //   top: "100%",
        //   left: "8%",
        //   width: "30px",
        //   height: "30px",
        //   background: "#7AA65A",
        //   borderRadius: "50%",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   zIndex: "10",
        // },
        // ".swiper-button-next": {
        //   position: "absolute",
        //   bottom: "50%",
        //   right: "80%",
        //   width: "30px",
        //   height: "30px",
        //   background: "#transparent",
        //   borderRadius: "50%",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   cursor: "pointer",
        //   zIndex: "10",
        // },
        "html, body": {
          position: "relative",
          height: "100%",
        },
        body: {
          background: "#ffff",
          color: "#000",
          margin: "0",
          padding: "0",
        },
        ".whb": {
          height: "630px",
        },
        ".whb-md": {
          height: "520px",
        },
        ".swiper-slide": {
          textAlign: "center",
          fontSize: "18px",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".swiper-slide img": {
          display: "block",
          objectFit: "contain",
        },
        ".w-img": {
          width: "486px",
        },
        ".w-img2": {
          width: "300px",
          margin: "auto",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
