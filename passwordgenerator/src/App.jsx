import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    let pass = "";
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black text-white">
      <div className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-96 border border-gray-700">
        <h1 className="text-2xl font-semibold text-center mb-6 tracking-wide">
          Password Generator
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 text-gray-100 outline-none"
            placeholder="Your password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="px-4 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-white font-medium"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center">
            <label className="text-gray-300">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-40 accent-blue-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-gray-300">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="w-4 h-4 accent-blue-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-gray-300">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="w-4 h-4 accent-blue-500"
            />
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="mt-6 w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 font-medium"
        >
          Generate New
        </button>
      </div>
    </div>
  );
}

export default App;
