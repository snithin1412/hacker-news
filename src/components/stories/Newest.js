import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Newest = () => {

    return (
        <React.Fragment>
            <Story apiFunc={api.newest()} />
        </React.Fragment>
    );
};


export default Newest;