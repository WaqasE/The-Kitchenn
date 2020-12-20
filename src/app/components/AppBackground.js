import React from 'react';

function AppBackground({children}) {
    return (
        <div id="bg">
            <div id="bgColor">
                  {children}
            </div>
        </div>
    );
}

export default AppBackground;