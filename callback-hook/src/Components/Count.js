import React from "react";

function Count({ text, count }) {
    console.log(`Render ${text} count : ${count}`);
    return <div>
        {text} : {count}
    </div>;
}

export default Count;