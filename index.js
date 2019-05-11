import React from "react"
import ReactDom from "react-dom"
   
//JSX Pseudo language javascript rendition of html

function MyApp() {

	return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
  
}



ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)