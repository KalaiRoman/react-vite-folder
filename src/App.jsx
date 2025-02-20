import React from "react";

function App() {
  return (
    <div className="text-blue-500 flex gap-2 p-2 flex-col xs:flex-col sm:flex-row bg-amber-300">
      <div className="w-full sm:w-1/2 lg:bg-red-300 p-4">left</div>
      <div className="w-full sm:w-1/2 p-4">right</div>
    </div>
  );
}

export default App;
