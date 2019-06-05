import React, {Component} from 'react';
import PagesNavigation from '../../containers/PagesNavigation';
import './app.css';

export default class App extends Component {

    render() {
        return <div className="app">
            <PagesNavigation/>
        </div>
    }
}