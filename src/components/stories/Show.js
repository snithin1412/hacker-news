import React from 'react';
import {api} from '../API/api';
import Story from '../common/Story';

const Show = () => {
    return (
        <React.Fragment>
            <Story apiFunc={api.show()} />
        </React.Fragment>
    );
};


export default Show;