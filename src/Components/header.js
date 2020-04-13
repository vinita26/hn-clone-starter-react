import React from 'react';

const Header = ({ showLoader }) => {
    return (

        <table className="mainTable" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
                <tr className="main-table-header">
                    <td style={{ width: "18px", paddingRight: "24px", }}>
                        <img src="https://news.ycombinator.com/y18.gif" alt="logo" style={{ border: "1px white solid", width: "18px", height: "18px", }}></img>
                    </td>
                    <td className="main-headings">
                        <span className="pageTop">
                            <b className="hnname">
                                <a href="">top&nbsp;</a>|
                            </b>
                            <a className="topRoute"> new </a>
                            {/* |
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
                                <a> submit </a> */}
                        </span>
                    </td>
                    {/* <td className="user-profile-settings">
                        <span>username(1)</span> |&nbsp;
                        <span>logout</span>
                    </td> */}
                </tr>
                <tr>

                </tr>
            </tbody>
        </table >

    );
}

export default Header;