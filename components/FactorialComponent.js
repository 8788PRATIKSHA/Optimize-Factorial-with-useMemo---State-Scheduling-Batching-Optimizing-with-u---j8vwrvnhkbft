import React, { useMemo } from 'react';

const FactorialComponent = ({ number }) => {
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
};

const calculateFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
};

export default FactorialComponent;
