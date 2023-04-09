import { useState } from "react";

export const UseState = () => {

    const [count, setCount] = useState(0);

    console.log("UseState render");

    return (
        <div>
            useState
            <div>
                Count : {count}
            </div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 5)}>Increment + 5 </button>
            <hr />
        </div>
    );

}