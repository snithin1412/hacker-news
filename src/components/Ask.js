import React from 'react';
import {api} from './api';
import Story from './Story';

const Ask = () => {
    return (
        <React.Fragment>
            <Story apiFunc={api.ask()} />
        </React.Fragment>
    );
};


export default Ask;