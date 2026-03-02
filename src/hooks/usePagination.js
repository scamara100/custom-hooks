import { useState } from "react";

export function usePagination({contentPerPage, count}){
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(count / contentPerPage)

    const firstContentIndex = (page -1) * contentPerPage
    const lastContentIndex = firstContentIndex + contentPerPage

    const nextPage = () => setPage((current) => Math.min(current + 1, totalPages))
    const prevPage = () => setPage((current) => Math.max(current - 1, 1))
    const jumpToPage = (pageNumber) => {
        const newPage = Math.max(1, Math.min(pageNumber, totalPages))
        setPage(newPage)
    }

    return{
        page,
        totalPages,
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        jumpToPage
    }
}