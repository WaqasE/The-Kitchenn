import React from 'react';
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
function addCard({icon, color="#FFF", fontSize=70, link, title}) {
    
    return (
        <Link style={{textDecoration:'none'}} id="addCard" to={link} >
               <Icon id="addCardIcon"  style={{color,fontSize,mariginRight:10}}>{icon}</Icon>
               <p id="addCardTitle">{title}</p>
        </Link>
    );
}

export default addCard;