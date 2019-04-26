import React , {Component} from "react";

class Searchfield extends Component {
    _handleTextChange=event=>this.props.onSearchChange(event.target.value)
    render(){
        return(
            <form className="col-3">
                <input onChange={this._handleTextChange} className="form-control" type="text" placeholder="Search" />
            </form>
        )
    }
}
export default Searchfield