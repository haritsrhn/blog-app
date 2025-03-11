import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "./shared-theme/AppTheme";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
// import Latest from "./components/Latest";
import Footer from "./components/Footer";

export default function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Router>
        <Header />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* <Route path="/latest" element={<Latest />} /> */}
          </Routes>
        </Container>
        <Footer />
      </Router>
    </AppTheme>
  );
}