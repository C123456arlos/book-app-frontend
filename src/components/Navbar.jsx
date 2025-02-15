import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import avatarImg from '../assets/avatar.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
const navigation = [
    { name: 'Dashboard', href: "/dashboard" },
    { name: 'Orders', href: "/orders" },
    { name: 'Cart Page', href: "/cart" },
    { name: 'Check Out', href: "/checkout" }
]
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems)
    const { currentUser, logout } = useAuth()
    const handleLogOut = () => {
        logout()
    }
    // const currentUser = false
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6'>
            <nav className='flex justify-between items-centers'>
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to='/'><HiMiniBars3CenterLeft className="size-6" /></Link>
                    <div className="relative sm:w-72 w-40 space-x-2"><IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
                        <input type="text" placeholder="search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"></input></div>
                </div>
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
                        {currentUser ? <>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src={avatarImg} className={`w-7 h-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}></img>
                            </button>
                            {isDropdownOpen && (<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg
                            rounded-md z-40"><ul className="py-2">{
                                    navigation.map((item) => (<li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-400 ">
                                            {item.name}
                                        </Link>
                                    </li>))
                                }
                                    <li>
                                        <button onClick={handleLogOut} className="block px-4 py-2 w-full text-sm hover:bg-gray-400">logout</button>
                                    </li></ul></div>)}
                        </> : <Link to='/login'><AiOutlineUser className="w-6 h-6" /></Link>
                        }
                    </div>
                    <button className="hidden sm:block"><CiHeart className="size-6" /></button>
                    <Link to="/cart" className="bg-yellow-300 p-1 sm:px-6 px-2 flex items-center rounded-md"><CiShoppingCart className="w-6 h-6" />
                        {cartItems.length > 0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span>}
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Navbar