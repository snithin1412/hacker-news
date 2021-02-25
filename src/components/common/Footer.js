import React from 'react';

const Footer = () => {
    return (
        <div>
        <table width="100%" cellSpacing="0" cellPadding="1"><tbody><tr><td bgcolor="#ff6600"></td></tr></tbody></table>
       <br></br>
       
        <center>
            <span className="yclinks">
            <a href="/static/newsguidelines.html">Guidelines</a>
            | <a href="/static/newsfaq.html">FAQ</a>
            | <a href="lists">Lists</a>
            | <a href="https://github.com/HackerNews/API">API</a>
            | <a href="/static/security.html">Security</a>
            | <a href="http://www.ycombinator.com/legal/">Legal</a>
            | <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
            | <a href="mailto:hn@ycombinator.com">Contact</a>
            </span>
            <br></br>
            <br></br>
            <form method="get" action="//hn.algolia.com/">
                Search: <input type="text" name="q" defaultValue="" size="17" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoComplete="false" />
            </form>
        </center>
            </div>    
    );
};

export default Footer;