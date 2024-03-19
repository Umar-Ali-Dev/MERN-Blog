import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar'
import DashProfile from '../components/DashProfile'

const Dashboard = () => {
  const location = useLocation()
  const [tab , setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab')
    if(tabFormUrl){
      setTab(tabFormUrl)
    }
  },[location.search])
  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      {/* Sidebar  */}
      <div className='md:w-56'>
        <DashSidebar/>
      </div>

      {/* Profile  */}
      <div className='w-full'>
        {
          tab === 'profile' && <DashProfile/>
        }
      </div>
    </div>
  )
}

export default Dashboard
