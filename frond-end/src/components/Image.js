import React, {Component} from 'react';
import config from "../config";

class Image extends Component {
    render(){    
        const comments= this.props.img.comment ? this.props.img.comment.map(data=> 
            <p><span className="font-weight-bold">{data.createdBy.username}</span> </p>
            ) : " "

        return(
            <div> 
                <img className="img-fluid" src={config.rootPath + this.props.img.imageUrl} alt= {this.props.img.title}/>
                <h4>{this.props.img.title}</h4>
                <p>{this.props.img.description}</p>
                {comments}
            </div>
        )
    }
}

export default Image;