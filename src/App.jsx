import { nanoid } from 'nanoid'
import './App.css'

import TodoItem from './components/TodoItem'
import { useState } from 'react'

function App() {
  const [task,setTask] = useState('')
  const [todoList,setTodoList] = useState([])
  function handleChange(event){
    console.log("I am changing the value of task");
    setTask(event.target.value)
  }

  function addTodoItem(){
    if(task){
      const id = nanoid()
      localStorage.setItem(id,JSON.stringify({id,task}))
      
      setTodoList(prevList=>{
        return [...prevList,{id:id,description:task}]})
    }
    setTask('')
  }
  
  return (
    <div className='p-10 m-auto max-w-screen-lg'>
      <h1 className=' text-[100px] text-center text-gray-300'>todos</h1>
      <form action="#" className='relative '>
        <input type="text"
         className='shadow-gray-400 shadow-md py-2 px-5 w-full text-gray-500 text-xl rounded-3xl'
        name='task'
         value={task}
         onChange={handleChange}
        />
       
        <button type='button' onClick={addTodoItem} className='absolute top-2 right-5'><img src="./circlePlus.svg" alt="add" /></button>
         
        
      </form>
      <ul className='py-2 px-5'>
      {todoList.map((el)=>{
        return <TodoItem key={el.id} id={el.id} description={el.description}/>
      })}
      </ul>
      
    </div>
  )
}

export default App
