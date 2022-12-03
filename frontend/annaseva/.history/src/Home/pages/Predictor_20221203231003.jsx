import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
export default function Predictor() {
  return (
    <div style={{ 'backgroundColor': '#fff' }}>
      <div className="container" style={{ 'paddingBottom': '60px', 'paddingTop': '40px' }}>
        <h1 style={{ 'textAlign': 'Center' }}>
          Predict your requirement !
        </h1>
        <div>
          <p className="pre-desc" style={{fontSize: "1rem" , marginTop: "2rem" , width: "70%" , textAlign: "center" , margin: "auto"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti iure, ratione et odio dicta necessitatibus voluptate rerum quibusdam fugiat eveniet consequatur? Sed at minus facilis eveniet eum accusantium asperiores.
          </p>
        </div>
        <div style={{ 'left': '45%', 'position': 'relative', 'top': '15px' }}>
          <ThemeProvider theme={theme}>
            <Button component={Link} variant="contained" color='neutral' to="/predictor_form">Predict</Button>
          </ThemeProvider>
        </div>
      </div>
    </div>

  )
}
