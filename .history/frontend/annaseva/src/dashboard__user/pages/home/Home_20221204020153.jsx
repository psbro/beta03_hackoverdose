import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Nav from '../../components/navbar/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import TableX from '../../components/Table/Table'
import TableX2 from '../../components/Table/Table2'
import Widget from '../../components/widgets/Widget'
import './Home.scss'


const Home = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Nav />

          {/* <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div> */}
{/* 
          <div className="charts">
            <Featured />
            <Chart title="Last 2 quarters (Revenue)" aspect={2 / 1} />
          </div> */}

          <div className="listContainer">
            <div className="listTitle">All Donors</div>
            <TableX />
            <div className="listTitle">All Reveiver</div>
            <TableX2 />

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
