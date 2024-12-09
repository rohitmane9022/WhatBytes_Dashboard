const colorMap = {
  'blue-400': '#60a5fa',
  'orange-400': '#fb923c',
  'red-400': '#f87171',
  'green-400': '#4ade80',
};

export function ProgressBar({ progress, label, bgcolor }) {
  console.log(progress, label, bgcolor);
  return (
    <div className="gap-4 mb-4 my-6">
      <p className="text-gray-500 text-lg">{label}</p>
      <div className="flex items-center justify-between my-3 gap-4">
        <div className="w-[80%] bg-gray-200 flex rounded-full h-2">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: colorMap[bgcolor],
            }}
          />
        </div>
        <p style={{
            
              color: colorMap[bgcolor], 
              
            }}>{progress}%</p>
      </div>
    </div>
  );
}