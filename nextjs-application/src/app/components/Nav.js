import Link from 'next/link'

const Nav = () => {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link href="/" className="text-yellow-500 hover:text-yellow-200">
          Home
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/frontend" className="text-yellow-500 hover:text-yellow-200">
          (A) 前端換 accessToken, 前端拿資料
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/frontend-backend" className="text-yellow-500 hover:text-yellow-200">
          (B) 後端換 accessToken, 前端拿資料
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/backend" className="text-yellow-500 hover:text-yellow-200">
          (C) 後端換 accessToken, 後端拿資料
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/frontend-to-backend" className="text-yellow-500 hover:text-yellow-200">
          (D) 前端打後端 API, 後端拿資料
        </Link>
      </li>
    </ul>
  )
}

export default Nav
