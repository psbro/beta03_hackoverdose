import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';



const Datatable = () => {

    const actionColumn = [{
        feild: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to="/users/test">
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
                    Add user
                </Link>
            </div>
            <DataGrid
                className='datafrid'
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
