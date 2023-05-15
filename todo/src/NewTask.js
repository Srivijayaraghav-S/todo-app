import React from "react";
const NewTask = () => {
    // if(localStorage.getItem("tasks")===null) {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    // }
    // if(localStorage.getItem("index")===null) {
    //     localStorage.setItem("index", 0);
    // }
    const [index, setIndex] = React.useState(0);
    const [tasks, setTasks] = React.useState([]);
    function submitTask() {
        console.log("Task submitted");
        let task=document.getElementById("new-task-input").value;
        console.log(task);
        let due=document.getElementById("task-due-date").value;
        console.log(due);
        let taskObj={};
        taskObj.task=task;
        taskObj.dueDate=due;
        tasks[index]=taskObj;
        // localStorage.setItem("tasks", JSON.stringify(tasks));
        setIndex(index+1);
        // localStorage.setItem("index", index);
        setTasks(tasks);
        console.log(tasks.length);
        console.log("hello");
        console.log("index: "+index);
        for(let i=0;i<tasks.length;i++) {
            console.log(tasks[i]);
        }
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