import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Nav from '../../components/navbar/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import TableX from '../../components/Table/Table'
import Widget from '../../components/widgets/Widget'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DonorForm } from '../../components/forms/DonorForm'
import { ReceiverForm } from '../../components/forms/ReceiverForm'

import './Home.scss'

const Home = () => {
  const [active,setactive]=React.useState('');
  const [tableactive,settable]=React.useState('hide')
  
  
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Nav />

          <div className="widgets">
            
            <Stack spacing={2} direction="row" className='btn-button'>

              <Button variant="contained" onClick={()=>setactive("donor")}>Want to donate?</Button>
              <Button variant="contained" onClick={()=>setactive("receiver")}>Get Food</Button>


            </Stack>
            <Stack spacing={2} direction="row" className='btn-button'>

            <Button variant="contained" onClick={()=>setactive("")}>Cancel</Button>
            </Stack>




          </div>
          <div>
            {active=="donor" && <DonorForm />}
            {active=="receiver" && <ReceiverForm />}


          </div>
          {/* 
          <div className="charts">
            <Featured />
            <Chart title="Last 2 quarters (Revenue)" aspect={2 / 1} />
          </div> */}

          {/* <div className="listContainer">
            <div className="listTitle">Lastest Transactions</div>
            <TableX />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Home

