import styled, { css } from 'styled-components'
export const Header = styled.h1`
  font-size: 4rem;
  line-height: 4.25rem;
  letter-spacing: -0.15rem;
`

export const SubHeader = styled.h3<{ dark?: boolean; lg?: boolean }>`
  font-size: 1rem;
  ${(props) => props.lg && 'font-size: 1.5rem;'}
  color: ${(props) => (props.dark ? 'black' : 'grey')};
`

export const Button = styled.button<{ sm?: boolean }>`
  background: ${(props) => props.theme.colors.main};
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  ${(props) =>
    props.sm &&
    css`
      padding-right: 1.85rem;
      padding-left: 1.85rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
    `}
  border: 0;
  border-radius: 5rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts};
  cursor: pointer;
`
