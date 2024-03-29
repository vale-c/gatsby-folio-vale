import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/SEO'
import Projects from '../components/Projects'
import tw from 'tailwind.macro'
import Header from '../components/Header'

const WorkWrapper = styled.div`
  ${tw`m-4`}
`
const Title = styled.h1`
  ${tw`text-3xl font-bold text-center mt-8`}
`

const Subtitle = styled.h3`
  ${tw`text-center my-2`}
  color: ${({ theme }) => theme.description}
`
const StyledLink = styled(Link)`
  ${tw`ml-24 mt-4 font-bold hover:underline`}
`

const Work = () => (
  <WorkWrapper>
    <Header />
    <SEO title="Work" />
    <Title>Personal Projects</Title>
    <Subtitle>Check out some of my side-projects.</Subtitle>
    <Projects />
    <StyledLink to="/">🔙 Home</StyledLink>
  </WorkWrapper>
)

export default Work
