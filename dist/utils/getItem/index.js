export function utils_getItem(id, state) {
    const item = state.structure.items[id];
    const breadcrumb = state.derived.breadcrumbs[id];
    const rect = state.derived.rects[id];
    const counts = state.structure.counts[id];
    return { ...item, breadcrumb, rect, counts };
}
