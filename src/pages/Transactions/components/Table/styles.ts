import styled, { css } from 'styled-components'

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 768px) {
    border-spacing: 0;
    tbody {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    tr {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.25rem;
      padding: 1.25rem;
      border-radius: 6px;
      background: ${(props) => props.theme['gray-700']};

      td {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        padding: 0;
        background: transparent;
        color: ${(props) => props.theme['gray-500']};
      }

      td:first-child {
        width: auto;
        grid-column: 1 / -1;
        color: ${(props) => props.theme['gray-300']};
      }

      td:nth-child(2) {
        width: auto;
        grid-column: 1 / -1;
        margin-bottom: 0.5rem;
      }

      td:last-child {
        justify-self: end;
      }
    }
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 2.5rem;
`

export const NavControl = styled.button`
  border: 0;
  cursor: pointer;
  font-size: 0;
  color: ${(props) => props.theme['green-700']};
  background: transparent;

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const PageContainer = styled.button`
  height: 40px;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['gray-400']};
  font-weight: bold;
  padding: 0 1.2rem;
  cursor: pointer;

  &[data-state='checked'] {
    background: ${(props) => props.theme['green-700']};
    color: ${(props) => props.theme.white};
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  display: flex;
  gap: 0.25rem;
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
  &::before {
    ${(props) =>
      props.variant === 'outcome'
        ? css`
            content: '\u002D';
          `
        : null}
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const IconContainer = styled.div`
  display: none;
  font-size: 0;
  @media (max-width: 768px) {
    display: block;
  }
`
