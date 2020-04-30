import React from 'react';

const Input = props => {
    const { type, required, label, icon, value, onChanged } = props;
    return (
        <>
            <input
                type={type}
                required={required}
                value={value}
                onChange={onChanged}
            />
            <span className="highlight" /><span className="bar" />
            <label><i className={`${icon}`} /> {label}</label>
        </>
    )
}

export default Input;