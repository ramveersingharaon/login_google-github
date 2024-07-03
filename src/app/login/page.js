import React from 'react'
import { auth } from '@/auth'
import LoginComponents from '@/components/loginComponents'
import { redirect } from 'next/navigation'


const Login = async () => {
    const getSession = await auth()
    
    if(getSession?.user)redirect('/profile')
  

    return (
        <div>
            <LoginComponents getSession={getSession} />
        </div>
    )
}

export default Login