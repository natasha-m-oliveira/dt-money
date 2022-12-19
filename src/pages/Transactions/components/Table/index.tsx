import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useTable } from '../../../../hooks/useTable'
import { dateFormatter, priceFormatter } from '../../../../utils/formatter'
import {
  NavControl,
  PageContainer,
  PriceHighLight,
  TableContainer,
  TablePagination,
} from './styles'

export function Table() {
  const [page, setPage] = useState(1)

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const { slice, range, totalLinks } = useTable({
    data: transactions,
    currentPage: page,
    rowsPerPage: 5,
  })

  return (
    <>
      <TableContainer>
        <tbody>
          {slice.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TableContainer>

      <TablePagination>
        <NavControl
          disabled={page === 1}
          onClick={() => setPage((state) => --state)}
        >
          <CaretLeft weight="bold" size={24} />
        </NavControl>
        {range.map((item) => (
          <PageContainer
            key={item}
            data-state={page === item ? 'checked' : 'unchecked'}
            onClick={() => setPage(item)}
          >
            {item}
          </PageContainer>
        ))}
        <NavControl
          disabled={page === totalLinks}
          onClick={() => setPage((state) => ++state)}
        >
          <CaretRight weight="bold" size={24} />
        </NavControl>
      </TablePagination>
    </>
  )
}
