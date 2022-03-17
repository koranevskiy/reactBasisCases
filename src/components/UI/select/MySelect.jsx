import React from 'react';

const MySelect = ({options, defaultValue, value,onChange}) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option value="" disabled>{defaultValue}</option>
            {options.map(item => {
                return <option value={item.value} key={item.value}>{item.name}</option>
            })}
        </select>
    );
};

export default MySelect;