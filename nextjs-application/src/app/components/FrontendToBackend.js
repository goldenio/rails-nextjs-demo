import { useState } from 'react'
import axios from 'axios'

import Nav from '@/app/components/Nav'

const FrontendToBackend = () => {
  const [response, setResponse] = useState('')

  const handleClick = async () => {
    const {data} = await axios.get('/api/users')

    setResponse(data.message)
  }

  return (
    <div className='p-4'>
      <Nav />
      <div className='my-4'>(D) 前端打後端 API, 後端拿資料</div>
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

export default FrontendToBackend
