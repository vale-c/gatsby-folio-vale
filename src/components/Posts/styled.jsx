import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`container my-12 mx-auto py-8 px-4 md:px-12`}
`
export const TitleSection = styled.h3`
  ${tw`font-semibold mb-4`};
`

export const Posts = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
  @media (max-width: 797px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

export const BlogCard = styled.div`
  ${tw`shadow-lg rounded-lg mb-8`};
  box-shadow: ${({ theme }) => theme.neumorphShadowOne} 9.91px 9.91px 15px,
    ${({ theme }) => theme.neumorphShadowTwo} -9.91px -9.91px 15px;
  height: 100%;
`

export const Content = styled.div`
  ${tw`p-4`};
`

export const Date = styled.div`
  ${tw`text-sm font-light mb-1`};
  color: ${({ theme }) => theme.description};
`

export const Title = styled.div`
  ${tw`text-lg font-semibold mb-1`};
`

export const Description = styled.p`
  ${tw`text-sm font-medium`};
`

export const Tags = styled.div`
  box-sizing: border-box;
  ${tw`mx-4 flex flex-wrap`}
`

export const Tag = styled.span`
  color: ${({ theme }) => theme.fontAccent};
  ${tw`truncate text-xs font-light font-mono mb-2 mr-2 p-2 rounded max-h-8`}
  border: 1px solid ${({ theme }) => theme.borderAccent};
`
