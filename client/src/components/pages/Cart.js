import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FrownIcon, ShoppingCartIcon } from 'lucide-react';
import { removeFromCart } from '../../slices/cartSlice';
import axios from 'axios';
import {toast} from "sonner";

const Cart = () => {
    const user = useSelector((state) => state.user.auth);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const billing = useSelector((state) => state.billing);
    const [userState, setUserState] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("from Cart", user);
    useEffect(() => {
        if (user) {
            setUserState(user);
        }
    }, [user]);

    //remove cart item from db
    const removeCartItemToDB = async (item) => {
        try {
            console.log("fetching Data");
            const response = await axios.delete(`/cart/${item._id}`,
            {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            );
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    }

    const handleCartItemRemove = (item) => {
        console.log("Item to be removed", item);
        dispatch(removeFromCart({id : item.product_id}));
        toast.success("Item removed from cart")
        removeCartItemToDB(item).then(data => {
            console.log(data);
        }
        ).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
        {
                !userState?
                <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <FrownIcon className="h-24 w-24 text-gray-500 dark:text-gray-400" />
                        <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Oops, we don't know who you are!</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            We apologize for the inconvenience. Please try logging in to see the cart.
                        </p>
                        </div>
                        <Link
                            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
                            to="/login-signup?redirect=cart"erw
                        >
                        Go to Login
                        </Link>
                    </div>
                </div>
                :
                cartItems.length === 0?
                <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center space-y-6">
                    <ShoppingCartIcon className="h-24 w-24 text-gray-500 dark:text-gray-400" />
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Your cart is empty</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Looks like you haven't added anything to your cart yet. Start shopping to add items.
                        </p>
                    </div>
                    <Link
                        className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
                        to={"/"}
                    >
                        Start Shopping
                    </Link>
                    </div>
                </div>
                :
                <main className="flex-1 flex flex-col md:flex-row min-h-[calc(100%-100px)] bg-gray-100 lg:w-full">
                    <section className="bg-gray-100 py-12 md:py-16 md:flex-1 md:max-h-[80vh] md:overflow-y-auto lg:w-4/6">
                        <div className="container mx-auto px-4 md:px-8 h-full">
                            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {
                                    cartItems.map((item, index) => (
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <div className="p-4">
                                            <div className="flex items-center">
                                                <img
                                                alt="Product 1"
                                                className="rounded-md mr-4"
                                                height={64}
                                                src={item.product.image}
                                                style={{
                                                    aspectRatio: "64/64",
                                                    objectFit: "cover",
                                                }}
                                                width={64}
                                                />
                                                <div>
                                                <h3 className="text-lg font-bold">{item.product.title}</h3>
                                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center mt-4">
                                                <span className="text-2xl font-bold">${item.product.price}</span>
                                                <Button size="sm" variant="outline" onClick={() => handleCartItemRemove(item)}>
                                                    Remove
                                                </Button>
                                            </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-100 py-12 md:py-16 md:w-1/3 md:px-8 lg:w-2/6">
                    <div className="container mx-auto md:px-0 px-4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                        <div className="flex justify-between items-center mb-2">
                            <span>Subtotal</span>
                            <span className="font-bold">${billing.subtotal}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span>Shipping</span>
                            <span className="font-bold">${billing.shipping}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span>Total</span>
                            <span className="text-2xl font-bold">${billing.total}</span>
                        </div>
                        <Link to="/payment">
                            <Button className="w-full" size="lg">
                                Continue to Buy
                            </Button>
                        </Link>
                        </div>
                    </div>
                    </section>
                </main>
            }
        </>
    )
}

export default Cart