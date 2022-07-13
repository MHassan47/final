import React from "react";
import "./SideBar.css";
import { SidebarData } from "./SideBarData";


export default function SideBar() {
  return(
    <div className="Sidebar">
    <ul className="SidebarList">
      {SidebarData.map((val, key) => {
        return (
          <li
            key={key}
            className="row"
            
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
          </li>
        );
      })}
    </ul>
  </div>
);
}
