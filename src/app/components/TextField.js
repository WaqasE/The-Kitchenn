import React from 'react';
import Icon from '@material-ui/core/Icon'


function TextField( {color="#172B4D", fontSize="15" ,icon, id, ...otherProps} ) {
    return (
        <div id={`${id}Wrapper`}>
           {icon&&<Icon id="textFieldicon"  style={{color,fontSize}}>{icon}</Icon>}
            <input id={`${id}Input`}   {...otherProps} />
        </div>
    );
}

export default TextField;