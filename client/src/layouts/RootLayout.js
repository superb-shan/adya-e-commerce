import { LogIn, SearchIcon, ShoppingCartIcon, StoreIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu"
  import { AvatarImage, AvatarFallback, Avatar } from "../components/ui/avatar"
import { Button } from "../components/ui/button";
  

export default function RootLayout() {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
                <div className="flex items-center">
                <Link className="text-xl font-bold mr-6 flex gap-[10px]" href="#">
                    <StoreIcon className="!h-14 !w-14" />
                    Adya Store
                </Link>
                <div className="relative w-full max-w-md">
                    <input
                    className="bg-gray-800 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="Search products..."
                    type="text"
                    />
                    <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <Link className="relative" href="#">
                    <ShoppingCartIcon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">3</span>
                </Link>
                <Button variant="outline" className="text-gray-900 bg-gradient-to-r from-yellow-500 to-orange-500 border-0 font-bold p-0 px-2 h-9 flex justify-center items-center gap-[5px] leading-[0]">Login <LogIn className="h-4 w-4" /> </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                        <span>John Doe</span>
                    </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="#">Logout</Link>
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </header>
            <Outlet />
            <footer className="bg-gray-900 text-white py-6 px-6 md:px-8">
                <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {/* <MountainIcon className="h-6 w-6 mr-2" /> */}
                    <p>© 2023 Adya Store. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <Link className="hover:text-gray-400" href="#">
                    Privacy Policy
                    </Link>
                    <Link className="hover:text-gray-400" href="#">
                    Terms of Service
                    </Link>
                    <Link className="hover:text-gray-400" href="#">
                    Contact Us
                    </Link>
                </div>
                </div>
            </footer>
        </div>
    );
}