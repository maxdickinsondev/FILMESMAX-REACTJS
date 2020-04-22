import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

import TopRated from './pages/RatedMovie';
import NowPlaying from './pages/MoviePlaying';
import UpComing from './pages/MovieComing';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details/:movieinfo" component={Details} />
                <Route path="/toprated" component={TopRated} />
                <Route path="/nowplaying" component={NowPlaying} />
                <Route path="/upcoming" component={UpComing} />
            </Switch>
        </BrowserRouter>
    )
}