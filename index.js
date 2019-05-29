/* @jsx h @jsxFrag Fragment */
import { createElement as h } from "react"
import { hydrate } from "react-dom"

function App () {
  return h ("div", {}, "Hello, World!")
}

hydrate (h (App), document.getElementById ("root"))
