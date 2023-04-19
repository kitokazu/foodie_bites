import Image from "next/image";
import McDonalds_Long from "../images/mcdonalds_long.jpeg";
import McDonalds from "../images/mcdonalds_logo.png";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  UserCircleIcon,
  Bars3Icon,
  EnvelopeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/router";
import LoginModal from "./LoginModal";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Menu() {
  const isSignedIn = true;
  const router = useRouter();
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="h-screen flex items-center bg-gray-50">
      <div className="text-6xl font-serif text-stone-600 ml-60 hover:text-opacity-50">
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {session ? (
            <>
              <>
                <a
                  className="menuItem"
                  onClick={() => router.push("/homePage")}
                >
                  FEED
                </a>
                <a
                  className="menuItem"
                  onClick={() => router.push("/profilePage")}
                >
                  PROFILE
                </a>
                <a
                  className="menuItem"
                  onClick={() => router.push("/messagePage")}
                >
                  MESSAGES
                </a>
                <a className="menuItem" onClick={() => setOpen(true)}>
                  CREATE POST
                </a>
              </>
            </>
          ) : (
            <a className="menuItem" href="/auth/signin">
              SIGN IN
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Menu;
