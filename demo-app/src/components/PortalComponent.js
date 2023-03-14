import React from 'react'
import ReactDOM from 'react-dom'

export function PortalComponent() {
    return ReactDOM.createPortal(
        <h1>Hey there!</h1>,
        document.getElementById('root2')
    );
}