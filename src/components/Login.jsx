import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';


const Login = () => {
    const [message, setMessage] = useState("")
    const { loginUser, signInWithGoogle } = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password)
            alert('login successful')
            navigate("/")
        } catch (error) {
            setMessage('please provide a valid email and password')
            console.error(error)
        }
    }
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            alert('login successful')
            navigate("/")
        } catch (error) {
            alert('google sign in failed')
            console.error(error)
        }
    }
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-xl font-semibold mb-4 '>please login</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='mb-4 '>
                        <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='email'>email</label>
                        <input
                            {...register("email", { required: true })}
                            type='email' name='email' id='email' placeholder='email address' className='
                        shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none
                        focus:shadow'></input>
                    </div>
                    <div className='mb-4 '>
                        <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='password'>password</label>
                        <input
                            {...register("password", { required: true })}
                            type='password' name='password' id='password' placeholder='password' className='
                        shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none
                        focus:shadow'></input>
                    </div>
                    {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}
                    <div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold
                        py-2 px-8 rounded focus:outline-none'>login</button>
                    </div>
                </form>
                <p className='align-baseline font-medium mt-4 text-sm'>haven't got an account please
                    <Link to='/register' className='text-blue-400 hover:text-blue-700'> register</Link></p>
                <div className='mt-4'>
                    <button
                        onClick={handleGoogleSignIn}
                        className='w-full flex flex-wrap gap-1 items-center justify-center bg-yellow-500
                    hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                        <FaGoogle className='mr-2' />
                        sign in with google
                    </button>
                </div>
                <p className='mt-5 text-center text-gray-500 text-xs'> 2025 book store all rights reserved</p>
            </div>
        </div>
    )
}

export default Login
