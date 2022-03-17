import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Posts = ({posts, deletePost, title}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, number) => {
                    return <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <Post {...post}
                                 number={number + 1}
                                 deletePost={deletePost}
                    />
                    </CSSTransition>
                })}
            </TransitionGroup>

        </div>
    );
};

export default Posts;