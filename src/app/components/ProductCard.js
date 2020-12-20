import React from 'react';

function ProductCard({title, onClick}) {
    return (
        <div id="productCard" onClick={onClick}>
              <p id="productCardTitle">{title}</p>
        </div>
    );
}

export default ProductCard;