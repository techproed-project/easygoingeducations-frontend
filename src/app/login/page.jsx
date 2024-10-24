import { PageHeader } from '@/components/common/page-header/page-header'
import { Spacer } from '@/components/common/spacer/spacer'
import { LoginForm } from '@/components/login/login-form'
import React from 'react'

export const metadata = {
    title: "Login",
    description: "Login to your account to access all of our features.",
} 

const Page = () => {
  return (
    <>
        <PageHeader title="Login" />
        <Spacer/>
        <LoginForm/>
        <Spacer/>

    </>
  )
}

export default Page