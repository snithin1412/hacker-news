import React from 'react';
import {api} from './api';
import Story from './Story';

const Show = () => {
    return (
        <React.Fragment>
            <Story apiFunc={api.show()} />
        </React.Fragment>
    );
};


export default Show;