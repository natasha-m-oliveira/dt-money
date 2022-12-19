import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const TransactionsContent = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem 2.5rem;
  flex: 1;

  @media (max-width: 768px) {
    margin: 1.5rem auto 0;
  }
`
