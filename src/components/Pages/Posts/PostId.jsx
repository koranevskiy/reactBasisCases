import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import MyButton from "../../UI/Button/MyButton";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/PostService";
import Loader from "../../UI/Loader/Loader";

const PostId = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const [fetchCom, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentById(id)
        setComment(response.data)
    })
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    useEffect(() => {
        fetchPostById(id)
        fetchCom(id)
    }, [])
    return (
        <div className='postId'>
            <h1>You've opened page of the post with number {id}</h1>
            {isLoading ? <Loader/>
                : <div className='post__com'>
                    <strong>{post.id}.</strong> <h2>{post.title}</h2>
                </div>}
            <h1>Comments</h1>
            {
                isComLoading ? <Loader/>
                    : <div>
                        {comment.map(com => {
                            return (
                                <div className='comment' key={com.id}>
                                    <h2>Name: {com.name}</h2>
                                    <h3>Email: {com.email}</h3>
                                    <div>{com.body}</div>
                                </div>)

                        })}
                    </div>
            }
            <MyButton onClick={() => navigate(-1)}>Back</MyButton>
        </div>
    );
};

export default PostId;