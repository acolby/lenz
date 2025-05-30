import { State } from "../../store";
export declare function utils_getItem(id: string, state: State): {
    breadcrumb: string[];
    rect: {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    counts: number;
    id: string;
    name: string;
    attributes: Record<string, string | undefined>;
    parent?: string;
    children?: string[];
};
