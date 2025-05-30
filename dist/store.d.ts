import type { Structure, Derived } from "./types";
declare const state: {
    derived: Derived;
    structure: Structure;
    scrolling: number;
    selections: {
        primary?: string;
        selected?: string;
    };
    at_selectionChange: number;
};
export type Store = ReturnType<typeof useStore>;
export type State = typeof state;
export declare function useStore(): {
    get: () => {
        derived: Derived;
        structure: Structure;
        scrolling: number;
        selections: {
            primary?: string;
            selected?: string;
        };
        at_selectionChange: number;
    };
    set: (data: Partial<typeof state>) => void;
};
export {};
