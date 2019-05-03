import React , {Component} from 'react';
import Navbar from "../components/Navbar/index";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../axios";
import Image from "../components/Image";
import Cmt from "../components/Cmt"
class DetailScreen extends Component {
    state={
       
      }
      componentDidMount(){
        axios 
        .get( `/api/images/${this.props.match.params.id}`)
        .then(data => {
          console.log(data.data)
        
            this.setState({image: data.data, 
         })
        })
        .catch(err=> console.error(err))
      }
      _onSearchChange = text => this.setState({searchString:text})
      render (){  
        

    return (
        <div>
            <Navbar
         onSearchChange={this._onSearchChange} 
         onLogin={this.onLogin}
         username={this.props.username}/>
         <div className="main-content container">
            <div className="row">
                <div className="col-8 mr-auto ml-auto">
                        {this.state.image ?  <Image img={this.state.image}/>:""}
                        <Cmt username={this.props.username}/>
                        
                </div>
            </div>
         </div>
       
        </div>
   
    );
}
}

export default DetailScreen;
