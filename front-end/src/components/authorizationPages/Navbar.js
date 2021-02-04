import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';


function Navbar() {
    const { user, setUser } = useContext(globalContext);
    const history = useHistory();
    const logOut = (ev) => {
        ev.preventDefault();
        setUser('');
        localStorage.setItem('auth-token', "");
        history.push('/login')
    };
    const _Register = (ev) => {
        ev.preventDefault();
        history.push('/register')
    };
    const _Login = (ev) => {
        ev.preventDefault();
        history.push('/login')
    };
    return (
        <div>
            {
                user.id ?
                    <button onClick={logOut}>logout</button>
                    :
                    <>
                        <button onClick={_Register}>Register</button>
                        <button onClick={_Login}>Login</button>
                    </>
            }
        </div>
    )
}
export default Navbar
