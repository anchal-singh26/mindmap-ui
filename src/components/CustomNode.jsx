import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  const isRoot = data.level === 0;
  const isParent = data.level === 1;

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        text-center
        px-6 py-4
        rounded-full
        border
        shadow-lg
        cursor-pointer
        transition-transform duration-200
        hover:scale-105
        ${
          isRoot
            ? "bg-gradient-to-br from-blue-300 to-blue-500 text-black border-blue-600 text-lg min-w-[200px] min-h-[200px]"
            : isParent
            ? "bg-gradient-to-br from-green-300 to-green-500 border-green-600 min-w-[160px]"
            : "bg-gradient-to-br from-orange-300 to-orange-500 border-orange-600 min-w-[130px]"
        }
      `}
      title={data.details}
    >
      {/* Incoming */}
      <Handle type="target" position={Position.Top} />

      <div className="font-semibold leading-tight">
        {data.title}
      </div>

      {data.summary && (
        <div className="text-xs opacity-80 mt-1">
          {data.summary}
        </div>
      )}

      {/* Outgoing */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
