import React from 'react';

const MySorting = ({deafaultValue,options,value,onChange}) => {
    return (
    <select value={value} onChange={(e)=>onChange(e.target.value)} >
        <option disabled>{deafaultValue}</option>
        {options.map(option=><option key={option.value} value={option.value}>{option.name}</option>)}
      </select>
    );
};

export default MySorting ;