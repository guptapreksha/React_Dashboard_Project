import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashboardCon = () => {
  const [totalTweets, setTotalTweets] = useState("");
  const [totalComments, setTotalComments] = useState("");

  useEffect(() => {
    async function dataUpdate() {
      let result = await fetch(
        "https://techyroots.com:8001/api/admin/dashboardDetails",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: " I8oYpoieFYQL7LGlRkJc77i7BkolHJof",
          },
        }
      );
     result = await result.json();
     const{totalTweets, totalComments} = result[0];
     setTotalTweets(totalTweets);
     setTotalComments(totalComments);
      
    }
    dataUpdate();
  }, []);



  return (
    <Card className="dashMain" sx={{ minWidth: 275, height: 20 + "vh" }}>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Card sx={{ minWidth: 500, bgcolor: "#FEECE2", height: 15 + "vh" }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Total Tweets
                  
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >{totalTweets}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card sx={{ minWidth: 500, bgcolor: "#DCF2F1", height: 15 + "vh" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Comments
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {totalComments}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
export default DashboardCon;
