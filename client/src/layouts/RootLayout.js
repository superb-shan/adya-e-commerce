import { LogIn, SearchIcon, ShoppingCartIcon, StoreIcon } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu"
import { Button } from "../components/ui/button";
import { setAuth } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setInitialData } from "../slices/exploreSlice";
import { addMultipleToCart } from "../slices/cartSlice";
import { setBilling, setSubtotal } from "../slices/billingSlice";

const fetchProducts = async () => {
    try {
      console.log("fetching Data");
      const response = await axios.get('/products');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
}


export default function RootLayout() {
    const user = useSelector((state) => state.user.auth);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const fetchCartItems = async () => {
        try {
          console.log("fetching Cart Data");
          const response = await axios.get('/cart/all', {
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

    const fetchBillingDetails = async () => {
        try {
          console.log("fetching Billing Data");
          const response = await axios.get('/cart/billing', {
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
        fetchProducts().then(data => {console.log(data); dispatch(setInitialData(data))});
      }, []);

    useEffect(() => {
        if(user){
            fetchBillingDetails().then(data => {console.log("billing data", data); dispatch(setBilling(data))});
        }
    }, [user]);

    useEffect(() => {
        if(user){
            dispatch(setSubtotal(cartItems.reduce((acc, item) => acc + item.product.price, 0)));
        }
    }, [cartItems]);

    useEffect(() => {
        if(user){
            fetchCartItems().then(data => {console.log("cart data", data); dispatch(addMultipleToCart(data))});
        }
    }, [user]);

    const handleLogout = () => {
        console.log("Logging out...");
        localStorage.removeItem('user');
        dispatch(setAuth(null));
        navigate('/');
    }
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
                <div className="flex items-center">
                <Link className="text-3xl font-bold mr-6 flex gap-[10px] items-center" href="#">
                    <StoreIcon className="!h-10 !w-10" />
                    Adya Store
                </Link>
                {/* <div className="relative w-full max-w-md">
                    <input
                    className="bg-gray-800 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="Search products..."
                    type="text"
                    />
                    <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div> */}
                </div>
                <div className="flex items-center space-x-4">
                <Link className="relative" to={"/cart"}>
                    <ShoppingCartIcon className="h-6 w-6" />
                    {
                        (user && cartItems.length > 0) && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cartItems.length}</span>
                    }
                </Link>
                {
                    user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <button className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                                <span>{user.firstName + " " + user.lastName}</span>
                            </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <button onClick={() => handleLogout()} className="w-full h-full text-left">
                                    Logout
                                </button>
                            </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) :
                    (
                        <Button variant="outline" className="text-gray-900 bg-gradient-to-r from-yellow-500 to-orange-500 border-0 font-bold p-0 px-2 h-9 flex justify-center items-center gap-[5px] leading-[0]" onClick={() => navigate("/login-signup")}>Login <LogIn className="h-4 w-4" /> </Button>
                    )
                }
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