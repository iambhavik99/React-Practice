import React from "react";

function Button({ text, handleClick }) {

    console.log(`Render ${text} Increment`);

    return <button onClick={handleClick}>
        Increment
    </button>;
}

export default Button;