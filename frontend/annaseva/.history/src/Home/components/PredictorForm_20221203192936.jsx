import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function PredictorForm() {

  const [predictState, setpredictState] = useState({
    centre_id: null,
    meal_id: null,
    checkout_price: null,
    base_price: null,
    email_for_promotion: "Yes",
    homepage_featured: "Yes",

  })

  const[meals , setMeals] = useState(0);

  const handleChange = (e) => {
    setpredictState({
      ...predictState,
      [e.target.name]: e.target.value,
    })
  }

  let meals__recommended;

  const handleapi = async (e) => {
    let data1 = 1;
    let data2 = 1;

    if (predictState.email_for_promotion == 'No') {
      data1 = 0;
    }

    if (predictState.homepage_featured == 'No') {
      data2 = 0;
    }

    let data = [predictState.centre_id, predictState.meal_id, predictState.checkout_price, predictState.base_price, data1, data2]



    let info = await axios.post(`https://predictor.devanshkapri2.repl.co/predict`, data).then((val) => {

      meals__recommended = Math.ceil(val.data)
       setMeals(meals__recommended)


    }).catch(function (error) {
      console.log(error)
    });
  }


  return (
    <div className='container my-3'>
      <h1 style={{ 'textAlign': 'center' }}>Predictor Form</h1>
      <form className="row g-3">
        <div className="col-12">
          <label for="centre_id" className="form-label">Outlet location</label>
          <input type="text" className="form-control" id="centre_id" name='centre_id' value={predictState.centre_id} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label for="meal_id" className="form-label">Meal Id</label>
          <input type="text" className="form-control" id="meal_id" name='meal_id' value={predictState.meal_id} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label for="checkout_price" className="form-label">Net price of the item</label>
          <input type="text" className="form-control" id="checkout_price" name='checkout_price' value={predictState.checkout_price} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label for="base_price" className="form-label">Original price of the item</label>
          <input type="text" className="form-control" id="base_price" name='base_price' value={predictState.base_price} onChange={handleChange} />
        </div>
        <label htmlFor="emailer_for_promotion">Did you send promotional emails for this item?</label>
        <select id="emailer_for_promotion" class="form-select" aria-label="Default select example" name='email_for_promotion' value={predictState.email_for_promotion} onChange={handleChange}>
          <option selected value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="homepage_featured">Is this item present on your website homepage?</label>
        <select id="homepage_featured" class="form-select" aria-label="Default select example" name='homepage_featured' value={predictState.homepage_featured} onChange={handleChange}>
          <option selected value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        
          <div className="meals">number of meals recommended:  </div>
        
        <div>
          <Button variant="contained" onClick={handleapi}>Submit</Button>
        </div>
      </form>
    </div>
  )
}
