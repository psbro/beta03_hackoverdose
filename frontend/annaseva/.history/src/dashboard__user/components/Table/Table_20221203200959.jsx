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

    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2235235,
            product: "Playstation 5",
            img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 2342353,
            product: "Redragon S101",
            img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 2357741,
            product: "Razer Blade 15",
            img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            id: 2342355,
            product: "ASUS ROG Strix",
            img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
    ];
    const [data, setData] = React.useState([]);
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
                                {/* <TableCell>{row.id}</TableCell> */}
                                <TableCell className='tableCell'>{row.userNo}</TableCell>
                                <TableCell className='tableCell'>{row.name}</TableCell>
                                <TableCell className='tableCell'>{row.quantity}</TableCell>

                                <TableCell className='tableCell'>{row.type}</TableCell>
                                <TableCell className='tableCell'>{row.location}</TableCell>
                                <TableCell className='tableCell'>
                                    
                                        <Button onClick={handleOpen}>Photo</Button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    <img src={row.link1} alt="" />
                                                
                                                </Typography>
                                                
                                            </Box>
                                        </Modal>
                                
                                </TableCell>
                                <TableCell className='tableCell'>
                                    {row.isVerify == "No" && <span className={`status Pending`}>Pending</span>}
                                    {row.isVerify == "Yes" && <span className={`status Approved`}>Approved</span>}
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

export default TableX;