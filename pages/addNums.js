import { useState } from 'react';
import {sum as addition} from './math.utils';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header';

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
    <>
      <Header />
      <div className={styles.main}>
        <form onSubmit={handleSubmit}>
          <label className={styles.description}>
            Number 1:
            <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
          </label>
          <br />
          <label className={styles.description}>
            Number 2:
            <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
          </label>
          <br />
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" type="submit">Calculate Sum</button>
          {<p className='mt-1 relative p-3 text-red-500'>{sum}</p>}
        </form>
        
      </div>
    </>
  );
}
