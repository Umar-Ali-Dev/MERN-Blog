import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Sidebar} from 'flowbite-react'
import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import { signoutSuccess } from '../redux/user/userSlice.js'
import { useDispatch } from 'react-redux'

const DashSidebar = () => {
  const location = useLocation()
  const [tab , setTab] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab')
    if(tabFormUrl){
      setTab(tabFormUrl)
    }
  },[location.search])

  const handleSignout = async () => {
    try {
      const res = await fetch('http://localhost:7000/api/user/signout',{
        method:'POST'
      })
      const data = await res.json()
      if(!res.ok){
        console.log(data.message);
      }
      else{
        dispatch(signoutSuccess())
      }
    } catch (error) {
      console.log(error);
    }
   }
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* conflicting link  */}
          <Link to='/dashboard?tab=profile'>  
          <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark' as='div'>
            Profile
          </Sidebar.Item>
          </Link>
          <Sidebar.Item  icon={HiArrowSmRight}  className='cursor-pointer' onClick={handleSignout}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
