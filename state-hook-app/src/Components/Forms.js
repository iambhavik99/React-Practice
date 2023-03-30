import React, { useState } from "react";

export function Forms() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <React.Fragment>
            <input
                type="text"
                value={name.firstName}
                onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
            <input
                type="text"
                value={name.lastName}
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />

            <div>firstName : {name.firstName}</div>
            <div>lastName : {name.lastName}</div>
        </React.Fragment>
    );
}