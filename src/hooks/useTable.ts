import { useEffect, useState } from 'react'

function calculateRange<T>(
  data: T[],
  currentPage: number,
  rowsPerPage: number,
  maxLinks: number,
) {
  const totalLinks = Math.ceil(data.length / rowsPerPage)

  const range: number[] = []

  for (
    let prevPage = currentPage - maxLinks;
    prevPage <= currentPage - 1;
    prevPage++
  ) {
    if (prevPage >= 1) {
      range.push(prevPage)
    }
  }

  range.push(currentPage)

  for (
    let nextPage = currentPage + 1;
    nextPage <= currentPage + maxLinks;
    nextPage++
  ) {
    if (nextPage <= totalLinks) {
      range.push(nextPage)
    }
  }

  return { range, totalLinks }
}

function sliceData<T>(data: T[], currentPage: number, rowsPerPage: number) {
  return data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
}

interface useTableProps<T> {
  data: T[]
  currentPage: number
  rowsPerPage: number
  maxLinks?: number
}

export function useTable<T = any>({
  data,
  currentPage,
  rowsPerPage,
  maxLinks = 2,
}: useTableProps<T>) {
  const [slice, setSlice] = useState<T[]>([])

  const { range, totalLinks } = calculateRange<T>(
    data,
    currentPage,
    rowsPerPage,
    maxLinks,
  )

  useEffect(() => {
    setSlice(sliceData<T>(data, currentPage, rowsPerPage))
  }, [data, currentPage, rowsPerPage])

  return { slice, range, totalLinks }
}
