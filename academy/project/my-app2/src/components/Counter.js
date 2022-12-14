import React, { useState } from 'react';

const Counter = (props) =>{
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count+1);
    };
    const clickString = props.data || 'Click'; // 참일때 || 거짓일때 ES6
    return (
         <button onClick={increment}>{clickString} {count}</button> 
    );
};

export default Counter;