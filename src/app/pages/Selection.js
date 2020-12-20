import React,{useContext} from 'react';

import firebase from '../api/Firebase'
import UserContext from '../api/UserContext'
import UserStorage from '../api/UserStorage'
import Card from '../components/Card';
import Logout from '../components/Logout';
import Logo from '../assets/logo.png'
import NavBar from '../components/NavBar';

function Selection() {

    return (
                    <div id="selectionWrapper">
                        <NavBar/>
                            <div id="cardWrapper">
                                <Card icon="add" title="New Order" link="new"/>
                                <Card icon="listalt" title="View Orders" link="orders"/>
                                <Card icon="settings" title="Manager" link="manager"/>
                            </div>
                    </div>
    );
}

export default Selection;
