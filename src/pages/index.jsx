import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

// Components
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, Greeting, Name, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import BitmojiImage from '../components/BitmojiImage'

import Header from '../components/Header'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-lg md:text-xl lg:text-2xl pt-6 md:pt-12 text-justify`};
`

export const ContactTitle = styled.h1`
  ${tw`text-4xl lg:text-4xl mb-8 tracking-wide relative`}
  color: ${({ theme }) => theme.description};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

const ContactText = styled.p`
  ${tw`text-xl md:text-2xl lg:text-3xl relative inline-block`};
`

export const InnerCardText = styled.p`
  ${tw`text-white`}
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

const Footer = styled(ParallaxLayer)`
  ${tw`text-center text-grey absolute pin-b p-6 text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Parallax pages={5}>
      <Header />
      <Hero offset={0}>
        <Greeting>
          Hey 👋🏻 <br />
          <Name>I'm Valentina.</Name>
        </Greeting>
        <Subtitle>
          I design and shape digital products and bring them to life through
          code.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Classically"
            link="https://dribbble.com/shots/6024845-Classy-Classical-Music-App-Concept"
            bg="linear-gradient(to right, #FF416C 0%, #FF4B2B 100%)"
          >
            <InnerCardText>
              This project is a concept for an educational app about classical
              music.
            </InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="Winter Wonderland"
            link="https://dribbble.com/shots/14815633-Ski-Mobile-App-Concept"
            bg="linear-gradient(to right, #4568DC 0%, #B06AB3 100%)"
          >
            <InnerCardText>A concept for a Ski Mobile App.</InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="Safe-fi"
            link="https://dribbble.com/shots/4307518-Secured"
            bg="linear-gradient(to right, #2c3e50 0%, #3498db 100%)"
          >
            <InnerCardText>
              This is a paywall mockup for a VPN app allowing people to surf the
              Web in a more secure way.
            </InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="Fontsy"
            link="https://dribbble.com/shots/4307574-Fancy-Fonts"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            <InnerCardText>
              A fancy paywall for a photo editing app specialized in adding
              gorgeous texts to your images.
            </InnerCardText>
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <BitmojiImage />
          <AboutSub>
            Welcome to my portfolio, the digital space where I share about some
            of my most recent projects & design creations and I also write about
            Tech.
          </AboutSub>
        </AboutHero>
        <AboutDesc />
      </About>
      <Contact offset={4}>
        <Inner>
          <ContactTitle>Get in touch</ContactTitle>
          <ContactText>
            Dont'be a <strike>stranger</strike>.
            <br /> Say <a href="mailto:frontendvale@gmail.com">Hi</a> or follow
            me on:{' '}
            <a href="https://dribbble.com/blueberrymuffin95" target="_blank">
              Dribbble
            </a>
            ,{' '}
            <a href="https://www.instagram.com/frontendvale/" target="_blank">
              Instagram
            </a>
            ,{' '}
            <a href="https://www.github.com/vale-c/" target="_blank">
              GitHub
            </a>{' '}
            or{' '}
            <a href="https://www.twitter.com/CherriePie4897/" target="_blank">
              Twitter
            </a>
          </ContactText>
        </Inner>
        <Footer offset={5}>
          © {new Date().getFullYear()}, Built with ☕ & 💖 by
          <a href="/about/" target="_blank" rel="noopener noreferrer">
            {` `}Vale
          </a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
