import React from 'react';
const Button = (props) => {
    const {text, oc} = props
    return (
        <div>
            <button className="btn" onClick={oc}>{text}</button>
        </div>
    );
}

export default Button;