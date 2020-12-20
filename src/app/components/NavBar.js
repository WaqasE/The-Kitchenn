import React,{useContext} from 'react';

import Logout from './Logout';
import Logo from '../assets/logo.png'
import firebase from '../api/Firebase'
import UserContext from '../api/UserContext'
import UserStorage from '../api/UserStorage'
function NavBar() {
    const userCon = useContext(UserContext)

    const handleLogout = () =>{
        firebase.auth().signOut().then(
            ()=>{
            userCon.setUser(null);
            UserStorage.removeToken()
        }
        )
        
    }

    return (
        <div style={{display:'flex',height:80,justifyContent:'space-between',alignItems:'center', position:'absolute', top:40, width:'100%',paddingLeft:40,paddingRight:40}}>
        <div style={{display:'flex',alignItems:'center'}}>
                <img style={{width:70,height:50,marginRight:20, marginTop:-10}} src={Logo} alt="logo"/>
                <p style={{fontSize:25,color:'white', fontFamily:'cursive'}}>The Kitchenn</p>
        </div>
        <Logout onClick={handleLogout}/>
    </div>
    );
}

export default NavBar;