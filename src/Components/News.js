import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Stories from "./Stories";
import Loader from "./Loader";

const News = props => {
    const [state, setState] = useState([]);
    const [count, setCount] = useState(21);
    const [isLoading, setLoading] = useState(false);

    const checkRoute = () => {
        let route = "/topstories";
        return route;
    };
    const formatComponent = (item, callback) => {
        setState(item);
        callback();
    };
    useEffect(() => {
        getData(checkRoute(), 0, 20).then(arr => {
            getDeatils(arr).then(item =>
                formatComponent(item, () => {
                    props.hideLoader();
                })
            );
        });
    }, []);

    const getData = async function (category, start, end) {
        const arr = [];
        try {
            const { data } = await axios.get(
                `https://hacker-news.firebaseio.com/v0${category}.json?print=pretty`
            );
            data.slice(start, end).map(item => arr.push(item));
        } catch (error) {
            return error;
        }
        return arr;
    };

    const getDeatils = async function (arr) {
        const promises = arr.map(async item => {
            const { data } = await axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
            );
            return {
                item,
                author: data.by,
                title: data.title,
                score: data.score,
                comments_count: data.descendants,
                time: data.time,
                url:
                    data.url != null
                        ? data.url
                        : `https://news.ycombinator.com/item?id=${item}`
            };
        });
        const results = await Promise.all(promises);
        return results;
    };

    const showMoreContent = () => {
        setLoading(true);
        getData(checkRoute(), count, count + 20).then(arr => {
            getDeatils(arr).then(item =>
                formatComponent(item, () => {
                    setCount(count + 20);
                    setLoading(false);
                    window.scrollTo(0, 0);
                })
            );
        });
    };

    return (
        <>
            {props.isLoading ? (
                <Loader />
            ) : (
                    <>
                        <div
                            className={
                                isLoading
                                    ? "container-fluid main overlay"
                                    : "container-fluid main"
                            }
                        >
                            <table className="table">
                                <tbody>
                                    <Stories state={state} />
                                </tbody>
                            </table>
                        </div>
                        <div className="more-space"></div>
                        <div className="title">
                            <span className="more-btn" onClick={showMoreContent}>
                                More
            </span>
                        </div>&nbsp;&nbsp;
                        <div className="divider"></div>
                        &nbsp;&nbsp;
                    </>
                )}
        </>
    );
};

export default News;
// export default withRouter(News);
