import React, {Component} from 'react';

export default class Album extends Component {

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