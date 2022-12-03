import React from 'react'
import { useState } from 'react';
import "./form.css"

import {
    ref,
    uploadBytesResumable, getDownloadURL
} from "firebase/storage";
import storage from '../../../firebase/firebaseConfig';
import axios from 'axios';
import { useEffect } from 'react';
import  TableX from '../Table/Table';
import Button from '@mui/material/Button';





export const DonorForm = () => {
  const [tableactive,settable]=React.useState('hide');
  const [donorNo,setdonorNo]=React.useState(0)

    const [file, setFile] = useState("");
    const [imgurl,setimgurl]=useState('');
    const [longitude,setlongitude]=useState(0)
    const [latitude,setlatitude]=useState(0)
    const [name,setname]=useState('');
    const [quantity,setquantity]=useState(0);
    const [type,settype]=useState("Other");
    const [address,setaddress]=useState('');

    


    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
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
            link1:imgurl,
            latitude:latitude,
            longitude:longitude,
            location:address,
            userNo:localStorage.getItem("userNo"),
            quantity:parseInt(quantity)
        }

        axios.post("http://localhost:8000/donor/create",data).then((response)=>{
            console.log(response.data.donorNo)
            setdonorNo(response.data.donorNo)
            settable("show")
        }).catch((err)=>{
            console.log(err)

        }) 
        
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setimgurl(url)
                    console.log(url);
                });
            }
        );
    };
    useEffect(() => {
        locationfinder()
    }, '')

    return (
        <>
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
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">T</label> <br />
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={(event) => settype(event.target.value)}>
                    <option selected>Choose...</option>
                    <option value="Individual">Individual</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Food_Caterer">Food Caterer</option>
                    <option value="Hostel">NGO</option>
                    <option value="Other">Other</option>
                </select>


                <div className="form-row">
                    {/* <div className="form-group col-md-6">
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
                    </div> */}
                    <div>
                        <input type="file" onChange={handleChange} accept="/image/*" />
                        <button onClick={handleUpload}>Upload to Firebase</button>
                        {/* <p>{percent} "% done"</p> */}
                        

                        {imgurl && <>
                        <br />
                        <br />
                        <img className='image-height' src={imgurl} alt="" />
                        
                        </>}
                    </div>


                </div>
                <br />
                <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
            </div>

        </div>
        <div className="listContainer">
        {tableactive=="show" &&
         <>
         <div className="listTitle">Lastest Transactions</div>
            <TableX latitude={latitude} longitude={longitude} donorNo={donorNo} /></>
         }
         </div>
          

        </>
        


    )
}