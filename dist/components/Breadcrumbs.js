import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useStore } from "../store";
import React from "react";
export const Breadcrumbs = () => {
    const store = useStore();
    const state = store.get();
    const [hovered, setHovered] = React.useState(undefined);
    const ids = (state.derived.breadcrumbs[state.selections.selected || state.selections.primary || ""] || []).filter((id) => id !== "__root");
    return (_jsx("div", { style: {
            display: ids.length ? "block" : "none",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            fontSize: "20px",
            padding: "5px",
        }, children: ids.map((id) => {
            return (_jsxs(_Fragment, { children: [_jsx("div", { style: {
                            display: "inline",
                            padding: "5px",
                            cursor: "pointer",
                            textDecoration: hovered === id ? "underline" : "none",
                        }, onClick: () => {
                            store.set({
                                selections: {
                                    ...state.selections,
                                    primary: id,
                                    selected: id,
                                },
                            });
                        }, onMouseEnter: () => {
                            setHovered(id);
                            store.set({
                                selections: {
                                    primary: id,
                                },
                            });
                        }, onMouseLeave: () => {
                            setHovered(undefined);
                            store.set({
                                selections: {
                                    primary: state.selections.selected,
                                },
                            });
                        }, children: id?.split("::")[0] || "" }), " >"] }));
        }) }));
};
