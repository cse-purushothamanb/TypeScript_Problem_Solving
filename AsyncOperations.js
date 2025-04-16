// AsyncOperations.jsx
import React, { useEffect, useState } from 'react';

async function add(a, b) {
  return a + b;
}
async function sub(a, b) {
  return a - b;
}
async function mul(a, b) {
  return a * b;
}

export default function AsyncOperations() {
  const [result, setResult] = useState('');

  useEffect(() => {
    async function calculate() {
      const a = 5, b = 4;
      const q1 = await add(a, b);
      const q2 = await sub(a, b);
      const q3 = await mul(a, b);
      setResult(`Addition: ${q1}, Subtraction: ${q2}, Multiplication: ${q3}`);
    }
    calculate();
  }, []);

  return <div>{result || "Calculating..."}</div>;
}
