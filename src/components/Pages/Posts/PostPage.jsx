import {usePosts} from "../../../hooks/usePosts";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/PostService";
import {usePagination} from "../../../hooks/usePagination";
import MyButton from "../../UI/Button/MyButton";
import MyModule from "../../UI/MyModal/MyModule";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";
import Loader from "../../UI/Loader/Loader";
import Posts from "./Posts";
import Pagination from "../../UI/Pagination/Pagination";
import {useEffect, useState} from "react";


function PostPage() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    })
    const [visible, setVisible] = useState(false)
    const searchAndSortPosts = usePosts(posts, filter.sort, filter.query)
    const [limit, setLimit] = useState(10)
    const [totalCount, setTotalCount] = useState('')
    const [fetchPosts, isLoadingPosts, errorPosts] = useFetching(async (limit, page) => {
        const response = await PostService.getPosts(limit, page)
        setPosts(response.data)
        setTotalCount(response.headers['x-total-count'])
    })
    const [pageArray, currentPage, paginate] = usePagination(totalCount, limit, async (limit, page) => {
        await fetchPosts(limit, page)
    })


    useEffect(() => {
        fetchPosts(limit, currentPage)
    }, [])

    const createPost = (post) => {
        setPosts([...posts, {id: Date.now(), ...post}])
    }
    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }
    return (
        <div className={'postPage'}>
            <MyButton onClick={() => setVisible(true)}>Create a new post</MyButton>
            <MyModule visible={visible} setVisible={setVisible}>
                <PostForm createPost={createPost}/>
            </MyModule>
            <hr/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {errorPosts && <h1>{`Error: ${errorPosts}`}</h1>}
            {isLoadingPosts ? <div className='loader'><Loader/></div> :
                searchAndSortPosts.length ? <Posts posts={searchAndSortPosts}
                                                   deletePost={deletePost} title={'Posts about programming'}/>
                    : <h1>No posts</h1>}
            <Pagination currentPage={currentPage} pageArray={pageArray} paginate={paginate}/>
        </div>
    );
}

export default PostPage;
