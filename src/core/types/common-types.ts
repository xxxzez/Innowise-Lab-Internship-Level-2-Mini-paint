import { TaskType } from './tasks-types';
import { UserType } from './user-types';
import { PickDateType } from './calendar-types';
// import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export type HeaderPropsType = {
    user: UserType | null
    setCurrentUser: SetCurrentUserType
    setErrorMessage: SetErrorMessageType
}

export type SetCurrentUserType = (user: UserType | null) => void

export type SetErrorMessageType = (error: string) => void

export type AddTaskPagePropsType = {
    error?: string | null
    setErrorMessage?: SetErrorMessageType
    pickedDate: string
    update?: boolean
    task?: TaskType
    switchEditMode?: () => void
    user: UserType
}

export type SignInPagePropsType = {
    error: string | null
    setCurrentUser: SetCurrentUserType
    setErrorMessage: SetErrorMessageType
}

export type SignUpPagePropsType = {
    error: string | null
    setCurrentUser: SetCurrentUserType
    setErrorMessage: SetErrorMessageType
}
export type TodolistPagePropsType = {
    error?: string | null
    setErrorMessage?: SetErrorMessageType
	pickedDate: string
	pickDate: PickDateType
	user: UserType
}

export type ToastPropsType = {
	message: string,
	setErrorMessage: SetErrorMessageType | undefined,
}

export type TodolistPropsType={
    error?: string | null
    setErrorMessage?: SetErrorMessageType
    pickedDate: string
    pickDate: PickDateType
    tasks: ArrayTasksType
    user: UserType
}

export type ArrayTasksType = TaskType[] | undefined

export type ErrorType = any

// export type HandleDateChangeType = (date: MaterialUiPickersDate, value?: string | null | undefined) => void
