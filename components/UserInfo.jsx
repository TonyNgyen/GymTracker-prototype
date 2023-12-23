import React from 'react'

export default function UserInfo() {
  return (
    <div>
        <div>
            Name: John
        </div>
        <div>
            Email: john@email.com
        </div>
        <button className='py-2 px-4 bg-red-400'>
            Log Out
        </button>
    </div>
  )
}
