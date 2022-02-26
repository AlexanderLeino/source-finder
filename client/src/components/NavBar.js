import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./NavBar.css"
import { Container } from '@mui/material'

import Auth from '../utils/auth'

import { useQuery } from '@apollo/client'
import { GET_ME } from '../utils/queries';
import {GET_MY_REQUESTS} from '../utils/queries'

import logo from '../images/save.png'
import { height } from '@mui/system';

import Login from './Login'

import MyAvitar from '../components/MyAvitar'
import Notifications from './Notifications'
import { ConnectingAirportsOutlined, WindowOutlined } from '@mui/icons-material';

//style for modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#bf4578',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {
  const userData = Auth.getProfile()
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [hasId, setHasId] = useState(false)
  const [adminId, setAdminId] = useState('')

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event) => {
    
  }

  const goSignUp = () =>{
    window.location = '/signUp'
  }
  const goEditProfile = () => {
    window.location = '/edit'
  }
  const goToProfile = () => {
    window.location = '/profile'
  }
  const goToMyGroups = () => {
    window.location = '/myGroups'
  }
  const goLogout = () => {
    Auth.logout()
  }
  
  const menuId = 'primary-search-account-menu';
  
  let renderMenu


  const getGroupInfo = async (id) => {
    console.log(id)
    try{
      const usersGroup = await useQuery(GET_ME, {
        variables: {id: id}
      })
      if (usersGroup.data){
        if (usersGroup.data.me.isAdmin != null)
        setAdminId(usersGroup.data.me.isAdmin._id) 

      }
    }
    catch(err){

      console.log(err)
    }
    
  }


  useEffect(() => {
    console.log(adminId)
    if(adminId != null){
      setHasId(true)
    }
    console.log(hasId)
  },[adminId])


  if (Auth.loggedIn()){

    getGroupInfo(userData.data._id)

    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={goToProfile}>Profile</MenuItem>
        <MenuItem onClick={goEditProfile}>Edit Profile</MenuItem>
        <MenuItem onClick={goToMyGroups}>My Groups</MenuItem>
        <MenuItem onClick={goLogout}>Logout</MenuItem>
      </Menu>
    );
  }else{
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleOpen}>Log In</MenuItem>
        <MenuItem onClick={goSignUp}>Sign Up</MenuItem>
      </Menu>
    );
  }
  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 1 new mails" color="inherit">
          <Badge badgeContent={1} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          // size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
          <MyAvitar isLarge ={false} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#190B28', height:'65px'}}>
        <Toolbar>

        <Link to={'/'}>
          <img style={{height:'75px'}} src={logo}></img>
        </Link>
        <Container maxWidth='100%'>
          <h2 className='title' style={{textAlign:'center', color:' #bf4578'}}>Source Finder</h2>
        </Container>
        
        

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {hasId ? (<Notifications adminid={adminId}/>) : (<Notifications adminid={null}/>)}
            
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              // size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <MyAvitar isLarge={false}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              // size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>


    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login />
        </Box>
      </Modal>
    </div>
    </>
  );
}
