declare global {
  interface Window {
    LenzInterval: ReturnType<typeof setInterval> | null;
    LenzKeybinding: ((e: KeyboardEvent) => void) | null;
  }
}

type Rect = {
  top: number;
  left: number;
  width: number;
  height: number;
};
export type Item = {
  id: string;
  name: string;
  attributes: Record<string, string | undefined>;
  rect: Rect;
  parent?: string;
  children?: string[];
};

export type Structure = {
  root: string;
  items: Record<string, Item>;
  counts: Record<string, number>;
  width: number;
  height: number;
};

export type Derived = {
  ids: string[];
  rects: Record<string, Rect>;
  breadcrumbs: Record<string, string[]>;
};
