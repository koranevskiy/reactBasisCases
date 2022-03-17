import React from 'react';
import MyButton from "../Button/MyButton";
import cl from './Pagination.module.css'
const Pagination = ({pageArray, currentPage, paginate}) => {
    return (
        <div className={cl.pagination}>
            {pageArray.map(p => {
                return <div key={p}
                            onClick={() => {
                                paginate(p)
                            }}
                            className={p === currentPage ? `${cl.pagination__buttons} ${cl.current}` : `${cl.pagination__buttons}`}>
                    <MyButton>{p}</MyButton></div>
            })}
        </div>
    );
};

export default Pagination;