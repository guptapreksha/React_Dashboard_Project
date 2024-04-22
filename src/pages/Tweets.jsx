import React from "react";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TweetsCon from "../components/container/TweetsCon";

const Tweets = () => {
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
            <h1> Tweets</h1>
            <Navbar />
            <TweetsCon />
            <Footer />
          </Box>
        </Box>
      </>
    </div>
  );
};

export default Tweets;
