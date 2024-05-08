import React, { useState } from 'react'
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { emptyCart } from '../../slices/cartSlice';
import { setShipping } from '../../slices/billingSlice';
import { FrownIcon, ShoppingCartIcon, TruckIcon } from 'lucide-react';
import {toast} from "sonner"

const Payment = () => {
    const billing = useSelector((state) => state.billing);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector(state => state.user.auth);
    const dispatch = useDispatch();
    const [isPlaceOrder, setIsPlaceOrder] = useState(false);

    const handlePlaceOrder = async () => {
        try {
            console.log("deleting cart items Data");
            const response = await axios.delete('/cart/all', {
              headers: {
                  Authorization: `Bearer ${user.token}`
                }
                }
            );
            dispatch(emptyCart());
            dispatch(setShipping(0));
            setIsPlaceOrder(true);
            toast.success("Your Order has been placed!")
            return response.data;
          } catch (error) {
            throw new Error('Failed to delete data');
          }
    }
  return (
    <div>
        {
            !user?
            <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <FrownIcon className="h-24 w-24 text-gray-500 dark:text-gray-400" />
                    <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Oops, we don't know who you are!</h2>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        We apologize for the inconvenience. Please try logging in to see the payment page.
                    </p>
                    </div>
                    <Link
                        className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
                        to="/login-signup?redirect=payment"
                    >
                    Go to Login
                    </Link>
                </div>
            </div>
            :
            isPlaceOrder?
            <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <TruckIcon className="h-24 w-24 text-green-500" />
                    <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Your Order is on the Way</h2>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Thank you for your purchase! Your order has been placed and is being prepared for shipment. You'll receive a
                        tracking number soon.
                    </p>
                    </div>
                    <div className="flex gap-4">
                    <Link
                        className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
                        to={"#"}
                        onClick={() => toast.info("Tracking information has been sent to you!")}
                    >
                        Track Order
                    </Link>
                    <Link
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
                        to={"/"}
                    >
                        Continue Shopping
                    </Link>
                    </div>
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
            <main className="flex-1 h-[81vh]">
            <section className="bg-gray-100 py-12 md:py-16 h-full">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Payment</h2>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <form>
                        <div className="mb-4">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input
                            className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            id="card-number"
                            placeholder="0000 0000 0000 0000"
                            type="text"
                            />
                        </div>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                            <Label htmlFor="expiry-date">Expiry Date</Label>
                            <Input
                                className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                                id="expiry-date"
                                placeholder="MM/YY"
                                type="text"
                            />
                            </div>
                            <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                                className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                                id="cvv"
                                placeholder="CVV"
                                type="text"
                            />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="name-on-card">Name on Card</Label>
                            <Input
                            className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            id="name-on-card"
                            placeholder="John Doe"
                            type="text"
                            />
                        </div>
                        <Button className="w-full bg-primary text-white hover:bg-primary/90 focus:ring-primary" onClick={() => toast.success("Success")}>
                            Complete Order
                        </Button>
                        </form>
                    </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <span>Subtotal</span>
                        <span className="font-bold">${billing.subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span>Shipping</span>
                        <span className="font-bold">${billing.shipping}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <span>Total</span>
                        <span className="text-2xl font-bold">${billing.total}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link to="/">
                            <Button className="text-primary hover:bg-primary/10 focus:ring-primary" variant="outline">
                                Continue Shopping
                            </Button>
                        </Link>
                        <Button className="bg-primary text-white hover:bg-primary/90 focus:ring-primary" onClick={() => handlePlaceOrder()}>
                        Place Order
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </main>
        }
    </div>
  )
}

export default Payment