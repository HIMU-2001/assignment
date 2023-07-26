import React, { useState } from "react";
import './Alert.css';

export const Alert = ({ variant }) => {
    return (
      <div
        className="alert-container"
        style={{
          background: "#FDEDED",
          border: "0.1rem solid #F16360" ,
        }}
      >
        <div
          className="symbol-container"
          style={{ background: "#F16360" }}
        >
          <span class="material-symbols-outlined symbol">error</span>{" "}
        </div>
        <div className="description-container">
          <span className="description-title">ERROR &nbsp;:  </span>
          <span className="description-text">  &nbsp; The action was not carried out succesfully please try again.</span>
        </div>
      </div>
    );
};