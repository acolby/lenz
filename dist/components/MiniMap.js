import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useStore } from "../store";
import { utils_getItem } from "../utils/getItem";
import { usePulse } from "./hooks/usePulse";
export const MiniMap = () => {
    const store = useStore();
    const state = store.get();
    const pulseOn = usePulse(state.at_selectionChange);
    const rootRect = state.derived.rects["__root"];
    if (!rootRect)
        return _jsx(_Fragment, {});
    let width = 1;
    let height = 1;
    let scale = 1;
    const contentWidth = state.structure.width;
    const contentHeight = state.structure.height;
    if (contentWidth > contentHeight) {
        width = 300;
        scale = contentWidth / width;
        height = contentHeight / scale;
    }
    else {
        height = 300;
        scale = contentHeight / height;
        width = contentWidth / scale;
    }
    return (_jsx("div", { style: {
            width,
            height,
            transformOrigin: "0 0",
            position: "relative",
            overflow: "hidden",
            opacity: 0.8,
            pointerEvents: "none",
            border: "2px solid black",
            boxSizing: "content-box",
        }, children: _jsx("div", { style: {
                position: "absolute",
                top: 0,
                right: 0,
                background: "white",
                width: contentWidth / scale,
                height: contentHeight / scale,
            }, children: _jsxs("div", { style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                }, children: [state.derived.ids
                        .map((id) => {
                        const item = utils_getItem(id, state);
                        const isSelected = id === state.selections.selected;
                        const isPrimary = id === state.selections.primary;
                        const isChild = (state.structure.items[state?.selections?.selected || ""]
                            ?.children || []).includes(id);
                        if (!isPrimary && !isChild && !isSelected)
                            return false;
                        const opacity = pulseOn ? 0.8 : 0.3;
                        return (_jsx("div", { style: {
                                cursor: "pointer",
                                position: "absolute",
                                top: item.rect.top / scale - rootRect.top / scale,
                                left: item.rect.left / scale,
                                width: item.rect.width / scale,
                                height: item.rect.height / scale,
                                background: isPrimary ? "rgba(0,0,0,0.6)" : "",
                                opacity: (isPrimary && opacity) || 1,
                                boxSizing: "border-box",
                                border: (isPrimary && "4px solid #000000") ||
                                    "2px dashed #000000",
                                transition: "opacity 0.9s ease",
                            }, onMouseMove: () => {
                                if (state.selections.selected)
                                    return;
                                store.set({ selections: { primary: id } });
                            }, onClick: (e) => {
                                e.preventDefault();
                                store.set({
                                    selections: { primary: id, selected: id },
                                });
                            } }, id));
                    })
                        .filter((i) => i), _jsx("div", { style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: rootRect.width / scale,
                            height: -rootRect.top / scale,
                            background: "rgba(0,0,0,0.3)",
                            color: "white",
                        } }, "top"), _jsx("div", { style: {
                            position: "absolute",
                            top: -rootRect.top / scale + window.innerHeight / scale,
                            left: 0,
                            width: rootRect.width / scale,
                            height: "100%",
                            background: "rgba(0,0,0,0.3)",
                            color: "white",
                        } }, "bottom")] }) }) }));
};
