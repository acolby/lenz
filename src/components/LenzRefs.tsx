import { useStore } from "../store";
import React from "react";

export const LenzRefs = (props: { onCloseClick: () => void }) => {
  const store = useStore();
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "5px",
        fontSize: "20px",
        display: "flex",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          marginLeft: "5px",
          marginRight: "5px",
          textDecoration: "underline",
        }}
        onClick={() => {
          props.onCloseClick();
        }}
      >
        close
      </div>
    </div>
  );
};
