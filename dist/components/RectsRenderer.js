import { jsx as _jsx } from "react/jsx-runtime";
import { useStore } from "../store";
import { utils_getItem } from "../utils/getItem";
import { usePulse } from "./hooks/usePulse";
export const RectsRenderer = () => {
    const store = useStore();
    const state = store.get();
    const pulseOn = usePulse(state.at_selectionChange);
    return state.derived.ids
        .filter((id) => id !== "__root")
        .map((id) => {
        const item = utils_getItem(id, state);
        const isPrimary = id === state.selections.primary;
        return (_jsx("div", { style: {
                cursor: "pointer",
                position: "absolute",
                top: item.rect.top,
                left: item.rect.left,
                width: item.rect.width,
                height: item.rect.height,
            }, onMouseMove: () => {
                if (state.selections.selected)
                    return;
                store.set({ selections: { primary: id } });
            }, onClick: (e) => {
                e.preventDefault();
                store.set({
                    selections: { primary: id, selected: id },
                });
                // props.onItemCliked && props.onItemCliked(item);
            }, children: isPrimary && (_jsx(Card, { name: item.id, pulse: isPrimary, type: isPrimary ? "primary" : "secondary", pulseOn: pulseOn })) }, id));
    });
};
const Card = (props) => {
    const defaultOpacity = props.type === "primary" ? 0.9 : 0.5;
    const opacity = props.pulseOn ? defaultOpacity : 0;
    const styles = {
        primary: {
            border: "4px solid #000000",
        },
        secondary: {
            border: "2px dashed #000000",
            color: "#000000",
        },
    };
    return (_jsx("div", { style: {
            boxSizing: "border-box",
            verticalAlign: "middle",
            borderRadius: "5px",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            opacity: props.pulse ? opacity : defaultOpacity,
            backgroundColor: "#ffffff",
            transition: "opacity 0.9s ease",
            ...styles[props.type],
        }, children: _jsx("div", { style: {
                containerType: "size",
                width: "100%",
                height: "100%",
                maxHeight: "100px",
                textAlign: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }, children: _jsx("div", { style: {
                    fontSize: (props.type === "primary" && "60cqh") || "20px",
                }, children: props.name.split("::")[0] }) }) }));
};
