import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col max-w-3xl gap-5 p-3 mx-auto md:flex-row md:items-center'>
        {/* left  */}
        <div className='flex-1'>
        <Link to='/' className='text-4xl font-bold dark:text-white'>
        <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Umar's</span>
        Blog
        </Link>
        <p className='mt-5 text-sm '>
          This website is for lawyers . now i am just making a dummy project
        </p>
        </div>
        {/* right  */}
        <div className='flex-1'>
          <form  className='flex flex-col gap-3'>
            <div>
              <Label value=' your UserName '/>
              <TextInput type='text' placeholder='Username ' id='username'/>
            </div>
            <div>
              <Label value=' your Email '/>
              <TextInput type='text' placeholder='name@gmail.com ' id='email'/>
            </div>
            <div>
              <Label value=' your Password '/>
              <TextInput type='text' placeholder='Password ' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
            <div className='flex items-center gap-2 mt-3 text-sm'>
              <span>Have an account ? </span>
              <Link to='/sign-in' className='text-blue-500' >
              Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
