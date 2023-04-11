import { useState } from "react"

export const ParentOne = ({ children }) => {
    console.log('Parent component render');
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Parent Count - {count}</button>
            {children}
        </div>
    );

}