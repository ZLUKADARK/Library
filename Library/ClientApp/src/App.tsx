import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import NewBook from './components/NewBook';
import EditBook from './components/EditBook';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/NewBook' component={NewBook} />
        <Route exact path='/EditBook/:id' component={EditBook} />
    </Layout>
);
