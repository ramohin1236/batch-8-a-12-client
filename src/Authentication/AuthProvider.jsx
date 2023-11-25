import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from './firebase/firebase.config';



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
             <Helmet>
                <title>asset || Login</title>
            </Helmet> 

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


    //   update user
        // const updateUserProfile =(name,photo)=>{
        //     console.log("name", name,photo)
        //    return updateProfile(auth.currentUser, {
        //         displayName: name, photoURL: photo
        //       })
        // }

      
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }



            useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser)
                console.log('current user', currentUser)
                setLoading(false)
            })
              return ()=>{
                unsubscribe()
              }
            },[])

            const userInfo ={
                user,
                loading,
                createUser,
                signInUser,
                logOut,
                updateUserProfile
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