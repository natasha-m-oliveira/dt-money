import styled, { css } from 'styled-components'

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const TablePagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin: 2.5rem auto;
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
`
