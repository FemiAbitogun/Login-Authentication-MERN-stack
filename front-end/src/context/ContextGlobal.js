import React, { createContext, useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const globalContext = createContext();

export default function ContextGlobal(props) {
    const [user, setUser] = useState({
        token: undefined,
        user: undefined
    })
    const history = useHistory();

    useLayoutEffect(() => {

        const loggedUser = async () => {

            try {
                let token = localStorage.getItem('auth-token');
                if (!token) {
                    localStorage.setItem('auth-token', "");
                    token = "";
                }
                const userInfomation = await axios.get('http://localhost:9000/front_auth/user',
                    { headers: { 'auth-token': token } }

                )

                setUser(userInfomation.data);
                if (userInfomation.data.id)
                    history.push('/');

                console.log(userInfomation.data);
            } catch (error) {
                console.log(error)
            }

        } // end of async fuvntion.....

        loggedUser();
    }, [])



    return (
        <div>
            <globalContext.Provider value={{ user, setUser }}>
                {props.children}
            </globalContext.Provider>
        </div>
    )
}
