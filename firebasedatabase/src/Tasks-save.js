import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase/app';


export default function TaskApp(props) {
  const [message, setMessage] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {   //run after component loads
    const messageRef = firebase.database().ref('message')  //here's how we get access to the message key
    messageRef.on('value', (snapshot) => {
      let value = snapshot.val();
    });

    let tasksRef = firebase.database().ref(this.props.fbuserkey + '/tasks');

    tasksRef.on('value', (snapshot) => {
      let value = snapshot.val();

      let tasks = [];
      if (value) {
        //we are converting the object to an array
        let taskIds = Object.keys(value);     //this is an array of keys

        //allowing us to make a new array of objects by using the map method
        tasks = taskIds.map((taskId) => {

          // return {id: taskId, complete: value[taskId].complete, description: value[taskID].description}
          return { id: taskId, ...value[taskId] }
        })
      }
      // console.log(tasks);

      setTasks(tasks)
    })
  });

  //add a new task to the list
  const addTask = (taskDescription) => {

    let newTask = {
      description: taskDescription,
      complete: false
    }

    // let tasksRef = firebase.database().ref('tasks');
    let tasksRef = firebase.database().ref(this.props.fbuserkey + '/tasks');
    tasksRef.push(newTask);
  }

  //change the completedness of the given task
  const toggleCompletedness = (taskId) => {
    console.log("Toggling task completion: ", taskId)
  }


  //do data processing
  let incomplete = tasks.filter((task) => !task.complete);

  return (
    <div className="container" onClick={this.testClick}>
      <p className="lead">Things <strong>WE</strong> have to do ({incomplete.length})</p>
      <p>{this.state.message}</p>
      <TaskList tasks={tasks} howToToggle={this.toggleCompletedness} />
      <AddTaskForm howToAdd={this.addTask} />
    </div>
  );

}

function TaskList(props) {

  if (props.tasks === null) return null; //show nothing if no tasks

  //do data processing
  let taskComponents = props.tasks.map((eachTask) => {
    let singleTask = <Task
      key={eachTask.id}
      task={eachTask}
      howToToggle={props.howToToggle}
    />
    return singleTask;
  })

  return (
    <ol>
      {taskComponents}
    </ol>
  );

}

function Task(props) {
  //helper method
  const getClassName = () => {
    let className = '';
    if (props.task.complete) {
      className = 'font-strike';
    }
    return className;
  }

  const handleClick = () => {
    props.howToToggle(props.task.id);
  };


  return (
    <li className={getClassName()} onClick={handleClick} >
      {props.task.description}
    </li>
  );

}

function AddTaskForm(props) {
  const [whatIsTyped, setWhatIsTyped] = useState('');

  const handleChange = (event) => {
    let value = event.target.value;
    console.log(value);
    setWhatIsTyped(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.howToAdd(whatIsTyped);
  }


  return (
    <form>
      <input
        className="form-control mb-3"
        placeholder="What else do you have to do?"
        onChange={handleChange}
        value={whatIsTyped}
      />
      <button className="btn btn-primary" onClick={handleSubmit} >
        Add task to list
        </button>
    </form>
  );

}

