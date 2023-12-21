import React from 'react'

export default function LoginForm() {
  return (
    <div>
        <form>
            <input type="text" name="email" id="1" placeholder='Email' className='border border-black'/>
            <input type="password" name="text" id="2" placeholder='Password' className='border border-black'/>
            <button className='bg-green-400 px-6 py-2'>Login</button>
            <div className='bg-red-400 px-6 py-2 w-fit'>Erorr Message</div>
        </form>
    </div>
  )
}

// https://youtu.be/PEMfsqZ2-As?t=634