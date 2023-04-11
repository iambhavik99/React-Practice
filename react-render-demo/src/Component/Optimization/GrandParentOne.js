import { useState } from "react"
import { ParentOne } from "./ParentOne";
import { ChildOne } from "./ChildOne";

export const GrandParentOne = () => {
    console.log('Grand parent component render');
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Grand parent Count - {count}</button>
            <ParentOne>
                <ChildOne />
            </ParentOne>
        </div>
    );

}