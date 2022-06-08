import React from "react";
import "./Actions.css";
import Button from "../button/Button";
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Actions() {
  return (
    <div className="actions">
      <Button />
      <Button primary="active"/>
      <div className="profile">
      <PersonIcon className="hoverable" color="primary"/>
      <ArrowDropDownIcon className="hoverable" color="primary" /></div>
    </div>
  );
}
