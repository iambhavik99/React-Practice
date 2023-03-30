import React, { useEffect, useState } from "react";

export function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const detectCoordinates = e => {
        console.log("detectCoordinates...");

        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('HookMouse useEffect called..')
        window.addEventListener('mousemove', detectCoordinates)

        return () => {
            console.log('Hooks useEffect unmounting.....');
            window.removeEventListener('mousemove', detectCoordinates);
        }

    }, [])

    return (
        <React.Fragment>
            <div>
                {x} ,{y}
            </div>
        </React.Fragment>
    );

}