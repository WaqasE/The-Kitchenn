import React,{useState, useContext} from 'react';

import Background from '../components/Background';
import TextField from '../components/TextField';
import SubmitButton from '../components/SubmitButton';
import firebase from '../api/Firebase'
import UserContext from '../api/UserContext'
import UserStorage from '../api/UserStorage'

function Login() {
    const [isSubmiting, setisSubmiting] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const userCon = useContext(UserContext)

    const handleLogin = () =>{
        setError('')
        setisSubmiting(!isSubmiting)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            ()=>{
                setisSubmiting(false)
                const user = firebase.auth().currentUser
                userCon.setUser(user);
                UserStorage.setToken(user)
            }
        )
        .catch(
            (err)=>{
                setError(err.message)
                setisSubmiting(false)
            }
        )
        
    }
    return (
        <Background>
            <div id="loginBg1">
             </div>
             <div id="loginBg2">
             </div>
             <div id="loginWrapper">
                    <h3>The Kitchen</h3>
                    <p style={{ fontSize:13, textAlign:'center', padding:10}}>Welcome back, enter your credentials to log in</p>
                    <TextField 
                            icon="mail_outline"
                            name="email"
                            placeholder="Email"
                            type="text"
                            value={email}
                            onChange={event=>{setEmail(event.target.value)}}
                            required=""
                            id="textField"
                            
                        />
                        <TextField 
                            icon="lock"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={event=>{setPassword(event.target.value)}}
                            required=""
                            id="textField"
                        />

                         {error&&<p style={{fontSize:10, color:'red',marginTop:10, textAlign:'center'}}>{error}</p>}

                        <SubmitButton  
                            type="submit" 
                            onClick = {email &&password ?handleLogin: null}
                            isSubmiting={isSubmiting}
                             />
                             
            </div>       
        </Background>
    );
}

export default Login;