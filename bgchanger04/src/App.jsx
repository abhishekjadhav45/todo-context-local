

import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Purple", value: "purple" },
    { name: "Orange", value: "orange" },
    { name: "Black", value: "black" },
    { name: "Gray", value: "gray" },
  ];

  return (
    <div
      className="w-full h-screen transition-all duration-500 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 inset-x-0 flex justify-center">
        <div className="flex flex-wrap gap-3 bg-white/30 backdrop-blur-md px-5 py-3 rounded-3xl shadow-lg border border-white/20">
          {colors.map((c) => (
            <button
              key={c.value}
              onClick={() => setColor(c.value)}
              className="px-5 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform"
              style={{ backgroundColor: c.value }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute top-16 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-md">
          Background Color Changer
        </h1>
        <p className="text-lg text-white/80 mt-2">
          Click a color button to change the background
        </p>
      </div>
    </div>
  );
}

export default App;
