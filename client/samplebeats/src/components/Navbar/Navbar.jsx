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
import { Link, useLocation } from "react-router-dom";


const navItems = [
  { label: "Home", path: "/" },
  { label: "Samples", path: "/Sample" },
  { label: "Blogs", path: "/Blog" },
  { label: "Contact", path: "/ContactUs" },
];




const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Home");
  const location = useLocation();

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
            key={item.label}
            onClick={() => handleNavClick(item.label)}
            sx={{
              justifyContent: "center",
              color: activeItem === item.label ? "white" : "#ccc",
              "&:hover": {
                backgroundColor: "white",
                color: "white",
              },
            }}
          >
            <ListItemText primary={item.label} />
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
              <Link
                key={item.label}
                to={item.path}
                onClick={() => handleNavClick(item.label)}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color:
                      activeItem === item.label ||
                      location.pathname === item.path
                        ? "white"
                        : "gray",
                    fontWeight: activeItem === item.label ? "bold" : "normal",
                    mx: 1,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
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
