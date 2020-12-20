const key = "172Ee172558@TOCTOC"

const setToken = async authToken  =>{
    try{
    await localStorage.setItem( key, authToken);
    console.log(authToken)
}
    catch(error){
        console.log(error);
    }
}

const getToken = async() =>{
    try{
        const token = await localStorage.getItem(key)
        console.log(token)
        return token;
    }
    catch(error){
        console.log(error);
    }

}

const removeToken = () =>{
    localStorage.removeItem(key);
}

export default {setToken, getToken, removeToken} 