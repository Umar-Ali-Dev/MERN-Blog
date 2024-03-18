import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [formData , setFormData] =  useState({})
  const [loading , setLoading] = useState(false)
  const [errorMessage , setErrorMessage] =useState(null)
  const navigate = useNavigate();

  const handleChange = (e) => {
     setFormData( {...formData, [e.target.id]: e.target.value.trim()})
     setLoading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      return setErrorMessage('Please fill out all the fields')
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('http://localhost:7000/api/user/signin', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formData)
      });
      const data = await  res.json()
      if(data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate('/')
      }
    } catch (error) {
      setLoading(false)
      setErrorMessage(error.message)
    }
  }

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
          <form  className='flex flex-col gap-3' onSubmit={handleSubmit}>
          
            <div>
              <Label value=' your Email '/>
              <TextInput type='email' placeholder='name@gmail.com ' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value=' your Password '/>
              <TextInput type='password' placeholder='Password ' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading...</span>
                </>
                )
                : 'Sign In'
              }
            </Button>
            <div className='flex items-center gap-2 mt-3 text-sm'>
              <span>Don't have an account ? </span>
              <Link to='/sign-up' className='text-blue-500' >
              Sign Up
              </Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-3' color='failure'>
                  {errorMessage}
                </Alert>
              )
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
