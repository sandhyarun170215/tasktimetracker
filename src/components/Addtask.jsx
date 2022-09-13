import { useEffect, useState } from "react";

const Addtask = () => {


    let[tasks , setTasks] = useState([]);
    let[taskName , setTaskName] = useState("");


    useEffect(()=>{
        if(localStorage.getItem("tasks") == null )
        {
            localStorage.setItem("tasks", "[]" );
        }
        else
        {
           let t = localStorage.getItem("tasks");
           t = JSON.parse(t);
           setTasks(t);
        }
    } , [])


    let handleSubmit = (e)=>{
        e.preventDefault();

        let task = {taskName : taskName , start : new Date().toLocaleString() , end : "on going"};

        let tasks = localStorage.getItem("tasks");
        tasks = JSON.parse(tasks);
        tasks.push(task);
        tasks = JSON.stringify(tasks);
        localStorage.setItem("tasks", tasks);
        window.location.reload();
    }


    return ( 
    <div className="add-task">

        <h1>{taskName}</h1>

    <form onSubmit={handleSubmit}>
         <input type="text" placeholder="task name" required 
         value={taskName}
         onChange={(e)=>{setTaskName(e.target.value)}}/>

         <input type="submit" value="Add" />
    </form>        

    </div>);
}
 
export default Addtask;