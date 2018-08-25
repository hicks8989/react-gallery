import React from 'react';
import PropTypes from 'prop-types';

// Render the GalleryItem Component.
const GalleryItem = props => 
    <li>
        <img src={props.source} alt={props.alt} />
    </li>;

// Create GalleryItem proptypes.
GalleryItem.propTypes = {
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

// Export GalleryItem to its parent Gallery Component.
export default GalleryItem;