import React from 'react';
import { numberMeanings } from '../data/numberMeanings';

interface NumberAnalysisProps {
  analysis: string[];
  total: number | null;
  inputNumber: string;
  totalMeaning: string;
}

const getColorClass = (pair: string) => {
  const yellowGroup = ['01', '04', '09', '00', '11', '17', '22', '24', '26', '27', '28', '32', '40', '45', '49', '55', '62', '63', '67', '69', '73', '76', '77', '82', '88'];
  const greenGroup = ['06', '08', '13', '14', '18', '19', '21', '23', '25', '29', '33', '38', '41', '42', '48', '61', '66', '68', '83', '84', '86', '89', '91', '94', '96', '98'];
  
  if (yellowGroup.includes(pair)) return 'bg-yellow-200';
  if (greenGroup.includes(pair)) return 'bg-green-200';
  return 'bg-red-200';
};

export const NumberAnalysis: React.FC<NumberAnalysisProps> = ({ analysis, total, inputNumber, totalMeaning }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Kết quả phân tích cho số {inputNumber}</h2>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Cặp số</th>
            <th className="px-4 py-2 text-left">Ý nghĩa</th>
          </tr>
        </thead>
        <tbody>
          {analysis.map((item, index) => {
            const [pair, meaning] = item.split(':');
            return (
              <tr key={index} className={getColorClass(pair.trim())}>
                <td className="px-4 py-2 font-medium">{pair}</td>
                <td className="px-4 py-2">{meaning}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {total !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-semibold">Tổng các chữ số: {total}</p>
          <p>Ý nghĩa của tổng: {totalMeaning}</p>
          <p className={`mt-2 p-2 rounded ${getColorClass(total.toString())}`}>
            Màu sắc: {getColorClass(total.toString()).includes('yellow') ? 'Vàng' : getColorClass(total.toString()).includes('green') ? 'Xanh lá' : 'Đỏ'}
          </p>
        </div>
      )}
    </div>
  );
};