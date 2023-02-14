import { createContext, useReducer, useState } from "react"
import { ITask, INITIAL_STATE } from '../interface/todoDefinition'
import { TaskReducer,TaskAction } from './taskReducer'

type TaskContextProps ={
    taskState:ITask[],
    dispatch:React.Dispatch<TaskAction>,
}

export const TaskContext = createContext({} as TaskContextProps);

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TaskContextProvider = ({ children }: Props) => {
    const [taskState, dispatch] = useReducer(TaskReducer, INITIAL_STATE);
    return (
        <TaskContext.Provider value={{ taskState, dispatch }}>
            {children}
        </TaskContext.Provider>
    )

}

