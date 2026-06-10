import { Box, Slider, Typography } from "@mui/material";
import React from "react";

export default function DataCam({ settingsCam }: any) {
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
    <Box className="" sx={{ marginBottom: 3 }}>
      <Typography variant="h6" align="center" sx={{ marginBlock: 2 }}>
        Caméra
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>Fov :</Typography>
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
        <Typography>Ratio :</Typography>
        <Box sx={{ width: "10rem" }}>0,1</Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>Near :</Typography>
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
        <Typography>Far :</Typography>
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
        <Typography>Postion :</Typography>
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
    </Box>
  );
}
