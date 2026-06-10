import { Box, Button, IconButton, Typography, Slider } from "@mui/material";
import React from "react";
import CameraIcon from "@mui/icons-material/Camera";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "../../../styles/panel.css";
import DataCam from "./dataCam";

export default function PanelCamContainer({ settingsCam }: any) {
  const [isVisible, setIsVisible] = React.useState(false);
  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box className={`wrapper-left ${isVisible ? "" : "hidden"}`}>
      <Box sx={{ width: 500 }} className={`panel ${isVisible ? "" : "hidden"}`}>
        <DataCam settingsCam={settingsCam} />
      </Box>
      <IconButton className="btn-panel" onClick={togglePanel}>
        {isVisible ? (
          <ArrowBackIosNewIcon sx={{ color: "white" }} fontSize="medium" />
        ) : (
          <CameraIcon sx={{ color: "white" }} fontSize="medium" />
        )}
      </IconButton>
    </Box>
  );
}
