  import React from 'react';
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
function Card({icon, color="#FFF", fontSize=70, link, title}) {
    
    return (
        <Link style={{textDecoration:'none'}} id="card" to={link} >
               <Icon id="cardIcon"  style={{color,fontSize,mariginRight:10}}>{icon}</Icon>
               <p id="cardTitle">{title}</p>
        </Link>
    );
}

export default Card;