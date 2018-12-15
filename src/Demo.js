import React, { useState } from 'react';

export default function() {
  const [value, setValue] = useState(0);
  
  return <div>
    <h1>Demo</h1>
    <div>Count: {value}</div>
    <button onClick={() => setValue(value + 1)}>Click!</button>
  </div>
}