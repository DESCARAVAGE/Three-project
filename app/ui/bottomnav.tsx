"use client";
import "../styles/bottomnav.css";
import { Box, Divider, IconButton } from "@mui/material";
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CropSquareIcon from '@mui/icons-material/CropSquare';

export default function BottomNav() {
  const handleChangeCube = () => {
    console.log("j'ai été cliqued, cube !");
  };

  const handleChangeSphere = () => {
    console.log("j'ai été cliqued, sphere !");
  };

  const handleChangePrisme = () => {
    console.log("j'ai été cliqued, Prisme");
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
