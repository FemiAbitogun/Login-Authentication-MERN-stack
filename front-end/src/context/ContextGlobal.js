
import React, { createContext, useState } from 'react';
import { CheckIfSignedIn, LogOutUserAsync } from '../api/post'

export const globalContext = createContext();

export default function ContextGlobal(props) {
    const [error, setError] = useState("");
    const [signedIn, setSignedIn] = useState(false);


    const CheckSignedAsync = async () => {
        try {
            if (await CheckIfSignedIn()) {
                setSignedIn(true);
                return true;
            }
            else {
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
            <globalContext.Provider value={{ CheckSignedAsync, error, setError, signedIn, setSignedIn, LogOut }}>
                {props.children}
            </globalContext.Provider>
        </div>
    )
}
