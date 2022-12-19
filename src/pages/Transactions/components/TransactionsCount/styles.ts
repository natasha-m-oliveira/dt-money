import styled from 'styled-components'

export const TransactionsCountContainer = styled.div`
  display: none;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  p {
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-300']};
  }

  span {
    color: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
