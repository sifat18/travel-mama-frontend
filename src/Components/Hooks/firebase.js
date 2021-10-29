import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setuser] = useState({})
    const [error, seterror] = useState('')
    const [isLoading, setisLoading] = useState(true)

    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    // create user
    const createUser = (name, email, password) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setuser(userCredential.user);
                setName(name)
                window.location.reload()
                // ...
            })
            .catch((error) => {
                seterror(error.message);
                // ..
                setisLoading(true)
            }).finally(() => setisLoading(false));
    }
    // updateProfile
    const setName = (name) => {
        setisLoading(true)

        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { });
    }
    // google sign
    const signGoogle = () => {
        setisLoading(true)

        return signInWithPopup(auth, provider)

    }
    // pass sign in
    const emailPass = (email, password) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setuser(userCredential.user);
                // ...
            })
            .catch((error) => {
                seterror(error.message);
            }).finally(() => setisLoading(false));
    }
    // authchange
    useEffect(() => {
        setisLoading(true)

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setuser(user);
                // ...
            } else {
                // User is signed out
                // ...
                setuser({})
            }
        });
        setisLoading(false)
    }, [])
    // signoUT
    const logOut = () => {
        setisLoading(true)

        signOut(auth).then(() => {
            setuser({})
            setisLoading(false)
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        user,
        isLoading,
        setisLoading,
        createUser,
        emailPass,
        error,
        logOut,
        signGoogle
    }

}
export default useFirebase;