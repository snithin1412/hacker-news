import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Page = (props) => {
    return (
        <center>
            <table id="main" border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef">
                <tbody>
                    <tr bgcolor="#ff6600"><td><Header /></td></tr>
                    <tr id="pagespace" title="New Links" style={{height:'10px'}}></tr>
                    <tr><td>{props.children}</td></tr>
                    <tr><td><img src="s.gif" height="10" width="0" alt=""/><Footer /></td></tr>
                </tbody>
            </table>  
        </center>
    );
};


export default Page;