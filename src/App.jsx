
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId,setEditId]=useState(null)

  // Submit functionalities
  function handleSubmit(e) {
    e.preventDefault();

    if(editId){
      let updatetasks=tasks.map(e=>{
        if(e.id==editId){
          e.task=task
        }
        return e
      })
      setTasks(updatetasks);
      setEditId(null)
      setTask('')
      

    }
    else{
    if (!task.trim()) return; // Prevent adding empty tasks
    const newTask = {
      id: Math.trunc(Math.random() * 10000),
      task: task,
      
    };
  
    setTasks([...tasks, newTask]);
    setTask("");
  }
}

  // Delete functionalities
  function Delete(id) {
    let deleteTasks = tasks.filter((e) => e.id !== id);
    setTasks(deleteTasks);
  }
  // Edit  Functionalities
  function EditTask(id){
    let taskObj=tasks.find((e)=>e.id==id)
    setTask(taskObj.task)
  }
   
  // Basic styles
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "20px auto",
      padding: "10px",
      backgroundColor: "#f4f4f9",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    taskInput: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    inputField: {
      flex: "1",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    addButton: {
      padding: "10px 15px",
      backgroundColor: "#6200ea",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    taskList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
    },
    taskCard: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      width: "calc(50% - 10px)",
      textAlign: "center",
    },
    taskActions: {
      marginTop: "10px",
      display: "flex",
      justifyContent: "space-between",
    },
    actionButton: {
      padding: "5px 10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    deleteButton: {
      backgroundColor: "#e63946",
      color: "#fff",
    },
    editButton: {
      backgroundColor: "#48cae4",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Task Manager</h2>
      <form onSubmit={handleSubmit} style={styles.taskInput}>
        <input
          type="text"
          placeholder="Write your task here..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.inputField}
        />
        <button type="submit" style={styles.addButton}>
          {editId?"UPDATE":"ADD"}
        </button>
      </form>
      <div style={styles.taskList}>
        {tasks.map((e) => (
          <div key={e.id} style={styles.taskCard}>
            <div>{e.task}</div>
            <div style={styles.taskActions}>
              <button
                onClick={() => Delete(e.id)}
                style={{ ...styles.actionButton, ...styles.deleteButton }}
              >
                Delete
              </button>
              <button
                style={{ ...styles.actionButton, ...styles.editButton }}
                onClick={()=>EditTask(e.id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
