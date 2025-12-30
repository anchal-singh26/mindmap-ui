import { useState } from "react";
import mindmap from "./data/mindmap.json";
import { buildGraph } from "./utils/buildGraph";
import MindMap from "./components/MindMap";
import Sidebar from "./components/Sidebar";
import CustomNode from "./components/CustomNode";

const nodeTypes = { custom: CustomNode };
const built = buildGraph(mindmap);

export default function App() {
  const [nodes, setNodes] = useState(built.nodes);
  const [edges] = useState(built.edges);
  const [selected, setSelected] = useState(null);

  const updateNode = (updated) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === updated.id ? { ...n, data: updated } : n
      )
    );
    setSelected(updated);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <MindMap
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onSelect={setSelected}
        />
      </div>
      <div className="w-80 border-l bg-gray-50">
        <Sidebar node={selected} onUpdate={updateNode} />
      </div>
    </div>
  );
}