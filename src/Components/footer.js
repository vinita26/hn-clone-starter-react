import React from "react";

const Footer = () => {
    return (
        <td className="footer">
            <center>
                <span>
                    <a href="https://news.ycombinator.com/newsguidelines.html"> Guidelines </a>|
                <a href="https://news.ycombinator.com/newsfaq.html"> FAQ </a>|
                <a href="mailto:hn@ycombinator.com"> Support </a>|
                <a href="https://github.com/HackerNews/API"> API </a>|
                <a href="https://news.ycombinator.com/security.html"> Security </a>|
                <a href="https://news.ycombinator.com/lists"> Lists </a>|
                <a href="https://news.ycombinator.com/bookmarklet.html"> Bookmarklet </a>|
                <a href="http://www.ycombinator.com/legal/"> Legal </a>|
                <a href="http://www.ycombinator.com/apply/"> Apply to YC </a>|
                <a href="mailto:hn@ycombinator.com"> Contact </a>
                </span>
                <br />
                <br />
                <div className="form-method">
                    Search:
                <input type="text" autoComplete="false"></input>
                </div>
            </center>


        </td>
    );
};

export default Footer;
