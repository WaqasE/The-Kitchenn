import React,{useContext, useEffect, useState} from 'react';

import firebase from '../api/Firebase'

import TextField from '../components/TextField'
import SubmitButton from '../components/SubmitButton'
import NavBar from '../components/NavBar';
import AppSelection from '../components/AppSelection';

const kitchen =  [
    {
        id:1,
        value:'abc'
    }
]


function AddCategory(props) {
    const [isSubmiting, setisSubmiting] = useState(false);
    const [category, setcategory] = useState('');


    const handleSubmit = () =>{
        setisSubmiting(!isSubmiting)
        firebase.database().ref('Categories'+'/'+category).set(
            {
                'count':'0'
            }
        )
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
                <div id="addCardWrapper">
                    <h3>New Category</h3>
                    <p style={{alignSelf:'flex-start',fontSize:12, marginBottom:-8,marginTop:20}}>Order Name</p>
                    <TextField 
                            name="orderName"
                            placeholder="Input Name"
                            type="text"
                            value={category}
                            onChange={event=>{setcategory(event.target.value)}}
                            required=""     
                            id="newOrder"         
                    />
                     <p style={{alignSelf:'flex-start',fontSize:12, marginBottom:-8,marginTop:20}}>Kitchen Name</p>     
                     <div id="dropDownWrapper">
                            <AppSelection arr={kitchen} id="dropDownInput"  />
                        </div>

                        <SubmitButton  
                                type="submit" 
                                onClick = {category?handleSubmit: null}
                                isSubmiting={isSubmiting}
                            />
                </div>
            </div>
    );
}

export default AddCategory;
