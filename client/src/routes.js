
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon/index';
import Register from './pages/Register/index';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch> // Switch para chamar apenas 1 rota por vez
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>        
    )
}