import React, { useState } from "react";

export function HookCounter() {

    const initialCounter = 0;
    const [counter, setCount] = useState(initialCounter);

    return <React.Fragment>
        {counter}
        <button onClick={() => setCount(initialCounter)}>
            Reset
        </button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
            Increment
        </button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>
            Decrement
        </button>
    </React.Fragment>

}