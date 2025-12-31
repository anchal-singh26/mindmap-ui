let x = 0;
let y = 0;

export function buildGraph(root) {
  const nodes = [];
  const edges = [];

  function walk(node, parentId = null, depth = 0) {
    const id = node.id;

    // position calculation
    const position = {
      x: depth * 280,
      y: y * 140,
    };

    nodes.push({
      id,
      type: "custom",
      position,
      data: {
        ...node,
        level: depth,
      },
    });

    if (parentId) {
      edges.push({
        id: `e-${parentId}-${id}`,
        source: parentId,
        target: id,
        type: "smoothstep",
        style: { strokeWidth: 2 },
      });
    }

    y++;
    node.children?.forEach((child) =>
      walk(child, id, depth + 1)
    );
  }

  walk(root);
  return { nodes, edges };
}
