import React from 'react';


function AppSelection( {onChange, id, arr}) {
    return (
        <div id="dropDownWrapper">
        <select      onChange={onChange} name={id} id={id}>
        {arr.map(({ id, value }) => (
            <option key={id} value={value}>{value}</option>
        ))}
        </select>
    </div>
    );
}

export default AppSelection;