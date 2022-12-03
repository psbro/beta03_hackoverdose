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
      main: '#fff',
      contrastText: '#fff',
    },
  },
});
export default function Predictor() {
    return (
      <div style={{'backgroundColor':'#DCE1E3'}}>
        <div className="container" style={{'paddingBottom': '60px','paddingTop': '40px'}}>
                <h1 style={{ 'textAlign': 'Center' }}>
            Predict the number of orders for this week
                </h1> 
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur saepe, laboriosam labore ex totam neque! Recusandae velit optio quaerat nostrum nihil numquam ducimus voluptate expedita, perferendis, ab illum corporis perspiciatis animi quam accusantium quod.
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
