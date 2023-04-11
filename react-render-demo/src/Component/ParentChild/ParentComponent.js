import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    const [count, setCount] = useState(0);
    console.log("Parent component render");

    return (
        <div>
            {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 5)}>Increment by 5 </button>
            <ChildComponent />
        </div>
    );
}