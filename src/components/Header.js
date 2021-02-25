import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    const logo = '/images/y18.gif';

    return (
        <div>
            <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{padding:'2px'}}>
                <tbody>
                    <tr>
                        <td style={{width:'18px', paddingRight:'4px'}}>
                            <Link to="top"><img src={logo} width="18" height="18" style={{border:'1px white solid'}} /></Link>
                        </td>
                        <td style={{lineHeight:'12pt', height:'10px'}}>
                            <span className="pagetop"><b className="hnname"><Link to="top">Hacker News</Link></b>
                            <span className="topsel"><Link to="new">new</Link></span> | <Link to="ask" className='ml-1 text-decoration-none'>ask</Link> | <Link to="show">show</Link> | <Link to="jobs">jobs</Link></span>
                        </td>
                        <td style={{textAlign:'right', paddingRight:'4px'}}>
                            <span className="pagetop"><a href="#">login</a></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Header;