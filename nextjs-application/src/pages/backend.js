
import Backend from '@/app/components/Backend'

import '@/app/globals.css'

const fetchAccessToken = async (url, key, secret) => {
  return await fetch(`${url}/oauth/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then( (response) => response.json())
}

const fetchData = async (accessToken, url) => {
  console.log(accessToken, url)
  return await fetch(`${url}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  }).then( (response) => response.json())
}

export const getStaticProps = async () => {
  const key = process.env.BACKEND_CREDENTIAL_ID
  const secret = process.env.BACKEND_CREDENTIAL_SECRET
  try {
    const data = await fetchAccessToken(process.env.OAUTH_SERVER, key, secret)
    const userResponse = await fetchData(data.access_token, process.env.BACKEND_API_URL)

    return {
      props : {
        apiResponse: String(userResponse.message)
      }
    }
  } catch (e) {
    console.log(e)
  }
}

const BackendPage = (props) => {
  return (
    <Backend {...props}/>
  )
}

export default BackendPage
