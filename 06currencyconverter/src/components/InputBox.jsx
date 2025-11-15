import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-md flex items-center justify-between w-full">
      <div className="flex flex-col w-1/2">
        <label className="text-sm text-gray-400 mb-1">{label}</label>
        <input
          type="number"
          className="bg-transparent border-b border-gray-600 outline-none text-lg"
          placeholder="0"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
      </div>

      <div className="flex flex-col items-end w-1/3">
        <label className="text-sm text-gray-400 mb-1">Currency</label>
        <select
          className="bg-gray-800 text-white p-1 rounded-md"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
