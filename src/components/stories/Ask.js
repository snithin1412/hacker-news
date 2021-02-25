import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Ask = () => {
    return (
        <React.Fragment>
            <Story apiFunc={api.ask()} />
        </React.Fragment>
    );
};


export default Ask;