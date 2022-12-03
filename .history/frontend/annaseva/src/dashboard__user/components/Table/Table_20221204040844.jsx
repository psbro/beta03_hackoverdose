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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Modal_prop from '../modal/Modal_prop';






const TableX = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data, setData] = React.useState([]);
    const handleupdate = async (data) => {
        let long = {
            donorNo: data,
            isVerify: "Yes"
        }
        let info = await axios.put(`http://localhost:8000/donor/update`, long);
        alert("updated sucessfully")
        window.location.reload();

    }
    const loadData = async () => {
        let info = await axios.get(`http://localhost:8000/donor/all`);
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
                            <TableCell className='tableCell'>Food photo</TableCell>
                            {/* <TableCell className='tableCell'>Payment Method</TableCell> */}
                            <TableCell className='tableCell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                { 
                                    <>
                                        <TableCell className='tableCell'>{row.userNo}</TableCell>
                                        <TableCell className='tableCell'>{row.name}</TableCell>
                                        <TableCell className='tableCell'>{row.quantity}</TableCell>

                                        <TableCell className='tableCell'>{row.type}</TableCell>
                                        <TableCell className='tableCell'>{row.location}</TableCell>
                                        < TableCell className='tableCell'>
                                            {/* <a href={row.link1} target="_blank">Photo</a>  */}
                                            <Modal_prop link1={row.link1} donorNo={row.donorNo} location={row.location} isVerify={row.} />



                                        </TableCell>
                                        <TableCell className='tableCell'>
                                            {row.isVerify == "No" && <span className={`status Pending`}>Pending</span>}
                                            {row.isVerify == "Yes" && <span className={`status Approved`}>Approved</span>}

                                        </TableCell>
                                    </>
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}

export default TableX;