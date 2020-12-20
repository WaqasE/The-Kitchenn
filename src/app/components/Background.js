import React from 'react';

function Background( {children} ) {
    return (
        <div id="container">
            {children}
        </div>
    );
}

export default Background;