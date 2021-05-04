import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50rem;
  *:not(:last-child) {
    margin-right: 2rem;
  }
`

export const CoverImage = styled.img`
  height: 30rem;
`

export const CoverTextualContainer = styled.div`
  max-width: 30rem;
  *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  *:last-child {
    margin-top: 1rem;
  }
`
