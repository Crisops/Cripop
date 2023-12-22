import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
// import 'react-responsive-pagination/themes/classic.css'
import '../css/stylePagination.css'

const Pagination = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(parseInt(page))
  const totalPages = 20

  const handlePageChange = (page) => {
    setCurrentPage(page)

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
