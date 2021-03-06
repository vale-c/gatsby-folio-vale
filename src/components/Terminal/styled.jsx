import styled from 'styled-components'
import tw from 'tailwind.macro'

export const TerminalContainer = styled.div`
  ${tw`flex shadow-xl`}
`

export const OuterWrapper = styled.div`
  ${tw`w-1/2 shadow-2xl subpixel-antialiased rounded-lg h-100 bg-black border-b border-black mx-auto`}
`

export const TerminalHeader = styled.div`
  ${tw`flex items-center h-6 rounded-sm border-b bg-grey-light text-center`}
`

export const TerminalTitle = styled.div`
  ${tw`mx-auto pr-16 text-grey-darkest font-semibold`}
`

export const CloseButton = styled.div`
  ${tw`flex ml-2 items-center text-center border-red bg-red shadow-inner rounded-full w-3 h-3`}
`

export const MinButton = styled.div`
  ${tw`ml-2 border-yellow-darkest bg-yellow shadow-inner rounded-full w-3 h-3`}
`

export const MaxButton = styled.div`
  ${tw`ml-2 border-green-darkest bg-green shadow-inner rounded-full w-3 h-3`}
`

export const Spacer = styled.div`
  ${tw`p-2`}
`

export const TerminalContent = styled.div`
  ${tw`pl-1 pt-1 h-auto`}
`

export const TContent = styled.p`
  ${tw`text-lg tracking-widest text-white`}
`

export const Content = styled.div`
  ${tw`text-lg font-light text-white`}
`

export const Paragraph = styled.div`
  ${tw`text-lg text-green-light bg-black`}
`
