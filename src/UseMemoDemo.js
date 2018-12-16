import React, { useState, useMemo } from 'react';

export default function UseMemoDemo() {
  const [count, setCount] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const sum = useMemo(() => {
    console.log('Computing a + b, count: ' + count);
    return a + b
  }, [a, b]);

  return <div>
    <h1>useMemo Demo</h1>
    <div>a: {a}</div>
    <div>b: {b}</div>
    <div>count: {count}</div>
    <div><button onClick={() => {
      setA(a + 1)
    }}>A</button></div>
    <div><button onClick={() => {
      setB(b + 1)
    }}>B</button></div>
    <div><button onClick={() => {
      setCount(count + 1)
    }}>Count</button></div>
  </div>
}
