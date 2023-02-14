import { useState } from 'react';

export default function Sum() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSum = num1 + num2;
    setSum(newSum);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
        </label>
        <br />
        <label>
          Number 2:
          <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
        </label>
        <br />
        <button type="submit">Calculate Sum</button>
      </form>
      {<p>{sum}</p>}
    </div>
  );
}
