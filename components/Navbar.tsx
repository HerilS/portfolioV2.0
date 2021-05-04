import React from 'react'
import { Wrapper, NavContainer } from '@/styles/components/navbar'
import { SubHeader, Button } from '@/styles/common'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <Link href="/">
          <SubHeader dark lg>
            heril saha.
          </SubHeader>
        </Link>
      </div>
      <NavContainer>
        {Links.map((i, index) => {
          if (index === Links.length - 1) {
            return (
              <Link href={`/${i}`} key={index}>
                <Button sm>{i}</Button>
              </Link>
            )
          }
          return (
            <Link href={`/${i}`} key={index}>
              <SubHeader dark>{i}</SubHeader>
            </Link>
          )
        })}
      </NavContainer>
    </Wrapper>
  )
}

const Links = ['home', 'work', 'about', 'contact']

export default Navbar
