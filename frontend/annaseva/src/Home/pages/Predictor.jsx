import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Predictor.css";
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
export default function Predictor() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div
        className="container"
        style={{ paddingBottom: "60px", paddingTop: "40px" }}
      >
        <h1 style={{ textAlign: "Center" }}>Predict your requirement</h1>
        <div>
          <p
            className="pre-desc"
            style={{
              fontSize: "1rem",
              marginTop: "2.5rem",
              width: "70%",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Food, Water, Shelter and Air. The irony here is that food is one of
            the basic human needs and yet, an unimaginable amount of it goes to
            waste everyday. It has detrimental effects on the economy and
            agricultural industry. Sustainability of food supply is really at
            risk. Thus, we've designed this tool to predict your food
            requirements so you only prepare what you need.
          </p>
        </div>
        <div>
          {/* <ThemeProvider theme={theme}>
            <Button component={Link} variant="contained" color='neutral' to="/predictor_form">Predict</Button>
          </ThemeProvider> */}

          <button className="btn__pre">
            <Link to="/predictor_form">PREDICT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
