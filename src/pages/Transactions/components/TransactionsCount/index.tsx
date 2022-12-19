import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { TransactionsCountContainer } from './styles'

export function TransactionsCount() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <TransactionsCountContainer>
      <p>Transações</p>
      <span>{transactions.length} itens</span>
    </TransactionsCountContainer>
  )
}
