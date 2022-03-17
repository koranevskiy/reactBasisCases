import {useMemo, useState} from "react";

export const usePageArray = (totalCount, limit) => {
    const pageArray = useMemo(() => {
        const pageArray = []
        for(let i = 1; i <= Math.ceil(totalCount / limit); i++){
            pageArray.push(i)
        }
        return pageArray
    }, [totalCount, limit])
    return pageArray
}
export const usePagination = (totalCount, limit, callBack) => {
    const pageArray = usePageArray(totalCount, limit)
    const [currentPage, setCurrentPage] = useState(1)
    const paginate = async (page) => {
        callBack(limit, page)
        setCurrentPage(page)
    }
    return [pageArray, currentPage, paginate]
}