import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MySelect from "../../UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <>
            <MyInput placeholder={'search'} value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.value})}/>
            <MySelect options={[{value: 'body', name: 'By description'},
                {value: 'title', name: 'By title'}]} defaultValue={'Sort by'}
                      value={filter.sort} onChange={sort => setFilter({...filter, sort})}/>
        </>
    );
};

export default PostFilter;