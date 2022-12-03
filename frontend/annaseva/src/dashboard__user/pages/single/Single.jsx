import React from 'react'
import './Single.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Nav from "../../components/navbar/Nav"
import Chart from "../../components/chart/Chart"
import TableX from "../../components/Table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />

      <div className="singleContainer">
        <Nav />
        <div className="top">

          <div className="left">
            <div className="editbutton">edit</div>
            <h1 className="title">Information</h1>

            <div className="item">
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="img"
                className='itemImg' />

              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">

                  <div className="itemKey">Email: </div>
                  <div className="itemValue">JaneDoe@gmail.com</div>

                  <div className="itemKey">Phone: </div>
                  <div className="itemValue">+01 12345</div>

                  <div className="itemKey">Adress: </div>
                  <div className="itemValue">Wall street , America</div>

                  <div className="itemKey">Country: </div>
                  <div className="itemValue">USA</div>

                </div>
              </div>

            </div>


          </div>


          <div className="right">
            <Chart aspect={3 / 1} title="User spending (last 2 quarters)" />
          </div>
        </div>


        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TableX />
        </div>
      </div>

    </div>
  )
}

export default Single
