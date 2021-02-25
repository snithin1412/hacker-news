import React from 'react';
import {api} from './api';
import Story from './Story';

const Top = () => {

    return (
        <React.Fragment>
            <Story apiFunc={api.top()} />
        </React.Fragment>
    );
};


export default Top;