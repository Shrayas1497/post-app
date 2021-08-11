
import {useState} from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import "./index.css";
import "./App.css";
import React from 'react';


const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";

const App = ()=> {
  const [showAddTask,setShowAddTask]=useState(true) 
  
   const [tasks,setTasks]=useState( [
   ])
//add a atask
const addTask=(task)=>{
  const id =Math.floor(Math.random()* 10000)+ 1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
  
 
}


    //delete a task 
const deleteTask=(id)=>{
 setTasks(tasks.filter((task)=>task.id!==id))
}
//toggle reminder

    return (
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)}/>
     { showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} />
    ): ('no tasks  to show')}
 
 
    </div>  
 




  
  )




    }



 export default  App;