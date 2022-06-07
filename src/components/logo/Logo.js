import React from "react";
import "./Logo.css";
import RedditIcon from "@mui/icons-material/Reddit";

export default function Logo() {
  return (
    <div id="logobox" className="hoverable logo">
      <RedditIcon color="primary" fontSize="large" />
      <span>reddit</span>
    </div>
  );
}
