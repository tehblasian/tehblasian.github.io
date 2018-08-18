import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='container'> 
                <Switch>
                    <Route path='/' component={Home}/>
                    <Route render={() => <p className='error'>Error 404: Page Not Found</p> }/>
                </Switch>  
            </div>
        </BrowserRouter>
    )
}

export default App;
