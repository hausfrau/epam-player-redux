import React, {PureComponent} from 'react';
import PagesNavigation from '../../containers/PagesNavigation';
import './app.css';

export default class App extends PureComponent {

    render() {
        return <div className="app">
            <PagesNavigation/>
        </div>
    }
}