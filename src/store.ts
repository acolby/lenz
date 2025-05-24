import React from "react";
import type { Structure, Derived } from "./types";

const state: {
  derived: Derived;
  structure: Structure;
  scrolling: number;
  selections: {
    primary?: string;
    selected?: string;
  };
  at_selectionChange: number;
} = {
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

const toUpdate: ((time: number) => void)[] = [];

export type Store = ReturnType<typeof useStore>;
export type State = typeof state;
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
    set: (data: Partial<typeof state>) => {
      const selectionChange = !!(
        (data.selections?.primary &&
          data.selections.primary !== state.selections.primary) ||
        (data.selections?.selected &&
          data.selections.selected !== state.selections.selected)
      );

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
