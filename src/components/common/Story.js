import React, {useState, useEffect} from 'react';
import ListItem from '../List/ListItem';

const Story = ({apiFunc}) => {

    const [mainStory, setMainStory] = useState([]);
    const [delay, setDelay] = useState(true);
    
    useEffect(() => {
        apiFunc.then(res => {
            setMainStory(res);
            setDelay(false);
        }).catch(error => {
            console.log(error.response);
            setDelay(false);
        });
    },[])
    

    return (
        <React.Fragment>
            {!delay &&<ListItem data={mainStory} />}
        </React.Fragment>
    );
};

export default Story;