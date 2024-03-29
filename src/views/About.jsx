import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Divider'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const About = ({ children, offset }) => (
  <>
    <Divider
      bg="#23262b"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="star"
          hiddenMobile
          width={6}
          fill={colors.blue}
          left="50%"
          top="75%"
        />
        <SVG
          icon="camera"
          hiddenMobile
          width={8}
          fill={colors['grey-darkest']}
          left="70%"
          top="20%"
        />
        <SVG
          icon="game"
          width={8}
          stroke={colors['grey-darkest']}
          left="25%"
          top="5%"
        />
        <SVG
          icon="notification"
          hiddenMobile
          width={24}
          fill={colors.orange}
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUpSquare"
          hiddenMobile
          width={16}
          fill={colors.purple}
          left="5%"
          top="80%"
        />
        <SVG
          icon="chart"
          width={12}
          stroke={colors.white}
          left="95%"
          top="50%"
        />
        <SVG
          icon="bookmark"
          width={6}
          fill={colors.white}
          left="85%"
          top="15%"
        />
        <SVG
          icon="wallet"
          hiddenMobile
          width={8}
          fill={colors['grey-dark']}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="star" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG
        icon="play"
        width={12}
        fill={colors['grey-darkest']}
        left="70%"
        top="60%"
      />
      <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG
        icon="notification"
        width={12}
        fill={colors['grey-dark']}
        left="20%"
        top="30%"
      />
      <SVG
        icon="send"
        width={8}
        stroke={colors['grey-darkest']}
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
