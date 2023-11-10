import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import { Link } from 'react-router-dom'; 

const pages = ['Upload', 'Search for Reports']; //define possible options in the main nav bar
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']; //define possible options in the user menu bar

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  {/*Provide logic to open and close relvant menu bar*/}
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget); 
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#62569C' }}> {/*Define header bar in a darker purple*/}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShieldMoonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> {/*display this for md or larger viewports*/}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COS30049_Group2-53
          </Typography> {/*text to display for large viewport navbar*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> {/*display this for small or x-small viewports*/}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', textDecoration: "underline" }}
                component={page === 'Upload' || page === 'Search for Reports' ? Link : 'button'}
                to={page === 'Upload' ? '/' : page === 'Search for Reports' ? '/reportarea' : undefined}> {/*Provide possible routing options based on selected option in the navbar*/}
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ShieldMoonIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         COS30049_Group2-53 
          </Typography>{/*display this on the small or x-small viewport*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> {/*Create navbar reactions from click*/}
            {pages.map((page) => (
              <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', textDecoration: "underline" }}
              component={page === 'Upload' || page === 'Search for Reports' ? Link : 'button'}
              to={page === 'Upload' ? '/' : page === 'Search for Reports' ? '/reportarea' : undefined}> {/*Provide possible routing options based on selected option in the navbar*/}
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}> {/*user menu bar*/}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="MUI Logo" src={require("../../assets/images/MUI.png")} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;