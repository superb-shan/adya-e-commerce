import React, { useEffect, useState } from 'react'
import { CustomCarouselMultiple } from '../CustomCarousel';
import { ArrowRight, Check, FilterIcon, FlagIcon, HomeIcon, LaptopIcon, ListOrderedIcon, PaintbrushIcon, ShirtIcon, ToyBrickIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setInitialData } from '../../slices/exploreSlice';
import getRandomSubset from '../../lib/array-randomizer';
import { addToCart } from '../../slices/cartSlice';

const items = [
    {
        name: 'Featured Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
    },
    {
        name: 'Featured Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
    },
    {
        name: 'Featured Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
    },
    {
        name: 'Featured Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
    }
]

const Explore = () => {
    const productsData = useSelector((state) => state.explore.productsData);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.user.auth);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        console.log("Adding to cart", product);
        dispatch(addToCart({product_id: product._id, quantity: 1, product}));
        addCartItemToDB(product).then(data => console.log(data)).catch(error => console.error(error));
    }

    const addCartItemToDB = async (product) => {
        try {
            console.log("fetching Data");
            const response = await axios.post('/cart/add', {product_id: product._id, quantity: 1}, 
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

    return (
        <div className="flex flex-col bg-gradient-to-br from-[#fdaa28] to-[#de128d]">
            {
                // !productData ? <div>Loading...</div>
                // :
                // <div className='max-w-[calc(100%-60px)] mx-auto'>
                //     <CustomCarouselMultiple items={getRandomSubset(productData, 5)} />
                // </div>
            }
            <section className="bg-gray-100 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        getRandomSubset(productsData, 3).map((product, index) => {
                            return (
                                <div key={index}>
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                        <Link to={`/product/${product._id}`}>
                                            <div className="relative">
                                                <img
                                                    alt="Featured Product"
                                                    className="w-full h-48 object-cover"
                                                    height={300}
                                                    src={product.image}
                                                    style={{
                                                        aspectRatio: "400/300",
                                                        objectFit: "cover",
                                                    }}
                                                    width={400}
                                                />
                                                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                    <p className="text-white text-lg font-bold">View Details</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="p-6 flex flex-col justify-between h-[calc(100%-192px)]">
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                                                <p className="text-gray-600 mb-4" title={product.description}>{product.description.slice(0, 150) + "..."}</p>
                                            </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold">${product.price}</span>
                                            {
                                                cartItems.find(item => item.product._id === product._id) ? <Button size="sm" variant="outline" disabled={true}>In Cart <Check className='ml-2 h-4 w-4' /></Button> : <Button size="sm" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                            }
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                
                </div>
            </div>
            </section>
            <section className="bg-gray-100 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <Link
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition-colors"
                    href="#"
                >
                    <div className="p-4 flex flex-col items-center">
                    <LaptopIcon className="h-12 w-12 mb-2" />
                    <span className="text-gray-700 font-medium">Electronics</span>
                    </div>
                </Link>
                <Link
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition-colors"
                    href="#"
                >
                    <div className="p-4 flex flex-col items-center">
                    <ShirtIcon className="h-12 w-12 mb-2" />
                    <span className="text-gray-700 font-medium">Clothing</span>
                    </div>
                </Link>
                <Link
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition-colors"
                    href="#"
                >
                    <div className="p-4 flex flex-col items-center">
                    <HomeIcon className="h-12 w-12 mb-2" />
                    <span className="text-gray-700 font-medium">Home</span>
                    </div>
                </Link>
                <Link
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition-colors"
                    href="#"
                >
                    <div className="p-4 flex flex-col items-center">
                    <PaintbrushIcon className="h-12 w-12 mb-2" />
                    <span className="text-gray-700 font-medium">Beauty</span>
                    </div>
                </Link>
                <Link
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition-colors"
                    href="#"
                >
                    <div className="p-4 flex flex-col items-center">
                    <FlagIcon className="h-12 w-12 mb-2" />
                    <span className="text-gray-700 font-medium">Sports</span>
                    </div>
                </Link>
                <Link
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition-colors"
                    href="#"
                >
                    <div className="p-4 flex flex-col items-center">
                    <ToyBrickIcon className="h-12 w-12 mb-2" />
                    <span className="text-gray-700 font-medium">Toys</span>
                    </div>
                </Link>
                </div>
            </div>
            </section>
            <section className="bg-gray-100 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-2xl font-bold mb-6">Promotional Banners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Summer Sale</h3>
                    <p className="mb-4">Get up to 50% off on selected items.</p>
                    <Button size="sm">Shop Now</Button>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                    <p className="mb-4">Enjoy free shipping on all orders over $50.</p>
                    <Button size="sm">Learn More</Button>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">New Arrivals</h3>
                    <p className="mb-4">Check out our latest collection of products.</p>
                    <Button size="sm">Explore Now</Button>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <div className="flex items-center space-x-4">
                <Link to={"/product"}>
                    <Button variant="outline" className="flex">
                        Show All
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                getRandomSubset(productsData, 4).map((product, index) => {
                    return (
                        <div key={index}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                <Link to={`/product/${product._id}`}>
                                    <div className="relative">
                                        <img
                                            alt="Featured Product"
                                            className="w-full h-48 object-cover"
                                            height={300}
                                            src={product.image}
                                            style={{
                                                aspectRatio: "400/300",
                                                objectFit: "cover",
                                            }}
                                            width={400}
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white text-lg font-bold">View Details</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-6 flex flex-col justify-between h-[calc(100%-192px)]">
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                                        <p className="text-gray-600 mb-4" title={product.description}>{product.description.slice(0, 150) + "..."}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold">${product.price}</span>
                                        {
                                            cartItems.find(item => item.product._id === product._id) ? <Button size="sm" variant="outline" disabled={true}>In Cart <Check className='ml-2 h-4 w-4' /> </Button> : <Button size="sm" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }            
          </div>
        </div>
      </section>
        </div>
    )
}

export default Explore