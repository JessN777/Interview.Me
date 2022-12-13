import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "lightblue" }}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Type of Company/Role
          </Typography>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Type of Questions
          </Typography>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            AI Interview
          </Typography>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Feedback
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
