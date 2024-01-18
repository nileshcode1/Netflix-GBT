import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setInSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const Fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setInSignInForm(!isSignInForm);
  };

  const handleButtonClick = async () => {
    //validate the form

    const message = checkValidData(
      isSignInForm ? null : Fullname.current?.value,
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return;

    //SignIn SignUp Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Fullname.current.value,
            photoURL:USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });

      //Sign up logic
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src= {BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full  md:w-3/12 absolute p-12 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white flex flex-col items-center rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Signup"}
        </h1>
        {!isSignInForm && (
          <input
            ref={Fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 w-full  bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full  bg-gray-700 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-4 m-4 w-full  bg-gray-700 "
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="py-4 px-4 m-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Signup"}
        </button>
        <p className="py-4 cursor: cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
