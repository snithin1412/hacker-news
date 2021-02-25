import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useLocation} from 'react-router';
import QueryString from 'query-string';
import Item from './Item';


const ListItem = ({data}) => {

    const [offset, setOffset] = useState(0);
    const [perPage] = useState(30);
    const [dataPerPage, setDataPerPage] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [nextPage, setNextPage] = useState(2);
    const [more, setMore] = useState(false);

    const location = useLocation();
    const pathName = location.pathname;
    const history = useHistory();
    const queryParams = location.search ? QueryString.parse(location.search): null;

    useEffect(() => {
        if(queryParams && queryParams.p) {
            if (data.length > perPage * (+queryParams.p -1)) {
                let newOffset = perPage * (+queryParams.p - 1);
                setOffset(newOffset);
                setNextPage(+queryParams.p + 1);
                setDataPerPage(data.slice(newOffset, newOffset + perPage));
                moreButton(+queryParams.p);
            }
            else {
                history.push(pathName);
                setDataPerPage(data.slice(offset, offset + perPage));
                if (data.length > perPage) {
                    setMore(true);
                }
            }
        }
        else {
            setDataPerPage(data.slice(offset, offset + perPage));
            if (data.length > perPage) {
                setMore(true);
            }
        }
    }, [pageCount])

    const moreButton = (pageNum) => {
        if (data.length <= pageNum * perPage) {
            setMore(false);
        }
        else {
            setMore(true);
        }
    }

    const paginate = () => {
        setOffset(pageCount * perPage);
        setNextPage(nextPage + 1);
        setPageCount(pageCount + 1);
    }


    return (
        <React.Fragment>
            <table border="0" cellPadding="0" cellSpacing="0" className="itemlist">
                 <tbody>
                    { dataPerPage.map((data, index) => {
                        return (
                            <Item id={data} number={offset + index + 1} key={index} />
                        )
                    })}
                    <tr className="morespace" ></tr>
                    <tr>
                        <td colSpan="2"></td>
                        {more &&<td className="title"><Link to={`${pathName}?p=${+nextPage}`} onClick={paginate} className="morelink" rel="next">More</Link></td>}
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};


export default ListItem;