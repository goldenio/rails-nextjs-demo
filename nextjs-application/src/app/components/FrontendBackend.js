import { useState } from 'react'
import axios from 'axios'

import Nav from '@/app/components/Nav'
import { useAuthContext } from '@/pages/frontend-backend'

const FrontendBackend = () => {
  const [response, setResponse] = useState('')

  const { accessToken, railsApiUrl } = useAuthContext()

  const handleClick = async () => {
    const { data } = await axios.get(`${railsApiUrl}/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    })
    setResponse(data.message)
  }

  return (
    <div className='p-4'>
      <Nav />
      <div className='my-4'>(B) 後端換 accessToken, 前端拿資料</div>
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

export default FrontendBackend
