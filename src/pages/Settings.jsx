import React from "react";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SettingsCon from "../components/container/SettingsCon"

const Settings = () => {
  const drawerWidth = 240;
  return (
    <div>
      <>
       
        <Box sx={{bgcolor:'#EEEEEE', display: "flex" , height:'100vh' }}>
          <SideNav/>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <h1>Settins</h1>
            <Navbar/>
            <SettingsCon/>
            <Footer/>
          </Box>
        </Box>
      </>
    </div>
  );
};

export default Settings;
