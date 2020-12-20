import React from 'react';
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
function CatCard({link, title}) {
    
    return (
        <Link style={{textDecoration:'none'}} id="CatCard" to={link} >
               <p id="CatCardTitle">{title}</p>
        </Link>
    );
}

export default CatCard;