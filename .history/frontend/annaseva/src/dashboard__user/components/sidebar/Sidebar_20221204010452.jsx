import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }
    return (

        <div className="sidebar">

            <div className="top">

                <Link to="/dashboard/user" style={{ textDecoration: "none" }}>
                    <span className="logo">Admin Dashboard</span>
                </Link>

            </div>

            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon />
                        <span>Dashboard</span>
                    </li>
                    


                    <li >
                        <LogoutIcon className="icon"  />
                        <button onClick={handleClick}>Log out</button>
                    </li>
                </ul>
            </div>

          

        </div>

    )
}

export default Sidebar