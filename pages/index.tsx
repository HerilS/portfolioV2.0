import Layout from '@/components/Layout'
import { Header, SubHeader, Button } from '@/styles/common'
import {
  Hero,
  CoverImage,
  CoverTextualContainer,
} from '@/styles/pages/homepage'

export const Home = (): JSX.Element => (
  <Layout>
    <Hero>
      <CoverTextualContainer>
        <Header>I&apos;m a Full Stack Web Developer.</Header>
        <SubHeader>
          Hey, my name is Heril Saha and I&apos;ve created multiple full stack
          applications using the MERN stack.
        </SubHeader>
        <Button>Get In Touch</Button>
      </CoverTextualContainer>
      <CoverImage src="/work.png" alt="Work" />
    </Hero>
  </Layout>
)

export default Home
