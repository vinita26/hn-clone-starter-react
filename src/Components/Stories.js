import React from "react";
import timeago from "epoch-timeago";

const Stories = ({ state }) => {
    return (
        <>
            {state.map(
                ({ item, author, title, score, comments_count, time, url }) => (
                    <React.Fragment>
                        <tr key={item}>
                            <td style={{ padding: "0px" }}>
                                <i
                                    className="fas fa-sort-up"
                                    style={{
                                        fontSize: "30px",
                                        marginTop: "16px",
                                        padding: "0px",
                                        marginRight: "0px"
                                    }}
                                />
                            </td>
                            {/* <td
                                style={{
                                    padding: "0px",
                                    paddingTop: "13px",
                                    paddingRight: "15px",
                                    color: "#828282"
                                }}
                            >
                                &nbsp;
              {score}
                            </td> */}
                            <td style={{ paddingRight: "80px", fontWeight: "600" }}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {title}
                                </a>(
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
                            {/* <td colSpan="2"></td> */}
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
