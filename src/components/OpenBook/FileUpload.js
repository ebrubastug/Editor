import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import TextField from "@mui/material/TextField";

const FileUpload = (props) => {
  const fileTypes = ["JPEG", "PNG", "JPG"];
  const [file, setFile] = useState(null);
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleChange = (file) => {
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const clearHandler = () => {
    setFile(null);
    setImage(null);
    setAuthor("");
    setTitle("");
  };

  return (
    <div>
      <Box sx={{ height: "100vh" }}>
        <Container
          sx={{ display: "flex", justifyContent: "center" }}
        ></Container>
        <Card sx={{ maxWidt: "600px" }}>
          <CardContent>
            <Stack justifyContent="center">
              <FileUploader
                multiple={false}
                name="file"
                types={fileTypes}
                handleChange={handleChange}
              />
            </Stack>
            <Typography
              align="center"
              color="primary"
              textAlign="center"
              mt={2}
            >
              {file ? `File name: ${file.name} ` : "No files uploaded yet!"}
            </Typography>
            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Button
                variant="contained"
                color="error"
                onClick={clearHandler}
                disabled={!file}
              >
                Clear
              </Button>
              <TextField
                id="outlined-basic"
                label="Book Name"
                variant="outlined"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Writer"
                variant="outlined"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <Button
                disabled={!file || title.length == 0 || author.length == 0}
                variant="contained"
                onClick={() => {
                  props.setValue("2");
                  props.setBook({
                    img: image,
                    title: title,
                    author: author,
                  });
                }}
              >
                Edit Book
              </Button>
            </Stack>
          </CardContent>
        </Card>
        {image && (
          <img src={image} style={{ width: "100%", marginTop: "40px" }} />
        )}
      </Box>
    </div>
  );
};

export default FileUpload;
