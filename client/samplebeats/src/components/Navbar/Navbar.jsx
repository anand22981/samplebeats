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

const navItems = ["Home", "Samples", "Blogs", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
    setMobileOpen(false); // close drawer on mobile
  };

  const drawer = (
    <Box sx={{ textAlign: "center", backgroundColor: "#000", height: "100%" }}>
      <img
        src={FullLogo}
        alt="Logo"
        style={{ height: 80, margin: "20px auto" }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item}
            onClick={() => handleNavClick(item)}
            sx={{
              justifyContent: "center",
              color: activeItem === item ? "white" : "#ccc",
              "&:hover": {
                backgroundColor: "#222",
                color: "white",
              },
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }} elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            component="img"
            src={FullLogo}
            sx={{ height: 100, width: 150 }}
            alt="Full Logo"
          />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleNavClick(item)}
                sx={{
                  color: activeItem === item ? "white" : "gray",
                  fontWeight: activeItem === item ? "bold" : "normal",
                  mx: 1,
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger Icon */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
