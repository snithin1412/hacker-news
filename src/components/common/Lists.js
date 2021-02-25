import React from 'react';

const Lists = () => {
    return (
        <table style={{borderSpacing: '7px 0px'}}>
            <tbody>
                <tr><td><a href="#">leaders</a></td><td>Users with most karma</td></tr>
                <tr><td><a href="#">front</a></td><td>Front page submissions for a given day (e.g. <a href="#">2016-06-20</a>)</td></tr>
                <tr><td><a href="#">best</a></td><td>Highest-voted recent links</td></tr>
                <tr><td><a href="#">active</a></td><td>Most active current discussions</td></tr>
                <tr><td><a href="#">bestcomments</a></td><td>Highest-voted recent comments</td></tr>
                <tr><td><a href="#">noobstories</a></td><td>Submissions from new accounts</td></tr>
                <tr><td><a href="#">noobcomments</a></td><td>Comments from new accounts</td></tr>
                <tr><td><a href="#">whoishiring</a></td><td>Monthly "Who Is Hiring" threads</td></tr>
                <tr><td><a href="#">proberts</a></td><td>Immigration AMAs with Peter Roberts</td></tr>
            </tbody>
        </table>
    );
};

export default Lists;