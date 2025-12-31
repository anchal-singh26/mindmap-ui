import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export default function MindMap({
  nodes,
  edges,
  nodeTypes,
  onSelect,
  onCanvasClick,
}) {
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        panOnDrag
        panOnScroll
        zoomOnPinch
        zoomOnScroll

        /* Node click */
        onNodeClick={(_, node) => onSelect(node.data)}

        /* Empty canvas click (mobile UX) */
        onPaneClick={onCanvasClick}

        /* Prevent weird mobile jumps */
        preventScrolling={false}
      >
        {/* Zoom / fit controls */}
        <Controls position="bottom-left" />

        {/* Dotted background */}
        <Background gap={16} size={1} />
      </ReactFlow>
    </div>
  );
}
