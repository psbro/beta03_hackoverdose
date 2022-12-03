import React from 'react'
import './List.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Nav from "../../components/navbar/Nav"
import Datatable from '../../components/dataTable/Datatable'
import TableX from '../../components/Table/Table'

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Nav />
        <TableX/>
      </div>
    </div>
  )
}

export default List