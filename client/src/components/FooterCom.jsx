import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsTwitch, BsGithub, BsInstagram, BsDribbble, BsTwitterX} from 'react-icons/bs'
const FooterCom = () => {
  return (
    <div className="mt-10">
      <Footer container className='p-5 border border-t-8 border-teal-500'>
        <div className='w-full mx-auto max-w-7xl'>
          <div className='grid justify-between w-full sm:flex md:grid-cols-1'>
            <div className="mt-5 mb-5">
              <Link to='/' className='self-center text-lg font-semibold whitespace-nowrap dark:text-white'>
                <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Umar's</span>
                Blog
              </Link>
            </div>

            <div className='grid grid-cols-2 gap-5 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
                <Footer.Title title='About' className="mb-3"/>
                <Footer.LinkGroup col>
                  <Footer.Link 
                    href='https://www.youtube.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Next.js Chat bot
                  </Footer.Link>
                  <Footer.Link 
                    href='https://www.youtube.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Umar's Blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Resources' className="mb-3"/>
                <Footer.LinkGroup col>
                  <Footer.Link 
                    href='https://reactjs.org/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    React Docs
                  </Footer.Link>
                  <Footer.Link 
                    href='https://flowbite.com/docs/react/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Flowbite Docs
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Contact' className="mb-3"/>
                <Footer.LinkGroup col>
                  <Footer.Link 
                    href='mailto:contact@example.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Contact Us
                  </Footer.Link>
                  <Footer.Link 
                    href='https://www.example.com/support'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Support
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <div>
            <Footer.Divider/>
            <div className='w-full sm:items-center sm:justify-between sm:flex'>
                <Footer.Copyright 
                href='#'
                by="Umar,s Blog"
                year={new Date().getFullYear()}
                />

                <div className='flex gap-6 mt-4 sm:mt-0 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitterX}/>
                    <Footer.Icon href='#' icon={BsDribbble}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                </div>
            </div>

          </div>
        </div>
      </Footer>
    </div>
  )
}

export default FooterCom
