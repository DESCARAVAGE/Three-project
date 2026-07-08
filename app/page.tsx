"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-blue-500">Ceci doit être la landing page</p>
        <Button onClick={() => router.push('/home')} variant="outlined">
          Chambre 3D
        </Button>
      </div>
    </div>

  );
}
