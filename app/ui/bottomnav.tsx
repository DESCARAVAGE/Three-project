"use client";
import "../styles/bottomnav.css";
import { Box, Divider, IconButton } from "@mui/material";
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CropSquareIcon from '@mui/icons-material/CropSquare';

export default function BottomNav() {
  const handleChangeCube = () => {
    window.dispatchEvent(new CustomEvent('selectObject', { detail: 'cube' }));
  };

  const handleChangeSphere = () => {
    window.dispatchEvent(new CustomEvent('selectObject', { detail: 'sphere' }));
  };

  const handleChangePrisme = () => {
    window.dispatchEvent(new CustomEvent('selectObject', { detail: 'prisme' }));
  };

  return (
    <Box component="header" className="navbar">
      <IconButton onClick={handleChangeCube} sx={{ color: 'white' }}>
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
      <IconButton onClick={handleChangeSphere} sx={{ color: 'white' }}>
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
      <IconButton onClick={handleChangePrisme} sx={{ color: 'white' }}>
        <ChangeHistoryOutlinedIcon />
      </IconButton>
    </Box>
  );
}
