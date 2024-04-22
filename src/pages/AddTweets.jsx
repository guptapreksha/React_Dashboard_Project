import React from "react";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddTweetsCon from "../components/container/AddTweetsCon";

const AddTweets = () => {
  const drawerWidth = 240;
  return (
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
          <h1>add tweets</h1>
          <Navbar />
          <AddTweetsCon />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default AddTweets;
