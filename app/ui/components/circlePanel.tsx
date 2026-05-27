"use client";
import "../../styles/panel.css";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import Slider from "@mui/material/Slider";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from "react";

export default function CirclePanel() {
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

  return (
    <Box sx={{ width: 500 }} className="panel">
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton sx={{ color: "white", width: "fit-content" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography align="center">Sphère</Typography>
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
          <MuiColorInput format="hex" value={value} onChange={handleChange} />
        </Box>
      </Box>
       <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>Contours :</Typography>
        <Box sx={{ width: "10rem" }}>
          <MuiColorInput format="hex" value={value} onChange={handleChange} />
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
  );
}
