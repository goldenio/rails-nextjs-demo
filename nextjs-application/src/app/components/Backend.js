import { useState } from 'react'

import Nav from '@/app/components/Nav'

const Backend = ({ apiResponse }) => {
  const [response, setResponse] = useState(apiResponse)

  return (
    <div className='p-4'>
      <Nav />
      <div className='my-4'>(C) 後端換 accessToken, 後端拿資料</div>
      <div>
        <p>API response:</p>
        <p>{response}</p>
      </div>
    </div>
  )
}

export default Backend
