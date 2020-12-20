import React,{useContext, useEffect, useState} from 'react';

import firebase from '../api/Firebase'
import UserContext from '../api/UserContext'
import UserStorage from '../api/UserStorage'
import CatCard from '../components/CatCard';
import Logout from '../components/Logout';
import AddCard from '../components/AddCard';
import NavBar from '../components/NavBar';

function Categories() {
    const [categories, setCategories]= useState([])
    const userCon = useContext(UserContext)

    useEffect(
        ()=>{
            var data=[]
            firebase.database().ref('Categories').once('value',snapshot =>{
                snapshot.forEach(function(childSnapshot) {
                    data=[...data,{id:data.length,value:childSnapshot.key}]
                    // console.log(childSnapshot.key)
                })
                setCategories(data)
            } )
        
        },[]
    )


    const handleLogout = () =>{
        firebase.auth().signOut().then(
            ()=>{
            userCon.setUser(null);
            UserStorage.removeToken()
        }
        )
        
    }



    return (
            <div id="categoriesWrapper">
               <NavBar/>
                <div id="categoriesCardWrapper">
                    <div style={{width:'100%',height:60,background:'#ffa600', paddingLeft:30,alignItems:'center',display:'flex',marginBottom:15,}}><p style={{fontSize:22,color:'white'}}>Categories</p></div>
                    {categories.map(({ id, value }) => (
                       <CatCard key={id} title={value}/>
                    ))}
                    <AddCard icon="add" link="addcategory"/>
                </div>
            </div>
    );
}

export default Categories;
