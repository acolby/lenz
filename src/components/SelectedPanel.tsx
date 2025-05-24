import React from "react";

import { useStore } from "../store";
import { Props } from "..";
import { usePulse } from "./hooks/usePulse";

export const SelectedPanel = (props: { Comp: Props["Comp"] }) => {
  const store = useStore();
  const state = store.get();

  const pulseOn = usePulse(state.at_selectionChange);

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.3)",
        }}
        onClick={() => {
          store.set({ selections: { selected: undefined } });
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50px",
          background: "white",
          border: "1px solid black",
          borderRadius: "5px",
          minWidth: "600px",
          opacity: 0.9,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "auto",
          padding: "10px",
        }}
      >
        {/* scondary breaaadcumb 
        {(state.derived.breadcrumbs[state.selections.selected || ''] || [])
          .filter((id) => id !== '__root')

          .map((id) => {
            return (
              <span
                style={{
                  fontSize: '20px',
                  cursor: 'pointer',
                  marginLeft: '6px',
                }}
                onClick={() => {
                  store.set({
                    selections: { primary: id, selected: id },
                  });
                  scrollTo({
                    behavior: 'smooth',
                    top:
                      state.structure.items[id].rect.top -
                      state.derived.rects['__root'].top,
                  });
                }}
                onMouseMove={() => {
                  store.set({ selections: { primary: id } });
                }}
                onMouseLeave={() => {
                  store.set({
                    selections: {
                      primary: state.selections.selected,
                    },
                  });
                }}
                key={id}
              >
                <Chip
                  name={id}
                  pulse={id === state.selections.primary}
                  pulseOn={pulseOn}
                />
              </span>
            );
          })}
          */}
        <div style={{ width: "100%", height: "30px" }} />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              textAlign: "center",
            }}
            onClick={() => {
              scrollTo({
                behavior: "smooth",
                top:
                  state.structure.items[state.selections.selected || ""].rect
                    .top - state.derived.rects["__root"].top,
              });
            }}
          >
            <Chip
              name={state.selections.selected || ""}
              pulse={state.selections.selected === state.selections.primary}
              pulseOn={pulseOn}
            />
          </div>
        </div>
        {(props.Comp && (
          <>
            <br />
            <props.Comp
              item={state.structure.items[state.selections.selected || ""]}
            />
            <br />
          </>
        )) || <p>no control coomponent</p>}
        {(
          state.structure.items[state.selections.selected || ""]?.children || []
        )
          .filter((id) => id !== "__root")
          .map((id) => {
            return (
              <div
                style={{ fontSize: "18px", cursor: "pointer" }}
                onClick={() => {
                  store.set({
                    selections: { primary: id, selected: id },
                  });
                  scrollTo({
                    behavior: "smooth",
                    top:
                      state.structure.items[id].rect.top -
                      state.derived.rects["__root"].top,
                  });
                }}
                onMouseMove={() => {
                  store.set({ selections: { primary: id } });
                }}
                onMouseLeave={() => {
                  store.set({
                    selections: {
                      primary: state.selections.selected,
                    },
                  });
                }}
                key={id}
              >
                <Chip
                  name={id}
                  pulse={id === state.selections.primary}
                  pulseOn={pulseOn}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

const Chip = (props: { name: string; pulse: boolean; pulseOn: boolean }) => {
  const defaultOpacity = 1;
  const opacity = props.pulseOn ? defaultOpacity : 0.2;

  return (
    <div
      style={{
        cursor: "pointer",
        display: "inline-block",
        float: "left",
        padding: "4px",
        opacity: props.pulse ? opacity : defaultOpacity,
        transition: "opacity 0.9s ease",
      }}
    >
      <div
        style={{
          border: "2px solid #000000",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        {props.name.split("::")[0]}
      </div>
    </div>
  );
};
