import React, { useState } from 'react';
import './auth.css'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {createdata__create , createdata__login} from "../api/user__api"

function Auth() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const [signInstate, setsignInState] = useState({
    in_email: "",
    in_password: "",
  })

  const [signUpstate, setsignUpState] = useState({
    up_name: "",
    up_email: "",
    up_mobile: "",
    up_password: "",
    up_cpassword: ""
  })

  const handleChange_in = (e) => {
    setsignInState({
      ...signInstate,
      [e.target.name]: e.target.value,
    })
  }

  const handleChange_up = (e) => {
    setsignUpState({
      ...signUpstate,
      [e.target.name]: e.target.value,
    })
  }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleSignup = (e) => {

    console.log(signUpstate)
  }

  const handleSignin = (e) => {
   
   console.log(signInstate)
  }

  return (
    <div className='flex_box'>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

<MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
  <MDBTabsItem>
    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} >
      Login
    </MDBTabsLink>
  </MDBTabsItem>
  <MDBTabsItem>
    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
      Register
    </MDBTabsLink>
  </MDBTabsItem>
</MDBTabs>

<MDBTabsContent>

  <MDBTabsPane show={justifyActive === 'tab1'}>

    <div className="text-center mb-3">
      <p>Sign in with:</p>

      <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>
      </div>

      <p className="text-center mt-3">or:</p>
    </div>

    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name='in_email' onChange={handleChange_in} value={signInstate.in_email}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='in_password' onChange={handleChange_in} value={signInstate.in_password}/>

    <div className="d-flex justify-content-between mx-4 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <MDBBtn className="mb-4 w-100" onClick={handleSignin}>Sign in</MDBBtn>
    <p className="text-center">Not a member? <a href="#!">Register</a></p>

  </MDBTabsPane>

  <MDBTabsPane show={justifyActive === 'tab2'}>

    <div className="text-center mb-3">
      <p>Sign up with:</p>

      <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>
      </div>

      <p className="text-center mt-3">or:</p>
    </div>

    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' name='up_name' onChange={handleChange_up} value={signUpstate.up_name}/>
    {/* <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/> */}
    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' name='up_email' onChange={handleChange_up} value={signUpstate.up_email}/>
    <MDBInput wrapperClass='mb-4' label='Mobile' id='form1' type='contact' name='up_mobile' onChange={handleChange_up} value={signUpstate.up_mobile}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' name='up_password' onChange={handleChange_up} value={signUpstate.up_password}/>
    <MDBInput wrapperClass='mb-4' label='Conform Password' id='form1' type='password' name='up_cpassword' onChange={handleChange_up} value={signUpstate.up_cpassword}/>

    <div className='d-flex justify-content-center mb-4'>
      <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
    </div>

    <MDBBtn className="mb-4 w-100" onClick={handleSignup}>Sign up</MDBBtn>

  </MDBTabsPane>

</MDBTabsContent>

</MDBContainer>
    </div>
  );
}

export default Auth;