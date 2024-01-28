"use client";
import React, { useState } from "react";
import Draggable from "react-draggable";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { BlockPicker } from "react-color";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  CardMedia,
  CardActions,
  Stack,
} from "@mui/material";

const EditBook = (props) => {
  const elementRef = useRef(null);
  const [type, setType] = useState("");
  const [titleStyle, setTtleStyle] = useState({
    text: "14",
    bold: "",
    italic: "",
    color: "",
  });
  const [authorStyle, setAuthorStyle] = useState({
    text: "14",
    bold: "",
    italic: "",
    color: "",
  });

  const handleChange = (event) => {
    if (type == "1") {
      setTtleStyle({ ...titleStyle, text: event.target.value });
    } else if (type == "2") {
      setAuthorStyle({ ...authorStyle, text: event.target.value });
    } else {
      alert("Lütfen değiştirmek istediğiniz metni seçin.");
    }
  };

  const handleChangeBold = () => {
    if (type == "1") {
      if (titleStyle.bold == "bold") {
        setTtleStyle({ ...titleStyle, bold: "" });
      } else {
        setTtleStyle({ ...titleStyle, bold: "bold" });
      }
    } else if (type == "2") {
      if (authorStyle.bold == "bold") {
        setAuthorStyle({ ...authorStyle, bold: "" });
      } else {
        setAuthorStyle({ ...authorStyle, bold: "bold" });
      }
    } else {
      alert("Lütfen değiştirmek istediğiniz metni seçin.");
    }
  };

  const handleChangeItalic = () => {
    if (type == "1") {
      if (titleStyle.italic == "italic") {
        setTtleStyle({ ...titleStyle, italic: "" });
      } else {
        setTtleStyle({ ...titleStyle, italic: "italic" });
      }
    } else if (type == "2") {
      if (authorStyle.italic == "italic") {
        setAuthorStyle({ ...authorStyle, italic: "" });
      } else {
        setAuthorStyle({ ...authorStyle, italic: "italic" });
      }
    } else {
      alert("Lütfen değiştirmek istediğiniz metni seçin.");
    }
  };

  const handleChangeColor = (color) => {
    if (type == "1") {
      setTtleStyle({ ...titleStyle, color: color });
    } else if (type == "2") {
      setAuthorStyle({ ...authorStyle, color: color });
    } else {
      alert("Lütfen değiştirmek istediğiniz metni seçin.");
    }
  };

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div>
        <Box sx={{ height: "100vh" }}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ width: "600" }}>
              <div ref={elementRef}>
                <CardMedia sx={{ height: 650 }} image={props.data.img}>
                  <CardContent>
                    <Draggable>
                      <Typography
                        fontSize={titleStyle.text + "px"}
                        fontWeight={titleStyle.bold}
                        fontStyle={titleStyle.italic}
                        color={titleStyle?.color?.hex}
                        onClick={() => {
                          setType("1");
                        }}
                        gutterBottom
                        component="p"
                        contentEditable
                      >
                        {props.data.title}
                      </Typography>
                    </Draggable>
                    <Draggable>
                      <Typography
                        fontSize={authorStyle.text + "px"}
                        fontWeight={authorStyle.bold}
                        fontStyle={authorStyle.italic}
                        color={authorStyle?.color?.hex}
                        onClick={() => {
                          setType("2");
                        }}
                        gutterBottom
                        component="p"
                        contentEditable
                      >
                        {props.data.author}
                      </Typography>
                    </Draggable>
                  </CardContent>
                </CardMedia>
              </div>
              <Stack mt={2} mb={2}>
                <CardActions>
                  <TextField
                    type="number"
                    id="outlined-basic"
                    label="Font Size"
                    variant="outlined"
                    value={type == "1" ? titleStyle.text : authorStyle.text}
                    onChange={handleChange}
                  />
                  <Button size="small" onClick={handleChangeBold}>
                    <b>Bold</b>
                  </Button>
                  <Button size="small" onClick={handleChangeItalic}>
                    <i>Italic</i>
                  </Button>
                </CardActions>
                <CardActions>
                  <BlockPicker
                    color={type == "1" ? titleStyle.color : authorStyle.color}
                    onChangeComplete={handleChangeColor}
                    width="100%"
                  />
                </CardActions>
              </Stack>
              <Stack direction="row" justifyContent="center" mt={2} mb={2}>
                <Button variant="contained" onClick={htmlToImageConvert}>
                  Download
                </Button>
              </Stack>
            </Card>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default EditBook;
