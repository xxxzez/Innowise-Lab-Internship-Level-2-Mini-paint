import { AllTasksType } from './tasks-types';
export type CalendarContainerPropsType = {
	pickDate: PickDateType
	allTasks: AllTasksType
	pickedDate: string
}
export type CalendarPropsType = {
	daysLeft: DayItemType[]
	pickDate: PickDateType
	pickedDate:string
	getTasksInfo: (dateString: string) => boolean[]
}

export type DayItemPropsType = {
	pickDate: PickDateType
	dayItem: DayItemType
	pickedDate: string
	getTasksInfo: (dateString: string) => boolean[]
}

export type PickDateType = (dateString: string) => void

export type DayItemType = {
	day: number
	dayOfTheWeek: string
	month: number
	dateString: string
	year: number
	key: string
}
