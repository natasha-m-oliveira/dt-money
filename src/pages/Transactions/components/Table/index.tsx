import { CalendarBlank, CaretLeft, CaretRight, TagSimple } from 'phosphor-react'
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
  Pagination,
  IconContainer,
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
                <td>{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>
                  <IconContainer>
                    <TagSimple size={16} />
                  </IconContainer>
                  {transaction.category}
                </td>
                <td>
                  <IconContainer>
                    <CalendarBlank size={16} />
                  </IconContainer>
                  {dateFormatter.format(new Date(transaction.createdAt))}
                </td>
              </tr>
            )
          })}
        </tbody>
      </TableContainer>

      <Pagination>
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
      </Pagination>
    </>
  )
}
