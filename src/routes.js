import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/pages/Header';
import Home from './components/pages/Home'; //Header + Home + Footer
import Filme from './components/pages/Filme';
import Erro from './components/pages/Erro';
import Footer from './components/pages/Footer';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route exact path="*" component={Erro}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;