import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const KeyBinding = (props) => {
    React.useEffect(() => {
        const LenzKeybinding = (e) => {
            props.onKeypress(e);
        };
        document.addEventListener("keydown", LenzKeybinding);
        return () => {
            document.removeEventListener("keydown", LenzKeybinding);
        };
    }, []);
    return _jsx(_Fragment, {});
};
