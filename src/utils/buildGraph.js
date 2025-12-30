let y = 0;

export function buildGraph(data, parent = null, nodes = [], edges = []) {
  const nodeId = data.id;

  nodes.push({
    id: nodeId,
    data: data,
    position: { x: parent ? 250 : 0, y: y += 100 },
    type: "custom",
    hidden: false
  });

  if (parent) {
    edges.push({
      id: `${parent}-${nodeId}`,
      source: parent,
      target: nodeId
    });
  }

  data.children.forEach(child =>
    buildGraph(child, nodeId, nodes, edges)
  );

  return { nodes, edges };
}
