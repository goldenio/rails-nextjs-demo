
import { useContext, createContext } from 'react'

import FrontendBackend from '@/app/components/FrontendBackend'

import '@/app/globals.css'

const AuthContext = createContext({})

export const AuthProvider = AuthContext.Provider

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const getStaticProps = async () => {
  const key = process.env.FRONTEND_CREDENTIAL_ID
  const secret = process.env.FRONTEND_CREDENTIAL_SECRET
  try {
    const data = await fetch(`${process.env.OAUTH_SERVER}/oauth/token`, {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then( (response) => response.json())

    return {
      props : {
        railsApiUrl: String(process.env.FRONTEND_API_URL),
        accessToken: String(data.access_token)
      }
    }
  } catch (e) {
    console.log(e)
  }
}

const FrontendBackendPage = (props) => {
  return (
    <AuthProvider value={{
      ...props
    }}>
      <FrontendBackend />
    </AuthProvider>
  )
}

export default FrontendBackendPage
