import React from "react";
import timeago from "epoch-timeago";

const Stories = ({ state }) => {

    const incrementNewsScore = () => {
        state.score = state.score + 1;
        console.log('add score', state.score);
    }
    return (
        <>
            {state.map(
                ({ item, author, title, score, comments_count, time, url }) => (
                    <React.Fragment key={item} >
                        <tr key={item} className="newsRow">
                            <td className="comments">
                                <span className="score">{comments_count}</span>
                            </td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* <td colSpan="2"></td> */}
                            <td className="upVotes">
                                <span className="score">{score}</span>
                            </td>
                            <td className="upVoteIcon" style={{ padding: "5px" }} onClick={incrementNewsScore}>
                                <a
                                    className="fas fa-sort-up"
                                    href=""
                                />
                            </td>

                            <td style={{ paddingRight: "80px", fontWeight: "600" }}>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="title">
                                    {title}
                                </a>&nbsp;
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
                                    className="subText"
                                >(
                                    {url
                                        .replace("http://", "")
                                        .replace("https://", "")
                                        .split(/[/?#]/)[0]
                                        .replace("www.", "")})&nbsp;by&nbsp;
                                </a>


                                <a
                                    href={`https://news.ycombinator.com/user?id=${author}`}
                                    target="_blank"
                                    style={{ color: "#383434", }}
                                    rel="noopener noreferrer"
                                    className="subText"
                                >
                                    {author}
                                </a>
                                <span className="age">&nbsp;{timeago(time * 1000)}</span>
                                <a
                                    href={`https://news.ycombinator.com/user?id=${author}`}
                                    target="_blank"
                                    style={{ color: "#383434", }}
                                    rel="noopener noreferrer"
                                    className="subText"
                                >
                                    &nbsp;[hide]
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
