import Image from "next/image";
import McDonalds_Long from '../images/mcdonalds_long.jpeg';
import McDonalds from '../images/mcdonalds_logo.png';
import {
  MagnifyingGlassIcon,
  HomeIcon,
  UserCircleIcon,
  Bars3Icon,
  EnvelopeIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";

import { useRouter } from 'next/router'
import LoginModal from './LoginModal';
import { motion } from "framer-motion";


function Menu() {
  const isSignedIn = true;
  const router = useRouter();

  const routeAddNums = e => {
    e.preventDefault()
    router.push('/addNums')
  };

  const routeProfilePage = e => {
    e.preventDefault()
    router.push('/profilePage')
  };

  const routeHomePage = e => {
    e.preventDefault()
    router.push('/homePage')
  };

  return ( 
    <div className="h-screen flex items-center bg-gray-50">
      <div className= "text-6xl font-serif text-stone-600 ml-60 hover:text-opacity-50">
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 1 }}>
          <a className="menuItem" href = "/auth/signin">SIGN IN</a>
          <a className="menuItem" onClick={routeHomePage}>FEED</a>
          <a className="menuItem" href = "/">SHOP</a>
          <a className="menuItem" onClick={routeProfilePage}>PROFILE</a>
        </motion.div>
      </div>
    
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 radial bg-left-top bg-cover relative"></div>
    </div>

)}

export default Menu