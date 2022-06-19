import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography} from '@mui/material'
import React from 'react'
import {styled} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import {Mail, Notifications} from "@mui/icons-material"
import { useState } from 'react';

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    
});

const Search = styled("div")(({theme}) => ({
    backgroundColor:"white",
    padding:"0 10px",
    width:"40%",
    borderRadius:theme.shape.borderRadius,
}))

const Icons = styled(Box)(({theme}) => ({
    display:"none",
    gap: "20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    },
    cursor:"pointer"
}))

const UserBox = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    },
    cursor:"pointer"
}))

const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyleToolbar>
                <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>
                    Aksaleks
                </Typography>
                <FacebookIcon sx={{display: {xs: "block", sm: "none"}}}/>
                <Search><InputBase  placeholder='Search...'/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={e=>setOpen(true)} sx={{width:30, height:30}} alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
                <Typography variant='span'>Sarvar</Typography>
                </UserBox>
            </StyleToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar