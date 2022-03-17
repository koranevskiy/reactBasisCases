import React from 'react';
import MyButton from "../../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const Post = ({title, body, id, number, deletePost}) => {
    const navigate = useNavigate()
    return (
        <div className='post'>
            <div className='post__body'>
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => navigate(`/posts/${id}`)}>Open</MyButton>
                <MyButton onClick={() => deletePost(id)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default Post;