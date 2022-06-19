import { Box, Stack, ThemeProvider,createTheme } from "@mui/material";
import React, { useState } from "react";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {

  const [mode, setMode] = useState("light");

  const DarkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={DarkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
      <Sidebar setMode={setMode} mode={mode} />
      <Feed />
      <RightBar />
    </Stack> 
    <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
