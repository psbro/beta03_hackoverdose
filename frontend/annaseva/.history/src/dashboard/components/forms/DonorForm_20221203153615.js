

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
import "./form.css"


import {
    ref,
    uploadBytesResumable, getDownloadURL
} from "firebase/storage";
import storage from '../../../firebase/firebaseConfig';


export const DonorForm = () => {
    const [file, setFile] = useState("");
    const [imgurl,setimgurl]=useState('');

    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
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

    return (
        <div className='donorForm'>
            <div className='form-css'>

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
<<<<<<< HEAD
                <button type="submit" className="btn btn-primary" onClick={handle}>Submit</button>
            </form>
=======
                <button type="submit" className="btn btn-primary" onClick={handleUpload}>Submit</button>
            </div>

>>>>>>> b99847d9608b5c86efef4c00398fee0cb1ca96ce
        </div>
    )
}
