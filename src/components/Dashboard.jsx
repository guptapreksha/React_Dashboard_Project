import React from "react";
import SideNav from "./SideNav";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DashboardCon from "./container/DashboardCon";

const Dashboard = () => {
  const drawerWidth = 240;
  return (
    <div>
      <>
        <Box sx={{ bgcolor: "#EEEEEE", display: "flex", height: "100vh" }}>
          <SideNav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <h1>dashboard</h1>
            <Navbar />
            <DashboardCon />
            <Footer />
          </Box>
        </Box>
      </>
    </div>
  );
};

export default Dashboard;
