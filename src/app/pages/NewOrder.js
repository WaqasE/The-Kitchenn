import React,{useContext, useState} from 'react';

import firebase from '../api/Firebase'
import TextField from '../components/TextField';
import SubmitButton from '../components/SubmitButton';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AppSelection from '../components/AppSelection';

const originList = [
    {
        id:1,
        value:'App'
    },
    {
        id:2,
        value:'Phone'
    },
    {
        id:3,
        value:'Third Party'
    }
]

const orderTypeList = [
    {
        id:1,
        value:'Delivery'
    },
    {
        id:2,
        value:'Take Away'
    },
    {
        id:3,
        value:'Collection'
    },
    {
        id:4,
        value:'Send'
    }
]

function NewOrder() {

    const [name, setName] = useState('')
    const [origin, setOrigin] = useState('App')
    const [type, setType] = useState('Delivery')
    const [isSubmiting, setisSubmiting] = useState(false);
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () =>{
        setisSubmiting(!isSubmiting)
        firebase.database().ref('Orders').once('value',snapshot=>{
            if(snapshot.exists()){
               var count=snapshot.child('/count').val()
               var ccount = count+1;
               firebase.database().ref('Orders/'+ccount).set( {
                   'name':name,
                   'origin':origin,
                   'type':type
               } )
            .then(
                ()=>{
                    firebase.database().ref('Orders/count').set(ccount)
                }
            )
        }})
        .then(
            ()=>{
                setisSubmiting(false)
                setSubmitted(true)
            }
        )
        .catch(
            (err)=>{
                setisSubmiting(false)
            }
        )
        
    }



if(!submitted){
    return (
            <div id="orderWrapper">
                 <NavBar/>
                <div id="orderCardWrapper">
                       <h3>New Order</h3>
                       <p style={{alignSelf:'flex-start',fontSize:12, marginBottom:-8,marginTop:20}}>Order Name</p>
                                <TextField 
                                        name="orderName"
                                        placeholder="Input Name"
                                        type="text"
                                        value={name}
                                        onChange={event=>{setName(event.target.value)}}
                                        required=""     
                                        id="newOrder"         
                                />

                                <p style={{alignSelf:'flex-start',fontSize:12, marginBottom:-8,marginTop:10}}>Order Origin</p>
                                <div id="dropDownWrapper">
                                        <AppSelection arr={originList} id="dropDownInput"  onChange={event=>{setOrigin(event.target.value)}}/>
                                </div>

                                <p style={{alignSelf:'flex-start',fontSize:12, marginBottom:-8,marginTop:10}}>Order Type</p>
                                <div id="dropDownWrapper">
                                        <AppSelection arr={orderTypeList} id="dropDownInput"    onChange={event=>{setType(event.target.value)}} />
                                </div>

                                <SubmitButton  
                                        type="submit" 
                                        onClick = {name &&origin && type ?handleSubmit: null}
                                        isSubmiting={isSubmiting}
                                />
                </div>
            </div>
    )}
    else{
        return <Redirect to="neworderoption"/>
    }
}

export default NewOrder;
