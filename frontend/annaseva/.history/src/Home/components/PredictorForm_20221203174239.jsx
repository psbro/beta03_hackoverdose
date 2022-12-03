import React , {useState} from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function PredictorForm() {

  const [predictState, setpredictState] = useState({
    centre_id: 0,
    meal_id: 0,
    checkout_price

  })

const handleapi = async () => {
  
}
 
   
    return (
      <div className='container my-3'>
        <h1 style={{'textAlign':'center'}}>Predictor Form</h1>
    <form className="row g-3">
      <div className="col-12">
        <label for="centre_id" className="form-label">Outlet location</label>
        <input type="text" className="form-control" id="centre_id" name='centre_id'/>
          </div>
          <div className="col-12">
        <label for="meal_id" className="form-label">Meal Id</label>
        <input type="text" className="form-control" id="meal_id" name='meal_id'/>
          </div>
          <div className="col-12">
        <label for="checkout_price" className="form-label">Net price of the item</label>
        <input type="text" className="form-control" id="checkout_price" name='checkout_price'/>
          </div>
          <div className="col-12">
        <label for="base_price" className="form-label">Original price of the item</label>
        <input type="text" className="form-control" id="base_price" name='base_price'/>
          </div>
        <label htmlFor="emailer_for_promotion">Did you send promotional emails for this item?</label>
          <select id="emailer_for_promotion" class="form-select" aria-label="Default select example" name='email_for_promotion'>
            <option selected>Yes</option>
            <option value="No">No</option>
          </select>
          <label htmlFor="homepage_featured">Is this item present on your website homepage?</label>
          <select id="homepage_featured" class="form-select" aria-label="Default select example" name='homepage_featured'>
            <option selected>Yes</option>
            <option value="No">No</option>
          </select>
          <div>
              <Button component={Link} variant="contained" onClick={handleapi}>Submit</Button>
          </div>
      </form>
        </div>
  )
}
