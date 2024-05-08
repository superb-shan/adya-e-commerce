import React, { useState } from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../slices/userSlice';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const sendLoginRequest = async (email, password) => {
    try {
        console.log("fetching Data");
        const response = await axios.post('/login', {email, password});
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('redirect'));

    const handleLogin = async (e) => {
        e.preventDefault();
        sendLoginRequest(email, password)
        .then(data => {
            console.log(data);
            if(data.token){
                //store the user data in LS
                localStorage.setItem('user', JSON.stringify(data));
                dispatch(setAuth(data));
                navigate("/" + searchParams.get('redirect') || '/');
            }
        
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <main className="flex-1 bg-gray-100 py-12 md:py-16 h-screen">
            <div className="container mx-auto px-4 md:px-8 h-full">
            <div className="flex justify-center items-center w-full h-full">
                {
                    isLogin ? (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[35%]">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Login</h2>
                        <form>
                        <div className="mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input
                            className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            id="email"
                            placeholder="example@email.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                            className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            id="password"
                            placeholder="********"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button className="w-full bg-primary text-white hover:bg-primary/90 focus:ring-primary" onClick={handleLogin}>Login</Button>
                        </form>
                        <div className="mt-4 text-center">
                        <p>
                            Don't have an account? {" "}
                            <button className="text-primary hover:underline" onClick={() => setIsLogin(false)}>
                            Sign up
                            </button>
                        </p>
                        </div>
                    </div>
                    </div>
                    ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[35%]">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                        <form>
                            <div className='flex mb-4 justify-between'>
                                <div className='w-[calc(50%-10px)]'>
                                    <Label htmlFor="name">First Name</Label>
                                    <Input
                                    className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                                    id="name"
                                    placeholder="John Doe"
                                    type="text"
                                    />
                                </div>
                                <div className='w-[calc(50%-10px)]'>
                                    <Label htmlFor="name">Last Name</Label>
                                    <Input
                                    className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                                    id="name"
                                    placeholder="John Doe"
                                    type="text"
                                    />
                                </div>
                            </div>
                        <div className="mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input
                            className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            id="email"
                            placeholder="example@email.com"
                            type="email"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                            className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            id="password"
                            placeholder="********"
                            type="password"
                            />
                        </div>
                        <Button className="w-full bg-primary text-white hover:bg-primary/90 focus:ring-primary">
                            Sign Up
                        </Button>
                        </form>
                        <div className="mt-4 text-center">
                        <p>
                            Already have an account? {" "}
                            <button className="text-primary hover:underline" onClick={() => setIsLogin(true)}>
                                Log in
                            </button>
                        </p>
                        </div>
                    </div>
                    </div>
                    )
                }
            </div>
            </div>
        </main>
    )
}

export default LoginSignup