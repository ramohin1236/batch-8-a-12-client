import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './firebase/firebase.config';
import usePublicAxios from '../hooks/usePublicAxios';



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
             <Helmet>
                <title>asset || Login</title>
            </Helmet> 
const googleProvider = new GoogleAuthProvider()
const axiosPublic = usePublicAxios()
            const [user, setUser]=useState(null)
            const [loading, setLoading]=useState(true)

            //  create user with email
            const createUser =(email,password)=>{
                setLoading(true)
                 return createUserWithEmailAndPassword(auth , email,password)
            } 
        //    sign in user with email

          const signInUser =(email,password)=>{
            setLoading(true)
              return signInWithEmailAndPassword(auth, email,password)
          }
        //   logOUt

        const logOut =()=>{
            setLoading(true)
            return signOut(auth)
        }
// googel

const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
      
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }



            useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser)

                if(currentUser){
                    const userInfo = {email: currentUser.email}
                    axiosPublic.post('/jwt',userInfo)
                   .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                   })
                }
                else{
                    localStorage.removeItem('access-token')
                    }

                console.log('current user', currentUser)
                setLoading(false)
            })
              return ()=>{
                unsubscribe()
              }
            },[axiosPublic])

            const userInfo ={
                user,
                loading,
                createUser,
                signInUser,
                logOut,
                updateUserProfile,
                googleSignIn
            }

    return (
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider>
    );
};






AuthProvider.propTypes = {
    children: PropTypes.object
}


export default AuthProvider;