import React,{useContext, useEffect, useState} from 'react';

import firebase from '../api/Firebase'
import UserContext from '../api/UserContext'
import UserStorage from '../api/UserStorage'
import Logout from '../components/Logout';
import TextField from '../components/TextField'
import SubmitButton from '../components/SubmitButton'
import NavBar from '../components/NavBar';

function AddProduct(props) {
    const [isSubmiting, setisSubmiting] = useState(false);
    const [product, setproduct] = useState('');
    const userCon = useContext(UserContext)
    const [categories, setCategories]= useState([])
    const [selectedCat, setselectedCat]=useState('')

    useEffect(
        ()=>{
            var data=[]
            firebase.database().ref('Categories').once('value',snapshot =>{
                snapshot.forEach(function(childSnapshot) {
                    if(data.length===0){setselectedCat(childSnapshot.key)}
                    data.push(
                        <option value={childSnapshot.key}>{childSnapshot.key}</option>
                    )
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

    const handleSubmit = () =>{
        setisSubmiting(!isSubmiting)
        firebase.database().ref('Categories/'+selectedCat).once('value',snapshot=>{
            if(snapshot.exists()){
               var count=snapshot.child('/count').val()
               var ccount = count+1;
               firebase.database().ref('Categories/'+selectedCat+'/'+ccount).set( product )
            .then(
                ()=>{
                    firebase.database().ref('Categories/'+selectedCat+'/count').set(ccount)
                }
            )
        }})
        .then(
            ()=>{
                setisSubmiting(false)
                props.history.goBack()
            }
        )
        .catch(
            (err)=>{
                setisSubmiting(false)
            }
        )
        
    }

    return (
            <div id="categoriesWrapper">
                 <NavBar/>
                <div id="addProductWrapper">
                        <h3>Add Product</h3>
                        <p style={{alignSelf:'flex-start',fontSize:12, marginBottom:-8,marginTop:20}}>Product Name</p>
                        <TextField 
                            name="orderName"
                            placeholder="Input Name"
                            type="text"
                            value={product}
                            onChange={event=>{setproduct(event.target.value)}}
                            required=""     
                            id="newOrder"         
                                />


                            <p style={{alignSelf:'flex-start',fontSize:12, marginBottom:-8,marginTop:20}}>Category</p>
                            <div id="dropDownWrapper">
                                <select   onChange={event=>{setselectedCat(event.target.value)}} name="dropDownInput" id="dropDownInput">
                                        {categories}
                                </select>
                            </div>

                            <SubmitButton  
                                    type="submit" 
                                    onClick = {product && selectedCat?handleSubmit: null}
                                    isSubmiting={isSubmiting}
                             />

                 </div>
            </div>
    );
}

export default AddProduct;
