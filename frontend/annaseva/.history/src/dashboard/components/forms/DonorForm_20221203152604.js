

import React from 'react'
import { useState } from 'react';

export const DonorForm = () => {

    const [latitude,setlatitude]=useState('')
    const [longitude,setlongitude]=useState('')
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        setlatitude(position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setlongitude(position.coords.latitude);
      });

      const handlesubmit =()=>{
        
      }
    return (
        <div className='donorForm'>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Name of organization</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Name of organization" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">quantity</label>
                        <input type="number" className="form-control" id="inputPassword4" placeholder="Quantity" />
                    </div>
                </div>
                <div className="form-group">
                <div className="form-group col-md-6">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>

                </div>
                {/* <div className="form-group">
      <label for="inputAddress2">Address 2</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </div> */}
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label> <br />
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="Individual">Individual</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Food_Caterer">Food Caterer</option>
                    <option value="Hostel">NGO</option>
                    <option value="Other">Other</option>
                </select>


                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div> 
                 <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">

                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div> 
                    <div className="form-group col-md-4">
                        <label for="inputZip">Upload your food image</label>
                        <input type="file" className="form-control" id="inputZip" />
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
