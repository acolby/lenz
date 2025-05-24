import type { Structure, Derived } from '../../types';

export function utils_deriveRects(structure: Structure) {
  const derived: Derived = {
    ids: [],
    rects: {},
    breadcrumbs: {},
  };

  deriveItem(structure.items[structure.root], []);

  function deriveItem(
    item: (typeof structure.items)[string],
    breadcrumb: string[] = []
  ) {
    if (!item || !item.rect) return;
    derived.ids.push(item.id);
    const rect = item.rect;
    derived.rects[item.id] = rect;
    derived.breadcrumbs[item.id] = breadcrumb;
    if (item.children) {
      item.children.forEach((id) =>
        deriveItem(structure.items[id], [...breadcrumb, item.id])
      );
    }
  }

  return derived;
}
