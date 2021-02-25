import React from 'react';
import {api} from './api';
import Story from './Story';

const Jobs = () => {
    return (
        <React.Fragment>
            <Story apiFunc={api.job()} />
        </React.Fragment>
    );
};


export default Jobs;