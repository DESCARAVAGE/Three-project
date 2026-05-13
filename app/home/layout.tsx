import BottomNav from "../ui/bottomnav";
import { Box } from "@mui/material";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
       }}
    >
        <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <BottomNav />
        </Box>
        <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "50px",
          overflowX: "hidden", // Empêche le scroll horizontal
        }}
      >
        {children}
      </Box>

    </Box>
  );
}