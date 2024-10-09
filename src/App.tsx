import React, { useState } from 'react';
import { NumberInput } from './components/NumberInput';
import { NumberAnalysis } from './components/NumberAnalysis';
import { numberMeanings } from './data/numberMeanings';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [analysis, setAnalysis] = useState<string[]>([]);
  const [total, setTotal] = useState<number | null>(null);

  const analyzeNumber = (number: string) => {
    const pairs = [];
    for (let i = 0; i < number.length - 1; i++) {
      pairs.push(number.slice(i, i + 2));
    }

    const meanings = pairs.map(pair => {
      const meaning = numberMeanings[pair] || 'Không có ý nghĩa';
      return `${pair}: ${meaning}`;
    });

    const sum = number.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const sumMeaning = numberMeanings[sum.toString()] || 'Không có ý nghĩa';

    setAnalysis(meanings);
    setTotal(sum);
    setInputNumber(number);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Phân Tích Số</h1>
      <NumberInput onAnalyze={analyzeNumber} />
      {analysis.length > 0 && (
        <NumberAnalysis analysis={analysis} total={total} inputNumber={inputNumber} totalMeaning={numberMeanings[total?.toString() || '']} />
      )}
    </div>
  );
}

export default App;