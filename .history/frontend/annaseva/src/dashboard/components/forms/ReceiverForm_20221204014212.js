

import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'




export const ReceiverForm = () => {
    const [longitude,setlongitude]=useState(0)
    const [latitude,setlatitude]=useState(0)
    const [name,setname]=useState('');
    const [address,setaddress]=useState('');
    const [quantity,setquantity]=useState(0);
    const [type,settype]=useState("Other");
    const locationfinder=()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            setlatitude(position.coords.latitude)
            console.log("Longitude is :", position.coords.longitude);
            setlongitude(position.coords.longitude)
    
        });
    }

    const handlesubmit=()=>{
        let data={
            name:name,
            type:type,
            latitude:latitude,
            longitude:longitude,
            location:address,
            userNo:localStorage.getItem("userNo"),
            quantity:parseInt(quantity)
        }

        axios.post("http://localhost:8000/receiver/create",data).then((data)=>{
            console.log(data)
            alert("request submited")
            window.location.reload();

        }).catch((err)=>{
            console.log(err)

        })   
    }
    useEffect(() => {
        locationfinder()
    }, '')
    return (
        <div className='donorForm'>
            <div className='form-css'>
            <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Name of organization</label>
                        <input type="text" className="form-control" id="inputEmail4" onChange={(event)=>setname(event.target.value)} placeholder="Name of organization" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">quantity</label>
                        <input type="number" className="form-control" id="inputPassword4" onChange={(event)=>setquantity(event.target.value)} placeholder="Quantity" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress" onChange={(event)=>setaddress(event.target.value)}>Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div> 
                {/* <div className="form-group">
      <label for="inputAddress2">Address 2</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </div> */}
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label> <br />
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={(event) => settype(event.target.value)}>
                    <option selected>Choose...</option>
                    <option value="Home_shelter">Home_shelter</option>
                    <option value="NGO">NGO</option>
                    {/* <option value="Hostel">Hostel</option>
                    <option value="Food_Caterer">Food Caterer</option>
                    <option value="Hostel">NGO</option> */}
                    <option value="Other">Other</option>
                </select>

                <br />
                <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
            </div>
        </div>
    )
}
