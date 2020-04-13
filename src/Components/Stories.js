import React from "react";
import timeago from "epoch-timeago";

const Stories = ({ state }) => {
    return (
        <>
            {state.map(
                ({ item, author, title, score, comments_count, time, url }) => (
                    <React.Fragment>
                        <tr key={item}>
                            <td className="upVote" style={{ padding: "5px" }}>
                                <a
                                    className="fas fa-sort-up"
                                    href=""
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        fontSize: "30px",
                                        margin: "3px 2px 6px",
                                        padding: "0px",
                                        backgroundSize: "10px"
                                    }}
                                />
                            </td>

                            <td className="title" style={{ paddingRight: "80px", fontWeight: "600" }}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {title}
                                </a>&nbsp;(
                            <a
                                    href={`https://${
                                        url
                                            .replace("http://", "")
                                            .replace("https://", "")
                                            .split(/[/?#]/)[0]
                                        }`}
                                    target="_blank"
                                    style={{ color: "#828282" }}
                                    rel="noopener noreferrer"
                                >
                                    {url
                                        .replace("http://", "")
                                        .replace("https://", "")
                                        .split(/[/?#]/)[0]
                                        .replace("www.", "")}
                                </a>)
                        </td>

                        </tr>
                        <tr>
                            <td colSpan="1"></td>
                            <td className="subText">
                                <span className="score">{score}</span> points by
                                <a
                                    href={`https://news.ycombinator.com/user?id=${author}`}
                                    target="_blank"
                                    style={{ color: "#828282" }}
                                    rel="noopener noreferrer"
                                >
                                    &nbsp;{author}
                                </a>
                                <span className="age">&nbsp;{timeago(time * 1000)}</span> |
                                <a
                                    href={`https://news.ycombinator.com/user?id=${author}`}
                                    target="_blank"
                                    style={{ color: "#828282" }}
                                    rel="noopener noreferrer"
                                >
                                    &nbsp;hide
                                </a> |
                                <a
                                    href={`https://news.ycombinator.com/item?id=${item}`}
                                    target="_blank"
                                    style={{ color: "#828282" }}
                                    rel="noopener noreferrer"
                                >
                                    &nbsp;{comments_count} comments
                                </a>
                            </td>
                        </tr>
                    </React.Fragment>
                )
            )}
        </>
    );
};
export default Stories;
