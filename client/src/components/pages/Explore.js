import React from 'react'
import { CustomCarouselMultiple } from '../CustomCarousel';
import { FilterIcon, FlagIcon, HomeIcon, LaptopIcon, ListOrderedIcon, PaintbrushIcon, ShirtIcon, ToyBrickIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "../ui/dropdown-menu"
import { Checkbox } from '../ui/checkbox';

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
    return (
        <div className="flex flex-col bg-gradient-to-br from-[#fdaa28] to-[#de128d]">
            <div className='max-w-[calc(100%-60px)] mx-auto'>
                <CustomCarouselMultiple items={items} />
            </div>
            <section className="bg-gray-100 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                    alt="Featured Product"
                    className="w-full h-48 object-cover"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                    }}
                    width={400}
                    />
                    <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">Featured Product</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">$49.99</span>
                        <Button size="sm">Add to Cart</Button>
                    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                    alt="Featured Product"
                    className="w-full h-48 object-cover"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                    }}
                    width={400}
                    />
                    <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">Featured Product</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">$59.99</span>
                        <Button size="sm">Add to Cart</Button>
                    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                    alt="Featured Product"
                    className="w-full h-48 object-cover"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                    }}
                    width={400}
                    />
                    <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">Featured Product</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">$69.99</span>
                        <Button size="sm">Add to Cart</Button>
                    </div>
                    </div>
                </div>
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
            <h2 className="text-2xl font-bold">All Products</h2>
            <div className="flex items-center space-x-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <FilterIcon className="h-5 w-5 mr-2" />
                        Filters
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem className="flex items-start gap-[10px] pl-2" >
                        <Checkbox />
                        Price: Low to High
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="flex items-start gap-[10px] pl-2" >
                        <Checkbox />
                        Price: High to Low
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="flex items-start gap-[10px] pl-2" >
                        <Checkbox />
                        Newest
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="flex items-start gap-[10px] pl-2" >
                        <Checkbox />
                        Bestsellers
                    </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
                    <DropdownMenuRadioGroup value="featured">
                        <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href="#">
                <img
                  alt="Product 1"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Product 1</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">$49.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href="#">
                <img
                  alt="Product 2"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Product 2</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">$59.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href="#">
                <img
                  alt="Product 3"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Product 3</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">$69.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href="#">
                <img
                  alt="Product 4"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Explore