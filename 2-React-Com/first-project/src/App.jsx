import React from "react";
import Kgbutton from "./KgButton";     // OK (assumes KgButton.js exists)
import Hello from "./Hello";          // ✅ Fixed: Added proper import

function App() {
  return (
    <div>
      <h1>This is the best react course</h1>  {/* ✅ fixed closing tag */}
      <Hello />                               {/* ✅ Self-closing custom component */}
      <Kgbutton />                            {/* ✅ If you want to show a button too */}
    </div>
  );
}

export default App;
