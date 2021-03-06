import React from "react";
import { Typography } from "@mui/material";

export default function Copyright() {
  return (
    <div
      style={{
        paddingTop: "1em",
        paddingBottom: "1em",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        Tian & Yi & Mountain {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
