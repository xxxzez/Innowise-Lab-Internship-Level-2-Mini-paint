import { SetErrorMessageType } from './common-types';
import { UserType } from './user-types';
import { PickDateType } from './calendar-types';

export type TaskType = {
    date: string
    description: string
    isDone: boolean
    taskId: string
    title: string
}

export type AllTasksType ={
    [key: string]: SomeTaskType
}

export type SomeTaskType = {
    [key: string]: TaskType
}

export type TaskPropsType = {
    error?: string | null
    setErrorMessage?: SetErrorMessageType
    task: TaskType
    user: UserType
    pickedDate: string
    pickDate: PickDateType
}
