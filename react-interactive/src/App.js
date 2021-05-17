import React, { useState } from 'react';
import TaskList from './Tasks';
import { AddTaskForm } from './TaskForms';

// function App(props) {

//   //props.tasks <- IS AN ARRAY

//   //do data processing  
//   let incompleteArray = props.tasks.filter((task) => !task.complete);
//   console.log("Number of incomplete:", incompleteArray.length);

//   return (
//     <div className="container">
//       <p className="lead">Things I have to do ({incompleteArray.length})</p>
//       <TaskList tasks={props.tasks} />
//       <AddTaskForm />
//     </div>
//   );
// }

// // Example 2b -  Count of Tasks Example
// // Add state to allow count of tasks 
// function App(props) {
//   const [tasks, setTasks] = useState(props.tasks);   // give the app some state

//   // toggles the 'complete' property of task with given id
//   const toggleTaskCompletion = (taskId) => {
//       let updatedTaskArray = tasks.map((theTask) => {
//       let taskCopy = { ...theTask };  // use spread operator to copy 
//       // this is the same as
//       //  taskCopy = {};
//       //  taskCopy.description = theTask.description;
//       //  taskCopy.complete = theTask.complete;
//       // ...
//       if (taskCopy.id === taskId) {
//         taskCopy.complete = !taskCopy.complete;
//       }
//             return taskCopy;
//     });

//     setTasks(updatedTaskArray); //set the new state variable and rerender
//   }

//       //do data processing  
//   let incompleteArray = tasks.filter((task) => !task.complete); //now getting from state, not props
//   console.log("Number of incomplete:", incompleteArray.length);

//   return (
//     <div className="container">
//       <p className="lead">Things I have to do ({incompleteArray.length})</p>
//       <TaskList tasks={tasks} whatToDoWhenClicked={toggleTaskCompletion}/> {/*pass state, not props.task*/}
//       <AddTaskForm />
//     </div>
//   );
// }

// Example 3 Add New Tasks to my list Example
function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const toggleTaskCompletion = (taskId) => {
    let updatedTaskArray = tasks.map((theTask) => {
      let taskCopy = { ...theTask };  // use spread to copy
      if (taskCopy.id === taskId) {
        taskCopy.complete = !taskCopy.complete;
      }
      return taskCopy;
    });

    setTasks(updatedTaskArray); //set the new state variable and rerender
  }

  //Add a new task with the given description
  const addTask = (taskDescription) => {
    let newTask = {
      id: tasks.length + 1,
      description: taskDescription,
      complete: false
    }
   //Don't push to the existing array. Create new and then setTasks to that
    let updatedTaskArray = tasks.map((theTask) => {
      let taskCopy = { ...theTask };
      return taskCopy;
    });
    updatedTaskArray.push(newTask);

    setTasks(updatedTaskArray);
  }
  //Do data processing to determine number of completed tasks
  let incompleteArray = tasks.filter((task) => !task.complete);
  
  return (
    <div className="container">
      <p className="lead">Things I have to do ({incompleteArray.length})</p>
      <TaskList tasks={tasks} whatToDoWhenClicked={toggleTaskCompletion}/>
      <AddTaskForm addTaskCallback={addTask} />
    </div>
  );
}


export default App;

