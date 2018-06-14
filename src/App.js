import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import LikeMovies from './components/LikeMovies/LikeMovies';
import Articles from './components/Articles/Articles';
import MoreImages from './components/MoreImages/MoreImages';
import Users from './components/Users/Users';

class App extends Component {
    render() {
        return ( < Fragment >
            <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h1 className = "App-title" > Welcome to React < /h1> <
            /header> <
            LikeMovies / >
            <
            Articles / >
            <
            MoreImages / >
            <
            Users / >
            <
            /div> <
            div className = "project" > { /* LOADER FOR ALL */ }

            { /* LOADER FOR ALL */ } <
            /div> <
            /Fragment> 
        );
    }
}

export default App;