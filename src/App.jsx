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
  const [showSidebar, setShowSidebar] = useState(false);

  const updateNode = (updated) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === updated.id ? { ...n, data: updated } : n
      )
    );
    setSelected(updated);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-white">
      
      {/* ===== Mobile Header ===== */}
      <div className="md:hidden flex justify-between items-center px-4 py-2 border-b bg-white z-20">
        <h1 className="font-semibold text-sm">Mind Map</h1>

        <button
          disabled={!selected}
          className="border px-3 py-1 rounded text-sm disabled:opacity-50"
          onClick={() => setShowSidebar(true)}
        >
          Details
        </button>
      </div>

      {/* ===== Main Content ===== */}
      <div className="relative flex-1 w-full overflow-hidden">
        
        {/* ===== MindMap ===== */}
        <div className="absolute inset-0 h-full w-full">
          <MindMap
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onSelect={(node) => {
              setSelected(node);
              setShowSidebar(true);
            }}
            onCanvasClick={() => setShowSidebar(false)}
          />
        </div>

        {/* ===== Sidebar (Mobile + Desktop) ===== */}
        <div
          className={`
            fixed md:static top-0 right-0 h-full
            w-full md:w-80
            bg-gray-50 border-l z-30
            transform transition-transform duration-300 ease-in-out
            ${showSidebar ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0
          `}
        >
          {/* Mobile Close */}
          <div className="md:hidden flex justify-end p-2 border-b bg-white">
            <button
              className="text-sm px-3 py-1 border rounded"
              onClick={() => setShowSidebar(false)}
            >
              Close
            </button>
          </div>

          <Sidebar node={selected} onUpdate={updateNode} />
        </div>
      </div>
    </div>
  );
}
