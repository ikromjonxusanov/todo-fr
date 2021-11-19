import Header from './components/Header';
import { Tasks } from './components/Tasks';
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    []
    // [
    //     {
    //         id: 1,
    //         text:"Doctors Appointment",
    //         day:"2021-11-5 2:30",
    //         reminder: true
    //     },
    //     {
    //         id: 2,
    //         text:"Meeting at school",
    //         day:"2021-11-6 1:30",
    //         reminder: true
    //     },
    //     {
    //         id: 3,
    //         text:"Food Shopping",
    //         day:"2021-11-5 1:30",
    //         reminder: false
    //     },
    // ]
  )
  const BASE_URL = "http://127.0.0.1:8000";
  
  useEffect(() => {
    axios.get(
      BASE_URL + "/api/todo/"
    ).then(res => {
        const tasks = res.data;
        setTasks(tasks)
    }).catch ((e) => {
      console.log(e)
    })
  })
  // Add Task
  const addTask = (task) => {
    axios.post(      
      BASE_URL + "/api/todo/",
      {
        "text":task.text,
        "day":task.day,
        "reminder":task.reminder
      }
    ).then(res => {
      console.log(res);
      console.log(res.data);
    }).catch((e) => {
      console.log(e)
    })
  }

  // Delete Task
  const deleteTask = (id) => {
    axios.delete(      
      BASE_URL + `/api/todo/${id}/`,
    )  
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
     var reminder = tasks.find(task => task.id === id).reminder
    axios.patch(      
      BASE_URL + `/api/todo/${id}/`,
      {
        "reminder": !reminder
      }
    )
  }
  return (
    <div className="container">
      <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>
      { showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? 
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> : "No Tasks To Show"}
    </div>
  );
}

export default App;
