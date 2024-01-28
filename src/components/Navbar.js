import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OpenBook from "./OpenBook/OpenBook";
import EditBook from "./EditBook/EditBook";

function Navbar() {
  const [value, setValue] = useState("1");
  const [book, setBook] = useState({ img: "", title: "", author: "" });

  useEffect(() => {
    if (value == null) setValue("1");
  }, [value, book]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Choose Book" value="1" />
              <Tab label="Edit Cover" value="2" disabled/>
            </TabList>
          </Box>
          <TabPanel value="1" >
            <Box gutteBottom pt={2} pb={3}>
              <Container
                sx={{ display: "flex", justifyContent: "center" }}
              ></Container>
              <Typography variant="h4" color="primary" textAlign="center">
                Book Viewer
              </Typography>
            </Box>
            <OpenBook setValue={setValue} setBook={setBook} />
          </TabPanel>
          <TabPanel value="2" >
            <Box gutteBottom pt={2} pb={3}>
              <Container
                sx={{ display: "flex", justifyContent: "center" }}
              ></Container>
              <Typography variant="h4" color="primary" textAlign="center">
                Edit Book
              </Typography>
            </Box>
            <EditBook data={book} />
          </TabPanel>
        </TabContext>
      </Box>
    </nav>
  );
}

export default Navbar;
