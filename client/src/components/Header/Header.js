import React, { useContext, useState } from "react";

import "./Header.css";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "../../Docs/Logo.css"
// import { useState } from "react";
import DropDown from "./DropDown";

export default function Header(props) {
  const { user } = useContext(AuthContext);
  return (
    <header className="header">
      <div>
      <img className="logo" src={require("../../Docs/logo-img.png")} 
      alt={"ProducDiv"}/> 
        <p>
        <h1 style={{ fontFamily: 'monospace', }}>Produc_Div</h1>
        </p>
      </div>
{/*       
        <div className="header_title">
<<<<<<< HEAD
          {props.state?.projects?.map((project) => {
            if (project.id === currentproject)
              return <div className="header_title_text">{project.name} </div>;
=======
          {props.state.projects.map((project) => {
            if (project.id === props.currentproject)
              return <div key={project.id} className="header_title_text">{project.name} </div>;

>>>>>>> 8ebd4053f758970a130601c268ba64dc61d97793
          })}
        </div> */}
      <DropDown
        className="dropdown"
        currentProject={props.currentProject}
        setCurrentProject={props.setCurrentProject}
      />
      <div className="header_title">
        {props.state.projects.map((project) => {
          if (project.id === props.currentProject)
            return <div className="header_title_text">{project.name} </div>;
        })}
      </div>
      <div className="project_members"></div>
    </header>
   
  )};