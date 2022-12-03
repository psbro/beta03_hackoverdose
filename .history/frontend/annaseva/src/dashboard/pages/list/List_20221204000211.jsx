import React from 'react'
import './List.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Nav from "../../components/navbar/Nav"
import Datatable from '../../components/dataTable/Datatable'

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Nav />
        <Datatable />
      </div>
    </div>
  )
}

export default List