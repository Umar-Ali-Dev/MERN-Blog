import React from 'react'
import profileImage from '../assets/profile-image.jpeg'
import {useSelector} from 'react-redux'
import { Button, TextInput } from 'flowbite-react'

const DashProfile = () => {
    const {currentUser} = useSelector(state => state.user)
  return (
    <div className='w-full max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <div className='self-center w-32 h-32 overflow-hidden rounded-full shadow-md cursor-pointer'>
            <img src={profileImage} alt="user" className='w-full h-full rounded border-8 border-[lightGray] object-cover'/>
        </div>

        <TextInput type='text' id='username' placeholder='Username' defaultValue={currentUser.username}/>
        <TextInput type='email' id='email' placeholder='Email' defaultValue={currentUser.email}/>
        <TextInput type='password' id='password' placeholder='Password' defaultValue= '*******'/>

        <Button type='submit' outline gradientDuoTone='purpleToBlue'> Update</Button>
      </form>
      <div className='flex justify-between mt-5 text-red-500'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default DashProfile
