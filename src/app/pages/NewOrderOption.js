import React,{useContext, useState, useEffect} from 'react';

import firebase from '../api/Firebase'
import UserContext from '../api/UserContext'
import UserStorage from '../api/UserStorage'
import Logout from '../components/Logout';
import TextField from '../components/TextField';
import SubmitButton from '../components/SubmitButton';
import { Redirect } from 'react-router-dom';
import Category from '../components/Category';
import Order from '../components/Order';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';

function NewOrder() {

    const [name, setName] = useState('')
    const [origin, setOrigin] = useState('')
    const [type, setType] = useState('')
    const [isSubmiting, setisSubmiting] = useState(false);
    const [submitted, setSubmitted] = useState(false)
    const [categories, setcategories] =useState([])
    const [products, setProducts] = useState([])
    const [active, setActive] = useState('')


    useEffect(
        ()=>{
            var data=[]
            firebase.database().ref('Categories').once('value',snapshot =>{
                if(snapshot.exists()){
                    snapshot.forEach(function(childSnapshot) {
                        data=[...data,{id:data.length,categories:childSnapshot.key}]
                     })
                     setcategories(data)
                 }
            } )
        
        },[] )

        useEffect(
            ()=>{
                if(active){
                    var data=[]
                    firebase.database().ref('Categories').once('value',snapshot =>{
                        if(snapshot.exists()){
                            snapshot.forEach(function(childSnapshot) {
                              if(childSnapshot.key===active){
                                childSnapshot.forEach(function(cs) {
                                data=[...data,{id:data.length,product:cs.val()}]})
                              }
                             })
                             setProducts(data)
                         }
                    } )
                }
            },[active]
        )






if(!submitted){
    return (
            <div id="newOrderOptionWrapper">
                 <NavBar/>
                <div id="newOrderOptionCardWrapper">
                    <div style={{width:'100%',height:60,background:'#ffa600', paddingLeft:60,alignItems:'center',display:'flex',marginBottom:10, borderRadius:30}}><p style={{fontSize:22,color:'white'}}>New Order</p></div>
                    <div style={{width:'100%',display:'flex',paddingLeft:30, paddingRight:30, justifyContent:'space-between'}}>
                        <div style={{alignItems:'center',display:'flex',flexDirection:'column',marginTop:10, marginLeft:10,}}>
                            {categories.map(({ id, categories }) => (
                                <Category key={id} title={categories} onClick = {()=>{setActive(categories)}}/> ))}
                        </div>
                     <div id="newOrderProductWrapper">
                             {products.map(({ id, product }) => (
                               <ProductCard key={id} title={product} /> ))}
                     </div>
                    <Order/>  
                </div>
                   
                </div>
            </div>
    )}
    else{
        return <Redirect to="neworderoption"/>
    }
}

export default NewOrder;
