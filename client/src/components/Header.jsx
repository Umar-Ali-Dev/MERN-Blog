import React from 'react'
import {Avatar, Button, Dropdown, DropdownItem, Navbar, TextInput} from 'flowbite-react'
import { Form, Link , useLocation} from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import {useSelector} from 'react-redux'


const Header = () => {
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state => state.user) 
  return (
    <Navbar>
        <Link to='/' className='self-center text-sm font-semibold whitespace-nowrap sm:text-xl dark:text-white'>
        <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Umar's</span>
        Blog
        </Link>
        <form>
            <TextInput 
            type='text'
            placeholder='Search..'
            rightIcon={IoSearch }
            className='hidden lg:inline' 
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <IoSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
        <Button className='hidden w-12 h-10 sm:inline' color='gray' pill>
            <FaMoon />
            </Button>
            {
                currentUser ? (
                    <Dropdown arrowIcon={false}
                    inline
                    label= {
                        <Avatar
                        alt='user '
                        rounded
                        />
                    }>
                        <Dropdown.Header>
                            <span className='block text-sm'>@{currentUser.username}</span>
                            <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                        </Dropdown.Header>
                        <Link  to={'/dashboard?tab=profile'}>
                        <Dropdown.Item>
                            Profile
                        </Dropdown.Item>
                        </Link>
                        <Dropdown.Divider/>
                        <Link>
                        <Dropdown.Item>
                            Sign Out
                        </Dropdown.Item>
                        </Link>
                    </Dropdown>
                ) : (
                    <Link to='sign-in'>
                    <Button gradientDuoTone='purpleToBlue' outline>
                        Sign In
                    </Button>
                    </Link>
                )
            }
           
            <Navbar.Toggle/>
        </div>
            <Navbar.Collapse>
                {/* <Navbar.Link active={path === "/"} as={'div'}> */}
                    <Link to='/'>
                        Home
                    </Link>
                {/* </Navbar.Link> */}
                {/* <Navbar.Link active={path === "/about"} as={'div'}> */}
                    <Link to='/about'>
                        About
                    </Link>
                {/* </Navbar.Link> */}
                {/* <Navbar.Link active={path === "/project"} as={'div'}> */}
                    <Link to='/projects'>
                        Projects
                    </Link>
                {/* </Navbar.Link> */}
            </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
