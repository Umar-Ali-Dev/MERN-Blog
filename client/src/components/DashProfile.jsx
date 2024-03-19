import React, { useEffect, useRef, useState } from 'react'
import profileImage from '../assets/image.png'
import {useSelector} from 'react-redux'
import { Button, TextInput } from 'flowbite-react'
 


const DashProfile = () => {
    const {currentUser} = useSelector(state => state.user)
    const [imageFile, setImageFile] = useState('')
    const [imageFileUrl , setImageFileUrl] = useState(null) 
    const profilePickerRef = useRef()
    const [image , setImage] = useState('')
    

    const handleImageChange = (e) => {
        console.log(e);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result);
            setImageFileUrl(reader.result)
        }
        reader.onerror = (error) => {
            console.log("error", error);
        }
    }
     

     
 
  return (
    <div className='w-full max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type="file" accept='image/*' onChange={handleImageChange} ref={profilePickerRef} hidden />
        <div className='self-center w-32 h-32 overflow-hidden rounded-full shadow-md cursor-pointer' onClick={() => profilePickerRef.current.click()}>
            <img src={imageFileUrl || profileImage} alt="user" className='w-full h-full rounded border-8 border-[lightGray] object-cover'/>
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
