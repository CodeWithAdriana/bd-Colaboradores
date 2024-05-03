import React from "react";

export const Alert = ({ message, type }) => {
  return (
    <div
      className={`alert ${type === "error" ? "alert-danger" : "alert-success"}`}
      role="alert"
    >
      {message}
    </div>
  );
};
