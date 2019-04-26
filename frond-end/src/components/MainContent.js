import React , {Component} from 'react';
import Image from "./Image";

class MainContent extends Component {
 render (){    
    const allImages = this.props.images.map(img => <Image key={img._id} img={img}/>);

    return (
      <div className="container" >
        <div className='row' >{allImages}</div>
      </div>
    );
}
}

export default MainContent;
