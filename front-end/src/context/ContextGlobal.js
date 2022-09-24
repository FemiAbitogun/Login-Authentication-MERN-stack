
import React, { createContext, useState } from 'react';
import {PostLoginForm,PostSignedIn,LogOutUser} from '../api/post'

export const globalContext = createContext();

export default function ContextGlobal(props) {
    const [error, setError] = useState("");
    const [signedIn,setSignedIn]=useState(false);

    const LoginActionAsync = async (body) => {
        try {
            await PostLoginForm(body);
            return true;
        } catch (error) {
            return false;
        }
    }

    const CheckSignedAsync = async () => {
        try {
            await PostSignedIn()&&setSignedIn(true);
            return true;
        } catch (error) {
            setError(error.response.data.errorMessage);
            return false;
        }
    }

    const LogOut = async () => {
        try {
            await LogOutUser();
            setSignedIn(false);
            return true;
        } catch (error) {
            return false;
        }
    }


    return (
        <div>
            <globalContext.Provider value={{ CheckSignedAsync, LoginActionAsync, error, setError,signedIn,setSignedIn, LogOut }}>
                {props.children}
            </globalContext.Provider>
        </div>
    )
}
