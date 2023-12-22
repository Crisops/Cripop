import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
import '../css/stylePagination.css'


type PaginationServer = {
  page: string 
  component?: string
  totalPages: number
}


const Pagination = ({ page, component, totalPages }: PaginationServer ) => {
  const [currentPage, setCurrentPage] = useState(parseInt(page))

  const handlePageChange = (page: number) => {
    setCurrentPage(page)

    if (component) {
      const { pathname, search } = window.location
      const params = new URLSearchParams(window.location.href)
      if (params.get('page')) {
        const url = window.location.search

        const pageParam = /&page=\d+/

        const searchParamNew = url.replace(pageParam, `&page=${page}`)

        window.location.href = `${pathname}${searchParamNew}`
      } else {
        window.location.href = `${pathname}${search}&page=${page}`
      }
      return
    }

    const { pathname } = window.location
    window.location.href = `${pathname}?page=${page}`
  }

  return (
    <ResponsivePagination
      maxWidth={350}
      current={currentPage}
      total={totalPages}
      onPageChange={handlePageChange}
      linkHref='omit'
    />
  )
}

export default Pagination
