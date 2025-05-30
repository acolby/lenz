import { jsx as _jsx } from "react/jsx-runtime";
import { useStore } from "../store";
export const LenzRefs = (props) => {
    const store = useStore();
    return (_jsx("div", { style: {
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "5px",
            fontSize: "20px",
            display: "flex",
        }, children: _jsx("div", { style: {
                cursor: "pointer",
                marginLeft: "5px",
                marginRight: "5px",
                textDecoration: "underline",
            }, onClick: () => {
                props.onCloseClick();
            }, children: "close" }) }));
};
