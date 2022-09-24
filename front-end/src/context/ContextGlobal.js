import React, { createContext, useState } from 'react';
export const globalContext = createContext();
export default function ContextGlobal(props) {
    const [user, setUser] = useState({
        token: undefined,
        user: undefined
    });
    return (
        <div>
            <globalContext.Provider value={{ user, setUser }}>
                {props.children}
            </globalContext.Provider>
        </div>
    )
}
