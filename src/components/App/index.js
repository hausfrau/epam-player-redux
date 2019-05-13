import React, { Component } from 'react';
import Tracks from '../../containers/Tracks';
import './App.css';
// import { connect } from 'react-redux';

const App = () => (
        <div className="App">
            <header className="App-header">
                <h1>It's a player</h1>
            </header>
            <Tracks />
        </div>
)



export default App