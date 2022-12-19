import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { Table } from './components/Table'
import { TransactionsCount } from './components/TransactionsCount'
import { TransactionsContainer, TransactionsContent } from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />

      <TransactionsContent>
        <TransactionsCount />
        <SearchForm />
        <Table />
      </TransactionsContent>
    </TransactionsContainer>
  )
}
