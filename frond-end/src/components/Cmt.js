import React, {Component} from 'react';

class Cmt extends Component {
    state = {newCmt: "",}

  
  addCmt(event){  
        let text = this.state.newCmt;

 console.log(text)
  this.setState({
     newCmt: text,
     })
  }

  onChange(event) {
    console.log(event.target.value)

    this.setState({
      newCmt: event.target.value
    })
  }

    
  

        render(){    
        return(
            <div> 
                {this.props.username}:<input type="text" onChange={this.onChange.bind(this)}/>
                <button className="btn" onClick={this.addCmt.bind(this)}>Add </button>
            </div>
           );
         }
       }
       
export default Cmt;