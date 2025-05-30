import React from "react";
const state = {
    derived: {
        ids: [],
        rects: {},
        breadcrumbs: {},
    },
    scrolling: Date.now(),
    selections: {},
    structure: {
        counts: {},
        items: {},
        root: "",
        width: 0,
        height: 0,
    },
    at_selectionChange: Date.now(),
};
const toUpdate = [];
export function useStore() {
    const [, setUpdated] = React.useState(Date.now());
    React.useEffect(() => {
        toUpdate.push(setUpdated);
        return () => {
            const index = toUpdate.indexOf(setUpdated);
            if (index > -1) {
                toUpdate.splice(index, 1);
            }
        };
    }, []);
    return {
        get: () => state,
        set: (data) => {
            const selectionChange = !!((data.selections?.primary &&
                data.selections.primary !== state.selections.primary) ||
                (data.selections?.selected &&
                    data.selections.selected !== state.selections.selected));
            Object.assign(state, data, {
                selections: { ...state.selections, ...data.selections },
                at_selectionChange: selectionChange
                    ? Date.now()
                    : state.at_selectionChange,
            });
            toUpdate.forEach((update) => update(Date.now()));
        },
    };
}
