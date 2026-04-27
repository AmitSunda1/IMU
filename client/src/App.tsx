import Box from "@mui/material/Box";
import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { WayOfLifePage } from "./pages/WayOfLifePage";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f2f2f4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wayoflife" element={<WayOfLifePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
      <Box id="contact" sx={{ scrollMarginTop: "80px" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
