import React,{Component} from "react";

class ProfilePanel extends Component {
    render(){
         const display = this.props.username ? (
        <div>
            <span className="navbar-text" >wellcome , {this.props.username}</span>
        </div>
    ) : (
        <button className="btn btn-primary btn-block"
            onClick={this.props.onLogin}
        >
        login
        </button>
    );
        return(
            <div className="col-3 profile-panel text-right">
            {display}
           
            </div>
        );
    }
}

export default ProfilePanel;