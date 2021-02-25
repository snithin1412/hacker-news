import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Top = () => {

    return (
        <React.Fragment>
            <Story apiFunc={api.top()} />
        </React.Fragment>
    );
};


export default Top;