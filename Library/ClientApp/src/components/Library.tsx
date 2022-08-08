import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as LibraryStore from '../store/Library';

const Library = () => (
    
        <>
        Hi
        </>
);

export default connect()(Library);