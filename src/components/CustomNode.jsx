export default function CustomNode({ data }) {
  return (
    <div
      title={data.details}
      className="bg-blue-400 text-black px-4 py-2 rounded-full shadow hover:bg-blue-500 transition cursor-pointer"
    >
      <div className="font-semibold">{data.title}</div>
      <div className="text-xs opacity-70">{data.summary}</div>
    </div>
  );
}