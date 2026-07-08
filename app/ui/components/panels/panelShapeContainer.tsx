"use client";
import "../../../styles/panel.css";
import { Box, Button, IconButton, Typography, Slider } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DataShape from "./dataShape";
import { PropsShape } from "../bottomnav";


export default function PanelShapeContainer({ shape }: PropsShape) {
  const [isVisible, setIsVisible] = React.useState(false);

  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box className={`wrapper-right ${isVisible ? "" : "hidden"}`}>
        <IconButton className="btn-panel" onClick={togglePanel}>
          {isVisible ? (
            <ArrowForwardIosIcon sx={{ color: "white" }} fontSize="medium" />
          ) : (
            <AutoFixHighIcon sx={{ color: "white" }} fontSize="medium" />
          )}
        </IconButton>
      <Box sx={{ width: 500 }} className={`panel ${isVisible ? "" : "hidden"}`}>
        <DataShape shape={shape} />
      </Box>
    </Box>
  );
}
