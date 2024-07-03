'use server'

import { signIn,signOut } from "@/auth"


export const githubLoginAction = async () => {
    await signIn('github')
}
export const googleLoginAction = async () => {
    await signIn('google')
}


export const signOutAction = async () => {
    await signOut()
}