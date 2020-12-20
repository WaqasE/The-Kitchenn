import React,{useState, useEffect} from 'react';
import './app/styles/style.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import './app/styles/component.css'
import Login from './app/pages/Login'
import Selection from './app/pages/Selection';
import Manager from './app/pages/Manager';
import ViewOrder from './app/pages/ViewOrder';
import NewOrder from './app/pages/NewOrder';
import Categories from './app/pages/Categories';
import AddCategory from './app/pages/AddCategory';
import AddProduct from './app/pages/AddProduct';
import NewOrderOption from './app/pages/NewOrderOption';
import UserContext from './app/api/UserContext'
import UserStorage from './app/api/UserStorage'
import AppBackground from './app/components/AppBackground';

function App() {
    const [user, setUser] = useState('')
    const restoreToken = async() =>{
        const token = await UserStorage.getToken()
        if(!token){
          return
        }
        setUser(token)
    }
  
    useEffect(()=>{
      restoreToken()
    },[])

    return (
      <UserContext.Provider value={{user, setUser}}>
          { user?
              <div id="content">
              <AppBackground>
                  <BrowserRouter>
                    <Switch>
                        <Route path="/" exact  component={Selection}/>
                        <Route path="/manager" exact  component={Manager}/>
                        <Route path="/new" exact  component={NewOrder}/>
                        <Route path="/orders" exact  component={ViewOrder}/>
                        <Route path="/categories" exact  component={Categories}/>
                        <Route path="/addcategory" exact  component={AddCategory}/>
                        <Route path="/addproducts" exact  component={AddProduct}/>
                        <Route path="/neworderoption" exact  component={NewOrderOption}/>
                    </Switch>
                    </BrowserRouter>
                </AppBackground>
              </div>:
                <Login/>}  
      </UserContext.Provider>
      );
}

export default App;


