import React, {Component} from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class Album extends Component {

    // albumId = parseInt(props.match.params.number, 10);

    render() {

        const match = this.props;
        const albumId = match.params ? parseInt(match.params.albumId) : 0;

        if (albumId) {
            return <div>album {albumId}</div>
        }

        return (
            <div>
                Nothing
            </div>
        );
    }
};