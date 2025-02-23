export default function DailyProgress() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Daily Progress</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">Words Learned Today</p>
          <p className="text-3xl font-bold">0/10</p>
        </div>
        <div>
          <p className="text-gray-600">Current Streak</p>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
        <div className="bg-blue-600 h-2.5 rounded-full w-0"></div>
      </div>
    </div>
  );
}
