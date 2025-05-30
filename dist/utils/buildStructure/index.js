export function utils_buildStructure(node, id) {
    let minX = 1000;
    let maxX = 0;
    let minY = 1000;
    let maxY = 0;
    return _walkDom(node, {
        root: id || "__root",
        items: {
            __root: {
                id: "__root",
                name: "",
                attributes: {},
                rect: document.body.getBoundingClientRect(),
                children: [],
            },
        },
        counts: {
            __root: 0,
        },
        width: 0,
        height: 0,
    }, id || "__root");
    function _walkDom(node, structure, parent) {
        let _id = parent;
        // Call the callback function with the node
        if (!!node.hasAttribute && node.hasAttribute("data-lenz")) {
            const data = _getElProp(node);
            if (!data)
                return;
            const count = structure.counts[data?.name || ""] || 0;
            structure.counts[data?.name || ""] = count + 1;
            _id = `${data?.name || ""}::${count}`;
            const _rect = node.getBoundingClientRect();
            const rect = {
                top: _rect.top,
                left: _rect.left,
                width: _rect.width,
                height: _rect.height,
            };
            structure.items[_id] = {
                id: _id,
                name: data.name,
                rect,
                attributes: data.attributes,
                parent,
                children: [],
            };
            // add itself to parent
            structure.items[parent]?.children?.push(_id);
            // update the structure width and height
            minX = Math.min(minX, rect.left);
            minY = Math.min(minY, rect.top);
            maxX = Math.max(maxX, rect.left + rect.width);
            maxY = Math.max(maxY, rect.top + rect.height);
            structure.width = maxX - minX;
            structure.height = maxY - minY;
        }
        // Walk through all child nodes
        let child = node.firstChild;
        while (child) {
            if (!child)
                break;
            // @ts-ignore
            _walkDom(child, structure, _id);
            child = child.nextSibling;
        }
        console.log("structure", structure.width);
        return structure;
    }
    function _getElProp(el) {
        if (!el) {
            return false;
        }
        const name = el.getAttribute("data-lenz");
        /// find all attributes that start with data-lenz-
        const attributes = {};
        for (const attr of el.attributes) {
            if (attr.name.startsWith("data-lenz-")) {
                const key = attr.name.replace("data-lenz-", "");
                attributes[key] = attr.value;
            }
        }
        return {
            name: name || "",
            attributes,
        };
    }
}
