import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect } from "react";
import { Pending } from "@mui/icons-material";
import Button from "@mui/material/Button";

const TableX = (props) => {
  const [data, setData] = React.useState([]);
  const loadData = async () => {
    let long = {
      longitude: props.longitude,
      latitude: props.latitude,
    };
    let info = await axios.post(
      `http://34.70.31.162/donor/getreceiver`,
      long
    );
    setData(info.data);
    console.log(data);
  };
  const handledonate = async (data) => {
    // alert(data);
    // alert(props.donorNo);
    let long = {
      receiverNo: data,
      donorNo: props.donorNo,
    };
    let long1 = {
      isDonate: "Yes",
      donorNo: props.donorNo,
    };
    let info = await axios.put(`http://34.70.31.162/receiver/update`, long);
    let info2 = await axios.put(`http://34.70.31.162/donor/update`, long1);
    alert("Donation request sent!");
    window.location.reload();
  };
  useEffect(() => {
    loadData();
  }, "");
  // test
  return (
    <div className="table">
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">UserNo</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Quantity</TableCell>
              <TableCell className="tableCell">Type</TableCell>
              <TableCell className="tableCell">Location</TableCell>
              {/* <TableCell className='tableCell'>Payment Method</TableCell> */}
              <TableCell className="tableCell">Distance</TableCell>

              <TableCell className="tableCell">button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {/* <TableCell>{row.id}</TableCell> */}
                <TableCell className="tableCell">{row.userNo}</TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.quantity}</TableCell>

                <TableCell className="tableCell">{row.type}</TableCell>
                <TableCell className="tableCell">{row.location}</TableCell>
                <TableCell className="tableCell">{row.distance}</TableCell>
                <TableCell className="tableCell">
                  <Button
                    variant="contained"
                    onClick={() => handledonate(row.receiverNo)}
                  >
                    Donate
                  </Button>

                  {/* {row.isVerify=="No" && <span className={`status Pending`}>Pending</span>}
                                    {row.isVerify=="Yes" && <span className={`status Approved`}>Approved</span>} */}
                  {/* <span className={`status Pending`}>{row.isVerify}</span> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableX;
