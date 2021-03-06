// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//         return <figure className='figure'>
//             <img className="photo" src={post.imageLink} alt={post.description} />
//             <figcaption><p>{post.description}</p></figcaption>
//             <div className='button-container'>
//                 <button className='remove-button'>Remove</button>
//             </div>
//         </figure>
//     }
// }

// export default Photo;


const Photo = (props) => {
    const post = props.post;
    return (
        <div>
            <figure className='figure'>
                <img className="photo" src={post.imageLink} alt={post.description} />
                <figcaption><p>{post.description}</p></figcaption>
                <div className='button-container'>
                    <button onClick={() => {
                        props.onRemovePhoto(post)
                    }}>Remove</button>
                </div>
            </figure>
        </div>
    );
}


// used for alerting the developer when they forget to specify props or
// specify the correct arguments for the props
Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired 
}

export default Photo;
