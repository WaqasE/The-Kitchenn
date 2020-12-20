import React from 'react';
import Icon from '@material-ui/core/Icon'


function DropDown( {color="#172B4D", fontSize="15" ,icon} ) {
    const list = [{id:1,name:'App', id:2,name:'Phone', id:3, name:'Third Party'}]
    return (
        <div id="dropDownWrapper">
            <Icon id="dropDownicon"  style={{color,fontSize}}>{icon}</Icon>
            <select name="dropDownInput" id="dropDownInput">
                {list.map(({ id, name }) => (
                    <option key={id} value={name}>{name}</option>
                 ))}
            </select>
        </div>
    );
}

export default DropDown;