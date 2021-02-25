import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Jobs = () => {
    return (
        <React.Fragment>
            <Story apiFunc={api.job()} />
        </React.Fragment>
    );
};


export default Jobs;