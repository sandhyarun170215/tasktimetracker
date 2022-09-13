import { useState } from "react";
import { useEffect } from "react";

const Tasklist = () => {

    let[multipleTask,setMultipleTask] = useState(null);

    useEffect(()=>{
      let t =   localStorage.getItem("tasks");
      t = JSON.parse(t);
      setMultipleTask(t);
    } , [])


    return ( 
    <div className="task-list">
        <h1>-- Tasks List --</h1>
        <hr />
        {!multipleTask && <h1>No task added , please add some</h1>}

        {multipleTask && 
        <table border="3px">
            <thead>
                <tr>
                    <th>Sl no</th>
                    <th>Task Name</th>
                    <th>Start Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
            {
                multipleTask.map((task,i)=>{
                    return (
                        <tr>
                            <td>{i+1}</td>
                            <td>{task.taskName}</td>
                            <td>{task.start}</td>
                            <td>"on going"</td>
                            <td><button>completed</button></td>
                        </tr>
                    )

                })
            }
            </tbody>
        </table>}

       

    </div> );
}
 
export default Tasklist;