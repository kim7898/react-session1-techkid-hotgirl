import React , {Component} from 'react';
import Navbar from "./components/Navbar/index";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "./axios";
import MainContent  from "./components/MainContent";

class App extends Component {
  state={
    images:[],
    displayImage:[],
    searchString:""
  }
  componentDidMount(){
    axios 
    .get( "/api/images")
    .then(data => {
      console.log(data.data)
    
        this.setState({images: data.data, 
     })
    })
    .catch(err=> console.error(err))
  }
  _onSearchChange = text => this.setState({searchString:text})
  render (){    
    const  displayImage = this.state.images.filter(img => img.title.includes(this.state.searchString) || img.description.includes(this.state.searchString) );

    return (
      <div className="App">
        <Navbar onSearchChange={this._onSearchChange}/>
        <MainContent images={displayImage} />
          
        
      </div>
    );
}
}

export default App;
