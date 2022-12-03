import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect } from 'react';
import { Pending } from '@mui/icons-material';
import Button from '@mui/material/Button';




const TableX2 = () => {

    
    const [data, setData] = React.useState([]);
    const handleupdate= async (data)=>{
        let long = {
            receiverNo: data,
            isVerify: "Yes"
        }
        let info = await axios.put(`http://localhost:8000/receiver/update`, long);
        alert("updated sucessfully")
        window.location.reload();

    }
    const loadData = async () => {
        let info = await axios.get(`http://localhost:8000/receiver/all`);
        setData(info.data);
        console.log(data)
    }
    useEffect(() => {
        loadData()
    }, '')

    return (
        <div className='table'>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tableCell'>UserNo</TableCell>
                            <TableCell className='tableCell'>Name</TableCell>
                            <TableCell className='tableCell'>quantity</TableCell>
                            <TableCell className='tableCell'>type</TableCell>
                            <TableCell className='tableCell'>location</TableCell>
                            {/* <TableCell className='tableCell'>Payment Method</TableCell> */}
                            <TableCell className='tableCell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                {/* <TableCell>{row.id}</TableCell> */}
                                <TableCell className='tableCell'>{row.userNo}</TableCell>
                                <TableCell className='tableCell'>{row.name}</TableCell>
                                <TableCell className='tableCell'>{row.quantity}</TableCell>
                                
                                <TableCell className='tableCell'>{row.type}</TableCell>
                                <TableCell className='tableCell'>{row.location}</TableCell>
                                {/* <TableCell className='tableCell'>{row.method}</TableCell> */}
                                <TableCell className='tableCell'>
                                    {row.isVerify=="No" && <Button  onClick={()=>handleupdate(row.receiverNo)} >Verify</Button>}
                                    {row.isVerify=="Yes" && <span className={`status Approved`}>Approved</span>}
                                    {/* <span className={`status Pending`}>{row.isVerify}</span> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableX2;