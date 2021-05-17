import React, { useState } from 'react';

// export function Task(props) {
//   let theTask = props.task; //can give local name for readability
//   console.log("The Task: ", props.task);

//     let className = '';
//   if (theTask.complete) {
//     className = 'font-strike';
//   }

//   return (
//     <li className={className} >
//       {theTask.description}
//     </li>
//   );
// }

// export default function TaskList(props) {

//   //do data processing
//   //props.tasks is an ARRAY of JS Objects
//   let taskComponents = props.tasks.map((eachTask) => {
//     let singleTask = <Task
//       key={eachTask.id}
//       task={eachTask} />
//     return singleTask;
//   })

//   return (
//     <ol>
//       {taskComponents}
//     </ol>
//   );
// }

// Example 2b
export default function TaskList(props) {

  //do data processing
  //props.tasks is an ARRAY of JS Objects
  let taskComponents = props.tasks.map((eachTask) => {
    let singleTask = (
    <Task
      key={eachTask.id}
      task={eachTask}
      howToHandleClick={props.whatToDoWhenClicked} />
    )
    return singleTask;
  })

  return (
    <ol>
      {taskComponents}
    </ol>
  );
}

// // Example 1 handling a click on the task

// export function Task(props) {
//   let theTask = props.task; //can give local name for readability

//     let className = '';
//   if (theTask.complete) {
//     className = 'font-strike';
//   }

// const handleClick = (event) => {
//   console.log("clickly clicky", props.task.description);
// }

//   return (
//     <li className={className} onClick={handleClick}>
//       {theTask.description}
//     </li>
//   );
// }

// Example 2a Usi?

// // Example 2b Using Hooks to manage State to get the "complete" field 

// export function Task(props) {

//   let theTask = props.task; //can give local name for readability

//   //store completeness in a state variable
//   // const [isComplete, setCompleteness] = useState(theTask.complete); // no longer need because we are getting from prop
//   const [clickCount, setClickCount] = useState(0);

//   // setStateFunction(false);

//   let className = '';
//   if(theTask.complete){
//   // if (isComplete) {
//     className = 'font-strike';
//   }

//   const handleClick = (event) => {
//     // setCompleteness(!isComplete);
//     setClickCount(clickCount +1);
    
//     props.howToHandleClick(theTask.id)
//   }

//   return (
//     <li className={className} onClick={handleClick}>
//       {theTask.description}
//     </li>
//   );
// }


// Example 3

export function Task(props) {

  let theTask = props.task; //can give local name for readability

  //completeness is now stored in state at the app
  const [clickCount, setClickCount] = useState(0);
  
  let className = '';
  if(theTask.complete){
      className = 'font-strike';
  }

  const handleClick = (event) => {
    setClickCount(clickCount + 1);
    props.howToHandleClick(theTask.id);
    console.log("end of handleClick:", clickCount);
  }

  return (
    <li className={className} onClick={handleClick}>
      {theTask.description}
    </li>
  );
}



