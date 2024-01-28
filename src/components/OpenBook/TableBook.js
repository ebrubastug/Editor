"use-client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Httper from "../../lib/api";

const url =
  "https://api.nytimes.com/svc/books/v3/lists/2023-01-20/hardcover-fiction.json?api-key=17mTJx0NAKwamthIZDDH0F79XSUp7Jwa";
var res = await Httper("get", url);

const TableBook = (props) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell size="large" align="center">
                Picture
              </TableCell>
              <TableCell size="large" align="center">
                Name
              </TableCell>
              <TableCell size="large" align="center">
                Writer
              </TableCell>
              <TableCell size="large" align="center">
                Select
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {res?.slice(0, 5).map((row) => (
              <TableRow
                key={row?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row?.book_image} width="70px" height="90px" />
                </TableCell>
                <TableCell>{row?.title}</TableCell>
                <TableCell>{row?.author}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => {
                      props.setValue("2");
                      props.setBook({
                        img: row?.book_image,
                        title: row?.title,
                        author: row?.author,
                      });
                    }}
                  >
                    Edit Book
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableBook;
