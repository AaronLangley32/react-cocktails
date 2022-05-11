import React from "react"
import ReactDOM from "react-dom"
import './assets/main.css'
import App from "./App"
import { ReactQueryDevtools } from "react-query-devtools"
import { ReactQueryCacheProvider, queryCache } from "react-query"

ReactDOM.render(
  <div>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <App />
    </ReactQueryCacheProvider>
    <ReactQueryDevtools initialIsOpen />
  </div>,
  document.getElementById("root")
)