import React from 'react'
import '@material/button/dist/mdc.button.css'
import { MDCRipple } from '@material/ripple'

export const App = () => {
  return (
    <button
      className="mdc-button mdc-button--raised"
      ref={button => new MDCRipple(button)}
    >
      Click me!
    </button>
  )
}
