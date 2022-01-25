// import React, {Component} from "react";
import React from 'react';
import Photo from "./Photo";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Photowall = (props) => {
    return (
        <div>
            <Link className='addIcon' to='/AddPhoto'></Link>
            <div className="photo-grid">
                {props.posts
                .sort(function(x,y) {
                    return y.id - x.id
                })
                .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
            </div>
        </div>
    );
}

// used for alerting the developer when they forget to specify props or
// specify the correct arguments for the props
Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall;


// class components
// class Photowall extends Component {
//     render() {
//         return <div className="photo-grid">
//         {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//     </div>
//     }
// }

// export default Photowall;