import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export default function MindMap({ nodes, edges, nodeTypes, onSelect }) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      onNodeClick={(_, node) => onSelect(node.data)}
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}
