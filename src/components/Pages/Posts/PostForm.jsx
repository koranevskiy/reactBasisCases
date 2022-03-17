import React, {useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/Button/MyButton";

const PostForm = ({createPost}) => {
    const [postData, setPostData] = useState({
        title: '',
        body: ''
    })

    return (
        <form>
            <MyInput type='text' placeholder={'title...'} value={postData.title}
                     onChange={(event) => setPostData({...postData, title: event.target.value})}/>
            <MyInput type='text' placeholder={'description...'} value={postData.body}
                     onChange={(event) => setPostData({...postData, body: event.target.value})
                     }/>
            <MyButton onClick={(e) => {
                e.preventDefault()
                createPost({id: Date.now(), ...postData})
                setPostData({
                    title: '',
                    body: ''
                })
            }}>Create post</MyButton>
        </form>
    );
};

export default PostForm;