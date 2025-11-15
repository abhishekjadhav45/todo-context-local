import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-[400px] bg-gray-950 p-6 rounded-3xl shadow-2xl">
        <h1 className="text-2xl font-semibold text-center mb-6 text-blue-400">
          💱 Currency Converter
        </h1>

        <InputBox
          label="From"
          amount={amount}
          currencyOptions={currencyOptions}
          onCurrencyChange={setFrom}
          onAmountChange={setAmount}
          selectedCurrency={from}
        />

        <div className="flex justify-center my-4">
          <button
            onClick={swap}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-all"
          >
            Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={currencyOptions}
          onCurrencyChange={setTo}
          selectedCurrency={to}
          amountDisabled
        />

        <button
          onClick={convert}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-medium"
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
