import initializeAuthentication from "../Firebase/Firebase.init";
import {onAuthStateChanged, signOut, updateProfile, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () =>{
    const [apartments, setApartments] = useState([]);
    const [reviews, setReview] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const savedUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('https://secret-journey-23041.herokuapp.com/users', {
        method: method,
        headers : {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(result =>{
        console.log(result);
      })
   
   }
    const RegisterNewUser = (name, email, password, history) =>{
       setIsLoading(true); 
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            setError('');
            const newUser = {displayName: name, email}
            setUser(newUser);
            savedUser(email, name, 'POST');
            updateProfile(auth.currentUser, {
              displayName: name
            })
            .then(()=>{

            })
            .catch((error)=>{

            })
             history.replace('/home');
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally(()=>{setIsLoading(false)});
    }

    const logOut = () => {
      setIsLoading(true);
      signOut(auth)
      .then(()=>{

      })
      
      .finally(()=>{setIsLoading(false)})
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, user=>{
        if(user){
          setUser(user);
        }
        else{
          setUser({});
        }
        setIsLoading(false);
      });
      return ()=>unSubscribe;
    }, [])

    const LoginUser = (email, password, location, history) => {
      setIsLoading(true); 
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          const destination = location?.state?.from || '/home'
           history.replace(destination);
            // const user = userCredential.user;
            setError('');
            
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally(()=>{setIsLoading(false)});
    }
   
   useEffect(() => {
    fetch('https://secret-journey-23041.herokuapp.com/apartments')
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        setApartments(data);
    })

   }, []);

   
   useEffect(() => {
    fetch(`https://secret-journey-23041.herokuapp.com/reviews`)
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        setReview(data);
    })

   }, []);

   useEffect(() => {
     fetch(`https://secret-journey-23041.herokuapp.com/users/${user.email}`)
     .then(res => res.json())
     .then(data =>setAdmin(data.admin));
   }, [user.email]);

    return {
      reviews,
       admin,
       isLoading,
       error,
       user,
       logOut,
        apartments,
        RegisterNewUser,
        setApartments,
        LoginUser


    }
};

export default useFirebase;