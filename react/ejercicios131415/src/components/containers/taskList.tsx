import { useContext } from "react"
import { TaskContext } from "../../context/taskContext"
import { TaskAction } from "../../context/taskReducer"
import { ITaskStateLevel,ITask } from "../../interface/todoDefinition";
import { v4 as uuidv4 } from 'uuid';
import { TaskForm } from "../taskForm";


export const TaskList = () =>
{
    const {taskState, dispatch} = useContext(TaskContext);
    console.log("antes",taskState);
    const addTask = ()=>{
        
        dispatch({type :'addTask',payload:{ id: uuidv4(),
        description: '123',
        level: ITaskStateLevel.normal,
        done: false}});
    }
    const deleteTask = (_id:string)=>{
        
        dispatch({type :'deleteTask',payload:{ id: _id}});
    }
    const updateTask = ()=>{
        const temp :ITask ={id: '123',
        description: 'La tarea bien descrita',
        level: ITaskStateLevel.normal,
        done: true}
        
        dispatch({type :'updateTask',payload:temp});
    }
    console.log("despues",taskState);
    return(
    <>
    <button onClick={addTask}>add</button>
    <button onClick={()=>{deleteTask('123')}}> delete</button>
    <button onClick={()=>{updateTask()}}> update</button>
   
    </>
    )}