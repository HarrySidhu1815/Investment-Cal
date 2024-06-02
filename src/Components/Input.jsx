import React from 'react'

const Input = ({id, name, type, value, onChange}) => {
    return (
        <p>
            <label id={id}>Initial Investment</label>
            <input id={id} name={name} onChange={(e) => onChange(name, e.target.value)} type={type} defaultValue={value}/>
        </p>
    )
}

export default Input
