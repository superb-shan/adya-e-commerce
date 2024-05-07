import React from 'react'
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "../ui/dropdown-menu"
import { FilterIcon, ListOrderedIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Product = () => {
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
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <Link to={"#"}>
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product