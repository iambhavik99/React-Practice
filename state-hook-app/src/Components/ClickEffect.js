import React, { useEffect, useState } from "react";
import { HookMouse } from "./HookMouse";

export function ClickEffect() {

    const [count, setCount] = useState(0);
    const [display, toggleDisplay] = useState(true);

    useEffect(() => {
        console.log('ClickEffect useEffect called..')
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <React.Fragment>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
            </button>
            <button onClick={() => toggleDisplay(!display)}>
                Toggle display
            </button>
            {display && <HookMouse />}
        </React.Fragment>
    );

}