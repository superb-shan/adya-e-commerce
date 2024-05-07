import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { StarIcon } from 'lucide-react';

function ProductDetail() {
    const { id } = useParams();

    // Fetch product data using the id (replace with your actual data fetching)
    const [product, setProduct] = React.useState(null);
    useEffect(() => {
        // Simulate API call here
        // const fetchProduct = async () => {
        //   const response = await fetch(`http://localhost:3000/api/products/${id}`);
        //   const productData = await response.json();
        //   setProduct(productData);
        // };
        // fetchProduct();
    }, [id]);

    // Render product details (replace with your data display logic)
    if (!product) {
        return (
            <div>
                <div className="bg-gray-100 py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-start">
                        <div>
                        <img
                            alt="Product Image"
                            className="w-full rounded-lg shadow-md"
                            height={600}
                            src="/placeholder.svg"
                            style={{
                            aspectRatio: "600/600",
                            objectFit: "cover",
                            }}
                            width={600}
                        />
                        <div className="mt-4 grid grid-cols-4 gap-4">
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
                        </div>
                        </div>
                        <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold">Product Name</h1>
                            <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                            nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold">$49.99</span>
                            <div className="flex items-center space-x-4">
                            <Button size="lg">Add to Cart</Button>
                            <Button size="lg" variant="primary">
                                Buy Now
                            </Button>
                            </div>
                        </div>
                        <div>
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
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
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
