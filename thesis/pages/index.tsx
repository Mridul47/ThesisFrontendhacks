import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

function index() {
  return (
    <main className='bg-black min-h-screen'>
      <Sidebar/>
      <Feed/>
    </main>
  )
}

export default index