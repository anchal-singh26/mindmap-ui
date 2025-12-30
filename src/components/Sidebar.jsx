export default function Sidebar({ node, onUpdate }) {
  if (!node) {
    return <div className="p-4 text-gray-400">Select a node to view details</div>;
  }

  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">Edit Node</h2>

      <label className="text-xs">Title</label>
      <input
        className="border p-1 w-full mb-2"
        value={node.title}
        onChange={(e) => onUpdate({ ...node, title: e.target.value })}
      />

      <label className="text-xs">Details</label>
      <textarea
        className="border p-1 w-full"
        value={node.details}
        onChange={(e) => onUpdate({ ...node, details: e.target.value })}
      />
    </div>
  );
}