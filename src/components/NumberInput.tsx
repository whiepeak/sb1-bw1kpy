import React, { useState } from 'react';

interface NumberInputProps {
  onAnalyze: (number: string) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({ onAnalyze }) => {
  const [number, setNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (number.length > 0) {
      onAnalyze(number);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ''))}
        placeholder="Nhập dãy số"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Phân tích
      </button>
    </form>
  );
};