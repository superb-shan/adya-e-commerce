import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const user = useSelector((state) => state.user.auth);
    const [userState, setUserState] = useState(null);
    const navigate = useNavigate();
    console.log("from Cart", user);
    useEffect(() => {
        if (user) {
            setUserState(user);
        }
    }, [user]);

    return (
            <main className="flex-1 flex flex-col md:flex-row min-h-[calc(100%-100px)] bg-gray-100 lg:w-full">
            <section className="bg-gray-100 py-12 md:py-16 md:flex-1 md:max-h-[80vh] md:overflow-y-auto lg:w-4/6">
            <div className="container mx-auto px-4 md:px-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
                <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                    <div className="flex items-center">
                        <img
                        alt="Product 1"
                        className="rounded-md mr-4"
                        height={64}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "64/64",
                            objectFit: "cover",
                        }}
                        width={64}
                        />
                        <div>
                        <h3 className="text-lg font-bold">Product 1</h3>
                        <p className="text-gray-600">Quantity: 2</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold">$99.98</span>
                        <Button size="sm" variant="outline">
                        Remove
                        </Button>
                    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                    <div className="flex items-center">
                        <img
                        alt="Product 2"
                        className="rounded-md mr-4"
                        height={64}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "64/64",
                            objectFit: "cover",
                        }}
                        width={64}
                        />
                        <div>
                        <h3 className="text-lg font-bold">Product 2</h3>
                        <p className="text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold">$59.99</span>
                        <Button size="sm" variant="outline">
                        Remove
                        </Button>
                    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                    <div className="flex items-center">
                        <img
                        alt="Product 3"
                        className="rounded-md mr-4"
                        height={64}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "64/64",
                            objectFit: "cover",
                        }}
                        width={64}
                        />
                        <div>
                        <h3 className="text-lg font-bold">Product 3</h3>
                        <p className="text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold">$69.99</span>
                        <Button size="sm" variant="outline">
                        Remove
                        </Button>
                    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                    <div className="flex items-center">
                        <img
                        alt="Product 4"
                        className="rounded-md mr-4"
                        height={64}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "64/64",
                            objectFit: "cover",
                        }}
                        width={64}
                        />
                        <div>
                        <h3 className="text-lg font-bold">Product 4</h3>
                        <p className="text-gray-600">Quantity: 3</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold">$149.97</span>
                        <Button size="sm" variant="outline">
                        Remove
                        </Button>
                    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                    <div className="flex items-center">
                        <img
                        alt="Product 5"
                        className="rounded-md mr-4"
                        height={64}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "64/64",
                            objectFit: "cover",
                        }}
                        width={64}
                        />
                        <div>
                        <h3 className="text-lg font-bold">Product 5</h3>
                        <p className="text-gray-600">Quantity: 2</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold">$89.98</span>
                        <Button size="sm" variant="outline">
                        Remove
                        </Button>
                    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                    <div className="flex items-center">
                        <img
                        alt="Product 6"
                        className="rounded-md mr-4"
                        height={64}
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "64/64",
                            objectFit: "cover",
                        }}
                        width={64}
                        />
                        <div>
                        <h3 className="text-lg font-bold">Product 6</h3>
                        <p className="text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold">$49.99</span>
                        <Button size="sm" variant="outline">
                        Remove
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="bg-gray-100 py-12 md:py-16 md:w-1/3 md:px-8 lg:w-2/6">
            <div className="container mx-auto md:px-0 px-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                <div className="flex justify-between items-center mb-2">
                    <span>Subtotal</span>
                    <span className="font-bold">$519.90</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span>Shipping</span>
                    <span className="font-bold">$0.00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span>Total</span>
                    <span className="text-2xl font-bold">$519.90</span>
                </div>
                <Button className="w-full" size="lg">
                    Continue to Buy
                </Button>
                </div>
            </div>
            </section>
        </main>
    )
}

export default Cart