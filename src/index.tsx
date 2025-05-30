import React from "react";
import { useStore } from "./store";

import { Item } from "./types";
import { MiniMap } from "./components/MiniMap";
import { SelectedPanel } from "./components/SelectedPanel";
import { RectsRenderer } from "./components/RectsRenderer";

import { utils_buildStructure, utils_deriveRects } from "./utils";
import { LenzRefs } from "./components/LenzRefs";
import { Breadcrumbs } from "./components/Breadcrumbs";

import { KeyBinding } from "./components/KeyBinding";

export type Props = {
  Comp?: React.ComponentType<{
    item: Item;
  }>;
  show: boolean;
  showMiniMap?: boolean;
  onCloseClicked?: () => void;
  onKeypress?: (e: KeyboardEvent) => void;
};

export const Lenz = (props: Props) => {
  const store = useStore();
  const state = store.get();

  React.useEffect(() => {
    const interval = setInterval(() => {
      const state = store.get();
      if (!props.show) return;
      const el = document.body;
      store.set({
        structure: utils_buildStructure(el),
        derived: utils_deriveRects(state.structure),
      });
    }, 200);
    const onScroll = () => {
      store.set({ scrolling: Date.now() });
    };
    window.addEventListener("scroll", onScroll);
    document.body.addEventListener("scroll", onScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
      document.body.addEventListener("scroll", onScroll);
    };
  }, [props.show]);

  if (typeof document === "undefined") return <></>;

  return (
    <>
      <KeyBinding onKeypress={props.onKeypress || (() => {})} />
      <>
        {props.show && (
          <div
            id="lenz-content"
            style={{
              zIndex: 2147483647,
              left: 0,
              position: "fixed",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              {state.scrolling + 100 < Date.now() && <RectsRenderer />}
              {state.selections.selected && <SelectedPanel Comp={props.Comp} />}
              {props.showMiniMap && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    zIndex: 999999999,
                  }}
                >
                  <MiniMap />
                </div>
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                borderRadius: "0px 0px 0px 5px",
                overflow: "hidden",
              }}
            >
              <LenzRefs onCloseClick={props.onCloseClicked || (() => {})} />
            </div>
            {state.selections.primary && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  borderRadius: "0px 0px 5px 0px",
                  overflow: "hidden",
                }}
              >
                <Breadcrumbs />
              </div>
            )}
          </div>
        )}
      </>
    </>
  );
};
