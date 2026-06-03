"use client";
import "../../styles/panel.css";
import { Box, Button, IconButton, Typography, Slider } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from "react";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CirclePanel() {
  const [isVisible, setIsVisible] = React.useState(false);

  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  const handleChangeRadius = () => {};

  const handleChangeWidthSeg = () => {};

  const handleChangeheightSeg = () => {};

  const handleChangeColor = () => {};

  const handleChangeEdgeColor = () => {};

  const [value, setValue] = React.useState("#ffffff");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 5,
      label: "5",
    },
  ];

  function valuetext(value: number) {
    return `${value}`;
  }
  
      console.log(isVisible);

//   function funcShow() {
//     document.querySelector(".panel.hidden")?.classList.toggle("hidden")
//   // $(".panel.hidden").removeClass('hidden');
//   };
// function funcHide() {
//   // $(".panel").addClass('hidden');
// };
// function funcToggle() {
//   // $(".panel").toggleClass('hidden');
// };

  return (
    <Box className={`wrapper ${isVisible ? "" : "hidden"}`}>
      <Box >
        {isVisible ? (
          <IconButton className="btn-panel" onClick={togglePanel}>
            <ArrowForwardIosIcon sx={{ color: "white" }} />
          </IconButton>
        ) : (
          <IconButton className="btn-close-panel" onClick={togglePanel}>
            <AutoFixHighIcon sx={{ color: "white" }} />
          </IconButton>
        )}
      </Box>
        <Box sx={{ width: 500 }} className={`panel ${isVisible ? "" : "hidden"}`}>
          <Box sx={{ marginBottom: 3 }}>
            {/* <Box sx={{ display: "flex", justifyContent: "end" }}>
              <IconButton
                onClick={togglePanel}
                sx={{ color: "white", width: "fit-content" }}
              >
                <CloseIcon />
              </IconButton>
            </Box> */}
            {/* Variable  */}
            <Typography variant="h6" align="center">
              Sphère
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography>Taille :</Typography>
            <Box sx={{ width: "10rem" }}>
              <Slider
                size="small"
                aria-label="Small"
                defaultValue={2}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={1}
                max={5}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            {/* Variable */}
            <Typography>wigth :</Typography>
            <Box sx={{ width: "10rem" }}>
              <Slider
                size="small"
                aria-label="Small"
                defaultValue={2}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={1}
                max={5}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography>height :</Typography>
            <Box sx={{ width: "10rem" }}>
              <Slider
                size="small"
                aria-label="Small"
                defaultValue={2}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={1}
                max={5}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography>Color :</Typography>
            <Box sx={{ width: "10rem" }}>
              <MuiColorInput
                format="hex"
                value={value}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography>Contours :</Typography>
            <Box sx={{ width: "10rem" }}>
              <MuiColorInput
                format="hex"
                value={value}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginY: 1,
              "& button": {
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                },
              },
            }}
          >
            <Button
              variant="outlined"
              endIcon={<RestartAltIcon />}
              sx={{
                width: "fit-content",
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>

    </Box>
  );
}
