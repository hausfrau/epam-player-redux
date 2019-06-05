import React from 'react';
import Albums from '../../containers/Albums';
import Album from '../../containers/Album';
import {Route} from "react-router-dom";

export default function AlbumsPage() {
    return (
        <div>
            <Route
                exact
                path='/albums'
                component={Albums}
            />
            <Route
                path='/albums/:albumId'
                component={Album}
            />
        </div>);
}
