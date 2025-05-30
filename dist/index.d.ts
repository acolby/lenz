import React from "react";
import { Item } from "./types";
export type Props = {
    Comp?: React.ComponentType<{
        item: Item;
    }>;
    show: boolean;
    showMiniMap?: boolean;
    onCloseClicked?: () => void;
    onKeypress?: (e: KeyboardEvent) => void;
};
export declare const Lenz: (props: Props) => import("react/jsx-runtime").JSX.Element;
