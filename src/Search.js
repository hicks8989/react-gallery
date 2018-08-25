import React, { Component } from 'react';
import queryString from 'query-string';

// Application components
import Gallery from './Gallery';
import Nav from './Nav';
import Form from './Form';

// Import APIKEY
import apiKey from './config';

export default class Search extends Component {

    // Create an object to hold state.
    state = {
        images: [],
        loading: true,
        query: typeof queryString.parse(this.props.query.search).search === 'string' ? queryString.parse(this.props.query.search).search :
            typeof this.props.query === 'string' ? this.props.query : 'dogs'
    }

    // Create a method to allow users to perform a search for images.
    performSearch = (query) => {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then( res => res.json() ) // Rerender the response in JSON format.
        .then( resData => {
            let images = []; // Create an empty array for the images.
            resData.photos.photo.forEach( photo => {
                images.push( {
                    source: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
                    alt: photo.title,
                });
            });
            // Set the state for the images to be the data that has come in and loading to false.
            this.setState( {
                images,
                loading: false,
            });
        }).catch( err => {
            console.log('Error fetching and parsing data:', err); // Log an error if there is one.
        });
    }

    // Create a method call to run the default performSearch function.
    componentDidMount() {
        console.log(queryString.parse(this.props.query.search).search);
        this.performSearch(this.state.query);
    }

    render() {
        return (
            <div className="container">
                <Form />
                <Nav />
                <Gallery query={this.state.query} loading={this.state.loading} images={this.state.images}/>
            </div>
        );
    }

}