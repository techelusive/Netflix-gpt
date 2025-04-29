import Header from "./Header";
import { useState, useRef } from "react";
import { LANDING_PAGE } from "../utils/constants";
// import { checkValidData } from "../utils/validate";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    //const [errorMessage, setErrorMessage] = useState(null); // for showing error

    const email = useRef(null); // initial value is null
    const password = useRef(null);

    const navigate = useNavigate(); // Initialize navigate function

    const handleButtonClick = () => {
        // Directly navigate to the browse page when the button is clicked
        navigate("/browse"); // This will redirect to the Browse page


        // before validation check what's present inside the email and password
        // console.log(email.current.value);
        // console.log(password.current.value);

        // check validation
        // const message = checkValidData(email.current.value, password.current.value);
        // //console.log(message);
        // setErrorMessage(message);
        // // if message is null return 
        // if (!message) return;

        //sign in / sign up logic
        // if (!isSignIn) {
        //     // sign up logic
        //     createUserWithEmailAndPassword(
        //         auth, 
        //         email.current.value, 
        //         password.current.value)
        //         .then((userCredential) => {
        //             const user = userCredential.user;
        //             console.log(user);
        //         })
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             setErrorMessage(errorCode + "-" + errorMessage);
        //         });
        // }
        // else {
        //     //sign in logic
        //     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        //     .then((userCredential) => {
        //         const user = userCredential.user
        //         console.log(user);
    
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message
        //         setErrorMessage(errorCode + "-" + errorMessage)
        //     });
        // }
    };

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
        <div className="absolute">
        <img src={LANDING_PAGE} alt="landing-page" />
        </div>
        
        <form 
        onSubmit={(e) => e.preventDefault()} // it will prevent from submitting the form
        className="absolute text-white w-[400px] bg-black p-12 my-36 mx-auto right-0 left-0 flex flex-col space-y-4 sm:opacity-90">

        <h1 className="font-bold text-3xl pl-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && (
            <input type="text" placeholder="UserName" className="p-3 m-3 bg-gray-800 w-full"/>
        )}

            <input ref={email} type="text" placeholder="Email Address" className="p-3 m-3 bg-gray-700 w-full"/>
            {/* <p className="font-bold text-red-500 ml-3.5">{errorMessage}</p> */}

            <input ref={password} type="password" placeholder="Password" className="p-3 m-3 bg-gray-700 w-full"/>
            
            <button onClick={handleButtonClick}
            className="p-3 m-3 font-bold bg-red-600 -space-y-4 cursor-pointer w-full"
            >{isSignIn ? "Sign In": "Sign Up"}</button>

            <span className="flex flex-wrap">
                <p className="p-2 m-2 font-bold cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix?  Sign Up Now" : "Already registered sign in now"}</p>
            </span>        
        
        </form>
        
        </div>
    );
};

export default Login;