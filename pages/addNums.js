import { useState } from 'react';
import {sum as addition} from './math.utils';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Sum() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSum = addition(num1, num2)
    setSum(newSum);
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label className={styles.denscription}>
          Number 1:
          <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
        </label>
        <br />
        <label className={styles.description}>
          Number 2:
          <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
        </label>
        <br />
        <button type="submit">Calculate Sum</button>
      </form>
      {<p className={styles.thirteen}>{sum}</p>}
    </div>
  );
}
