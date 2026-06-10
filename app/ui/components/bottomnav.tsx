"use client";
import "../../styles/bottomnav.css";
import { Box, Divider, IconButton } from "@mui/material";
import ChangeHistoryOutlinedIcon from "@mui/icons-material/ChangeHistoryOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import PanelShapeContainer from "./panels/panelShapeContainer";
import PanelCamContainer from "./panels/panelCamContainer";
import React from "react";

export type Props = {
  shape: string;
};

export default function BottomNav() {
  const [shape, setShape] = React.useState('Sphere');

  const handleChangeSphere = () => {
    window.dispatchEvent(new CustomEvent("selectObject", { detail: "sphere" }));
    
    setShape('Sphere');
  };

  const handleChangeCube = () => {
    window.dispatchEvent(new CustomEvent("selectObject", { detail: "cube" }));
    setShape('Cube');
  };

  const handleChangePrisme = () => {
    window.dispatchEvent(new CustomEvent("selectObject", { detail: "prisme" }));
    setShape('Prisme');
  };
  
  return (
    <>
      <PanelCamContainer />
      {/* <PanelBackground /> */}
      <PanelShapeContainer shape={shape} />
      <Box component="header" className="navbar">
        <IconButton onClick={handleChangeSphere} sx={{ color: "white" }}>
          <CircleOutlinedIcon />
        </IconButton>
        <Divider
          sx={{
            borderRightWidth: 1,
            marginX: 2,
            borderColor: "rgba(255, 255, 255, 0.3)",
          }}
          orientation="vertical"
          flexItem
        />
        <IconButton onClick={handleChangeCube} sx={{ color: "white" }}>
          <CropSquareIcon />
        </IconButton>
        <Divider
          sx={{
            borderRightWidth: 1,
            marginX: 2,
            borderColor: "rgba(255, 255, 255, 0.3)",
          }}
          orientation="vertical"
          flexItem
        />
        <IconButton onClick={handleChangePrisme} sx={{ color: "white" }}>
          <ChangeHistoryOutlinedIcon />
        </IconButton>
      </Box>
    </>
  );
}
