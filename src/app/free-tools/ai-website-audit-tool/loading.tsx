export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)]">
      <div className="animate-pulse text-center">
        <div className="text-2xl font-semibold text-gray-700">Loading AI Website Audit Tool...</div>
        <div className="mt-4 text-gray-500">Please wait while we prepare your tool.</div>
      </div>
    </div>
  );
}
