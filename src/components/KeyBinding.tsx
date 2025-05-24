import React from "react";

export const KeyBinding = (props: {
  onKeypress: (e: KeyboardEvent) => void;
}) => {
  React.useEffect(() => {
    const LenzKeybinding = (e: KeyboardEvent) => {
      props.onKeypress(e);
    };
    document.addEventListener("keydown", LenzKeybinding);
    return () => {
      document.removeEventListener("keydown", LenzKeybinding);
    };
  }, []);
  return <></>;
};
