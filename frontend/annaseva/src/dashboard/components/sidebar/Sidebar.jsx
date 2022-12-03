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

const Sidebar = () => {
    return (

        <div className="sidebar">

            <div className="top">

                <Link to="/" style={{ textDecoration: "none" }}>
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
                    <p className="title">LISTS</p>

                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PeopleOutlineOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>



                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <ProductionQuantityLimitsIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>


                    <li>
                        <DeliveryDiningIcon className="icon" />
                        <span>Delivery</span>
                    </li>

                    <li>
                        <SensorDoorIcon className="icon" />
                        <span>Orders</span>
                    </li>


                    <p className="title">USEFUL</p>

                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Stats</span>
                    </li>


                    <li>
                        <CircleNotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>

                    <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span>System Health</span>
                    </li>


                    <li>
                        <SyncAltIcon />
                        <span>Logs</span>
                    </li>

                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>

                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>

                    <li>
                        <LogoutIcon className="icon" />
                        <span>Log out</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>

        </div>

    )
}

export default Sidebar