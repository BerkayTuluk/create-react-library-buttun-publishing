import React from 'react'

import { ButtonColor, ExampleComponent, Yazi } from 'buttoncolor'
import 'buttoncolor/dist/index.css'

const App = () => {
  
  return (
    <div>
      <ExampleComponent text="you can check my githup site 😄" />
      <ButtonColor type='primary' onClick={() => alert("https://github.com/BerkayTuluk")} text='Primary'/><br/>
      <ButtonColor type='secondary' onClick={() => alert("https://github.com/BerkayTuluk")} text='Secondary'/><br/>
      <ButtonColor type='deshad' onClick={() => alert("https://github.com/BerkayTuluk")} text='Deshad'/><br/>
      <ButtonColor type='link' onClick={() => alert("https://github.com/BerkayTuluk")} text='Link'/><br/>
      <Yazi text="Patika Dev Project"/>
    </div>
  )
  
}



export default App
