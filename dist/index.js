import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useStore } from "./store";
import { MiniMap } from "./components/MiniMap";
import { SelectedPanel } from "./components/SelectedPanel";
import { RectsRenderer } from "./components/RectsRenderer";
import { utils_buildStructure, utils_deriveRects } from "./utils";
import { LenzRefs } from "./components/LenzRefs";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { KeyBinding } from "./components/KeyBinding";
export const Lenz = (props) => {
    const store = useStore();
    const state = store.get();
    React.useEffect(() => {
        const interval = setInterval(() => {
            const state = store.get();
            if (!props.show)
                return;
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
    if (typeof document === "undefined")
        return _jsx(_Fragment, {});
    return (_jsxs(_Fragment, { children: [_jsx(KeyBinding, { onKeypress: props.onKeypress || (() => { }) }), _jsx(_Fragment, { children: props.show && (_jsxs("div", { id: "lenz-content", style: {
                        zIndex: 2147483647,
                        left: 0,
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                    }, children: [_jsxs("div", { style: {
                                position: "relative",
                                width: "100%",
                                height: "100%",
                            }, children: [state.scrolling + 100 < Date.now() && _jsx(RectsRenderer, {}), state.selections.selected && _jsx(SelectedPanel, { Comp: props.Comp }), props.showMiniMap && (_jsx("div", { style: {
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        zIndex: 999999999,
                                    }, children: _jsx(MiniMap, {}) }))] }), _jsx("div", { style: {
                                position: "absolute",
                                top: 0,
                                right: 0,
                                borderRadius: "0px 0px 0px 5px",
                                overflow: "hidden",
                            }, children: _jsx(LenzRefs, { onCloseClick: props.onCloseClicked || (() => { }) }) }), state.selections.primary && (_jsx("div", { style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                borderRadius: "0px 0px 5px 0px",
                                overflow: "hidden",
                            }, children: _jsx(Breadcrumbs, {}) }))] })) })] }));
};
