import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Apod from '../pages/apod';
import Clima from '../pages/clima';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Apod} />
        <Route path='/clima' component={Clima} />
    </Switch>
);

export default Routes;