import React from 'react';
import PropTypes from 'prop-types';

// Application Components:
import GalleryItem from './Gallery-item';

// Render the Gallery Component for the Application.
const Gallery = props => {

    // Create a GalleryItem for each picture.
    let galleryItem = props.images.map( (image, index) => 
        <GalleryItem key={index} source={image.source} alt={image.alt}/>
    );

    // Render the Gallery Component.
    return (
        <div className="photo-container">
            { props.images.length > 0 ? <h2>Results for {props.query}:</h2> : '' }
            <ul>
            {
                props.images.length > 0 || props.loading ?
                    galleryItem
                :
                    <li className="not-found">
                        <h3>No Results Found</h3>
                        <p>Search did not return any results. Please try again.</p>
                    </li>
            }
            </ul>
        </div>
    );
};

// Create Gallery proptypes.
Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired
};

// Send Gallery Component to parent Application Component Class.
export default Gallery;