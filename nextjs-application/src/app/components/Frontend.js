import { useState, useEffect } from 'react'
import axios from 'axios'

import Nav from '@/app/components/Nav'
import { useAuthContext } from '@/pages/frontend'

const fetchAccessToken = async (oauthServerUrl, credentialId, secret, setAccessToken) => {
  const { data } = await axios.post(`${oauthServerUrl}/oauth/token`, {
    grant_type: 'client_credentials',
    client_id: credentialId,
    client_secret: secret,
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  setAccessToken(data.access_token)
}

const Frontend = () => {
  const [response, setResponse] = useState('')

  const { railsApiUrl, credentialId, secret, accessToken, setAccessToken, oauthServerUrl } = useAuthContext()

  const handleClick = async () => {
    const { data } = await axios.get(`${railsApiUrl}/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    })
    setResponse(data.message)
  }

  useEffect(() => {
    if (!accessToken) {
      fetchAccessToken(oauthServerUrl, credentialId, secret, setAccessToken)
    }
  }, [oauthServerUrl, accessToken, credentialId, secret])

  return (
    <div className='p-4'>
      <Nav />
      <div className='my-4'>(A) 前端換 accessToken, 前端拿資料</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={handleClick}>
        Button
      </button>
      <div>
        <p>API response:</p>
        <p>{response}</p>
      </div>
    </div>
  )
}

export default Frontend
