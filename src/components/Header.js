import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, Menu, MenuItem} from "@mui/material";


export default function ButtonAppBar() {
    const [anchorElem, setAnchorElem] = React.useState(null);
    const open = Boolean(anchorElem);

    const handleClick = (event) => {
        setAnchorElem(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElem(null);
    };

    return (
        <Box sx={{ flexGrow: 1, background: "#E68E77" }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', background: "#E68E77" }}>
                    {/* Menu icon on the left */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Title text in the middle */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontFamily: "Copperplate Gothic Light", fontSize: 30 }}>
                        React Hooks
                    </Typography>


                    {/* Menu */}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElem}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem component={Link} href="/" onClick={handleClose}>
                            Home
                        </MenuItem>
                        <MenuItem component={Link} href="/Hooks" onClick={handleClose}>
                            Hooks
                        </MenuItem>
                        <MenuItem component={Link} href="/Examples" onClick={handleClose}>
                            Examples
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}