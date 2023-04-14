
import React, { createContext, useState } from 'react';
import { CheckIfSignedIn_NoHttpCookie, LogOutUserAsync } from '../api/post'

export const globalContext = createContext("");

export default function ContextGlobal(props) {
    const [signedIn, setSignedIn] = useState(false);
    const [userData, setUserData] = useState("");

    const CheckSignedAsync = async () => {
        try {
            //with httpOnly cookies
            // if (await CheckIfSignedIn()) {
            //     setSignedIn(true);
            //     return true;
            // } 
            //local storage.........
            if (await CheckIfSignedIn_NoHttpCookie()) {
                setSignedIn(true);
                return true;
            }

            else {
                setSignedIn(false);
                return false
            }
        } catch (error) {
            setSignedIn(false);
            // setError(error.response.data.errorMessage);
            return;
        }
    }

    const LogOut = async () => {
        try {
            await LogOutUserAsync();
            setSignedIn(false);
            return true;
        } catch (error) {
            return false;
        }
    }


    return (
        <div>
            <globalContext.Provider value={{userData, setUserData, CheckSignedAsync, signedIn, setSignedIn, LogOut }}>
                {props.children}
            </globalContext.Provider>
        </div>
    )
}
