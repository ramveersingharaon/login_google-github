"use client";
import React from "react";
import Link from "next/link";
import { signOutAction } from "@/actions";

const Header = ({ getSession }) => {
  const logoutHandler = async () => {
    await signOutAction();
  };

  return (
    <div className="w-full bg-gray-400 py-2 shadow-lg">
      <div className="max-w-[1240px] mx-auto flex justify-between">
        <div className=" text-2xl font-semibold text-gray-700"><Link href={'/'}>Logo</Link></div>
        <ul className="flex gap-3 items-center text-xl font-semibold text-gray-700">
        {getSession? <Link href="#" > <li onClick={logoutHandler}>Logout</li></Link> :<Link href='/login'> <li>Login</li></Link> 
        } 
         <Link href='/profile'> <li>Profile</li></Link> 
        </ul>
      </div>
    </div>
  );
};

export default Header;

// {
//   <div className="bg-gray-600 ">
//       <ul className="flex gap-3">
//         {getSession?.user ? (
           
//             <Link href="#" onClick={logoutHandler}>
            
//               <li className="border-2 border-black py-1 px-3">Logout</li>
//             </Link>
          
//         ) : (
//           <Link href="/login">
          
//             <li className="border-2 border-black py-1 px-3">Login</li>
//           </Link>
//         )}

//         <Link href="/private-page" className="border-2 border-black py-1 px-3">
        
//           <li>Privat</li>
//         </Link>
//       </ul>
//     </div> 
// }
