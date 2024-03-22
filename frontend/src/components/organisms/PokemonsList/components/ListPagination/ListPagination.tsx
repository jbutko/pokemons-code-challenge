'use client'

import { useUrlParams } from '@/hooks/useUrlParams'
import { PaginationNav } from '@carbon/react'
import styles from './list-pagination.module.scss'

type TProps = {
  count: number
  limit: number
}

export const ListPagination: React.FC<TProps> = ({ limit, count }) => {
  const { setUrlParams, searchParams } = useUrlParams()
  const TOTAL_PAGES = Math.ceil(count / limit)
  const PAGE = searchParams.page || 0

  const handlePageChange = (page: number) => {
    setUrlParams({
      offset: String(page * limit),
      limit: String(limit),
      count: String(count),
      page: String(page),
    })
  }

  return (
    <div className={styles.container}>
      <PaginationNav
        className={styles.pagination}
        itemsShown={limit}
        onChange={(page) => handlePageChange(page)}
        page={Number(PAGE)}
        totalItems={TOTAL_PAGES}
      />
    </div>
  )
}
