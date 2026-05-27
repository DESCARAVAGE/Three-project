import BottomNav from "../ui/bottomnav";
import { Box } from "@mui/material";
import NoSsr from "@mui/material/NoSsr";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NoSsr>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <BottomNav />
        </Box>
        <Box
          component="main"
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "30px",
            
            overflowX: "hidden", // Empêche le scroll horizontal
          }}
        >
          {children}
        </Box>

      </Box>
    </NoSsr>
  );
}