import { useCallback, useEffect, useState } from 'react'
import { navigate } from 'astro:transitions/client'
import { Pagination } from '@heroui/pagination'

interface PaginationResultsProps {
  page: number
  totalPages: number
}

const PaginationResults = ({ page, totalPages }: PaginationResultsProps) => {
  const [currentPage, setCurrentPage] = useState<number>(page)
  const [isNavigating, setIsNavigating] = useState<boolean>(false)

  useEffect(() => {
    setCurrentPage(page)
    setIsNavigating(false)
  }, [page])

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (isNavigating) return
      setIsNavigating(true)
      const url = new URL(window.location.href)
      if (url.searchParams.get('page')) {
        url.searchParams.set('page', newPage.toString())
      } else {
        url.searchParams.append('page', newPage.toString())
      }
      navigate(url.href)
    },
    [isNavigating],
  )
  return (
    <Pagination
      isDisabled={isNavigating}
      siblings={1}
      variant="light"
      onChange={handlePageChange}
      classNames={{
        base: ['-m-0 flex justify-center items-center'],
        cursor: ['bg-[#00B3E5] text-white'],
        item: ['bg-zinc-900 '],
        next: ['bg-zinc-900'],
        prev: ['bg-zinc-900'],
      }}
      showControls
      initialPage={currentPage}
      total={totalPages}
    />
  )
}

export default PaginationResults
