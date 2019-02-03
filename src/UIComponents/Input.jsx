import React from 'react';
const Input = (props) => {
    const {f,d,l,n,t, oc, v, } = props;
    return(
        <div className="row">
        <div className="input-field col s12 m12 l12">
        <input value={v} name={n} id={d} type={t} className="validate" onChange={oc}/>
        <label htmlFor={f} className="active">{l}</label>
        </div>
        </div>
    )
}

export default Input;