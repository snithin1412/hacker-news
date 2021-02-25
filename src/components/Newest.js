import React from 'react';
import {api} from './api';
import Story from './Story';

const Newest = () => {

    return (
        <React.Fragment>
            <Story apiFunc={api.newest()} />
        </React.Fragment>
    );
};


export default Newest;