import React, {useState} from "react";
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Grid version 1

import IconButton from '@mui/material/IconButton';

import Menu from '@mui/icons-material/Menu';

import MenuItem from '@mui/material/MenuItem';

import DehazeIcon from '@mui/icons-material/Dehaze';



function NavBar() {
    return (
        <div>
            <AppBar color="primary" position="static" style={{height: "64px", backgroundColor: "#781710" }}>
                <Toolbar>
                    <Typography variant="h5" color="inherit">Calorie Counter</Typography>
                    
                </Toolbar>
               
                
            </AppBar>
        </div>
    )
}

export default NavBar;