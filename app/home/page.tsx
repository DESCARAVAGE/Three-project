"use client";

import { lusitana } from "../ui/font";
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import ThreeScene from '../ui/ThreeScene';

export default function Page() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Model 3D
        <ThreeDRotationIcon />
      </h1>
      <div style={{ width: '100vw', height: '70vh' }}>
        <ThreeScene />
      </div>
    </main>
  );
}
