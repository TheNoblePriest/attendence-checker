import Image from "next/image";
import React from "react";
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, signOut } from "firebase/auth";

function Header() {
  const [user] = useAuthState(auth);
  const signIn = () => {
    signInWithPopup(auth, provider).catch(() => {
      alert("Wait!! Something Went Wrong..");
    });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Logout SuccessFully");
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className="bg-white sticky top-0 flex p-2 border-b justify-between items-center">
      <Image
        src={"/img/logo3.png"}
        height={60}
        width={250}
        objectFit="contain"
      />

      <div className="space-x-3">
        {!user ? (
          <button
            onClick={signIn}
            className="bg-red-500  text-xs text-white px-2 md:px-5 py-2"
          >
            Login
          </button>
        ) : (
          <img
            onClick={logOut}
            src={user?.photoURL}
            alt=".."
            className="rounded-full w-10 h-10 cursor-pointer outline-none"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
