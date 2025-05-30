import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useStore } from "../store";
import { usePulse } from "./hooks/usePulse";
export const SelectedPanel = (props) => {
    const store = useStore();
    const state = store.get();
    const pulseOn = usePulse(state.at_selectionChange);
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.3)",
                }, onClick: () => {
                    store.set({ selections: { selected: undefined } });
                } }), _jsxs("div", { style: {
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
                }, children: [_jsx("div", { style: { width: "100%", height: "30px" } }), _jsx("div", { style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }, children: _jsx("div", { style: {
                                fontSize: "30px",
                                textAlign: "center",
                            }, onClick: () => {
                                scrollTo({
                                    behavior: "smooth",
                                    top: state.structure.items[state.selections.selected || ""].rect
                                        .top - state.derived.rects["__root"].top,
                                });
                            }, children: _jsx(Chip, { name: state.selections.selected || "", pulse: state.selections.selected === state.selections.primary, pulseOn: pulseOn }) }) }), (props.Comp && (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx(props.Comp, { item: state.structure.items[state.selections.selected || ""] }), _jsx("br", {})] }))) || _jsx("p", { children: "no control coomponent" }), (state.structure.items[state.selections.selected || ""]?.children || [])
                        .filter((id) => id !== "__root")
                        .map((id) => {
                        return (_jsx("div", { style: { fontSize: "18px", cursor: "pointer" }, onClick: () => {
                                store.set({
                                    selections: { primary: id, selected: id },
                                });
                                scrollTo({
                                    behavior: "smooth",
                                    top: state.structure.items[id].rect.top -
                                        state.derived.rects["__root"].top,
                                });
                            }, onMouseMove: () => {
                                store.set({ selections: { primary: id } });
                            }, onMouseLeave: () => {
                                store.set({
                                    selections: {
                                        primary: state.selections.selected,
                                    },
                                });
                            }, children: _jsx(Chip, { name: id, pulse: id === state.selections.primary, pulseOn: pulseOn }) }, id));
                    })] })] }));
};
const Chip = (props) => {
    const defaultOpacity = 1;
    const opacity = props.pulseOn ? defaultOpacity : 0.2;
    return (_jsx("div", { style: {
            cursor: "pointer",
            display: "inline-block",
            float: "left",
            padding: "4px",
            opacity: props.pulse ? opacity : defaultOpacity,
            transition: "opacity 0.9s ease",
        }, children: _jsx("div", { style: {
                border: "2px solid #000000",
                borderRadius: "5px",
                padding: "5px",
            }, children: props.name.split("::")[0] }) }));
};
