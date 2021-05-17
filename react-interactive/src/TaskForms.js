// import React from 'react';

// export function AddTaskForm() {

//     return (
//       <form>
//         <input
//           className="form-control mb-3"
//           placeholder="What else do you have to do?"
//         />
//         <button className="btn btn-primary" >
//           Add task to list
//         </button>
//       </form>
//     );
// }


// handleChange, handleSubmit, calling addTaskCallback
import React, { useState } from 'react';

export function AddTaskForm(props) {
    // a controlled form
    const [inputtedValue, setInputtedValue] = useState("");

    const handleChange = (event)=>{
        let newValue = event.target.value; //what the user typed in
        setInputtedValue(newValue)
        console.log(newValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("in handle submit. inputtedValue:  ", inputtedValue );
        props.addTaskCallback(inputtedValue);
        setInputtedValue("");
        
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          value={inputtedValue}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Add task to list
        </button>
      </form>
    );
}
