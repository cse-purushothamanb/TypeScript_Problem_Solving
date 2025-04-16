// PromiseOperations.jsx
import React from 'react';
import { Promise } from 'react-promise'; // or a custom wrapper

function runOperations(a, b) {
  return Promise.all([
    Promise.resolve(a + b),
    Promise.resolve(a - b),
    Promise.resolve(a * b),
  ]).then(([q1, q2, q3]) =>
    `Addition: ${q1}, Subtraction: ${q2}, Multiplication: ${q3}`
  );
}

export default function PromiseOperations() {
  return (
    <Promise
      promise={runOperations(5, 4)}
      pending={() => <div>Calculating...</div>}
      fulfilled={result => <div>{result}</div>}
      rejected={err => <div>Error: {err.message}</div>}
    />
  );
}
