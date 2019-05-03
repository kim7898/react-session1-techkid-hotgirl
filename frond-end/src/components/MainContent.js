import React , {Component} from 'react';
import Image from "./Image";
import {Link} from "react-router-dom"
class MainContent extends Component {
 render (){    
    const allImages = this.props.images.map(img =>  
    <div className="col-3"> 
      <Link to={`/images/${img._id}`}>
        <Image key={img._id} img={img}/> 
      </Link>
    </div>);

    return (
      <div className="container" >
        <div className='row' >{allImages}</div>
      </div>
    );
}
}

export default MainContent;
