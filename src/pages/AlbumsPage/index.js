import React from 'react';
import Albums from '../../containers/Albums';
import Album from '../../containers/Album';
import {Route} from "react-router-dom";

export default function AlbumsPage({match}) {
    return (
        <div>
            <Route
                exact
                path='/albums'
                // path={match.path}
                component={Albums}
            />
            <Route
                path='/albums/:albumId'
                // path={`${match.path}/:albumId`}
                component={Album}
            />
        </div>);
    // return (<Albums/>);
}
