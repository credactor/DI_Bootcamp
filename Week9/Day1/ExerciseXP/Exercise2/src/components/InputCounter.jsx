import React, { useState, useRef } from 'react'

function InputCounter() {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);

    const inputChange = () => {
        const inputValue = inputRef.current.value.length;
        setCount(inputValue);
    };

    return (
        <div>
            <h1>Character Counter</h1>
            <input type="text" ref={inputRef} onChange={inputChange} />
            <p>Number of Characters: {count}</p>
        </div>
    )
}

export default InputCounter;