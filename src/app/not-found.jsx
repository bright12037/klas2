import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <p>Page not found in next</p>
      <p>return home <Link href="/">Klas Home</Link></p>
    </div>
  )
}

export default NotFound
