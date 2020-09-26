import { createGlobalStyle } from "styled-components"
import modernNormalize from "styled-modern-normalize"
import colors from "./colors"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

    // Import normalize.css
    ${modernNormalize}
    * {
        box-sizing: border-box;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        background-color: ${props =>
        props.theme === 'dark' ? "#121212" : "#FFFFFF"};
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-family: 'VT323', monospace;
        line-height: 1.5rem;
        font-weight: 400;
        text-rendering: optimizeLegibility;
        &.blur {
            overflow: hidden;
                #___gatsby #main-content > * {
                    filter: blur(5px) ;
                    transition: all .3s ease-out;
                    pointer-events: none;
                    user-select: none;
                }
            }
        }
        &.splashScreen {
            position: fixed;
            overflow: hidden;
        }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
            outline: 0;
        }
    }
    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
    }
    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
    }
    h3 {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 2.25rem;
        margin-bottom: 3rem;
    }
    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    hr {
        margin: 3rem auto;
        border-width: .05rem;
        opacity: 0.1;
    }
`

export default GlobalStyles