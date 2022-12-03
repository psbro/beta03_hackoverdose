import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';





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

const Modal_prop = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const accountSid = 'ACba58a05db6a6412dde27b4fe08227f7b';
    const authToken = '[Redacted]';
    const client = require('twilio')(accountSid, authToken);
    //   const getdata=async()=>{
    //     let info={
    //         link:props.link1
    //     }
    //     let data=await axios.post("https://Quality-test.devanshkapri2.repl.co/test",info)
    //     console.log(data);
    //   }

    const handleupdate = async () => {
        let long = {
            donorNo: props.donorNo,
            isVerify: "Yes"
        }
        let info = await axios.put(`http://localhost:8000/donor/update`, long).then((val) => {
            alert("updated sucessfully")
            window.location.reload();
        }).catch((error) => console.log(error));

        console.log(info);


    }
    useEffect(() => {
        // getdata()
    }, [])

    return (
        <>
            <Button onClick={handleOpen}>Photo</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <img src={props.link1} alt="" style={{ height: "150px", width: "150px", alignItems: "center", margin: "auto", width: "100%" }} />
                    </Typography>
                    <Button id="modal-modal-description" sx={{ mt: 2 }} onClick={handleupdate}>
                        verify
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default Modal_prop