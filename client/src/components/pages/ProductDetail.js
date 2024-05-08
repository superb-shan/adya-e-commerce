import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Check, CheckCheck, Heart, StarIcon } from 'lucide-react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';

const getProductWithId = async (id) => {
    try {
      console.log("fetching Data");
      const response = await axios.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
}

function ProductDetail() {
    const { id } = useParams();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.user.auth);
    const [product, setProduct] = React.useState(null);
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

    useEffect(() => {
        //get product with id using axios
        getProductWithId(id).then((data) => {
            setProduct(data);
        }
        ).catch((error) => {
            console.error(error);
        }
        );
    }, [id]);

    // Render product details (replace with your data display logic)
    if (product) {
        return (
            <div>
                <div className="bg-gray-100 py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-start">
                        <div>
                        <img
                            alt="Product Image"
                            className="w-full rounded-lg shadow-md"
                            src={product.image}
                            height={600}
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                                aspectRatio: "600/600",
                            }}
                            width={600}
                        />
                        {/* <div className="mt-4 grid grid-cols-4 gap-4">
                            <button className="border rounded-lg overflow-hidden">
                            <img
                                alt="Product Thumbnail"
                                className="w-full h-24 object-cover"
                                height={100}
                                src="/placeholder.svg"
                                style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                                }}
                                width={100}
                            />
                            </button>
                            <button className="border rounded-lg overflow-hidden">
                            <img
                                alt="Product Thumbnail"
                                className="w-full h-24 object-cover"
                                height={100}
                                src="/placeholder.svg"
                                style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                                }}
                                width={100}
                            />
                            </button>
                            <button className="border rounded-lg overflow-hidden">
                            <img
                                alt="Product Thumbnail"
                                className="w-full h-24 object-cover"
                                height={100}
                                src="/placeholder.svg"
                                style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                                }}
                                width={100}
                            />
                            </button>
                            <button className="border rounded-lg overflow-hidden">
                            <img
                                alt="Product Thumbnail"
                                className="w-full h-24 object-cover"
                                height={100}
                                src="/placeholder.svg"
                                style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                                }}
                                width={100}
                            />
                            </button>
                        </div> */}
                        </div>
                        <div className="space-y-6 h-[80%] flex flex-col justify-between">
                            <div className='flex flex-col gap-14'>
                                <div className='flex flex-col gap-5'>
                                    <h1 className="text-3xl font-bold">{product.title}</h1>
                                    <p className="text-gray-600 mt-2">
                                    {product.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold">${product.price}</span>
                                    <div className="flex items-center space-x-4">
                                        {
                                            cartItems.find(item => item.product._id === product._id) ? <Button size="sm" variant="outline" disabled={true}>In Cart <Check className='ml-2 h-4 w-4' /> </Button> : <Button size="sm" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                        }
                                    </div>
                                </div>
                            </div>
                        {/* <div>
                            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
                            <ul className="space-y-2 text-gray-600">
                            <li>
                                <span className="font-medium">Material:</span>
                                100% Cotton{"\n                        "}
                            </li>
                            <li>
                                <span className="font-medium">Size:</span>
                                S, M, L, XL{"\n                        "}
                            </li>
                            <li>
                                <span className="font-medium">Color:</span>
                                Black, White, Blue{"\n                        "}
                            </li>
                            <li>
                                <span className="font-medium">Shipping:</span>
                                Free Shipping{"\n                        "}
                            </li>
                            </ul>
                        </div> */}
                        <div className=''>
                            <div className='flex justify-between items-center'>
                                <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                                <div className='flex gap-[5px]'>
                                    <Heart fill='rgb(239 68 68)' className="h-6 w-6 text-red-500" />
                                    <span className="text-gray-600">{product?.rating.count}</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <Avatar className="h-10 w-10">
                                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <div>
                                <div className="flex items-center space-x-2">
                                    <h3 className="font-medium">John Doe</h3>
                                    <div className="flex items-center space-x-1 text-yellow-500">
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    </div>
                                </div>
                                <p className="text-gray-600 mt-2">This product is amazing! I highly recommend it.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Avatar className="h-10 w-10">
                                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                <div className="flex items-center space-x-2">
                                    <h3 className="font-medium">Jane Doe</h3>
                                    <div className="flex items-center space-x-1 text-yellow-500">
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5 text-gray-300" />
                                    </div>
                                </div>
                                <p className="text-gray-600 mt-2">The product is good, but I had some issues with the sizing.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>Loading product details...</div>;
    }
}

export default ProductDetail;
