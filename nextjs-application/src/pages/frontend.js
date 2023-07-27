
import { useContext, createContext, useState } from 'react'

import Frontend from '@/app/components/Frontend'

import '@/app/globals.css'

const AuthContext = createContext({})

export const AuthProvider = AuthContext.Provider

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const getStaticProps = async () => {
  return {
    props : {
      railsApiUrl: String(process.env.FRONTEND_API_URL),
      oauthServerUrl: String(process.env.OAUTH_SERVER),
      credentialId: process.env.FRONTEND_CREDENTIAL_ID,
      secret: process.env.FRONTEND_CREDENTIAL_SECRET
    }
  }
}

const FrontendPage = (props) => {
  const [accessToken, setAccessToken] = useState('')

  return (
    <AuthProvider value={{
      ...props,
      accessToken,
      setAccessToken,
    }}>
      <Frontend />
    </AuthProvider>
  )
}

export default FrontendPage
