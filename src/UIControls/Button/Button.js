import React from 'react';
import './Button.css'

const Button = props => {
    function materializeEffect(event) {
        const circle = document.createElement('div')
        const x = event.nativeEvent.layerX
        const y = event.nativeEvent.layerY
        circle.classList.add('circle')
        circle.style.left = `${x}px`
        circle.style.top = `${y}px`
        event.target.appendChild(circle);
    }

    return <div {...props} onClickCapture={e => materializeEffect(e)} className={`form_button ${props.className}`}>{props.label}</div>
}

export default Button;