import React,{useContext} from 'react';

import firebase from '../api/Firebase'
import UserContext from '../api/UserContext'
import UserStorage from '../api/UserStorage'
import SmallCard from '../components/SmallCard';
import Logout from '../components/Logout';
import NavBar from '../components/NavBar';

function Manager() {
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
            <div id="managerWrapper">
                <NavBar/>
                <div id="managerCardWrapper">
                    <SmallCard icon="listalt" title="Categories" link="categories"/>
                    <SmallCard icon="ballot" title="Products" link="addproducts"/>
                    <SmallCard icon="morehoriz" title="Options" link="manager"/>
                    <SmallCard icon="restore" title="History" link="orders"/>
                    <SmallCard icon="settings" title="Settings" link="manager"/>
                </div>
            </div>
    );
}

export default Manager;
