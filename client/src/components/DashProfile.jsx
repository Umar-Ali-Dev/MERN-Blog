import React, { useEffect, useRef, useState } from 'react'
import profileImage from '../assets/image.png'
import {useDispatch, useSelector} from 'react-redux'
import { Button, TextInput } from 'flowbite-react'
import { updateSuccess , updateFailure, updateStart, signoutSuccess} from '../redux/user/userSlice.js'
import {Link} from 'react-router-dom'
 
const DashProfile = () => {
    const {currentUser, loading} = useSelector(state => state.user)
    const [imageFile, setImageFile] = useState('')
    const [imageFileUrl , setImageFileUrl] = useState(null) 
    const profilePickerRef = useRef()
    const [image , setImage] = useState('')
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()


    const handleImageChange = (e) => {
        console.log(e);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result);
            setImageFileUrl(reader.result)
            setFormData({...formData, profilePicture : reader.result})
            // localStorage.setItem("profile-path",JSON.stringify(reader.result))
        }
        reader.onerror = (error) => {
            console.log("error", error);
        }
    }
    const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value})
    }
    

     const handleSubmit = async (e) => {
      e.preventDefault();
      
      if(Object.keys(formData).length === 0){
        return ;
      }
      try {
        dispatch(updateStart())
        const res = await fetch(`http://localhost:7000/api/user/update/${currentUser._id}`, {
          method: 'PUT',
          headers : {
            'Content-Type': 'application/json'
          },
          body : JSON.stringify(formData)
        })

        const data = await res.json()

        if(!res.ok){
          return dispatch(updateFailure(data.message))
        } else{
          dispatch(updateFailure(data))
        }

      } catch (error) {
        dispatch(updateFailure(error.message))
      }
     }

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
    <div className='w-full max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="file" accept='image/*' onChange={handleImageChange} ref={profilePickerRef} hidden />
        <div className='self-center w-32 h-32 overflow-hidden rounded-full shadow-md cursor-pointer' onClick={() => profilePickerRef.current.click()}>
            <img src={imageFileUrl || profileImage} alt="user" className='w-full h-full rounded border-8 border-[lightGray] object-cover'/>
        </div>

        <TextInput type='text' id='username' placeholder='Username' defaultValue={currentUser.username} onChange={handleChange}/>
        <TextInput type='email' id='email' placeholder='Email' defaultValue={currentUser.email} onChange={handleChange}/>
        <TextInput type='password' id='password' placeholder='Password' defaultValue= '*******' onChange={handleChange}/>

        <Button type='submit' outline gradientDuoTone='purpleToBlue' disabled={loading}> {loading ? 'Loading' : "Update"}</Button>
        {
          currentUser.isAdmin && (
            <Link to={'/create-post'}>
            <Button type='button' gradientDuoTone='purpleToBlue' className='w-full'>
              Create a post
            </Button>
            </Link>
          )
        }
      </form>
      <div className='flex justify-between mt-5 text-red-500'>
        <span className='cursor-pointer'>Delete Account</span>
        <span onClick={handleSignout} className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default DashProfile
