import React from 'react';

const Header = ({ showLoader }) => {
    return (
        <div className="form-group">
            <table className="mainTable">
                <tbody>
                    <tr className="main-table-header">
                        <td>
                            <img src="https://news.ycombinator.com/y18.gif"></img>
                        </td>
                        <td className="main-headings">
                            <span className="pageTop">
                                <b className="hnname">
                                    <a href="">Hacker News</a>
                                </b>
                                <a> new </a>
                                |
                                <a> threads </a>
                                |
                                <a> past </a>
                                |
                                <a> comments </a>
                                |
                                <a> ask </a>
                                |
                                <a> show </a>
                                |
                                <a> jobs </a>
                                |
                                <a> submit </a>
                            </span>
                        </td>
                        <td className="user-profile-settings">
                            <td>username(1)</td>
                            <td>logout</td>
                        </td>
                    </tr>
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Header;