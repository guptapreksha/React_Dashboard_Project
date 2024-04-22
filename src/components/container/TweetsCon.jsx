import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "react-bootstrap/Button";
// import TweetsService from "../../services/TweetsService";
import { useEffect } from "react";
// import DeleteService from "../../services/DeleteService";
import { useState } from "react";
import axios from "axios";
const columns = [
  {
    id: "tweetId",
    label: "TweetID",
    minWidth: 170,
  },
  {
    id: "tweets",
    label: "Tweets",
    minWidth: 100,
  },
  {
    id: "user",
    label: "User",
    minWidth: 170,
  },
  {
    id: "createdAt",
    label: "CreatedAt",
    minWidth: 170,
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 170,
  },
];

const TweetsCon = () => {
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      fetch("https://techyroots.com:8001/api/tweet")
        .then((response) => response.json())
        .then((data) => setRecords(data.data))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const rows = records.length
    ? records.map((list) => {
        return {
          tweetId: list.tweetId,
          tweet: list.tweet,
          user: list.user,
          createdAt: list.createdAt,
        };
      })
    : [];

  const deleteData = async (id) => {
    const response = await axios.delete(
      `https://techyroots.com:8001/api/admin/tweet?tweetId=${id}`,
      {
        headers: {
          Authorization:" I8oYpoieFYQL7LGlRkJc77i7BkolHJof",
        },
      }
    );
    alert(response.data.message);
    fetchData();
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.TweetID}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell key={row.Action} align="left">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="First group"
                      >
                        <Button variant="dark">View</Button>
                      </div>

                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Second group"
                      >
                        <Button variant="dark">Edit</Button>
                      </div>

                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Third group"
                      >
                        <Button
                          variant="dark"
                          onClick={() => deleteData(row.tweetId)}
                        >
                          Delete
                        </Button>
                      </div>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Forth group"
                      >
                        <Button variant="dark">Export</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default TweetsCon;
