import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { globalContext } from '../context/ContextGlobal';


export default function Home() {

    const { user } = useContext(globalContext);
    const history = useHistory();
    useEffect(() => {
        const checkLoggedIn = user.id ? true : false;
        if (!checkLoggedIn)
            // history.push('/login'); uncomment when done.......
            history.push('/'); // delete later ,for testing purposer
    });

    return (
        <div>
            HOME PAGE
        </div>
    )
}
