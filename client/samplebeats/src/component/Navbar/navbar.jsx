import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FullLogo_Transparent from '../Navbar/assets/FullLogo_Transparent.png'

const Navbar = () => {

  const navItems = ["Home", "samples", "blogs", "Contact"];
  return (
  
    <>
      <AppBar color="inherit" sx={{ backgroundColor: "black" }} elevation={0}>
        <Toolbar>
          <Box
            component="img"
            src={FullLogo_Transparent}
            sx={{ height: 110, width: 150, mr: 2}}
          />
           <Box>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "white", mx: 0.5 }}>
              {item}
            </Button>
          ))}
        </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
