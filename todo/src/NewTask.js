import React,{ useState } from "react";
const NewTask = () => {
    const [index, setIndex] = React.useState(0);
    function submitTask() {
        console.log("Task submitted");
        let task=document.getElementById("new-task-input").value;
        console.log(task);
        let due=document.getElementById("task-due-date").value;
        console.log(due);
        setIndex(index+1);
        console.log("index: "+index);
    }
    return ( 
        <div className="new-task">
            <h1>New Task</h1>
            <input className="new-task-input" id="new-task-input" placeholder="Enter task and due date" size="30"></input>
            <input className="task-due-date" type="date" id="task-due-date"></input>
            <button className="add-new-task" onClick={submitTask}>Add new task</button>
        </div>
     );
}
export default NewTask;