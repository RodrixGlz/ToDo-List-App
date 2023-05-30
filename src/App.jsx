import { useState } from 'react'
import TodoList from './Components/TodoList'

import './App.css'
import './Components/Title.css'
import './Components/BoxOne.css'
import './Components/BoxTwo.css'

function App () {
  
  return (
    <div class="Container">
      <TodoList path='/TodoList' element={TodoList}/>
    </div>
  )
}

export default App