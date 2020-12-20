import React from 'react';
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
function SmallCard({icon, color="#FFF", fontSize=70, link, title}) {
    
    return (
        <Link style={{textDecoration:'none'}} id="smallCard" to={link} >
               <Icon id="smallCardIcon"  style={{color,fontSize,mariginRight:10}}>{icon}</Icon>
               <p id="smallCardTitle">{title}</p>
        </Link>
    );
}

export default SmallCard;