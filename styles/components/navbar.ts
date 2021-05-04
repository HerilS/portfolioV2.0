import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 3rem;
  width: 100%;
  padding: 1.75rem;
  display: flex;
  justify-content: space-between;
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  *:not(:last-child) {
    margin-right: 2.5rem;
  }
`
