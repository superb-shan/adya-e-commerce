import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "../ui/dropdown-menu"
import { Check, FilterIcon, ListOrderedIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';
import axios from 'axios';
import { toast } from 'sonner';

const Product = () => {
    const productsData = useSelector((state) => state.explore.productsData);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.user.auth);
    const dispatch = useDispatch();
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sort, setSort] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setSortedProducts(productsData);
    }, [productsData]);

    const sortProducts = (value) => {
        if(value === 'price-asc'){
            setSortedProducts([...sortedProducts].sort((a, b) => a.price - b.price));
        } else if(value === 'price-desc'){
            setSortedProducts([...sortedProducts].sort((a, b) => b.price - a.price));
        }
    }
    const handleAddToCart = (product) => {
        if(user){
            console.log("Adding to cart", product);
            dispatch(addToCart({product_id: product._id, quantity: 1, product}));
            toast.success("Item added to cart");
            addCartItemToDB(product).then(data => console.log(data)).catch(error => console.error(error));
        }
        else{
            toast.info("Login to use cart!",{
                duration: 10000,
                action: {
                    label: 'Login',
                    onClick: () => navigate("/login-signup"),
                  },
              })
        }
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

    useEffect(() => {
        if(sort){
            sortProducts(sort);
            toast.success("Sorted by " + sort);
        }
    }, [sort]);

    return (
        <div>
            <section className="bg-gray-100 py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">All Products</h2>
                    <div className="flex items-center space-x-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <ListOrderedIcon className="h-5 w-5 mr-2" />
                                Sort
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                                <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {
                            sortedProducts.map((product, index) => (
                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                                    <div className="p-4 flex flex-col justify-between h-[calc(100%-192px)]">
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
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product