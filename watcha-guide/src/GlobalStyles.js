// https://styled-components.com/docs/api#createglobalstyle
import { createGlobalStyle } from 'styled-components'

/* -------------------------------------------------------------------------- */
export const colorScheme = {
  black: '#141517',
  white: '#fcfcff',
  whiteHover: '#dfdfdf',
  accent: '#F82F62',
  accentHover: '#c7254d',
}

/* -------------------------------------------------------------------------- */

const { black, white, accent } = colorScheme

export const GlobalStyles = createGlobalStyle`

  /* -------------------------------------------------------------------------- */
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html{line-height:1.15;-webkit-text-size-adjust:100%}
  body{margin:0}
  main{display:block}
  h1{font-size:2em;margin:.67em 0}
  hr{box-sizing:content-box;height:0;overflow:visible}
  pre{font-family:monospace,monospace;font-size:1em}
  a{background-color:transparent}
  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
  b,strong{font-weight:bolder}
  code,kbd,samp{font-family:monospace,monospace;font-size:1em}
  small{font-size:80%}
  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
  sub{bottom:-.25em}
  sup{top:-.5em}
  img{border-style:none}
  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}
  button,input{overflow:visible}
  button,select{text-transform:none}
  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}
  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}
  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}
  fieldset{padding:.35em .75em .625em}
  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
  progress{vertical-align:baseline}
  textarea{overflow:auto}
  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}
  [type=search]::-webkit-search-decoration{-webkit-appearance:none}
  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
  details{display:block}
  summary{display:list-item}
  template{display:none}
  [hidden]{display:none}

  /* -------------------------------------------------------------------------- */
  // focus-visible

  :focus {
    outline: none;
    box-shadow: 0 0 0 4px ${accent};
    &:not(:focus-visible) {
      box-shadow: none;
    }
    &-visible {
      box-shadow: 0 0 0 4px ${accent};
    }
  }

  /* -------------------------------------------------------------------------- */
  // selection
  
  ::selection {
    background: ${accent};
    color: ${white};
  }

  img::selection,
  button::selection {
    background: transparent;
  }

  /* -------------------------------------------------------------------------- */
  // base

  body {
    background: ${black};
    color: ${white};
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }

    * {
      color: ${white};
      box-sizing: inherit;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
  }

  /* -------------------------------------------------------------------------- */
  // typography

  html {
    font-size: 10px;
  }

  body {
    font: 1.6rem/1.5 SpoqaHanSans, "Helvetica Neue", Verdana, Sans-Serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 0;
  }

  /* -------------------------------------------------------------------------- */
  // layout 

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }

  /* -------------------------------------------------------------------------- */
  // custom reset

  .resetA {
    user-select: none;
    text-decoration: none;
  }

  .resetButton {
    user-select: none;
    cursor: pointer;
    /* background: transparent; */
    border: 0;
    padding: 0;
  }

  .resetImg {
    vertical-align: middle;
  }

  .resetDl {
    dt, dd {
      margin: 0;
    }
  }

  .resetList {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  .resetAddress {
    font-style: normal;
  }

  svg > * {
    pointer-events: none;
  }

  /* -------------------------------------------------------------------------- */
  // Accessibility

  .a11yHidden {
    overflow: hidden;
    position: absolute;
    clip: rect(0,0,0,0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  
    &--visible {
      overflow: initial;
      position: initial;
      clip: initial;
      clip-path: initial;
      width: initial;
      height: initial;
      margin: initial;
      border: initial;
      padding: initial;
      white-space: initial;
    }
  }
  
`
