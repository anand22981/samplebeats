import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Navbar.css";
import FullLogo from "../../assets/FullLogo_Transparent.png";

const navItems = ["Home", "samples", "blogs", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={FullLogo} alt="Logo" style={{ height: 90, margin: "10px auto" }} />
      <List>
        {navItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar color="inherit" sx={{ backgroundColor: "black" }} elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            src={FullLogo}
            sx={{ height: 110, width: 150 }}
            alt="Full Logo"
          />

          {/* Desktop nav buttons */}
          <Box
            className="nav-bar-button"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "white", mx: 0.5 }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Menu icon for small screens */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
