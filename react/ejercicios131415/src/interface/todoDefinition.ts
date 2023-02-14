
export enum ITaskStateLevel {
    normal = 'normal',
    ugent = 'urgent',
    blocking = 'blocking'
}
export interface ITask {
    id: string,
    description: string,
    level:ITaskStateLevel,
    done: boolean,
}
export interface ITaskContextType {
    taskContext: ITask[];
    setTaskContext: (value: ITask) => void;
};

/*export interface ITaskState {
    tasks: ITask[];
};*/
export const INITIAL_STATE: ITask[]  = 
     [{id: '123',
       description: 'Pepito pepitoria',
        level:ITaskStateLevel.blocking,
        done: false}
     ]







