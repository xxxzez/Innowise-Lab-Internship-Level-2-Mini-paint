export type UserType = {
    email: string | null
    uid: string | null
    photo: string | null | undefined
}  | null

export type UserStateType = UserType | null