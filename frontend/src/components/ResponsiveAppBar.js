import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ChildCareTwoToneIcon from "@mui/icons-material/ChildCareTwoTone";
import '../index.css';


const pages = ["Productos", "Quiénes somos", "Contacto"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const label = [
  { letter: "P", color: "red" },
  { letter: "I", color: "blue" },
  { letter: "R", color: "#8d6e63" },
  { letter: "U", color: "#78909c" },
  { letter: "E", color: "green" },
  { letter: "T", color: "#88c100" },
  { letter: "A", color: "#fc5956" },
  { letter: " ", color: "white" },
  { letter: "K", color: "#039be5" },
  { letter: "I", color: "#8bc34a" },
  { letter: "D", color: "#ffb300" },
  { letter: "S", color: "#673ab7" }
  
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters
                >
          <Box display='flex'
              alignItems='center'
          >
            <ChildCareTwoToneIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: 50, position:'relative'}} className='icon-child'
            />
            <Toolbar disableGutters>
              {label.map((e) => {
                return (
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      p: 0.5,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: e.color,
                      textDecoration: "none",
                      userSelect: "none"
                    }}
                  >
                    {e.letter}
                  </Typography>
                );
              })}
            </Toolbar>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
            <Box
              display='flex'
              flexGrow='1'>
              {label.map((e) => {
                return (
                  <Typography
                    variant="h8"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      p: .4,
                      display: { xs: "flex", md: "none" },
                      fontFamily: "monospace",
                      fontWeight: 600,
                      color: e.color,
                      textDecoration: "none",
                      userSelect: "none"
                    }}
                  >
                    {e.letter}
                  </Typography>
                );
              })}
            </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 3, color: "black", display: "block" , fontWeight:"500", fontFamily:"sans-serif"}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
export default ResponsiveAppBar;
