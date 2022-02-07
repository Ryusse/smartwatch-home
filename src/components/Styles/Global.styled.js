import { createGlobalStyle } from 'styled-components'

import MarkProHeavyWoff2 from '../../assets/font/mark-pro-heavy.woff2'
import MarkProHeavyWoff from '../../assets/font/mark-pro-heavy.woff'
import MarkProHeavyTtf from '../../assets/font/mark-pro-heavy.ttf'
import MarkProHeavyEot from '../../assets/font/mark-pro-heavy.eot'

import MarkProRegularWoff2 from '../../assets/font/mark-pro-regular.woff2'
import MarkProRegularWoff from '../../assets/font/mark-pro-regular.woff'
import MarkProRegularTtf from '../../assets/font/mark-pro-regular.ttf'
import MarkProRegularEot from '../../assets/font/mark-pro-regular.eot'

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Mark Pro";
    src: url(${MarkProHeavyWoff2}) format("woff2"),
    url(${MarkProHeavyWoff}) format("woff"),
    url(${MarkProHeavyTtf}) format("truetype"),
    url(${MarkProHeavyEot}) format("eot");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Mark Pro";
    src: url(${MarkProRegularWoff2}) format("woff2"),
    url(${MarkProRegularWoff}) format("woff"),
    url(${MarkProRegularTtf}) format("truetype"),
    url(${MarkProRegularEot}) format("eot");
    font-weight: 400;
    font-style: normal;
  }

  *{
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Mark Pro';
    font-size: 1rem;
    font-weight: 400;
  }

  h1{
    font-weight: 900;
    font-size: 2rem;
  }

  a{
    font-size: 1rem;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  
`
