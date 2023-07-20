import React from 'react'

function Page() {
  return (
    <div>
      <form action="">
        <h2>Note only owner can sign in</h2>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <button>sign in</button>
      </form>
    </div>
  )
}

export default Page
