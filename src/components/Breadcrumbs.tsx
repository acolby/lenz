import { useStore } from "../store";
import React from "react";

export const Breadcrumbs = () => {
  const store = useStore();
  const state = store.get();

  const [hovered, setHovered] = React.useState<string | undefined>(undefined);

  const ids = (
    state.derived.breadcrumbs[
      state.selections.selected || state.selections.primary || ""
    ] || []
  ).filter((id) => id !== "__root");

  return (
    <div
      style={{
        display: ids.length ? "block" : "none",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        fontSize: "20px",
        padding: "5px",
      }}
    >
      {ids.map((id) => {
        return (
          <>
            <div
              style={{
                display: "inline",
                padding: "5px",
                cursor: "pointer",
                textDecoration: hovered === id ? "underline" : "none",
              }}
              onClick={() => {
                store.set({
                  selections: {
                    ...state.selections,
                    primary: id,
                    selected: id,
                  },
                });
              }}
              onMouseEnter={() => {
                setHovered(id);
                store.set({
                  selections: {
                    primary: id,
                  },
                });
              }}
              onMouseLeave={() => {
                setHovered(undefined);
                store.set({
                  selections: {
                    primary: state.selections.selected,
                  },
                });
              }}
            >
              {id?.split("::")[0] || ""}
            </div>
            {" >"}
          </>
        );
      })}
    </div>
  );
};
