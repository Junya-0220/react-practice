import React, { useState } from 'react';

const App = () => {
  //useStateは配列を返して、2つの要素を持つ
  const [count, setCount] = useState(0);
  const increment = () => setCount(count +1 );
  const decrement = () => setCount(count -1 );
  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);
  const reset = () => setCount(0);
  const mul = () => setCount(count * 2);
  const three = () => setCount(previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  );

  return (
    <>
      <div>count: {count}</div>
      <button onClick = {increment}> +1 </button>
      <button onClick = {decrement}> -1 </button>
      <div>
      <button onClick = {increment2}> +1 </button>
      <button onClick = {decrement2}> -1 </button>
      </div>
      <div>
      <button onClick = {reset}> reset</button>
      </div>
      <div>
      <button onClick = {mul}> x2 </button>
      </div>
      <div>
      
      <button onClick = {three}> 3の倍数の時だけ３で割る </button>
      </div>
    </>
  );
}

export default App;
