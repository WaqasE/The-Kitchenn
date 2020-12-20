import React from 'react';
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
function Category ({icon, color="#FFF", fontSize=70, title, active=false, onClick}) {
    
    return (
        <div style={{textDecoration:'none',backgroundColor:active?'#ffa600':'white'}} id="category"  onClick={onClick}>
               <p  style={{color:active?'white':'#ffa600'}}  id="categoryTitle">{title}</p>
        </div>
    );
}

export default Category;