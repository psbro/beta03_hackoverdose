import React from 'react'
import './Nav.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Nav = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchIcon className="icon" />
        </div>

        <div className="items">

          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <AccountCircleOutlinedIcon className="avatar" />
          </div>


        </div>


      </div>
    </div>
  )
}

export default Nav