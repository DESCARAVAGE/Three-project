"use client";

import { lusitana } from "../ui/font";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import ThreeScene from "../ui/ThreeScene";
import { Box } from "@mui/material";
import '@/app/styles/globals.css';

export default function Page() {
  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px"  }}>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Model
        </h1>
        <ThreeDRotationIcon sx={{ fontSize: "2rem" }} />
      </Box>
      <div style={{ width: "100vw", height: "80vh" }}>
        <canvas id="c"></canvas> 
        <ThreeScene />
      </div>
    </main>
  );
}
