import React from "react";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchCommentsCon from "../components/container/SearchCommentsCon";

const SearchComments = () => {
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
            <h1>searchcomments</h1>
            <Navbar />
            <SearchCommentsCon />
            <Footer />
          </Box>
        </Box>
      </>
    </div>
  );
};

export default SearchComments;
