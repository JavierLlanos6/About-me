import React from "react";

const ProgressBar = ({ percentage }) => {
  const validPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div
      style={{
        width: "90%",
        height: "11px",
        backgroundColor: "#161616",
        borderRadius: "0px",
      }}
    >
      <div
        style={{
          width: `${validPercentage}%`,
          height: "100%",
          backgroundColor: "#29be31", // Puedes cambiar el color aquí
          borderRadius: "0px",
        }}
      />
    </div>
  );
};

export default ProgressBar;
