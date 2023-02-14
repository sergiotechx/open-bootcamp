import { ITask } from '../interface/todoDefinition';
export type TaskAction =
    | { type: 'addTask', payload: ITask }
    | { type: 'deleteTask', payload: { id: string } }
    | { type: 'updateTask', payload: ITask }


export const TaskReducer = (state: ITask[], action: TaskAction): ITask[] => {
    switch (action.type) {
        case 'addTask': {
            return ([...state, action.payload]);
        }
        case 'updateTask': {
           
            return state.map((task) => {
                    if(task.id == action.payload.id){
                        task.description = action.payload.description
                        task.level = action.payload.level 
                        task.done = action.payload.done 
                    }
                    return task
            })
            
           
         

      
                
                   
        }
        case 'deleteTask': {
            return state.filter((task) => task.id != action.payload.id);
        }

        default: return state;
    }
}