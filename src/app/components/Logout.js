import React from 'react';
import { PowerSettingsNew } from '@material-ui/icons';
function Logout({color="#FFFFFF", fontSize=30, onClick}) {
    return (
        <div id="logout" onClick={onClick}>
               <PowerSettingsNew id="cardIcon"  style={{color,fontSize}}/>
        </div>
    );
}

export default Logout;