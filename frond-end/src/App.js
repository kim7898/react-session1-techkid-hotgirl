import React , {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "./axios";

import HomeScreen from './containers/HomeScreen';
import DetailScreen from './containers/DetailScreen';
import  {BrowserRouter , Route} from "react-router-dom"
class App extends Component {
  state={
  
  }
   _onLogin = () => {
    axios 
      .post('/api/auth',{
        username:"admin",
        password:"123456"
      })
      .then(Response =>  {
        console.log(Response)
        this.setState({
          username: Response.data.username,
          id: Response.data.id})
      }
      )
      .catch(err=>console.error(err));
  }
  render (){    

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={props=>{
           return <HomeScreen
            {...props}
            username={this.state.username} 
            onLogin={this._onLogin}
            />
          }}/>
          <Route path ="/images/:id" render={props =>{
            return <DetailScreen 
            {...props} 
            username={this.state.username} 
            onLogin={this._onLogin}
            />
          }}/>
        </div>
      </BrowserRouter>
    );
}
}

export default App;
